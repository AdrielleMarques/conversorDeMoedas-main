/* function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O  valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
} */
var valores;


function Converter (){
  var Dolar = 4.96;
  var Real= 0.20;
  var Euro = 5.22;

  valores = parseFloat(document.getElementById("moedaspara").value);

  if(document.getElementById("moedasde").value = "Dolar"){
    document.getElementById("resultado").innerHTML = (Real*USD).toFixed(2);
  }
  
  }
