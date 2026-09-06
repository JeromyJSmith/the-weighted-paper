window.SkillsDrill = (function () {
  const pts = t => (t === 'core' ? 2 : t === 'bonus' ? 1 : t === 'serious' ? -2 : -1);
  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  let root, cfg = { mode: 'exam', len: 10, shuffle: true }, run = null, triage = { i: 0, trail: [], v: null };

  function mount(el) {
    root = el;
    if (!DRILL_ITEMS.length) {
      root.innerHTML = '<div class="exam-hd"><p class="eyebrow">Skills drill</p><h2 class="h-page">The bank is empty.</h2></div>';
      return;
    }
    drawSetup();
  }

  function drawSetup() {
    root.innerHTML = `
    <div class="exam-hd">
      <p class="eyebrow">Skills drill</p>
      <h2 class="h-page">Short counselling scenes</h2>
      <p class="lede lede--sm">Thirty situations. You are never told how many options to take. Wrong ticks take points off the ones you got right.</p>
      <h3 class="h-sub">Mode</h3>
      <div class="seg" id="d-mode">
        <button type="button" data-mode="exam" aria-pressed="${cfg.mode==='exam'}">Exam</button>
        <button type="button" data-mode="study" aria-pressed="${cfg.mode==='study'}">Study</button>
      </div>
      <h3 class="h-sub" style="margin-top:var(--space-6)">Length</h3>
      <div class="seg" id="d-len">
        <button type="button" data-len="10" aria-pressed="${cfg.len===10}">10 questions</button>
        <button type="button" data-len="30" aria-pressed="${cfg.len===30}">All 30</button>
      </div>
      <label class="opt-card" style="display:flex;gap:var(--space-3);align-items:center;margin-top:var(--space-6);max-width:28rem">
        <input type="checkbox" id="d-shuf" ${cfg.shuffle?'checked':''} style="width:1.05rem;height:1.05rem;accent-color:var(--color-primary)">
        <span style="font-size:var(--text-sm)">Shuffle questions and options</span>
      </label>
      <div class="nextrow">
        <button class="btn btn--solid" id="d-start">Begin →</button>
        <button class="btn" id="d-triage">Option triage first</button>
        <button class="btn" data-nav="exam">All sittings</button>
      </div>
      <p class="note">Some options invent facts the scene never gave you. Those are training traps.</p>
    </div>`;
    root.querySelectorAll('#d-mode button').forEach(b => b.onclick = () => { cfg.mode = b.dataset.mode; drawSetup(); });
    root.querySelectorAll('#d-len button').forEach(b => b.onclick = () => { cfg.len = +b.dataset.len; drawSetup(); });
    root.querySelector('#d-shuf').onchange = e => { cfg.shuffle = e.target.checked; };
    root.querySelector('#d-start').onclick = begin;
    root.querySelector('#d-triage').onclick = () => mountTriage(root);
  }

  function begin() {
    let qs = cfg.shuffle ? shuf(DRILL_ITEMS) : DRILL_ITEMS.slice();
    qs = qs.slice(0, cfg.len).map(q => {
      const options = cfg.shuffle ? shuf(q.options) : q.options.slice();
      return Object.assign({}, q, { options });
    });
    run = { mode: cfg.mode, i: 0, qs, picks: {}, locked: {}, done: {} };
    store.set({ drillRun: { i: 0, mode: run.mode, ids: qs.map(q => q.id) } });
    drawQ();
  }

  function drawQ() {
    const q = run.qs[run.i];
    const picked = run.picks[q.id] || [];
    const submitted = !!run.done[q.id];
    const opts = q.options.map((o, ix) => {
      const on = picked.includes(ix);
      const lab = submitted ? (o.t === 'nui' ? 'Not used information' : (pts(o.t) > 0 ? 'Indicated' : 'Not indicated')) : '';
      const cls = 'opt' + (on ? ' on' : '') + (submitted ? ' locked rev t-' + (o.t === 'nui' ? 'poor' : o.t) : '');
      return `<label class="${cls}" data-ix="${ix}">
        <input type="checkbox" ${on?'checked':''} ${submitted||run.locked[q.id+'-'+ix]?'disabled':''}>
        <span class="opt-body">${esc(o.x)}${submitted?`<span class="opt-tier">${lab}${on?' · you selected this':(o.t==='core'?' · you missed this':'')}</span><span class="opt-why">${esc(o.w)}</span>`:''}</span>
      </label>`;
    }).join('');
    root.innerHTML = `
      <div class="runbar">
        <span class="mode">${run.mode==='exam'?'Exam mode':'Study mode'}</span>
        <div class="prog" style="flex:1;max-width:16rem"><i style="width:${(run.i/run.qs.length*100).toFixed(1)}%"></i></div>
        <span class="clock">${run.i+1} / ${run.qs.length}</span>
      </div>
      <section class="sec">
        <div class="sec-top"><div><span class="sec-id">${esc(q.theme)} · ${esc(q.topic)}</span><h3>Question ${run.i+1}</h3></div></div>
        <p class="scenario">${esc(q.scenario)}</p>
        <p class="instr">${esc(q.instruction)}</p>
        <div class="opts">${opts}</div>
        <div class="sec-foot">
          <span class="meta">${picked.length?picked.length+' selected':'Nothing selected'}</span>
          <span class="spacer"></span>
          ${submitted
            ? `<button class="btn btn--solid" id="d-next">${run.i+1>=run.qs.length?'See the result →':'Next →'}</button>`
            : `<button class="btn btn--solid" id="d-submit">Submit question</button>`}
        </div>
        ${submitted && q.tip ? `<div class="rationale"><h5>Tip</h5>${esc(q.tip)}</div>` : ''}
      </section>`;
    if (!submitted) {
      root.querySelectorAll('.opt').forEach(lab => {
        const inp = lab.querySelector('input');
        if (inp.disabled) return;
        inp.onchange = () => {
          const ix = +lab.dataset.ix;
          const go = () => {
            run.picks[q.id] = run.picks[q.id] || [];
            if (!run.picks[q.id].includes(ix)) run.picks[q.id].push(ix);
            run.locked[q.id+'-'+ix] = true;
            if (run.mode === 'study') drawQ();
            else { lab.classList.add('on'); inp.disabled = true; }
          };
          if (run.mode === 'exam') {
            inp.checked = false;
            confirmPick(esc(q.options[ix].x), go);
          } else go();
        };
      });
      root.querySelector('#d-submit').onclick = () => {
        if (!(run.picks[q.id]||[]).length) return;
        run.done[q.id] = true;
        drawQ();
      };
    } else {
      root.querySelector('#d-next').onclick = () => {
        if (run.i + 1 >= run.qs.length) { store.clear('drillRun'); drawResult(); }
        else { run.i++; drawQ(); }
      };
    }
  }

  function scoreQ(q) {
    const picked = run.picks[q.id] || [];
    let raw = 0, missed = 0, took = 0;
    q.options.forEach((o, ix) => {
      const on = picked.includes(ix);
      const p = pts(o.t);
      if (on) { raw += p; if (p < 0) took++; }
      if (!on && o.t === 'core') missed++;
    });
    const max = q.options.filter(o => pts(o.t) > 0).reduce((a, o) => a + pts(o.t), 0);
    const need = Math.min(4, max);
    return { raw, max, need, pass: raw >= need, missed, took };
  }

  function drawResult() {
    const rows = run.qs.map(q => ({ q, r: scoreQ(q) }));
    const passed = rows.filter(x => x.r.pass).length;
    const pct = Math.round(passed / rows.length * 100);
    const band = pct >= 80 ? 'Strong' : pct >= 60 ? 'On track' : 'Keep going';
    root.innerHTML = `
    <div class="exam-hd">
      <p class="eyebrow">Skills drill · ${run.qs.length} questions</p>
      <h2 class="h-page">${band}</h2>
      <div class="result-hd">
        <div class="kpi"><div class="k">Questions at the mark</div><div class="v">${passed} / ${rows.length}</div></div>
        <div class="kpi"><div class="k">Missed cores</div><div class="v">${rows.reduce((a,x)=>a+x.r.missed,0)}</div></div>
        <div class="kpi"><div class="k">Negatives taken</div><div class="v">${rows.reduce((a,x)=>a+x.r.took,0)}</div></div>
      </div>
      <p class="note">This maps how you tick. It is not a pass mark.</p>
      <div class="tblwrap"><table class="tbl"><thead><tr><th>#</th><th>Theme</th><th class="num">Score</th><th>Outcome</th></tr></thead>
      <tbody>${rows.map((x,i)=>`<tr><td>${i+1}</td><td>${esc(x.q.theme)}</td><td class="num">${x.r.raw>0?'+':''}${x.r.raw}</td><td class="${x.r.pass?'ok':'no'}">${x.r.pass?'Clear':'Revisit'}</td></tr>`).join('')}</tbody></table></div>
      <div class="nextrow">
        <button class="btn btn--solid" id="d-again">Sit again</button>
        <button class="btn" data-nav="exam" data-sub="shapes">Shapes paper →</button>
        <button class="btn" data-nav="library">Library cards</button>
      </div>
    </div>`;
    root.querySelector('#d-again').onclick = drawSetup;
  }

  function mountTriage(el) {
    root = el;
    triage = { i: 0, trail: [], v: null };
    drawTriage();
  }

  function drawTriage() {
    const v = triage.v ? DRILL_VERDICTS[triage.v] : null;
    const g = DRILL_TRIAGE[triage.i];
    root.innerHTML = `
    <div class="exam-hd">
      <p class="eyebrow">Option triage</p>
      <h2 class="h-page">Seven gates, then tick or leave.</h2>
      <p class="lede lede--sm">Run a single option through these. Then go back and sit the drill.</p>
      ${v
        ? `<div class="reset"><h3>${esc(v.h)}</h3><p>${esc(v.b)}</p></div>`
        : `<div class="reset"><h3>${esc(g.q)}</h3><p>${esc(g.h)}</p>
           <div class="nextrow"><button class="btn btn--solid" data-a="yes">Yes</button><button class="btn" data-a="no">No</button></div>
           <p class="note">Gate ${triage.i+1} of ${DRILL_TRIAGE.length}</p></div>`}
      <div class="nextrow">
        <button class="btn" id="t-reset">Start the gates again</button>
        <button class="btn btn--solid" data-nav="exam" data-sub="drill">Open the drill</button>
      </div>
    </div>`;
    root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
      const r = g[b.dataset.a];
      if (r.v) triage.v = r.v; else triage.i = r.n;
      drawTriage();
    });
    root.querySelector('#t-reset').onclick = () => { triage = { i: 0, trail: [], v: null }; drawTriage(); };
  }

  return { mount, mountTriage, resume: mount };
})();
