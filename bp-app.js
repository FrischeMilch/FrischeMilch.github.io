// ═══════════════════════════════════════════════════════════════
// NANA'S BATTLEPASS — APP LOGIC  🌸🌙
// ═══════════════════════════════════════════════════════════════

const C = CONFIG;
const N = C.missions.length;
const SK = 'nana_bp_v4';

let S = { done: [] };
function load() { try { const d = localStorage.getItem(SK); if (d) S = JSON.parse(d); } catch(e){} }
function save() { localStorage.setItem(SK, JSON.stringify(S)); }
function lv() { return S.done.length; }

let tab = 'all';
let pen = -1;

document.addEventListener('DOMContentLoaded', () => {
  load();
  texts();
  renderAll();
  timer();
});

function texts() {
  $('pnm-t').innerHTML = C.profileTitle + ' <span class="pcr">👑</span>';
  $('plv-t').textContent = 'Level ' + lv();
  $('hep-t').innerHTML = '<b>EPISODE ' + C.age + '</b> // ACT I';
  $('hsub-t').textContent = '🌸 ' + C.heroSubtitle;
  $('hdesc-t').textContent = C.heroDesc;

  const a = C.heroAnnotation;
  $('hanno-t').innerHTML = '<span class="big">' + a.line1 + '</span><br>' + a.line2 + '<br>' + a.line3;

  $('rqt-t').innerHTML = C.quoteRight.text.replace(/\n/g,'<br>');
  $('rqf-t').textContent = C.quoteRight.from;

  $('bqt-t').innerHTML = C.quoteBottom.text.replace(/\n/g,'<br>');
  $('bqf-t').textContent = C.quoteBottom.from;

  $('abpt').innerHTML = C.passiveAbility.name.replace(/\n/g,'<br>');
  $('abptag').textContent = '[' + C.passiveAbility.tag + ']';
  $('abut').innerHTML = C.ultimateAbility.name.replace(/\n/g,'<br>');
  $('abutag').textContent = '[' + C.ultimateAbility.tag + ']';

  const dl = $('dm-list');
  dl.innerHTML = '';
  C.dailyMissions.forEach(d => {
    const r = document.createElement('div');
    r.className = 'dm';
    r.innerHTML = '<div class="dm-i">' + d.icon + '</div><div class="dm-t">' + d.text + '</div><div class="dm-p">' + d.progress + '</div><div class="dm-x">' + d.xp + '</div>';
    dl.appendChild(r);
  });

  $('sd-t').textContent = C.seasonEnd;
  $('ss-t').textContent = C.seasonEndSub;
}

function renderAll() {
  bpCards();
  timeline();
  missions();
  progress();
}

function bpCards() {
  const r = $('bp-row');
  r.innerHTML = '';
  const l = lv();
  const s = Math.max(0, l - 2);
  const e = Math.min(N - 1, s + 5);

  for (let i = s; i <= e; i++) {
    const m = C.missions[i];
    const dn = S.done.includes(i);
    const cu = !dn && i === l;
    const lk = !dn && i > l;

    const c = document.createElement('div');
    c.className = 'bpc' + (dn ? ' done' : '') + (cu ? ' cur' : '') + (lk ? ' lk' : '');

    const st = lk ? '🔒' : dn ? '✓' : '▶';
    const rIdx = S.done.indexOf(i);

    c.innerHTML =
      '<div class="bpc-h"><div class="bpc-n">' + (i+1) + '</div><div class="bpc-st">' + st + '</div></div>' +
      '<span class="bpc-ic">' + m.icon + '</span>' +
      '<div class="bpc-tp">' + (dn ? 'REWARD' : m.type) + '</div>' +
      '<div class="bpc-nm">' + (dn && rIdx !== -1 ? C.rewards[rIdx].name : m.title) + '</div>';

    if (!dn && !lk) c.onclick = () => openM(i);
    r.appendChild(c);
  }

  const fc = document.createElement('div');
  fc.className = 'bpc-f' + (l >= N ? ' done' : '');
  fc.innerHTML = '<div class="f-num">' + N + '</div><div class="f-ic">🌸</div><div class="f-lbl">FINAL BOSS</div><div class="f-title">RADIANT</div>';
  r.appendChild(fc);
}

function timeline() {
  const r = $('tl-row');
  r.innerHTML = '';
  const l = lv();
  const ms = new Set([5,10,15,20,25,30]);

  for (let i = 1; i <= N; i++) {
    if (i > 1) {
      const ln = document.createElement('div');
      ln.className = 'tl-l' + (i - 1 <= l ? ' done' : '');
      r.appendChild(ln);
    }

    const w = document.createElement('div');
    w.className = 'tl-n';

    const d = document.createElement('div');
    let cls = 'td';
    if (i <= l) cls += ' done';
    else if (i === l + 1) cls += ' cur';
    if (ms.has(i)) cls += ' mile';
    if (i === N) cls += ' big';
    d.className = cls;
    d.title = 'Level ' + i + ': ' + C.missions[i-1].title;

    if (i > l && (ms.has(i) || i === l + 1)) d.textContent = i;

    const lb = document.createElement('div');
    lb.className = 'tl-lb';
    if (ms.has(i) || i === 1 || i === l + 1) lb.textContent = i;

    w.appendChild(d);
    w.appendChild(lb);
    r.appendChild(w);
  }
}

