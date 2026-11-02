const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
const base=path.resolve(__dirname,'..');
const sandbox={window:{}};vm.createContext(sandbox);
for (const file of ['data/course.js','data/lessons.js'])vm.runInContext(fs.readFileSync(path.join(base,file),'utf8'),sandbox,{filename:file});
const {CYBER_COURSE:C,CYBER_LESSONS:L}=sandbox.window;
assert.equal(C.meta.weeks,36);assert.equal(C.weeks.length,36);
assert.equal(C.months.length,9);assert.equal(C.meta.classes,144);
assert.equal(C.weeks.reduce((a,w)=>a+w.classes.length,0),144);
assert.deepEqual([...C.weeks.map(w=>w.id)],[...Array(36)].map((_,i)=>i+1));
const ids=new Set();
for(const w of C.weeks){
  assert.equal(w.month,Math.ceil(w.id/4));assert.equal(w.classes.length,4);
  assert.deepEqual([...w.classes.map(c=>c.day)],['Tuesday','Wednesday','Thursday','Friday']);
  w.classes.forEach(c=>{assert.ok(!ids.has(c.id),'Duplicate class ID '+c.id);ids.add(c.id);});
  const p=L.weeks[w.id];
  if(!p)continue;
  assert.equal(Object.keys(p.lessons).length,4,'Need four authored classes for week '+w.id);
  for(const c of w.classes){const u=p.lessons[c.id];assert.ok(u,'Missing lesson class '+c.id);assert.ok(u.concepts.length>=2);assert.ok(u.steps.length>=3);}
  assert.ok(p.quiz.length>=10,'Question count too short');
  p.quiz.forEach(q=>{assert.ok(q.prompt&&q.explanation);assert.ok(q.choices.length>=2);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length);});
}
const quizzes=Object.values(L.weeks).reduce((n,p)=>n+p.quiz.length,0);
console.log(`PASS: ${C.weeks.length} weeks, ${ids.size} classes, ${Object.keys(L.weeks).length} complete pilot weeks, ${quizzes} quiz questions.`);
