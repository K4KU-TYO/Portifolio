const skills=[

{
nome:"HTML",
nivel:80,
cor:"#ff4444"
},

{
nome:"CSS",
nivel:40,
cor:"#ffaa00"
},

{
nome:"Python",
nivel:50,
cor:"#00aaff"
},

{
nome:"JavaScript",
nivel:50,
cor:"#ffd700"
},

{
nome:".BAT",
nivel:75,
cor:"#aa00ff"
},

{
nome:".SH",
nivel:60,
cor:"#00ff88"
}

];


const projetos=[

{

nome:"Gerador de Senhas",

descricao:
"Gerador de senhas seguras",

github:
"https://github.com/K4KU-TYO/Gerador-de-senhas",

site:
"  https://k4ku-tyo.github.io/Gerador-de-senhas/"

},

{

nome:"Cripto/Descript",

descricao:
"Ferramenta de criptografia e descriptografia de senhas",

github:
"https://github.com/K4KU-TYO/Cript-Descript",

site:
"https://k4ku-tyo.github.io/Cript-Descript/"

}

];


// menu

document
.querySelector(".mobile-btn")
.onclick=()=>{

document
.querySelector(".nav-links")
.classList.toggle(
"active"
);

};


// typing

const palavras=[
"Desenvolvedor Web",
"Cibersegurança",
"Hardware Hacking"
];

let p=0;
let l=0;

function digitar(){

const el=
document.querySelector(
"#typing"
);

if(
l<
palavras[p].length
){

el.innerHTML+=
palavras[p]
.charAt(l);

l++;

setTimeout(
digitar,
100
);

}else{

setTimeout(
apagar,
1500
);

}

}

function apagar(){

const el=
document.querySelector(
"#typing"
);

if(l>0){

el.innerHTML=
palavras[p]
.substring(
0,
l-1
);

l--;

setTimeout(
apagar,
50
);

}else{

p=(p+1)
%palavras.length;

digitar();

}

}

digitar();


// skills

const container=
document.querySelector(
"#skillsContainer"
);

skills.forEach(s=>{

container.innerHTML+=`

<div class="skill">

<div class="skill-header">

<span>${s.nome}</span>

<span>${s.nivel}%</span>

</div>

<div class="barra">

<div
class="progresso"
data-width="${s.nivel}"
style="background:${s.cor}">

</div>

</div>

</div>

`;

});


const barras=
document.querySelectorAll(
".progresso"
);

const obs=
new IntersectionObserver(
(entries)=>{

entries.forEach(
e=>{

if(
e.isIntersecting
){

e.target.style.width=
e.target.dataset.width+"%";

}

});

});

barras.forEach(
b=>obs.observe(b)
);


// projetos

const cards=
document.querySelector(
".cards"
);

projetos.forEach(p=>{

cards.innerHTML+=`

<div class="card">

<h2>${p.nome}</h2>

<p>${p.descricao}</p>

<a
class="btn"
target="_blank"
href="${p.github}">

Ver Código

</a>

<a
class="btn secondary"
target="_blank"
href="${p.site}">

Abrir Site

</a>

</div>

`;

});


// topo

const topBtn=
document.querySelector(
"#topBtn"
);

window.addEventListener(
"scroll",
()=>{

topBtn.style.display=
window.scrollY>300
?
"block"
:
"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};
