var form = document.getElementById('conversion-form');
var pesoInput = document.getElementById('peso');
var dolarInput = document.getElementById('dolar');
var tasaInput = document.getElementById('tasa');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    var peso = parseFloat(pesoInput.value);
    var dolar = parseFloat(dolarInput.value);
    var tasa = parseFloat(tasaInput.value);

    if (!isNaN(peso) && isNaN(dolar)) {
    // Convertir de peso a dólar
    dolarInput.value = (peso / tasa).toFixed(2);
    } else if (isNaN(peso) && !isNaN(dolar)) {
    // Convertir de dólar a peso
    pesoInput.value = (dolar * tasa).toFixed(2);
    }
});

form.addEventListener('reset', function() {
    pesoInput.value = '';
    dolarInput.value = '';
    tasaInput.value = '';
});