function missions() {
  const li = $('m-list');
  li.innerHTML = '';

  C.missions.forEach((m, i) => {
    const dn = S.done.includes(i);
    if (tab === 'open' && dn) return;
    if (tab === 'done' && !dn) return;
    if (tab === 'premium' && i < 20) return;

    const it = document.createElement('div');
    it.className = 'mi' + (dn ? ' dn' : '');
    it.innerHTML =
      '<div class="mi-i">' + m.icon + '</div>' +
      '<div class="mi-b">' +
        '<div class="mi-num">MISSION ' + String(i+1).padStart(2,'0') + '</div>' +
        '<div class="mi-t">' + m.title + '</div>' +
        '<div class="mi-d">' + m.desc + '</div>' +
      '</div>' +
      (dn ? '<div class="mi-ck">✓</div>' : '<div class="mi-xp">+1 LVL</div>');

    if (!dn) it.onclick = () => openM(i);
    li.appendChild(it);
  });

  if (!li.children.length) {
    li.innerHTML = '<div style="padding:18px 14px;color:var(--dim);font-size:10px;letter-spacing:2px;text-transform:uppercase">Keine Missionen.</div>';
  }
}

function setTab(t, btn) {
  tab = t;
  document.querySelectorAll('.rtb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  missions();
}

function progress() {
  const l = lv();
  const p = Math.round((l / N) * 100);
  $('plv-t').textContent = 'Level ' + l;
  $('rln').textContent = l;
  $('rlm').textContent = l;
  $('xpb').style.width = p + '%';
  $('xpp').textContent = p + '%';
}

function openM(i) {
  pen = i;
  const m = C.missions[i];
  $('mm-ic').textContent = m.icon;
  $('mm-nm').textContent = m.title;
  $('mm-ds').textContent = m.desc;
  $('m-ov').classList.add('open');
}

function confirmM() {
  clOv('m-ov');
  S.done.push(pen);
  save();

  const l = lv();
  const rw = C.rewards[l - 1];

  $('rw-bd').textContent = 'LEVEL ' + l + ' FREIGESCHALTET';
  $('rw-nm').textContent = rw.name;
  $('rw-ds').textContent = rw.desc;

  $('rw-env').style.display = 'block';
  $('rw-rev').classList.remove('show');
  $('r-ov').classList.add('open');

  renderAll();
  setTimeout(() => lvlUp(l), 350);
}

function reveal() {
  $('rw-env').style.display = 'none';
  $('rw-rev').classList.add('show');
  confetti();
}

function clOv(id) { $(id).classList.remove('open'); }
function clAll() { clOv('m-ov'); clOv('r-ov'); }

document.addEventListener('click', e => {
  if (e.target.classList.contains('ov')) clAll();
});

function lvlUp(l) {
  const b = $('lu');
  $('lu-n').textContent = l;
  b.classList.add('show');
  setTimeout(() => b.classList.remove('show'), 3000);
}

function confetti() {
  const c = $('cfl');
  c.innerHTML = '';
  const cs = ['#e8729a','#d4c8f4','#f0b8d0','#c8a8f8','#ffffff','#f090c0','#b890e8','#ffd4e8'];
  for (let i = 0; i < 70; i++) {
    const p = document.createElement('div');
    p.className = 'cfp';
    const sz = (Math.random()*7+3)+'px';
    p.style.cssText = 'left:'+Math.random()*100+'vw;top:-10px;width:'+sz+';height:'+sz+';background:'+cs[Math.floor(Math.random()*cs.length)]+';animation-delay:'+Math.random()*.4+'s;animation-duration:'+(Math.random()*1.2+1.4)+'s;border-radius:'+(Math.random()>.5?'50%':'2px');
    c.appendChild(p);
  }
  setTimeout(() => c.innerHTML = '', 3000);
}

function timer() {
  function tick() {
    const n = new Date(), e = new Date();
    e.setHours(24,0,0,0);
    const d = e - n;
    const h = String(Math.floor(d/36e5)).padStart(2,'0');
    const m = String(Math.floor((d%36e5)/6e4)).padStart(2,'0');
    const s = String(Math.floor((d%6e4)/1e3)).padStart(2,'0');
    const t = $('tmr');
    if (t) t.textContent = h + ':' + m + ':' + s;
  }
  tick();
  setInterval(tick, 1000);
}

function scrollBP() {
  const rc = document.querySelector('.rcol');
  if (rc) rc.scrollTop = 300;
}

function $(id) { return document.getElementById(id); }
