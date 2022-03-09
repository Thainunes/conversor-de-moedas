function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido;

}

function Converter2() {
    var valorElemento2 = document.getElementById("valor2");
    var valor2 = valorElemento2.value;
    var valorEmRealNumerico = parseFloat(valor2);
    var valorEmDolar = valorEmRealNumerico / 5;

    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    var valorConvertido2 = "O resultado em dolar é U$ " + valorEmDolar
    elementoValorConvertido2.innerHTML = valorConvertido2;
}