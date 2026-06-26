function revelarMensagem() {
  document.getElementById("mensagem").innerText = "ola, você alterou a mensagem chamando uma função JS"
}
function mostrarNome() {
  let nome = document.getElementById("mensagem").value;
 document.getElementById("resultadoNome").innerText = "Bem vindo, "+ nome +"!";
} 
