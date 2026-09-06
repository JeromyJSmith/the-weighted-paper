/* ═════════ store ═════════ */
function confirmPick(quote, onYes) {
  const scrim = document.getElementById('scrim');
  scrim.hidden = false;
  scrim.classList.add('on');
  scrim.innerHTML = `<div class="modal" role="dialog" aria-modal="true">
    <h3>Lock this selection?</h3>
    <p>${quote}</p>
    <div class="btnrow">
      <button class="btn btn--solid" id="mo-yes">Yes, lock it</button>
      <button class="btn" id="mo-no">Not yet</button>
    </div>
  </div>`;
  const close = () => { scrim.classList.remove('on'); scrim.hidden = true; scrim.innerHTML = ''; };
  scrim.querySelector('#mo-no').onclick = close;
  scrim.querySelector('#mo-yes').onclick = () => { close(); onYes(); };
  scrim.onclick = e => { if (e.target === scrim) close(); };
  scrim.querySelector('#mo-yes').focus();
}

const STORE = 'weighted-paper';
const store = {
  get() { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } },
  set(patch) {
    const next = Object.assign(store.get(), patch);
    try { localStorage.setItem(STORE, JSON.stringify(next)); } catch {}
    return next;
  },
  clear(key) {
    const cur = store.get();
    delete cur[key];
    try { localStorage.setItem(STORE, JSON.stringify(cur)); } catch {}
  }
};

