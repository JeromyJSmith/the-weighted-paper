window.IndicatedPaper = (function () {
  const TYPE = { mdm: 'Multiple Decision-Making', ig: 'Information Gathering', sdm: 'Single Decision-Making' };
  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let root, cfg = { fw: '2018', mode: 'exam', len: 6, minutes: 120 }, run = null;

  function flatten(cases) {
    const out = [];
    cases.forEach((c, ci) => c.sections.forEach((s, si) => out.push({ c, ci, s, si })));
    return out;
  }

  function mount(el) {
    root = el;
    if (!INDICATED_CASES.length) {
      root.innerHTML = '<div class="exam-hd"><p class="eyebrow">Full mock</p><h2 class="h-page">The bank is empty.</h2></div>';
      return;
    }
    const saved = store.get().dayRun;
    drawSetup(saved);
  }

  function drawSetup(saved) {
    root.innerHTML = `
    <div class="exam-hd">
      <p class="eyebrow">Full mock</p>
      <h2 class="h-page">Six cases. Two hours.</h2>
      <p class="lede lede--sm">Until the attempt ends you see Indicated or Not indicated, the same information you get on the day. School, EAP, faith, cross-border, fitness to practise.</p>
      ${saved ? `<div class="resume"><p>A sitting is saved on this device.</p><button class="btn btn--solid" id="i-resume">Resume</button><button class="btn" id="i-forget">Discard</button></div>` : ''}
      <h3 class="h-sub">Framework</h3>
      <div class="seg" id="i-fw">
        <button type="button" data-fw="2018" aria-pressed="${cfg.fw==='2018'}">2018</button>
        <button type="button" data-fw="2026" aria-pressed="${cfg.fw==='2026'}">2026</button>
      </div>
      <p class="note" style="margin-top:var(--space-3)">2018 until midday UK 3 November 2026; 2026 after. Confirm against your candidate guide.</p>
      <h3 class="h-sub" style="margin-top:var(--space-6)">Mode</h3>
      <div class="seg" id="i-md">
        <button type="button" data-md="exam" aria-pressed="${cfg.mode==='exam'}">Exam</button>
        <button type="button" data-md="study" aria-pressed="${cfg.mode==='study'}">Study</button>
      </div>
      <h3 class="h-sub" style="margin-top:var(--space-6)">Length</h3>
      <div class="seg" id="i-ln">
        <button type="button" data-ln="6" aria-pressed="${cfg.len===6}">Six cases</button>
        <button type="button" data-ln="2" aria-pressed="${cfg.len===2}">Two cases</button>
      </div>
      <h3 class="h-sub" style="margin-top:var(--space-6)">Time</h3>
      <div class="seg" id="i-tm">
        <button type="button" data-tm="120" aria-pressed="${cfg.minutes===120}">120 minutes</button>
        <button type="button" data-tm="180" aria-pressed="${cfg.minutes===180}">180 minutes</button>
      </div>
      <div class="nextrow">
        <button class="btn btn--solid" id="i-begin">Begin the paper →</button>
        <button class="btn" data-nav="exam">All sittings</button>
      </div>
    </div>`;
    root.querySelectorAll('#i-fw button').forEach(b => b.onclick = () => { cfg.fw = b.dataset.fw; drawSetup(saved); });
    root.querySelectorAll('#i-md button').forEach(b => b.onclick = () => { cfg.mode = b.dataset.md; drawSetup(saved); });
    root.querySelectorAll('#i-ln button').forEach(b => b.onclick = () => { cfg.len = +b.dataset.ln; drawSetup(saved); });
    root.querySelectorAll('#i-tm button').forEach(b => b.onclick = () => { cfg.minutes = +b.dataset.tm; drawSetup(saved); });
    root.querySelector('#i-begin').onclick = () => start(null);
    const r = root.querySelector('#i-resume');
    if (r) r.onclick = () => start(saved);
    const f = root.querySelector('#i-forget');
    if (f) f.onclick = () => { store.clear('dayRun'); drawSetup(null); };
  }

  function start(resume) {
    const chosen = resume
      ? INDICATED_CASES.filter(c => resume.caseIds.includes(c.id))
          .sort((a, b) => resume.caseIds.indexOf(a.id) - resume.caseIds.indexOf(b.id))
      : INDICATED_CASES.slice(0, cfg.len);
    run = {
      fw: resume ? resume.fw : cfg.fw,
      mode: resume ? resume.mode : cfg.mode,
      minutes: resume ? resume.minutes : cfg.minutes,
      cases: chosen,
      flat: flatten(chosen),
      i: resume ? resume.i : 0,
      ans: resume ? resume.ans : {},
      secs: resume && resume.secs != null ? resume.secs : (resume ? resume.minutes : cfg.minutes) * 60,
      finished: false,
      tick: null
    };
    if (run.tick) clearInterval(run.tick);
    run.tick = setInterval(() => {
      if (!run || run.finished) return;
      run.secs--;
      if (run.secs <= 0) { run.secs = 0; finish('time'); return; }
      const c = document.getElementById('clock');
      if (c) { c.textContent = fmt(run.secs); c.classList.toggle('warn', run.secs < 600); }
      save();
    }, 1000);
    drawSection();
    save();
  }

  const fmt = s => String(Math.floor(s / 60)).padStart(2,'0') + ':' + String(s % 60).padStart(2,'0');

  function save() {
    if (!run || run.finished) return;
    store.set({ dayRun: { fw: run.fw, mode: run.mode, minutes: run.minutes, caseIds: run.cases.map(c => c.id), i: run.i, ans: run.ans, secs: run.secs } });
  }

  function ansOf(id) {
    if (!run.ans[id]) run.ans[id] = { picks: [], done: false, reveals: [] };
    return run.ans[id];
  }

  function caseFile(node) {
    const c = node.c;
    let h = `<div class="casefile"><h3>${esc(c.title)}</h3>
      <p class="strap">${esc(c.setting)} · ${esc(c.contract)}</p>
      <p class="bg">${esc(c.brief)}</p>`;
    for (let k = 0; k < node.si; k++) {
      const s = c.sections[k];
      if (s.newInfo) h += `<div class="newinfo"><span class="tag">Added after ${esc(s.label)}</span><p>${esc(s.newInfo)}</p></div>`;
      const a = run.ans[s.id];
      if (a && a.reveals && a.reveals.length) a.reveals.forEach(r => {
        h += `<div class="newinfo"><span class="tag">You explored this in ${esc(s.label)}</span><p>${esc(r)}</p></div>`;
      });
    }
    return h + '</div>';
  }

  function drawSection() {
    const node = run.flat[run.i];
    if (!node) { finish('complete'); return; }
    const s = node.s, a = ansOf(s.id);
    const opts = s.options.map((o, ix) => optHTML(s, o, ix, a)).join('');
    root.innerHTML = `
      <div class="runbar">
        <span class="mode">${run.mode==='exam'?'Exam':'Study'} · ${run.fw}</span>
        <span class="sec-id">Case ${node.ci+1} · ${esc(s.label)} · ${TYPE[s.type]||s.type}</span>
        <div class="prog" style="flex:1;max-width:12rem"><i style="width:${(run.i/run.flat.length*100).toFixed(1)}%"></i></div>
        <span class="clock" id="clock">${fmt(run.secs)}</span>
      </div>
      ${caseFile(node)}
      <section class="sec">
        <div class="sec-top">
          <div><span class="sec-id">${esc(node.c.title)}</span><h3>${esc(s.label)}</h3></div>
          <span class="chip">${TYPE[s.type]||s.type}</span>
        </div>
        <p class="scenario">${esc(s.stem)}</p>
        <p class="instr">${s.type==='sdm' ? 'Select the most appropriate answer. Keep going until a response is indicated.' : 'Choose as many as you consider essential. You are not told how many. Each tick locks.'}</p>
        <div class="opts" id="i-opts">${opts}</div>
        <div class="sec-foot" id="i-foot"></div>
      </section>`;
    bindOpts(s);
    drawFoot(s, a);
  }

  function optHTML(s, o, ix, a) {
    const picked = a.picks.indexOf(ix) >= 0;
    const reveal = a.done && (run.mode === 'study' || a.showKey);
    const pos = o.p > 0;
    let cls = 'opt' + (s.type === 'sdm' ? ' radio' : '') + (picked ? ' on' : '');
    if (picked) cls += pos ? ' rev t-core' : ' rev t-serious';
    else if (reveal && pos) cls += ' miss t-core';
    let extra = '';
    if (picked) extra += `<span class="pill ${pos?'ind':'not'}">${pos?'Indicated':'Not indicated'}</span>`;
    else if (reveal && pos) extra += `<span class="pill ind">Indicated · missed</span>`;
    if (reveal) extra += `<span class="opt-why">${esc(o.why||'')}</span>`;
    const dis = (a.done || picked) ? ' disabled' : '';
    return `<button class="${cls}" type="button" data-ix="${ix}"${dis}>
      <span class="opt-body">${esc(o.t)}${extra}</span>
    </button>`;
  }

  function bindOpts(s) {
    root.querySelectorAll('#i-opts .opt').forEach(btn => {
      if (btn.disabled) return;
      btn.onclick = () => pick(s, +btn.dataset.ix);
    });
  }

  function pick(s, ix) {
    const a = ansOf(s.id);
    if (a.done || a.picks.indexOf(ix) >= 0) return;
    const go = () => {
      const o = s.options[ix];
      a.picks.push(ix);
      if (s.type === 'ig' && o.p > 0 && o.reveal) a.reveals.push(o.reveal);
      if (s.type === 'sdm' && o.p === 2) a.done = true;
      save();
      redraw(s);
      if (s.type === 'sdm' && a.done) setTimeout(() => {
        if (run.i + 1 >= run.flat.length) finish('complete');
        else { run.i++; save(); drawSection(); }
      }, 700);
    };
    if (run.mode === 'study') go();
    else confirmPick(esc(s.options[ix].t), go);
  }

  function redraw(s) {
    const a = ansOf(s.id);
    const ul = document.getElementById('i-opts');
    if (!ul) return;
    ul.innerHTML = s.options.map((o, ix) => optHTML(s, o, ix, a)).join('');
    bindOpts(s);
    drawFoot(s, a);
  }

  function drawFoot(s, a) {
    const f = document.getElementById('i-foot');
    if (!f) return;
    if (a.done) {
      f.innerHTML = `<span class="meta">${a.picks.length} locked</span><span class="spacer"></span>
        <button class="btn btn--solid" id="i-next">${run.i+1>=run.flat.length?'Finish →':'Next section →'}</button>`;
      document.getElementById('i-next').onclick = () => {
        if (run.i + 1 >= run.flat.length) finish('complete');
        else { run.i++; save(); drawSection(); }
      };
      return;
    }
    if (s.type === 'sdm') {
      f.innerHTML = '<span class="meta">Keep selecting until a response is indicated</span>';
      return;
    }
    f.innerHTML = `<span class="meta">${a.picks.length} selected</span><span class="spacer"></span>
      <button class="btn btn--solid" id="i-sub">Submit this section</button>
      <button class="btn btn--ghost" id="i-end">End attempt</button>`;
    document.getElementById('i-sub').onclick = () => { a.done = true; save(); redraw(s); };
    document.getElementById('i-end').onclick = () => finish('ended');
  }

  function finish(reason) {
    if (!run || run.finished) return;
    run.finished = true;
    if (run.tick) clearInterval(run.tick);
    store.clear('dayRun');
    run.flat.forEach(n => { const a = ansOf(n.s.id); a.done = true; a.showKey = true; });
    drawReview(reason);
  }

  function refLabel(refs) {
    return (refs || []).map(r => {
      if (run.fw === '2018' && String(r).startsWith('2026:')) return '';
      if (run.fw === '2026' && String(r).startsWith('2018:')) return '';
      return r;
    }).filter(Boolean).join(' · ');
  }

  function drawReview(reason) {
    const rows = run.flat.map(n => {
      const a = ansOf(n.s.id);
      let raw = 0, hit = 0, miss = 0, neg = 0;
      n.s.options.forEach((o, ix) => {
        const on = a.picks.indexOf(ix) >= 0;
        if (on) { raw += o.p; if (o.p < 0) neg++; if (o.p > 0) hit++; }
        if (!on && o.p > 0) miss++;
      });
      return { n, a, raw, hit, miss, neg };
    });
    const patterns = (INDICATED_PATTERNS || []).map(p => {
      let count = 0;
      rows.forEach(r => r.n.s.options.forEach((o, ix) => {
        const on = r.a.picks.indexOf(ix) >= 0;
        if (p.missed) { if (!on && p.test(o)) count++; }
        else if (on && p.test(o)) count++;
      }));
      return count ? { name: p.n, d: p.d, count } : null;
    }).filter(Boolean);

    root.innerHTML = `
    <div class="exam-hd">
      <p class="eyebrow">Review · ${reason==='time'?'time ended':reason==='ended'?'ended early':'complete'} · ${run.cases.length} cases</p>
      <h2 class="h-page">What this sitting showed</h2>
      <p class="lede lede--sm">Look at the patterns, then open the Library card they point at.</p>
      ${patterns.length ? `<div class="behav">${patterns.map(p => `<div class="bh" style="--bc:var(--t-poor)"><div><strong>${esc(p.name)}</strong><small>${esc(p.d)}</small></div><div class="st">${p.count}×</div></div>`).join('')}</div>` : '<p class="note">No dominant pattern flagged. Read the sections you missed anyway.</p>'}
      <div id="i-rev"></div>
      <div class="nextrow">
        <button class="btn btn--solid" id="i-again">Sit again</button>
        <button class="btn" data-nav="library">Library cards</button>
        <button class="btn" data-nav="exam">All sittings</button>
      </div>
    </div>`;
    const rev = document.getElementById('i-rev');
    rows.forEach(r => {
      const el = document.createElement('section');
      el.className = 'sec';
      el.innerHTML = `<div class="sec-top"><div><span class="sec-id">${esc(r.n.c.title)} · ${esc(r.n.s.label)}</span><h3>${esc(r.n.s.stem)}</h3></div></div>
        <div class="opts">${r.n.s.options.map((o, ix) => {
          const on = r.a.picks.indexOf(ix) >= 0;
          const pos = o.p > 0;
          return `<div class="opt locked rev t-${pos?'core':'serious'} ${on?'on':''} ${!on&&pos?'miss':''}">
            <span class="opt-body">${esc(o.t)}
              <span class="opt-tier">${pos?'Indicated':'Not indicated'}${on?' · you selected this':(!on&&pos?' · missed':'')}</span>
              <span class="opt-why">${esc(o.why||'')}${refLabel(o.refs)?' · '+esc(refLabel(o.refs)):''}</span>
            </span></div>`;
        }).join('')}</div>`;
      rev.appendChild(el);
    });
    document.getElementById('i-again').onclick = () => drawSetup(null);
  }

  return { mount, resume: mount };
})();
