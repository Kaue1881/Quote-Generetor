const quote = document.querySelector("#quote");
const person = document.querySelector("#person");
const btnGerar = document.querySelector("#GerarNota");

const notas = [
  { nota: "Conhece-te a ti mesmo.", autor: "Sócrates" },
  { nota: "Penso, logo existo.", autor: "René Descartes" },
  {
    nota: "A vida sem reflexão não vale a pena ser vivida.",
    autor: "Sócrates",
  },
  { nota: "O homem é a medida de todas as coisas.", autor: "Protágoras" },
  {
    nota: "Liberdade é a consciência da necessidade.",
    autor: "Friedrich Engels",
  },
  { nota: "A felicidade é um estado de espírito.", autor: "Aristóteles" },
  { nota: "Ser é ser percebido.", autor: "George Berkeley" },
  { nota: "A dúvida é o princípio da sabedoria.", autor: "Aristóteles" },
  { nota: "Tudo flui, nada permanece.", autor: "Heráclito" },
  { nota: "O inferno são os outros.", autor: "Jean-Paul Sartre" },
];

btnGerar.addEventListener("click", function () {
  const aleatorio = Math.floor(Math.random() * notas.length);

  quote.innerText = notas[aleatorio].nota;
  person.innerText = notas[aleatorio].autor;
});
