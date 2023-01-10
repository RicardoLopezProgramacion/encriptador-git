let text = document.getElementById("text");
let encriptar = document.getElementById("encriptar");
let textarea = document.getElementById("textarea");
let copiar = document.getElementById("copiar");
let desencriptar = document.getElementById("desencriptar");
let imagen = document.getElementById("muñeco");
let h1 = document.getElementById("h1");
let p = document.getElementById("p");
let div_textarea2 = document.getElementById("div-textarea2");
let a_encriptador = document.getElementById("a-encriptar");
let buttonTheme = document.getElementById("theme");
let bodyContent = document.querySelector("body");
let vector = document.getElementById("vector");
let span = document.getElementById("span");
let logo = document.getElementById("logo");
let ul_redes = document.getElementById("ul-redes");
let aside = document.getElementById("aside");
let link = document.getElementsByClassName("link");
let link_a = document.getElementById("link");
let a, e, i, o, u;

let x = text.value;
let guardar;

//x = unset
//y = none
//a = flex
//b = center

function flex(a) {
  div_textarea2.style.display = a;
  div_textarea2.style.justifyContent = "center";
  div_textarea2.style.alignItems = "center";
}

window.addEventListener("resize", ()=> {
  if(window.innerWidth >= 810){
    imagen.style.display = "flex";
  }else{
    imagen.style.display = "none";
  }
});

function datos(x, y) {
  copiar.style.display = x;
  textarea.style.display = x;
  if(window.innerWidth >= 810){
    imagen.style.display = y;
  }
  h1.style.display = y;
  p.style.display = y;
  // redes.style.top = "15px";
}

function encriptado(E,I,A,O,U,ENTER,IMES,AI,OBER,UFAT) {
  if (text.value != "") {
    a_encriptador.href="#copiar";
    datos("unset", "none");
    flex("flex");
    for (let i = 0; i < text.value.length; i++) {
      if (
        text.value[i] == "a" ||
        text.value[i] == "e" ||
        text.value[i] == "i" ||
        text.value[i] == "o" ||
        text.value[i] == "u"
      ) {
        e = text.value.replace(E, ENTER);
        i = e.replace(I, IMES);
        a = i.replace(A, AI);
        o = a.replace(O, OBER);
        u = o.replace(U, UFAT);
        textarea.innerHTML = u;
      } else {
        textarea.innerHTML = text.value;
      }
    }
    div_textarea2.style.background = "#fff";
  } else {
    a_encriptador.href="#aside-div";
    datos("none", "unset");
    flex("none");
  }
  
}

encriptar.addEventListener("click", () => 
encriptado(/e/g,/i/g,/a/g,/o/g,/u/g,"enter","imes","ai","ober","ufat"));

copiar.addEventListener("click", () =>
  navigator.clipboard.writeText(textarea.value)
);

desencriptar.addEventListener("click", () => 
encriptado(/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g,"e","i","a","o","u"));

function estilos(color,border,background,svg){
  desencriptar.style.color = color;
  desencriptar.style.border = border;
  bodyContent.style.background = background;
  text.style.color = color;
  logo.src = svg;
}

let theme = false;

buttonTheme.addEventListener("click", () => {
  switch (theme) {
    case false:
      theme = true;
      buttonTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      estilos("#fff","1px #fff solid","#333","IMG/Vector2.svg");
      break;
    case true:
      theme = false;
      buttonTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      estilos("#0a3871","1px #072861 solid","#f3f5fc","IMG/Vector.svg");
      break;
  }
});

