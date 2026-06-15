
// SKILLS


const skills = [

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


// PROJETOS

const projetos = [

{
nome:"Gerador de Senhas",

descricao:
"Gerador de senhas seguras com interface moderna.",

github:
"https://github.com/K4KU-TYO/Gerador-de-senhas",

site:
"https://k4ku-tyo.github.io/Gerador-de-senhas/"
},

{
nome:"Cripto/Descript",

descricao:
"Ferramenta para criptografia e descriptografia de textos.",

github:
"https://github.com/K4KU-TYO/Cript-Descript",

site:
"https://k4ku-tyo.github.io/Cript-Descript/"
}

];

//  MOBILE

const mobileBtn =
document.querySelector(".mobile-btn");

const navLinks =
document.querySelector(".nav-links");

mobileBtn.onclick = () => {

navLinks.classList.toggle(
"active"
);

};

// EFEITO

const palavras = [

"Desenvolvedor Web",
"Cibersegurança",
"Hardware Hacking"

];

let palavraAtual = 0;
let letraAtual = 0;

function digitar() {

const elemento =
document.querySelector("#typing");

if (
letraAtual <
palavras[palavraAtual].length
) {

elemento.innerHTML +=
palavras[palavraAtual]
.charAt(letraAtual);

letraAtual++;

setTimeout(
digitar,
100
);

}
else {

setTimeout(
apagar,
1500
);

}

}

function apagar() {

const elemento =
document.querySelector("#typing");

if (letraAtual > 0) {

elemento.innerHTML =
palavras[palavraAtual]
.substring(
0,
letraAtual - 1
);

letraAtual--;

setTimeout(
apagar,
50
);

}
else {

palavraAtual =
(palavraAtual + 1)
%
palavras.length;

digitar();

}

}

digitar();


// SKILLS 

const skillsContainer =
document.querySelector(
"#skillsContainer"
);

skills.forEach(skill => {

skillsContainer.innerHTML += `

<div class="skill">

<div class="skill-header">

<span>${skill.nome}</span>

<span>${skill.nivel}%</span>

</div>

<div class="barra">

<div
class="progresso"
data-width="${skill.nivel}"
style="background:${skill.cor}">
</div>

</div>

</div>

`;

});


// ANIMAÇÃO DAS BARRAS

const barras =
document.querySelectorAll(
".progresso"
);

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if (
entry.isIntersecting
) {

entry.target.style.width =
entry.target.dataset.width
+ "%";

}

});

}
);

barras.forEach(barra => {

observer.observe(barra);

});

// PROJETOS

const cards =
document.querySelector(
".cards"
);

projetos.forEach(projeto => {

cards.innerHTML += `

<div class="card">

<h2>${projeto.nome}</h2>

<br>

<p>
${projeto.descricao}
</p>

<a
class="btn"
target="_blank"
href="${projeto.github}">
Ver Código
</a>

<a
class="btn secondary"
target="_blank"
href="${projeto.site}">
Abrir Site
</a>

</div>

`;

});


// BOTÃO TOPO

const topBtn =
document.querySelector(
"#topBtn"
);

window.addEventListener(
"scroll",
() => {

topBtn.style.display =
window.scrollY > 300
?
"block"
:
"none";

}
);

topBtn.onclick = () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// MENSAGEM DE SUCESSO
// FORMULÁRIO

const formulario =
document.querySelector("form");

if(formulario){

formulario.addEventListener(
"submit",
function(){

alert(
"Mensagem enviada! Verifique seu e-mail para confirmar o envio caso seja a primeira vez usando o FormSubmit."
);

}
);

}

// ANO ATUAL

console.log(
"Portfólio carregado em " +
new Date().getFullYear()
);
