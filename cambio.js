function convertir() {
    var valore = parseInt (document.getElementById ("valor").value);
    var resultado = 0;
    var dolar = 4.11;
    var euro = 4.20;
    if (document.getElementById ("uno").checked ){
        resultado = valore / dolar;
        alert ("El cambio de Pesos a Dolares es: $ " + resultado.toFixed (2))
    }
    else if (document.getElementById ("dos").checked){
        resultado = valore / euro;
        alert ("El cambio de Pesos a Euros es: $" + resultado.toFixed(2));
    }
    else{
        alert ("Tenes que completar todos los requerimientos")
    }
}