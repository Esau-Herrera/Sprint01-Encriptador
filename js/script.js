function encriptar() {
  let texto = document.querySelector(".text-area").value;
  let textoEncriptado = texto.replaceAll(
    /e|é|i|í|a|á|o|ó|u|ú|ü/gm,
    function (coincide) {
      switch (coincide) {
        case "e":
          return "enter";
        case "é":
          return "enter";
        case "i":
          return "imes";
        case "í":
          return "imes";
        case "a":
          return "ai";
        case "á":
          return "ai";
        case "o":
          return "ober";
        case "ó":
          return "ober";
        case "u":
          return "ufat";
        case "ú":
          return "ufat";
        case "ü":
          return "ufat";
      }
    }
  );
  document.querySelector(".mensaje").textContent = textoEncriptado;
  visuales();
}

function desencriptar() {
  let texto = document.querySelector(".text-area").value;
  let textoDesencriptado = texto.replace(
    /enter|imes|ai|ober|ufat/gm,
    function (coincide) {
      switch (coincide) {
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ai":
          return "a";
        case "ober":
          return "o";
        case "ufat":
          return "u";
      }
    }
  );
  document.querySelector(".mensaje").textContent = textoDesencriptado;
  visuales();
}

async function copiarTexto() {
  let texto = document.querySelector(".mensaje").textContent;
  await navigator.clipboard.writeText(texto);
}

function limpiar() {
  document.querySelector(".mensaje").textContent = "";
  document.querySelector(".mensaje").classList.remove("ocultar-bg");
  quitarBotones();
}

function visuales() {
  document.querySelector(".mensaje").classList.add("ocultar-bg");
  document.querySelector(".text-area").value = "";
  document.querySelector("#copiar").style.display = "block";
  document.querySelector("#limpiar").style.display = "block";
}

function quitarBotones() {
  document.querySelector("#copiar").style.display = "none";
  document.querySelector("#limpiar").style.display = "none";
}
