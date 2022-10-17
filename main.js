// Primera parte //
const img = document.querySelector("#img");

img.addEventListener("click", () => {
  img.classList.toggle("borde");
});

// SEGUNDA PARTE

const primerSticker = document.querySelector("#primerSticker");
const segundoSticker = document.querySelector("#segundoSticker");
const tercerSticker = document.querySelector("#tercerSticker");
const tituloo = document.querySelector("#tituloo");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

tituloo.textContent = "Puedes Llevar hasta 10 stickers en Total";

btn.addEventListener("click", () => {
  let resultado =
    parseInt(primerSticker.value) +
    parseInt(segundoSticker.value) +
    parseInt(tercerSticker.value);
  if (resultado <= 10) {
    tituloo.textContent = "Llevas " + resultado + " Stickers";
  } else {
    tituloo.textContent =
      "No puedes llevar mas de 10 stickers, tienes " + resultado + " agregados";
  }
});

// TERCERA PARTE
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const btnVerificar = document.querySelector("#btnVerificar");

const Pase = document.querySelector("#Pase");

btnVerificar.addEventListener("click", () => {
  if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
    Pase.textContent = "Password 1 Correcto";
  } else {
    Pase.textContent = "Password Incorrecto";
  }

  if (select1.value == 7 && select2.value == 1 && select3.value == 4) {
    Pase.textContent = "Password 2 Correcto";
  }
});
