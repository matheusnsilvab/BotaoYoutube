var botao = document.querySelector(".trocar-texto");

botao.addEventListener("click", function() {
   botao.textContent = "Inscrito"
   document.querySelector(".trocar-texto").style.background = "#FF1F0E";
   document.querySelector(".trocar-texto").style.color = "#fff";
})