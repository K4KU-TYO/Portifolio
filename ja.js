// =====================
// FORMULÁRIO
// =====================

document.addEventListener(
"DOMContentLoaded",
() => {

const form =
document.querySelector(
"#contatoForm"
);

const mensagem =
document.querySelector(
"#mensagem"
);

if(!form || !mensagem){
return;
}

form.addEventListener(
"submit",
(event) => {

event.preventDefault();

const nome =
document.querySelector("#nome")
.value
.trim();

const email =
document.querySelector("#email")
.value
.trim();

const assunto =
document.querySelector("#assunto")
.value
.trim();

const texto =
document.querySelector("#mensagemTexto")
.value
.trim();

if(nome.length < 3){

mensagem.textContent =
"Nome deve possuir pelo menos 3 caracteres.";

mensagem.style.color =
"orange";

return;

}

const regexEmail =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regexEmail.test(email)){

mensagem.textContent =
"Email inválido.";

mensagem.style.color =
"#ff4444";

return;

}

if(assunto.length < 3){

mensagem.textContent =
"O assunto deve possuir pelo menos 3 caracteres.";

mensagem.style.color =
"#ff4444";

return;

}

if(texto.length < 10){

mensagem.textContent =
"A mensagem deve possuir pelo menos 10 caracteres.";

mensagem.style.color =
"#ff4444";

return;

}

mensagem.textContent =
`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`;

mensagem.style.color =
"#00ff88";

form.reset();

}
);

}
);
