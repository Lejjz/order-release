function callApi() {

	document.getElementById("returnAPI").innerHTML = "";

  const codigo = document.getElementById("codigo").value;
  const pedido = document.getElementById("pedido").value;

	let dataSend = ({codigo : codigo, pedido : pedido});

fetch("Your URL", {
  method: "POST",
  body: JSON.stringify(dataSend),
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then((response) => {
  const resultado = document.getElementById("returnAPI");
    response.json().then((data) => {
      switch (response.status) {
        case 200:
          resultado.innerText = data.message;
          break;
        case 400:
          resultado.innerText = data.message;
          break;
        case 401:
          resultado.innerText =  data.message;
          break;
        case 404:
          resultado.innerText = data.message;
          break;
        default:
          resultado.innerText = 
          "Nao rodou. Código HTTP: " +
      response.status;
      }
    });
})
.catch((error) => {
  const resultado = document.getElementById("returnAPI");
  resultado.innerText =
    "Ocorreu um erro ao tentar desbloquear o pedido: " + error.message;
});
}