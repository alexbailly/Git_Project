let kiwi = {
  nom: "kiwi",
  poids: "100g",
  vitamines: "C, B, E"
};
let citron = {
  nom: "citron",
  poids: "300g",
  vitamines: "C"
};
function htmlFruit(data) {
  return `<li>Le ${data.nom} pèse ${data.poids} et contient des vitamines ${data.vitamines}</li>`;
}
document.querySelector('.js-fruits').innerHTML += htmlFruit(kiwi) + htmlFruit(citron);
