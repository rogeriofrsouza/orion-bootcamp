import"./modulepreload-polyfill-3cfb730f.js";const n=[{id:1,nome:"Ada Lovelace",bio:"Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},{id:2,nome:"Alan Turing",bio:"Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},{id:3,nome:"Nikola Tesla",bio:"Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},{id:4,nome:"Nicolau Copérnico",bio:"Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}],p=(e,a)=>e.forEach(o=>{const t=document.createElement("li");t.textContent=`${o.id}. ${o.nome}`,a.appendChild(t)}),f=(e,a)=>a.find(o=>o.id===e),E=(e,a,o)=>{var t;return(t=o(e,a))==null?void 0:t.bio},g=(e,a,o)=>{var t;return(t=o(e,a))==null?void 0:t.nome},C=(e,a)=>a.filter(o=>o.id!==e),b=(e,a,o,t)=>a.map(u=>u.id===e?{id:e,nome:o,bio:t}:u);let i=document.createElement("h2"),r=document.createElement("p"),c=document.createElement("p"),m=document.createElement("p"),d=document.createElement("p"),l=document.createElement("ul");i.textContent="1. Demonstração funcional";r.textContent=`a) ${E(2,n,f)}`;c.textContent=`b) ${g(2,n,f)}`;let s=C(4,n);m.textContent="c) Pessoa 4 removida";s=b(3,s,"Brendan Eich","Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation");d.textContent="d) Pessoa 3 alterada. Lista atualizada:";p(s,l);document.body.append(i,r,c,m,d,l);function v(e){return n[e-1].bio}function h(e){return n[e-1].nome}function x(e){n.splice(e-1,1)}function P(e,a,o){n[e-1].nome=a,n[e-1].bio=o}i=document.createElement("h2");r=document.createElement("p");c=document.createElement("p");m=document.createElement("p");d=document.createElement("p");l=document.createElement("ul");i.textContent="2. Demonstração imperativo";r.textContent=`a) ${v(1)}`;c.textContent=`b) ${h(1)}`;x(2);m.textContent="c) Pessoa 2 removida.";P(1,"Brendan Eich","Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation");d.textContent="d) Pessoa 1 alterada. Lista atualizada:";p(n,l);document.body.append(i,r,c,m,d,l);