/* ═════════ theme ═════════ */
(function () {
  const t = document.querySelector('[data-theme-toggle]'), r = document.documentElement;
  const saved = store.get().theme;
  let d = saved || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  const paint = () => {
    r.setAttribute('data-theme', d);
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = d === 'dark'
      ? '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  };
  paint();
  t.addEventListener('click', () => { d = d === 'dark' ? 'light' : 'dark'; store.set({ theme: d }); paint(); });
})();

/* ═════════ nav ═════════ */
const views = ['home', 'guide', 'shapes', 'prep', 'library', 'exam'];
const HASH = { '': 'home', home: 'home', guide: 'guide', shapes: 'shapes', prep: 'prep', library: 'library', practice: 'exam', exam: 'exam' };
function hashParts() {
  return (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
}
function go(v, sub, opts) {
  views.forEach(x => document.getElementById('view-' + x).classList.toggle('is-on', x === v));
  document.querySelectorAll('.nav-b').forEach(b => b.classList.toggle('is-on', b.dataset.nav === v));
  if (!opts || !opts.silent) {
    const path = v === 'home' ? '' : v === 'exam' ? (sub ? 'practice/' + sub : 'practice') : v;
    const next = '#/' + path;
    if (location.hash !== next) history.replaceState(null, '', next || '#/');
  }
  if (v === 'exam') routePractice(sub || hashParts()[1]);
  if (!opts || !opts.noscroll) window.scrollTo({ top: 0, behavior: 'instant' });
}
function routePractice(sub) {
  if (sub === 'shapes') { if (typeof renderSetup === 'function') renderSetup(); return; }
  if (sub === 'day' && window.IndicatedPaper && IndicatedPaper.mount) { IndicatedPaper.mount(ROOT); return; }
  if (sub === 'drill' && window.SkillsDrill && SkillsDrill.mount) { SkillsDrill.mount(ROOT); return; }
  if (sub === 'triage' && window.SkillsDrill && SkillsDrill.mountTriage) { SkillsDrill.mountTriage(ROOT); return; }
  renderHub();
}
document.addEventListener('click', e => {
  const el = e.target.closest('[data-nav]');
  if (!el) return;
  e.preventDefault();
  go(el.dataset.nav, el.dataset.sub);
});
window.addEventListener('hashchange', () => {
  const parts = hashParts();
  go(HASH[parts[0] || ''] || 'home', parts[1], { silent: true });
});

/* ═════════ buffet demo ═════════ */
const DEMO = [
  { t: 'core', x: 'Check whether working by video is suitable for this client and this work, and agree what happens if you became concerned for their safety.' },
  { t: 'core', x: 'Update the working agreement and privacy notice to cover the platform, and give them a copy.' },
  { t: 'bonus', x: 'Agree what you will both do if the connection fails mid-session.' },
  { t: 'bonus', x: 'Agree a point at which you will both review whether the change is working.' },
  { t: 'poor', x: 'Ask them to justify the request in detail before you will agree to it.' },
  { t: 'poor', x: 'Refuse until they can show you evidence that video is as effective as being in the room.' },
  { t: 'poor', x: 'Send a long email setting out the research literature on remote therapy.' },
  { t: 'poor', x: 'Assume the existing agreement still covers it, since the work itself is unchanged.' },
  { t: 'serious', x: 'Use a free consumer video app you have not checked, because they already have it installed.' }
];
(function buffet() {
  const root = document.getElementById('buffet');
  if (!root) return;
  const list = root.querySelector('.demo-list');
  const num = root.querySelector('.demo-num'), msg = root.querySelector('.demo-msg');
  DEMO.forEach((o, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<label class="demo-item t-${o.t}"><input type="checkbox" data-i="${i}"><span>${o.x}</span><span class="pt">${TIERS[o.t].pts > 0 ? '+' : '−'}${Math.abs(TIERS[o.t].pts)}</span></label>`;
    list.appendChild(li);
  });
  list.addEventListener('change', () => {
    let s = 0, n = 0;
    list.querySelectorAll('input').forEach(inp => {
      const o = DEMO[+inp.dataset.i];
      inp.closest('.demo-item').classList.toggle('on', inp.checked);
      if (inp.checked) { s += TIERS[o.t].pts; n++; }
    });
    num.textContent = (s > 0 ? '+' : '') + s;
    num.style.color = s >= 4 ? 'var(--t-core)' : s <= 0 ? 'var(--t-serious)' : 'var(--t-poor)';
    msg.textContent =
      n === 0 ? 'Nothing selected yet.'
      : n === 9 ? 'Every option selected. Positives +6, negatives −6. The score is zero. This is the arithmetic BACP demonstrates.'
      : s >= 4 ? 'Above the section pass mark of 4. You chose; you did not take everything.'
      : s <= 0 ? 'At or below zero. Something you ticked costs more than the good picks earn.'
      : 'Positive, but short of the pass mark of 4. Two Core options are worth +2 each.';
  });
})();

/* ═════════ shapes ═════════ */
(function shapes() {
  const root = document.getElementById('shapes');
  if (!root) return;
  const COUNT = { V1: [2, 2, 1, 1], V2: [2, 0, 1, 2], V3: [1, 1, 0, 3], V4: [2, 2, 4, 1], V5: [2, 2, 2, 1], V6: [1, 0, 0, 3], V7: [3, 0, 2, 1], V8: [1, 4, 0, 1] };
  const KEYS = ['core', 'bonus', 'poor', 'serious'];
  Object.entries(VARIANTS).forEach(([id, v]) => {
    const c = COUNT[id], tot = c.reduce((a, b) => a + b, 0);
    const bar = c.map((n, i) => {
      if (!n) return '';
      const pts = TIERS[KEYS[i]].pts;
      const t = n + '×' + (pts > 0 ? '+' : '−') + Math.abs(pts);
      return `<span style="--bc:var(--t-${KEYS[i]});flex:${n}">${t}</span>`;
    }).join('');
    const el = document.createElement('article');
    el.className = 'shape';
    el.innerHTML = `
      <div class="shape-h"><span class="shape-id">${id}</span><span class="shape-nm">${v.name}</span><span class="shape-nk">${v.nick}</span></div>
      <div class="bar" role="img" aria-label="${v.comp}">${bar}</div>
      <div class="shape-meta"><span>Max <b>${v.max > 0 ? '+' : ''}${v.max}</b></span><span>Min <b>${v.min}</b></span><span>Pass <b>${v.pass}</b></span><span>Headroom <b>${v.headroom ? '+' + v.headroom : '0'}</b></span><span>Options <b>${tot}</b></span></div>
      <p>${v.body}</p>
      <div class="shape-foot"><span class="tests"><b>Tests:</b> ${v.tests}</span><span class="failm"><b>Failure mode:</b> ${v.fail}</span></div>`;
    root.appendChild(el);
  });
})();

/* ═════════ exam engine ═════════ */
const ROOT = document.getElementById('exam-root');
const S = { scope: 'both', mode: 'exam', timed: true, list: [], i: 0, answers: {}, locked: {}, t0: 0, secs: 0, timer: null, expired: false };

const esc = s => s;
const pts = id => TIERS[id].pts;
const sectionsFor = scope => {
  const cs = scope === 'both' ? CASES : CASES.filter(c => c.id === +scope);
  const out = [];
  cs.forEach(c => c.sections.forEach((s, i) => out.push({ ...s, caseRef: c, first: i === 0 })));
  return out;
};
const secMax = s => s.type === 'single'
  ? Math.max(...s.options.map(o => pts(o.tier)))
  : s.options.filter(o => pts(o.tier) > 0).reduce((a, o) => a + pts(o.tier), 0);
const secMin = s => s.type === 'single'
  ? Math.min(...s.options.map(o => pts(o.tier)))
  : s.options.filter(o => pts(o.tier) < 0).reduce((a, o) => a + pts(o.tier), 0);
const secPass = s => VARIANTS[s.variant].pass;

function scoreSec(s) {
  const picked = S.answers[s.id] || [];
  const raw = picked.reduce((a, id) => a + pts(s.options.find(o => o.id === id).tier), 0);
  return { picked, raw, pass: raw >= secPass(s), max: secMax(s), min: secMin(s), need: secPass(s) };
}

function renderHub() {
  const st = store.get();
  const visited = st.visitedPractice;
  const resume = st.shapesRun || st.dayRun || st.drillRun;
  store.set({ visitedPractice: true });
  ROOT.innerHTML = `
  <div class="hub-intro">
    <p class="eyebrow">Practice</p>
    <h2 class="h-page">Three sittings</h2>
    <p class="lede lede--sm">Start with the drill if this is new. Sit the weighted cases when you know the scoring. Use the six-case mock when you want the live interface: Indicated or Not indicated until the end.</p>
    ${resume ? `<div class="resume"><p>You have a sitting in progress.</p><button class="btn btn--solid" id="resume-go">Resume</button><button class="btn" id="resume-clear">Start fresh</button></div>` : ''}
    <div class="hub-cards">
      <button class="hub-card ${visited ? '' : 'is-start'}" data-open="drill">
        <span class="tag">${visited ? 'Warm-up' : 'Start here'}</span>
        <h3>Skills drill</h3>
        <p>Thirty short scenes. How many boxes to tick, and which wording is a trap. Ten questions is enough for a first pass.</p>
        <span class="go">Open the drill →</span>
      </button>
      <button class="hub-card" data-open="shapes">
        <span class="tag">Weighted cases</span>
        <h3>Online practice and school work</h3>
        <p>Two case studies, twelve sections. Commit a section and it locks. You see how you choose.</p>
        <span class="go">Sit the weighted cases →</span>
      </button>
      <button class="hub-card" data-open="day">
        <span class="tag">Full mock</span>
        <h3>Six cases, two hours</h3>
        <p>Indicated or Not indicated until the end. School, EAP, faith, cross-border, fitness to practise.</p>
        <span class="go">Sit the full mock →</span>
      </button>
    </div>
    <p class="note">Order: Guide, then drill (10), then weighted cases in exam mode, then the full mock timed.</p>
  </div>`;
  ROOT.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => go('exam', b.dataset.open)));
  const rg = ROOT.querySelector('#resume-go');
  if (rg) rg.addEventListener('click', () => {
    const which = st.dayRun ? 'day' : st.drillRun ? 'drill' : 'shapes';
    go('exam', which);
  });
  const rc = ROOT.querySelector('#resume-clear');
  if (rc) rc.addEventListener('click', () => { store.clear('shapesRun'); store.clear('dayRun'); store.clear('drillRun'); renderHub(); });
}

/* ── setup ── */
function renderSetup() {
  ROOT.innerHTML = `
  <div class="exam-hd">
    <p class="eyebrow">Weighted cases</p>
    <h2 class="h-page">Two clients. Twelve sections.</h2>
    <p class="lede lede--sm">Priya in private practice and Callum in a school. You see how you choose. BACP will not show you a score on the day.</p>

    <h3 class="h-sub" style="margin-top:var(--space-10)">What do you want to sit?</h3>
    <div class="setup" id="scope">
      <button class="opt-card on" data-scope="both"><h4>Both cases</h4><p>Priya and Callum. 12 sections. 40 minutes.</p></button>
      <button class="opt-card" data-scope="1"><h4>Priya</h4><p>Online private practice. Bereavement, low mood. 6 sections. 20 minutes.</p></button>
      <button class="opt-card" data-scope="2"><h4>Callum</h4><p>School-commissioned service. A reluctant 16-year-old and a safeguarding disclosure. 6 sections. 20 minutes.</p></button>
    </div>

    <h3 class="h-sub" style="margin-top:var(--space-10)">How do you want to sit it?</h3>
    <div class="setup" id="mode">
      <button class="opt-card on" data-mode="exam"><h4>Exam mode</h4><p>No feedback until the end. Sections lock behind you. Sit this one first.</p></button>
      <button class="opt-card" data-mode="study"><h4>Study mode</h4><p>Weight, points and rationale as soon as you commit a section. Use this on a second pass.</p></button>
    </div>

    <div class="setup-row">
      <label class="opt-card" style="display:flex;gap:var(--space-3);align-items:center;padding:var(--space-4) var(--space-5)">
        <input type="checkbox" id="timed" checked style="width:1.05rem;height:1.05rem;accent-color:var(--color-primary)">
        <span style="font-size:var(--text-sm)">Run the clock: 20 minutes per case study</span>
      </label>
      <button class="btn btn--solid" id="start" style="margin-left:auto">Begin →</button>
      <button class="btn" data-nav="exam">All sittings</button>
    </div>

    <div class="rules">
      <h4>Four rules that make the practice worth anything</h4>
      <ol>
        <li><strong>Cold and timed.</strong> Twenty minutes per case study. No notes beside you.</li>
        <li><strong>Sequential and irreversible.</strong> Once a section is committed it cannot be changed.</li>
        <li><strong>Read the selection instruction before the options.</strong> Some sections take several responses. Two take exactly one.</li>
        <li><strong>Watch each section against its own mark before you look at the total.</strong> A comfortable total can hide two weak sections.</li>
      </ol>
    </div>
  </div>`;

  ROOT.querySelectorAll('#scope .opt-card').forEach(b => b.addEventListener('click', () => {
    ROOT.querySelectorAll('#scope .opt-card').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); S.scope = b.dataset.scope;
  }));
  ROOT.querySelectorAll('#mode .opt-card').forEach(b => b.addEventListener('click', () => {
    ROOT.querySelectorAll('#mode .opt-card').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); S.mode = b.dataset.mode;
  }));
  ROOT.querySelector('#start').addEventListener('click', begin);
}

function begin() {
  S.timed = ROOT.querySelector('#timed').checked;
  S.list = sectionsFor(S.scope);
  S.i = 0; S.answers = {}; S.locked = {}; S.expired = false;
  S.secs = (S.scope === 'both' ? 40 : 20) * 60;
  if (S.timer) clearInterval(S.timer);
  if (S.timed) S.timer = setInterval(tick, 1000);
  persistShapes();
  renderRun();
}
function persistShapes() {
  store.set({ shapesRun: { scope: S.scope, mode: S.mode, timed: S.timed, i: S.i, answers: S.answers, locked: S.locked, secs: S.secs, expired: S.expired } });
}
function tick() {
  S.secs--;
  if (S.secs <= 0) {
    S.secs = 0; S.expired = true;
    if (S.timer) clearInterval(S.timer);
    store.clear('shapesRun');
    renderResults();
    return;
  }
  persistShapes();
  const c = document.getElementById('clock');
  if (c) { c.textContent = fmt(S.secs); c.classList.toggle('warn', S.secs < 300); }
}
const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');

/* ── run ── */
function renderRun() {
  const s = S.list[S.i];
  const pips = S.list.map((x, i) => `<span class="pip ${S.locked[x.id] ? 'done' : ''} ${i === S.i ? 'now' : ''}" title="${x.id}">${x.caseRef.id}${x.letter}</span>`).join('');
  const head = s.first ? caseHead(s.caseRef) : '';
  ROOT.innerHTML = `
    <div class="runbar">
      <span class="mode">${S.mode === 'exam' ? 'Exam mode' : 'Study mode'}</span>
      <div class="pips">${pips}</div>
      ${S.timed ? `<span class="clock" id="clock">${fmt(S.secs)}</span>` : '<span class="clock" style="opacity:.4">untimed</span>'}
    </div>
    ${head}
    <div id="secslot"></div>`;
  renderSection(s);
}

function caseHead(c) {
  return `<div class="casehd">
    <p class="eyebrow">Case study ${c.id}</p>
    <h3>${c.name}</h3>
    <p class="strap">${c.strap}</p>
    <dl class="facts">${c.facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
    <p class="bg">${c.background}</p>
  </div>`;
}

function renderSection(s) {
  const slot = document.getElementById('secslot');
  const locked = !!S.locked[s.id];
  const v = VARIANTS[s.variant];
  const single = s.type === 'single';
  const opts = s.options.map(o => `
    <label class="opt" data-o="${o.id}">
      <input type="${single ? 'radio' : 'checkbox'}" name="sec-${s.id}" value="${o.id}">
      <span class="opt-id">${o.id}</span>
      <span class="opt-body">${o.text}</span>
    </label>`).join('');

  slot.innerHTML = `
    <section class="sec" id="sec-${s.id}">
      <div class="sec-top">
        <div>
          <span class="sec-id">Case ${s.caseRef.id} · Section ${s.letter} · ${s.kind}</span>
          <h3>${s.title}</h3>
        </div>
        <div style="display:flex;gap:var(--space-2);flex-wrap:wrap">
          <span class="chip chip--v">${s.variant} ${v.name}</span>
          <span class="chip">Max ${v.max > 0 ? '+' : ''}${v.max} · Pass ${v.pass}</span>
        </div>
      </div>
      <p class="scenario">${s.prompt}</p>
      <p class="instr">${s.instruction}</p>
      <div class="opts">${opts}</div>
      <div class="sec-foot">
        <span class="meta" id="live">Nothing selected</span>
        <span class="spacer"></span>
        <button class="btn btn--solid" id="commit">Commit section ${s.letter}</button>
      </div>
    </section>`;

  const live = slot.querySelector('#live');
  slot.querySelectorAll('.opt input').forEach(inp => inp.addEventListener('change', () => {
    slot.querySelectorAll('.opt').forEach(l => l.classList.toggle('on', l.querySelector('input').checked));
    const n = [...slot.querySelectorAll('.opt input:checked')].length;
    live.textContent = n === 0 ? 'Nothing selected' : n + (n === 1 ? ' option selected' : ' options selected');
  }));

  slot.querySelector('#commit').addEventListener('click', () => {
    const picked = [...slot.querySelectorAll('.opt input:checked')].map(i => i.value);
    if (!picked.length) { live.textContent = 'Select at least one option before committing.'; return; }
    S.answers[s.id] = picked;
    S.locked[s.id] = true;
    persistShapes();
    if (S.mode === 'study') revealInline(s); else advance();
  });
}

function revealInline(s) {
  const sec = document.getElementById('sec-' + s.id);
  const r = scoreSec(s);
  sec.querySelectorAll('.opt').forEach(l => {
    const o = s.options.find(x => x.id === l.dataset.o);
    const chosen = r.picked.includes(o.id);
    l.classList.add('locked', 'rev', 't-' + o.tier);
    l.querySelector('input').disabled = true;
    if (!chosen && o.tier === 'core') l.classList.add('miss', 't-' + o.tier);
    l.querySelector('.opt-body').insertAdjacentHTML('beforeend',
      `<span class="opt-tier">${TIERS[o.tier].label} <b>${pts(o.tier) > 0 ? '+' : '−'}${Math.abs(pts(o.tier))}</b>${chosen ? ' · you selected this' : (o.tier === 'core' ? ' · you missed this' : '')}</span>
       <span class="opt-why">${o.why}</span>`);
  });
  const last = S.i === S.list.length - 1;
  sec.querySelector('.sec-foot').innerHTML = `
    <span class="verdict ${r.pass ? 'pass' : 'fail'}">${r.raw > 0 ? '+' : ''}${r.raw} of ${r.max} · pass mark ${r.need} · ${r.pass ? 'section passed' : 'section failed'}</span>
    <span class="spacer"></span>
    <button class="btn btn--solid" id="next">${last ? 'See the full result →' : 'Next section →'}</button>`;
  sec.insertAdjacentHTML('beforeend', `<div class="rationale"><h5>Rationale and weighting</h5>${s.rationale}</div>`);
  sec.querySelector('#next').addEventListener('click', advance);
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function advance() {
  if (S.i === S.list.length - 1) { if (S.timer) clearInterval(S.timer); renderResults(); return; }
  S.i++;
  renderRun();
}

/* ── results ── */
function renderResults() {
  const rows = S.list.map(s => ({ s, r: scoreSec(s) }));
  const total = rows.reduce((a, x) => a + x.r.raw, 0);
  const max = rows.reduce((a, x) => a + x.r.max, 0);
  const passedN = rows.filter(x => x.r.pass).length;
  const n = rows.length;
  const allowedFails = n >= 12 ? 2 : 1;
  const needTotal = Math.ceil(max * 2 / 3);
  const verdict = total >= needTotal && passedN >= n - allowedFails;
  const pct = max ? Math.round(total / max * 100) : 0;
  const band = pct >= 86 ? ['Strong', 'You took the load-bearing acts and banked surplus.']
    : pct >= 67 ? ['On track', 'At the two-thirds ratio. Look at the behaviour that still drifted.']
    : pct >= 40 ? ['Keep going', 'Bonus options are doing the work while Core ones are being missed.']
    : ['Keep going', 'Open the Library cards your error log names. One sitting does not define the next.'];

  /* error log */
  const errs = [];
  rows.forEach(({ s, r }) => {
    s.options.forEach(o => {
      const chosen = r.picked.includes(o.id);
      if (chosen && pts(o.tier) < 0) errs.push({ tier: o.tier, sec: s, o, kind: 'took' });
      if (!chosen && o.tier === 'core') errs.push({ tier: 'core', sec: s, o, kind: 'missed' });
    });
  });

  /* behaviours */
  const bh = BEHAVIOURS.map(b => {
    const mine = rows.filter(x => b.sections.includes(x.s.id));
    if (!mine.length) return null;
    const clean = mine.every(x => {
      const took = x.r.picked.map(id => x.s.options.find(o => o.id === id));
      const negs = took.filter(o => pts(o.tier) < 0).length;
      const missedCore = x.s.options.filter(o => o.tier === 'core' && !x.r.picked.includes(o.id)).length;
      return negs === 0 && missedCore === 0;
    });
    const soft = mine.every(x => x.r.pass);
    return { b, state: clean ? 'Clear' : soft ? 'Passed, with drift' : 'Fail signal', ok: clean ? 'core' : soft ? 'poor' : 'serious', ids: mine.map(x => x.s.id) };
  }).filter(Boolean);

  ROOT.innerHTML = `
  <div class="exam-hd">
    <p class="eyebrow">Result · ${S.scope === 'both' ? 'full paper' : 'case study ' + S.scope} · ${S.mode === 'exam' ? 'exam mode' : 'study mode'}${S.expired ? ' · time expired' : ''}</p>
    <h2 class="h-page">${band[0]}</h2>
    <div class="result-hd">
      <div class="kpi kpi--verdict ${verdict ? 'pass' : 'fail'}"><div class="k">This sitting</div><div class="v">${verdict ? 'On track' : 'Keep going'}</div><div class="s">${needTotal} of ${max} points · ${n - allowedFails} of ${n} sections</div></div>
      <div class="kpi"><div class="k">Total</div><div class="v">${total > 0 ? '+' : ''}${total} <span style="font-size:var(--text-base);color:var(--color-text-faint)">/ ${max}</span></div><div class="s">${pct}% of the maximum</div></div>
      <div class="kpi"><div class="k">Sections at their own pass mark</div><div class="v">${passedN} / ${n}</div><div class="s">${n - passedN} below</div></div>
      <div class="kpi"><div class="k">Negative options taken</div><div class="v">${errs.filter(e => e.kind === 'took').length}</div><div class="s">${errs.filter(e => e.kind === 'took' && e.tier === 'serious').length} of them Serious</div></div>
    </div>
    <p class="note note--wide">${band[1]} This shows how you chose in this sitting.</p>

    <h3 class="h-sub">Section by section</h3>
    <div class="tblwrap"><table class="tbl">
      <thead><tr><th>Section</th><th>Shape</th><th>Selected</th><th class="num">Score</th><th class="num">Max</th><th class="num">Pass</th><th>Outcome</th></tr></thead>
      <tbody>${rows.map(({ s, r }) => `<tr>
        <td><strong>${s.caseRef.id}${s.letter}</strong> ${s.title}</td>
        <td>${s.variant} ${VARIANTS[s.variant].name}</td>
        <td style="color:var(--color-text-muted)">${r.picked.join(', ') || '—'}</td>
        <td class="num">${r.raw > 0 ? '+' : ''}${r.raw}</td>
        <td class="num">${r.max}</td>
        <td class="num">${r.need}</td>
        <td class="${r.pass ? 'ok' : 'no'}">${r.pass ? 'Passed' : 'Failed'}</td></tr>`).join('')}
      </tbody></table></div>

    <h3 class="h-sub">Diagnostic by behaviour</h3>
    <p class="lede lede--sm">A strong total can hide a single fatal pattern. One recurring behaviour is worth more attention than six scattered errors.</p>
    <div class="behav">${bh.map(x => `<div class="bh" style="--bc:var(--t-${x.ok})"><div><strong>${x.b.name}</strong><small>Tested in ${x.ids.join(' and ')} · fail signal: ${x.b.fail}</small></div><div class="st">${x.state}</div></div>`).join('')}</div>

    <h3 class="h-sub">Error log</h3>
    ${errs.length ? `<div class="errlog"><ul role="list">${errs.map(e => `
      <li style="--tc:var(--t-${e.tier})">
        <span class="tag">${e.sec.caseRef.id}${e.sec.letter} · ${e.kind === 'took' ? TIERS[e.tier].label + ' ' + pts(e.tier) : 'Core missed'}</span>
        <span><strong>${e.o.id}.</strong> ${e.o.text}<br><span style="color:var(--color-text-muted);font-size:var(--text-xs)">${e.o.why}</span></span>
      </li>`).join('')}</ul></div>`
    : `<div class="errlog"><p style="font-size:var(--text-sm);color:var(--color-text-muted)">No negative selections and no Core options missed. Write down why you left the options you left. Explaining those is what transfers.</p></div>`}
    <p class="note note--wide">For every negative option you took, write one sentence naming the duty it breached and the clause it engages. For every Core option you missed, write one sentence on why it was load-bearing and which Bonus option you took instead. Two sentences, nothing more. Then look for the pattern rather than the count.</p>

    <h3 class="h-sub">Full review</h3>
    <div id="review"></div>

    <div class="nextrow">
      <button class="btn btn--solid" id="again">Sit it again</button>
      <button class="btn" data-nav="shapes">Back to section types</button>
      <button class="btn btn--ghost" id="copy">Copy error log</button>
    </div>
  </div>`;

  const rev = document.getElementById('review');
  rows.forEach(({ s, r }) => {
    const el = document.createElement('section');
    el.className = 'sec';
    el.innerHTML = `
      <div class="sec-top">
        <div><span class="sec-id">Case ${s.caseRef.id} · Section ${s.letter} · ${s.kind}</span><h3>${s.title}</h3></div>
        <span class="verdict ${r.pass ? 'pass' : 'fail'}">${r.raw > 0 ? '+' : ''}${r.raw} of ${r.max} · pass ${r.need}</span>
      </div>
      <p class="scenario">${s.prompt}</p>
      <p class="instr">${s.instruction}</p>
      <div class="opts">${s.options.map(o => {
        const chosen = r.picked.includes(o.id);
        return `<div class="opt locked rev t-${o.tier} ${chosen ? 'on' : ''} ${!chosen && o.tier === 'core' ? 'miss' : ''}">
          <span class="opt-id">${o.id}</span>
          <span class="opt-body">${o.text}
            <span class="opt-tier">${TIERS[o.tier].label} <b>${pts(o.tier) > 0 ? '+' : '−'}${Math.abs(pts(o.tier))}</b>${chosen ? ' · you selected this' : (o.tier === 'core' ? ' · you missed this' : '')}</span>
            <span class="opt-why">${o.why}</span></span></div>`;
      }).join('')}</div>
      <div class="rationale"><h5>Rationale and weighting · ${s.variant} ${VARIANTS[s.variant].name}</h5>${s.rationale}</div>`;
    rev.appendChild(el);
  });

  store.clear('shapesRun');
  document.getElementById('again').addEventListener('click', renderSetup);
  document.getElementById('copy').addEventListener('click', e => {
    const txt = errs.map(x => `${x.sec.caseRef.id}${x.sec.letter} ${x.o.id} — ${x.kind === 'took' ? TIERS[x.tier].label + ' ' + pts(x.tier) + ' taken' : 'Core missed'}: ${x.o.text}\n   Why: ${x.o.why}\n`).join('\n');
    navigator.clipboard?.writeText(txt || 'No errors logged.');
    e.target.textContent = 'Copied';
    setTimeout(() => { e.target.textContent = 'Copy error log'; }, 1800);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

(function boot() {
  const parts = hashParts();
  go(HASH[parts[0] || ''] || 'home', parts[1], { silent: true, noscroll: true });
})();
