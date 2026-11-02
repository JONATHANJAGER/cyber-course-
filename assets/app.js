/* Cyber Upgrade Academy • static-site learner • no third-party JS dependencies */
(() => {
  'use strict';
  const course = window.CYBER_COURSE;
  const packets = window.CYBER_LESSONS?.weeks || {};
  const key = 'cyber-upgrade-academy-progress-v1';
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const root = document.getElementById('main-content');
  if (!course || !root) return;
  const defaults = () => ({ completed: {}, notes: {}, quizResults: {}, labSteps: {} });
  const loadProgress = () => {
    try {
      const raw = JSON.parse(localStorage.getItem(key) || 'null');
      return raw && typeof raw === 'object' && !Array.isArray(raw) ? {
        completed: isRecord(raw.completed) ? raw.completed : {},
        notes: isRecord(raw.notes) ? raw.notes : {},
        quizResults: isRecord(raw.quizResults) ? raw.quizResults : {},
        labSteps: isRecord(raw.labSteps) ? raw.labSteps : {}
      } : defaults();
    } catch (_) { return defaults(); }
  };
  function isRecord(v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }
  let progress = loadProgress();
  const ui = { search: '', filter: 'all', day: 'Tuesday', quizDraft: {}, retaking: {}, returnFocus: false };
  let toastTimer;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
  const n = value => Number(value) || 0;
  function save() { try { localStorage.setItem(key, JSON.stringify(progress)); } catch (_) { toast('Storage unavailable. Export progress to keep a backup.'); } }
  function countComplete() { return course.weeks.reduce((v,w) => v + w.classes.filter(c => progress.completed[c.id] === true).length,0); }
  function weekCompleted(w) { return w.classes.filter(c => progress.completed[c.id] === true).length; }
  function nextItem() { for (const w of course.weeks) { if (!packets[w.id]) continue; for (const c of w.classes) if (!progress.completed[c.id]) return { week:w, clazz:c }; } return null; }
  function toast(message) { const el = document.getElementById('toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3300); }
  function route() {
    const chunks = (location.hash || '#/dashboard').slice(2).split('/');
    const page = chunks[0] || 'dashboard';
    const week = page === 'week' ? n(chunks[1]) : 0;
    const month = page === 'curriculum' && chunks[1] === 'month' ? n(chunks[2]) : 0;
    return {page, week, month};
  }
  function updateSideNav(r) {
    document.querySelectorAll('[data-view]').forEach(el => el.classList.toggle('active',el.dataset.view === (r.page === 'week' ? 'curriculum' : r.page)));
    const monthNav = document.getElementById('month-nav');
    monthNav.innerHTML = course.months.map(m => `<a href="#/curriculum/month/${m.id}" class="${(r.month === m.id || (r.week && course.weeks[r.week-1]?.month === m.id)) ? 'active' : ''}"><span class="month-number">${String(m.id).padStart(2,'0')}</span><span class="month-label">${esc(m.name.toLowerCase())}</span></a>`).join('');
    const headings = { dashboard:'MY LEARNING DASHBOARD',curriculum:'36-WEEK COURSE CATALOG',week:'CLASSROOM',workspace:'YOUR PERSONAL WORKSPACE',projects:'PORTFOLIO STUDIO',about:'PLATFORM INFORMATION' };
    document.getElementById('topbar-section').textContent = headings[r.page] || 'CYBER UPGRADE';
  }
  function render() {
    const r = route(); updateSideNav(r);
    if (r.page === 'dashboard') root.innerHTML = dashboard();
    else if (r.page === 'curriculum') root.innerHTML = curriculum(r.month);
    else if (r.page === 'week') root.innerHTML = weekPage(r.week);
    else if (r.page === 'workspace') root.innerHTML = workspace();
    else if (r.page === 'projects') root.innerHTML = projects();
    else if (r.page === 'about') root.innerHTML = about();
    else root.innerHTML = dashboard();
    document.title = (r.page === 'week' ? `Week ${r.week}` : r.page[0].toUpperCase()+r.page.slice(1)) + ' | Cyber Upgrade';
  }
  function stat(value,label) { return `<div class="stat"><strong>${value}</strong><label>${label}</label></div>`; }
  function status(w) { const c = weekCompleted(w); return c === 4 ? 'Completed' : c ? 'In progress' : packets[w.id] ? 'Lessons ready' : 'Course outline'; }
  function badgeStatus(w) {const s=status(w);return `<span class="pill ${s === 'Course outline' ? 'pill-muted' : s === 'In progress' ? 'pill-gold' : ''}">${s}</span>`;}
  function dashboard() {
    const done = countComplete(), pct = Math.round(100*done/144), next = nextItem();
    const scored = Object.values(progress.quizResults).filter(r=>r && Number.isFinite(r.bestScore));
    const avg = scored.length ? Math.round(scored.reduce((a,b)=>a+b.bestScore/b.total*100,0)/scored.length)+'%' : '—';
    return `<section class="hero"><div class="hero-copy"><div class="eyebrow">YOUR FUTURE STARTS WITH THE NEXT LAB</div><h1>Learn the craft.<br><em>Build the skills.</em></h1><p>A complete 36-week cybersecurity pathway, built around real practice—not a list of topics you're expected to research alone. Start with guided lessons and build toward security leadership.</p><div class="button-row"><a class="btn btn-primary" href="${next ? `#/week/${next.week.id}` : '#/curriculum'}">${next ? 'Continue learning' : 'Explore the curriculum'} →</a><a class="btn btn-outline" href="#/curriculum">Explore all 36 weeks</a></div></div></section>
    <section class="stats" aria-label="Course facts">${stat('36','Weeks')}${stat('144','Classes')}${stat('720','Planned hours')}${stat('6','Portfolio projects')}</section>
    <div class="section-heading"><div><h2>Your command center</h2><p>Your progress is private to this browser until you export it.</p></div><a href="#/workspace">Open workspace →</a></div>
    <section class="two-col"><div class="panel"><h3>Course completion</h3><div class="progress-layout"><div class="progress-circle" style="--pct:${pct}%" role="img" aria-label="${pct} percent of classes complete"><div class="progress-inner"><strong>${pct}%</strong><small>COMPLETE</small></div></div><div class="progress-copy"><strong>${done} of 144 classes completed</strong><p>Move one lesson at a time. Hands-on work, evidence and reflection are part of every class.</p><span class="micro-label">${scored.length} quizzes taken · ${avg} mean best score</span><div class="progress-line"><div class="progress-fill" style="width:${pct}%"></div></div></div></div></div>
    <div class="panel next-class"><div class="class-mini">${next ? `YOUR NEXT CLASS · WEEK ${String(next.week.id).padStart(2,'0')}` : 'COMING NEXT'}</div><h3>${esc(next ? next.clazz.title : 'Review your learning portfolio')}</h3><p>${next ? esc(`${next.clazz.day} · Class ${next.clazz.id} · 5-hour study block`) : 'The currently published classes are complete. New materials will be added as they are authored.'}</p><a href="${next ? `#/week/${next.week.id}` : '#/workspace'}" class="btn btn-primary btn-small">${next ? 'Open classroom' : 'View my progress'} →</a></div></section>
    <div class="section-heading"><div><h2>What your school includes</h2><p>A learning path with a real practical and assessment structure.</p></div></div><section class="features-grid">
    <div class="feature"><div class="feature-icon">⌘</div><h3>Instructor-style lessons</h3><p>Original explanations, worked examples, key vocabulary and guided practice.</p></div><div class="feature"><div class="feature-icon">▧</div><h3>Practical labs</h3><p>Detailed lab steps in the published modules and a plan for every future week.</p></div><div class="feature"><div class="feature-icon">✓</div><h3>Checks and evidence</h3><p>Scored questions with answer explanations, notes, and saved completion records.</p></div></section>
    <div class="section-heading"><div><h2>Begin with the foundation</h2><p>The first four weeks are published as an interactive pilot.</p></div><a href="#/curriculum">Full roadmap →</a></div><section class="week-grid">${course.weeks.slice(0,4).map(weekCard).join('')}</section>`;
  }
  function weekCard(w) {
    return `<article class="week-card"><div class="card-topline"><span class="week-number">WEEK ${String(w.id).padStart(2,'0')}</span>${badgeStatus(w)}</div><h3>${esc(w.title)}</h3><p>${esc(w.scope)}</p><div class="week-foot"><span>${weekCompleted(w)}/4 classes · ${esc(w.track)}</span><a href="#/week/${w.id}" aria-label="View Week ${w.id}">View week →</a></div></article>`;
  }
  function curriculum(month) {
    const completed=countComplete();
    const matches=w => {
      if (month && w.month !== month) return false;
      const q=ui.search.toLowerCase();
      const haystack = `${w.title} ${w.scope} ${w.track} ${w.classes.map(c=>c.title).join(' ')}`;
      if(q && !haystack.toLowerCase().includes(q)) return false;
      const s=status(w);
      return ui.filter === 'all' || (ui.filter === 'available' && !!packets[w.id]) || (ui.filter === 'planned' && !packets[w.id]) || (ui.filter === 'started' && s === 'In progress') || (ui.filter === 'complete' && s === 'Completed');
    };
    const groups=course.months.filter(m=>!month||m.id===month).map(m=>({m,weeks:course.weeks.filter(w=>w.month===m.id&&matches(w))})).filter(g=>g.weeks.length);
    return `<div class="eyebrow">YOUR 9-MONTH ROADMAP</div><h1 class="page-title">The complete course catalog.</h1><p class="lead">Every week below follows the agreed Tuesday–Friday schedule. Weeks 1–4 include original guided teaching materials and quizzes. Weeks 5–36 currently show the approved course blueprint, with full learning packets to be added.</p><div class="statusline"><span class="pill">4 pilot weeks published</span><span>${completed}/144 classes complete</span><span>9 monthly checkpoints planned</span></div>
    <div class="toolbar"><input type="search" aria-label="Search the course catalog" class="searchbox" id="catalog-search" placeholder="Search 36 weeks..." value="${esc(ui.search)}"><div class="filterset" role="group" aria-label="Filter course status">${[['all','All'],['available','Lessons ready'],['planned','Outlines'],['started','Started'],['complete','Completed']].map(x=>`<button type="button" data-filter="${x[0]}" class="filter-btn ${ui.filter===x[0]?'active':''}">${x[1]}</button>`).join('')}</div></div>
    ${month?`<a class="back-link" href="#/curriculum">← See all months</a>`:''}${groups.length ? groups.map(g=>`<section class="month-section"><div class="month-title"><small>MONTH ${String(g.m.id).padStart(2,'0')}</small><h2>${esc(g.m.name.toLowerCase())}</h2></div><div class="week-grid">${g.weeks.map(weekCard).join('')}</div></section>`).join(''):'<div class="empty">No weeks match your search or filter.</div>'}`;
  }
  function weekPage(weekId) {
    const w=course.weeks.find(x=>x.id===weekId);
    if(!w) return '<div class="empty">That week does not exist. <a href="#/curriculum">Return to catalog</a>.</div>';
    const packet=packets[w.id];
    const day=ui.day === 'Assessment' ? 'Assessment' : days.includes(ui.day) ? ui.day : 'Tuesday';
    const current = w.classes.find(c=>c.day===day);
    const good=weekCompleted(w);
    return `<a class="back-link" href="#/curriculum">← Back to course catalog</a><div class="week-head"><div><div class="eyebrow">MONTH ${String(w.month).padStart(2,'0')} / WEEK ${String(w.id).padStart(2,'0')}</div><h1 class="page-title">${esc(w.title)}</h1><p>${esc(w.scope)}</p><div class="statusline"><span>4 classes · 5 hours each</span><span>${good}/4 completed</span><span>${esc(w.track)}</span></div></div>${badgeStatus(w)}</div>
    <div class="weekly-callout"><h3>${packet?"This week's learning mission":'Planned learning module'}</h3><p>${esc(packet?.intro||`Four instructor-led class blocks are planned. Published reading, guided labs, and an auto-graded quiz have not yet been authored for this week. Submission goal: ${w.deliverable}.`)}</p></div>
    <nav class="tabs" aria-label="Week classroom tabs">${days.map(d=>{const c=w.classes.find(x=>x.day===d);return `<button type="button" class="tab ${day===d?'active':''}" data-day="${d}">${d.slice(0,3)} <span aria-hidden="true">${progress.completed[c.id]?'✓':''}</span></button>`;}).join('')}<button type="button" class="tab ${day==='Assessment'?'active':''}" data-day="Assessment">Assessment${packet?` (${packet.quiz.length})`:''}</button></nav>
    ${day==='Assessment'?assessment(w,packet):lesson(w,current,packet)}
    <div class="section-heading"><div><h2>End-of-week submission</h2><p>${esc(w.deliverable)}</p></div><span class="pill pill-muted">${esc(w.track)}</span></div>
    ${packet?'<div class="notice">Mark each day complete only after finishing the reading and the guided lab steps. Assessments here are original study practice, not official certification exams.</div>':'<div class="notice">This is a curriculum preview. Upcoming readings, instructions, lab files and graded assessments still need to be written and published.</div>'}`;
  }
  function lesson(w,c,packet) {
    if(!c) return '<div class="empty">Class not found.</div>';
    const unit=packet?.lessons?.[c.id];
    const label=`CLASS ${c.id} · ${c.day.toUpperCase()}`;
    const sharedIntro=`<div class="eyebrow">${esc(label)} / 5-HOUR STUDY BLOCK</div><h2>${esc(c.title)}</h2>`;
    if (!unit) return `<div class="not-ready">${sharedIntro}<p><span class="pill pill-gold">Outline only</span></p><h3>What this class will cover</h3><p>${esc(c.title)}.</p><h3>Week goals</h3><p>${esc(w.scope)}</p><h3>Required submission</h3><p>${esc(w.deliverable)}</p><p><strong>Full lesson not yet published.</strong> This page is a planning preview; no finished textbook content or interactive lab is implied.</p><a class="btn btn-outline btn-small" href="#/curriculum">Browse other weeks →</a></div>`;
    const steps=unit.steps.map((s,i)=>{const ck=`${c.id}-${i}`;return `<li><label class="check-complete"><input type="checkbox" data-lab-check="${esc(ck)}" ${progress.labSteps[ck]?'checked':''}><span>${esc(s)}</span></label></li>`;}).join('');
    const total=unit.steps.length, finished=unit.steps.filter((s,i)=>progress.labSteps[`${c.id}-${i}`]).length;
    const example=unit.example ? `<div class="example"><div class="example-header"><strong>${esc(unit.example.label)}</strong><button class="btn btn-quiet btn-small" type="button" data-copy="${esc(c.id)}">Copy example</button></div><pre><code>${esc(unit.example.code)}</code></pre><p>${esc(unit.example.why)}</p></div>`:'';
    return `<div class="lesson-grid"><div class="lesson-body"><section class="panel">${sharedIntro}<p class="quote">${esc(unit.takeaway)}</p><h3>Learn the concept</h3>${unit.concepts.map(x=>`<h3>${esc(x.heading)}</h3><p>${esc(x.body)}</p>`).join('')}${example}</section>
    <section class="panel"><div class="eyebrow">GUIDED PRACTICE / AUTHORISED LAB</div><h2>Do the work</h2><p>Complete the steps using your own device, permitted virtual machine or an offline paper simulation. Record observed results instead of inventing outcomes.</p><ol class="task-list">${steps}</ol><p class="tagline">${finished} of ${total} lab steps checked. These checkboxes save automatically on this device.</p></section>
    <section class="panel"><h2>Reflection & learning notes</h2><p>${esc(unit.reflection)}</p><label class="micro-label" for="lesson-note">YOUR PRIVATE NOTES (SAVED AUTOMATICALLY)</label><textarea class="notes" id="lesson-note" data-note="${esc(c.id)}" placeholder="Write observations, commands, results, mistakes, and questions...">${esc(progress.notes[c.id]||'')}</textarea><p class="notes-helper">Saved in this browser only. Use My workspace to back up or transfer notes.</p></section></div>
    <aside class="lesson-sidebar"><div class="panel"><div class="aside-head">Weekly objectives</div><ul class="objective-list">${packet.outcomes.map(v=>`<li>${esc(v)}</li>`).join('')}</ul><div class="divider"></div><div class="aside-head">Class status</div><label class="check-complete"><input type="checkbox" data-complete="${esc(c.id)}" ${progress.completed[c.id]?'checked':''}> Mark class completed</label><p class="notes-helper">Only check after completing the lesson and practice.</p><div class="divider"></div><div class="aside-head">Next action</div><p><a href="#/workspace" style="color:var(--accent)">Open your workspace →</a></p></div><div class="panel" style="margin-top:14px"><div class="aside-head">Key terms</div><div class="data-list" style="margin-top:12px">${packet.glossary.slice(0,5).map(z=>`<div><strong style="font-size:12px;color:var(--accent)">${esc(z[0])}</strong><p style="font-size:12px;margin:3px 0">${esc(z[1])}</p></div>`).join('')}</div></div></aside></div>`;
  }
  function assessment(w,packet) {
    if(!packet) return `<div class="not-ready"><div class="eyebrow">FUTURE ASSESSMENT</div><h3>Week ${w.id}: assessment not yet published</h3><p>The full original question bank, answer explanations and marking rubric will be added with the lesson packet. Planned scope: ${esc(w.scope)}.</p></div>`;
    const saved=progress.quizResults[w.id];
    const review=saved && !ui.retaking[w.id];
    const draft = review ? (saved.answers||{}) : (ui.quizDraft[w.id]||{});
    const total=packet.quiz.length;
    return `<section><div class="quiz-intro"><strong>${w.id===1?'20-question baseline diagnostic':'Knowledge checkpoint'}</strong> · ${total} original questions · 80% mastery target. ${review?`Last score: ${saved.lastScore}/${total}. Best: ${saved.bestScore}/${total}.`:'Choose one answer for every question, then submit to see explanations.'}</div>
    ${review?`<div class="panel" style="margin-bottom:16px"><div class="quiz-score">${Math.round(saved.lastScore/saved.total*100)}% · ${saved.lastScore} / ${saved.total}</div><p>${saved.lastScore/saved.total>=.8?'Mastery target met for this attempt.':'Review the explanations, revisit the lessons and retry.'}</p><button class="btn btn-outline btn-small" data-retake="${w.id}">Retake assessment</button></div>`:''}
    <form id="quiz-form" data-quiz-week="${w.id}">${packet.quiz.map((q,i)=>`<fieldset class="question-card" style="min-width:0" ${review?'disabled':''}><legend class="question-head">QUESTION ${i+1} / ${total}</legend><h3>${esc(q.prompt)}</h3>${q.choices.map((a,j)=>{const checked=Number(draft[i])===j&&Object.prototype.hasOwnProperty.call(draft,String(i));const k=review&&(j===q.answer?'correct':checked&&j!==q.answer?'incorrect':'');return `<label class="answer ${k}"><input type="radio" name="question-${i}" value="${j}" data-quiz-answer="${i}" ${checked?'checked':''}><span>${esc(a)}</span></label>`;}).join('')}${review?`<div class="explanation"><strong>${Number(saved.answers?.[i])===q.answer?'✓ Correct.':'Review:'}</strong> ${esc(q.explanation)}</div>`:''}</fieldset>`).join('')}${review?'':`<button class="btn btn-primary" type="submit">Submit ${total} answers and show results →</button>`}</form></section>`;
  }
  function workspace() {
    const complete=countComplete();const quizKeys=Object.keys(progress.quizResults);
    const notes=course.weeks.flatMap(w=>w.classes.map(c=>({...c,week:w.id}))).filter(c=>!!progress.notes[c.id]?.trim());
    return `<div class="eyebrow">PRIVATE STUDENT SPACE</div><h1 class="page-title">Your work. Your progress.</h1><p class="lead">Every completed class, checked lab step, note and graded quiz is kept in your current browser. Export a backup to move your work from a laptop to a phone or vice versa.</p>
    <div class="stats">${stat(`${complete}/144`,'Classes complete')}${stat(quizKeys.length,'Weeks assessed')}${stat(notes.length,'Notes saved')}${stat(Object.values(progress.labSteps).filter(Boolean).length,'Lab steps checked')}</div>
    <section class="panel"><h3>Carry your progress between devices</h3><p style="font-size:13px">No account is required. Export downloads a JSON progress file; import replaces this device's stored progress with that file. Do not include secret credentials in lesson notes.</p><div class="workspace-actions"><button type="button" class="btn btn-primary" id="export-progress">↓ Export progress</button><button type="button" class="btn btn-outline" id="import-progress">↑ Import progress</button><button type="button" class="btn btn-quiet" id="reset-progress">Reset this device</button></div><div class="notice">GitHub Pages alone does not synchronize learner records automatically. Export from one device and import on another; an optional private account and backend can be added later.</div></section>
    <div class="section-heading"><div><h2>Assessment record</h2><p>Scores are study tools, not third-party credentials.</p></div></div><section class="data-list">${quizKeys.length?quizKeys.sort((a,b)=>Number(a)-Number(b)).map(id=>{const result=progress.quizResults[id];const pct=Math.round(result.bestScore/result.total*100);return `<div class="data-row"><span><strong>Week ${id}</strong><br><small>Best score · ${result.bestScore}/${result.total}</small></span><span>${pct}% · <a href="#/week/${id}" style="color:var(--accent)">Review →</a></span></div>`;}).join(''):'<div class="empty">No quizzes taken yet. Start Week 1 to establish your baseline.</div>'}</section>
    <div class="section-heading"><div><h2>My saved notes</h2><p>Your notes appear here after you write them in a published classroom.</p></div></div><section class="data-list">${notes.length?notes.map(c=>`<div class="data-row"><span><strong>Week ${c.week} · Class ${c.id}</strong><br><small>${esc(c.day)} · ${esc(c.title)}</small><br><small>${esc(progress.notes[c.id].slice(0,130))}${progress.notes[c.id].length>130?'…':''}</small></span><a href="#/week/${c.week}" style="color:var(--accent);white-space:nowrap">Open →</a></div>`).join(''):'<div class="empty">No learning notes saved yet.</div>'}</section>`;
  }
  function projects() {
    return `<div class="eyebrow">BUILD A REAL PORTFOLIO</div><h1 class="page-title">Six projects. One strong story.</h1><p class="lead">These projects develop technical evidence, written analysis and leadership communication, with a special focus on defensive systems in warehouse and distribution environments. Full project packets will be published during later course development.</p><section class="project-list">${course.projects.map(p=>`<article class="project-card"><span class="project-num">PROJECT ${String(p.id).padStart(2,'0')} · WEEKS ${esc(p.weeks)}</span><h3>${esc(p.title)}</h3><p>${esc(p.result)}.</p><footer><span>Course blueprint · forthcoming project kit</span><a href="#/curriculum" style="color:var(--accent)">View roadmap →</a></footer></article>`).join('')}</section><div class="notice">Only perform tests within your own or explicitly authorized labs. Use synthetic data and avoid uploading work systems, customer records or secrets.</div>`;
  }
  function about() {
    return `<div class="eyebrow">THE ACADEMY HANDBOOK</div><h1 class="page-title">Made for learning, not hunting for links.</h1><p class="lead">Cyber Upgrade is an original, progressively authored cybersecurity course. The entire nine-month schedule is mapped; the initial interactive pilot contains Weeks 1–4, with explanations, labs, notes and quizzes. Later weeks remain course outlines until their lessons are written.</p>
    <div class="section-heading"><div><h2>Your weekly rhythm</h2><p>Twenty planned hours each week; you control the exact study times.</p></div></div><section class="steps"><div><strong>Tuesday · Theory and examples (5h planned)</strong><br>Study the concepts, vocabulary and worked examples. Take notes before opening the lab.</div><div><strong>Wednesday · Technical laboratory (5h planned)</strong><br>Follow guided steps in an isolated environment, using real results and screenshots.</div><div><strong>Thursday · Applied problem or project (5h planned)</strong><br>Investigate, verify and document your own evidence. Never use a production target without permission.</div><div><strong>Friday · Review, communication and quiz (5h planned)</strong><br>Submit a deliverable, take the assessment and explain your findings in plain language.</div></section>
    <div class="section-heading"><div><h2>Using this on both devices</h2></div></div><section class="panel"><h3>Publish once and open in any browser</h3><p>Upload the complete project to a GitHub repository and enable GitHub Pages using <span class="code">main / (root)</span>. The website will have a public HTTPS link that opens on mobile and desktop. Your class data and course files are hosted by GitHub; your personal notes and scores stay in your own browser.</p><p>Use <strong>My workspace → Export progress</strong> to download a file, then <strong>Import progress</strong> on the second device. The import replaces current device records. There is no student login or shared gradebook in this version.</p></section>
    <div class="section-heading"><div><h2>What this release contains</h2></div></div><section class="features-grid"><div class="feature"><div class="feature-icon">✓</div><h3>Live now</h3><p>Responsive website, all 36 week plans, 16 original class lessons, lab steps, 50 practice questions, notes and progress backup.</p></div><div class="feature"><div class="feature-icon">⋯</div><h3>To author next</h3><p>Weeks 5–36 teaching packets, downloadable lab datasets, independent capstone rubrics and full mock certification exams.</p></div><div class="feature"><div class="feature-icon">▣</div><h3>Optional future upgrade</h3><p>Student accounts, cloud sync, instructor feedback, grading and restricted access require additional services and configuration.</p></div></section>`;
  }
  function handleNavigation() {
    ui.day = 'Tuesday';
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('mobile-overlay').hidden = true;
    document.getElementById('menu-toggle').setAttribute('aria-expanded','false');
    render(); window.scrollTo(0,0);
  }
  function downloadProgress() {
    const json=JSON.stringify({ format:'cyber-upgrade-progress',version:1,exportedAt:new Date().toISOString(),course:'Cyber Upgrade',progress },null,2);
    const file=new Blob([json],{type:'application/json'}),url=URL.createObjectURL(file),a=document.createElement('a');
    a.href=url;a.download='cyber-upgrade-my-progress.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Progress exported. Keep that file private.');
  }
  function restoreProgress(contents) {
    const parsed=JSON.parse(contents);
    if (parsed.format!=='cyber-upgrade-progress'||parsed.version!==1||!isRecord(parsed.progress)) throw new Error('This is not a Cyber Upgrade progress export.');
    const p=parsed.progress;
    if (![p.completed,p.notes,p.quizResults,p.labSteps].every(isRecord)) throw new Error('Export file is missing required progress records.');
    const validClasses=new Set(course.weeks.flatMap(w=>w.classes.map(c=>c.id)));
    const completed={};for(const [id,v] of Object.entries(p.completed)){if(validClasses.has(id)&&v===true)completed[id]=true;}
    const notes={};for(const [id,v] of Object.entries(p.notes)){if(validClasses.has(id)&&typeof v==='string')notes[id]=v.slice(0,15000);}
    const labs={};for(const [id,v] of Object.entries(p.labSteps)){if(/^\d{1,3}-\d{1,2}$/.test(id)&&v===true)labs[id]=true;}
    const quizResults={};for(const [id,q] of Object.entries(p.quizResults)){const quiz=packets[id]?.quiz;if(!quiz||!isRecord(q))continue;const max=quiz.length;if(Number.isInteger(q.lastScore)&&Number.isInteger(q.bestScore)&&n(q.total)===max&&q.lastScore>=0&&q.lastScore<=max&&q.bestScore>=q.lastScore&&q.bestScore<=max&&isRecord(q.answers)){const answers={};for(const [k,a] of Object.entries(q.answers)){if(/^\d+$/.test(k)&&Number(k)<max&&Number.isInteger(a)&&a>=0&&a<quiz[Number(k)].choices.length)answers[k]=a;}quizResults[id]={answers,lastScore:q.lastScore,bestScore:q.bestScore,total:max};}}
    if(!window.confirm('Import this file and REPLACE all progress currently saved on this device?'))return;
    progress={completed,notes,quizResults,labSteps:labs};save();ui.quizDraft={};ui.retaking={};render();toast('Progress imported successfully.');
  }
  document.addEventListener('click',event=>{
    const t=event.target;
    if(t.closest('#menu-toggle')) {const s=document.getElementById('sidebar');const opened=s.classList.toggle('open');document.getElementById('mobile-overlay').hidden=!opened;document.getElementById('menu-toggle').setAttribute('aria-expanded',String(opened));return;}
    if(t.closest('#mobile-overlay')){document.getElementById('sidebar').classList.remove('open');document.getElementById('mobile-overlay').hidden=true;document.getElementById('menu-toggle').setAttribute('aria-expanded','false');return;}
    if(t.closest('#help-button')){location.hash='#/about';return;}
    const day=t.closest('[data-day]');if(day){ui.day=day.dataset.day;render();root.focus({preventScroll:true});return;}
    const filter=t.closest('[data-filter]');if(filter){ui.filter=filter.dataset.filter;render();return;}
    const copy=t.closest('[data-copy]');if(copy){const c=copy.dataset.copy;const text=Object.values(packets).map(p=>p.lessons?.[c]?.example?.code).find(Boolean);
      if(text){if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(()=>toast('Example copied.')).catch(()=>toast('Copy was blocked by this browser.'));else toast('Your browser cannot copy automatically here.');}return;}
    const retake=t.closest('[data-retake]');if(retake){ui.retaking[retake.dataset.retake]=true;ui.quizDraft[retake.dataset.retake]={};render();return;}
    if(t.closest('#export-progress')){downloadProgress();return;}
    if(t.closest('#import-progress')){document.getElementById('import-file').click();return;}
    if(t.closest('#reset-progress')){if(window.confirm('Erase ALL local Cyber Upgrade notes, quiz results and checkmarks on this device? Please export first if you want a backup.')){progress=defaults();save();ui.quizDraft={};ui.retaking={};render();toast('Local progress cleared.');}return;}
  });
  document.addEventListener('change',event=>{
    const t=event.target;
    if(t.matches('[data-complete]')){progress.completed[t.dataset.complete]=t.checked;save();toast(t.checked?'Class recorded as complete.':'Class marked incomplete.');return;}
    if(t.matches('[data-lab-check]')){progress.labSteps[t.dataset.labCheck]=t.checked;save();const count=t.closest('.panel')?.querySelector('.tagline');if(count){const total=t.closest('.task-list')?.querySelectorAll('[data-lab-check]').length||0;const done=t.closest('.task-list')?.querySelectorAll('[data-lab-check]:checked').length||0;count.textContent=`${done} of ${total} lab steps checked. These checkboxes save automatically on this device.`;}return;}
    if(t.matches('[data-quiz-answer]')){const week=route().week;ui.quizDraft[week] ||= {};ui.quizDraft[week][t.dataset.quizAnswer]=Number(t.value);return;}
    if(t.id==='import-file'){const file=t.files?.[0];if(!file)return;if(file.size>2*1024*1024){toast('That file is too large for a progress backup.');t.value='';return;}const reader=new FileReader();reader.onload=()=>{try{restoreProgress(reader.result);}catch(err){toast(err.message||'Could not import progress.');}t.value='';};reader.onerror=()=>toast('Could not read that file.');reader.readAsText(file);}
  });
  document.addEventListener('input',event=>{
    const t=event.target;
    if(t.matches('[data-note]')) {progress.notes[t.dataset.note]=t.value.slice(0,15000);save();return;}
    if(t.id==='catalog-search'){ui.search=t.value;const pos=t.selectionStart;render();const el=document.getElementById('catalog-search');if(el){el.focus();el.setSelectionRange(pos,pos);}}
  });
  document.addEventListener('submit',event=>{
    const form=event.target.closest('#quiz-form');if(!form)return;event.preventDefault();const id=n(form.dataset.quizWeek),packet=packets[id],answer=ui.quizDraft[id]||{},qs=packet?.quiz||[];
    if(Object.keys(answer).length!==qs.length){toast(`Answer all ${qs.length} questions before submitting.`);return;}
    const score=qs.reduce((a,q,i)=>a+(Number(answer[i])===q.answer?1:0),0);
    const best=Math.max(score,progress.quizResults[id]?.bestScore||0);
    progress.quizResults[id]={lastScore:score,bestScore:best,total:qs.length,answers:{...answer}};
    save();ui.retaking[id]=false;render();window.scrollTo({top:0,behavior:'smooth'});toast(`Assessment scored: ${score}/${qs.length}.`);
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.getElementById('sidebar').classList.remove('open');document.getElementById('mobile-overlay').hidden=true;document.getElementById('menu-toggle').setAttribute('aria-expanded','false');}});
  window.addEventListener('hashchange',handleNavigation);
  if('serviceWorker' in navigator && location.protocol==='https:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
  render();
})();
