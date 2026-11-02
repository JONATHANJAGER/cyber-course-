/* DOM-light automated smoke test. For full visual QA, open the site in Chrome/Firefox. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('node:assert/strict');
const base=path.resolve(__dirname,'..');
const load=f=>fs.readFileSync(path.join(base,f),'utf8');
const memory=new Map(),listeners={};
function makeElement(){return {innerHTML:'',textContent:'',hidden:false,attrs:{},classList:{contains(){return false;},add(){},remove(){},toggle(){return true;}},setAttribute(a,b){this.attrs[a]=b;},focus(){},scrollTo(){}};}
let elements={};
const document={
 getElementById:id=>(elements[id]??=makeElement()),
 querySelectorAll(){return []},
 addEventListener(evt,callback){listeners[evt]=callback},
 createElement(){return makeElement()},
 body:{appendChild(){}},
};
const localStorage={getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v)};
const loc={hash:'#/dashboard',protocol:'file:'};
const win={location:loc,addEventListener(evt,fn){listeners[evt]=fn;},scrollTo(){},confirm(){return true;}};
const ctx={window:win,document,localStorage,location:loc,console,Number,Object,Array,String,Math,JSON,setTimeout(){return 1;},clearTimeout(){},navigator:{},URL,Blob};
vm.createContext(ctx);
['data/course.js','data/lessons.js','assets/app.js'].forEach(f=>vm.runInContext(load(f),ctx,{filename:f}));
const root=document.getElementById('main-content');
assert.match(root.innerHTML,/Learn the craft/);
function nav(hash){loc.hash=hash;listeners.hashchange();}
nav('#/curriculum');assert.equal((root.innerHTML.match(/class="week-card"/g)||[]).length,36);
nav('#/week/1');assert.match(root.innerHTML,/Learn the concept/);assert.match(root.innerHTML,/authori[sz]ed/i);
listeners.change({target:{matches:s=>s==='[data-complete]',dataset:{complete:'1'},checked:true}});
listeners.input({target:{matches:s=>s==='[data-note]',dataset:{note:'1'},value:'Authorized lab only.'}});
nav('#/workspace');assert.match(root.innerHTML,/1\/144/);assert.match(root.innerHTML,/Authorized lab only/);
nav('#/week/5');assert.match(root.innerHTML,/Full lesson not yet published/);assert.doesNotMatch(root.innerHTML,/data-complete=/);
nav('#/week/1');
listeners.click({target:{closest:s=>s==='[data-day]'?{dataset:{day:'Assessment'}}:null}});
assert.equal((root.innerHTML.match(/class="question-card"/g)||[]).length,20);
const quiz=win.CYBER_LESSONS.weeks[1].quiz;
quiz.forEach((q,i)=>listeners.change({target:{matches:s=>s==='[data-quiz-answer]',dataset:{quizAnswer:String(i)},value:String(q.answer)}}));
listeners.submit({target:{closest:s=>s==='#quiz-form'?{dataset:{quizWeek:'1'}}:null},preventDefault(){}});
assert.match(root.innerHTML,/100% · 20 \/ 20/);
nav('#/workspace');assert.match(root.innerHTML,/Week 1/);
console.log('PASS runtime smoke: rendered dashboard, 36-week catalog, pilot class, local notes/progress, outline guard, 20-question quiz grading.');
