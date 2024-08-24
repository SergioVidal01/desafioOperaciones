document.getElementById('convertir').addEventListener('click', function() {
    // Obtener el valor ingresado por el usuario
    const celsius = parseFloat(document.getElementById('celsius').value);

   
    // Convertir Celsius a Kelvin
    const kelvin = celsius + 273.15;

    // Convertir Celsius a Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Mostrar los resultados en los elementos HTML correspondientes sin redondear los decimales
    document.getElementById('resultadoKelvin').textContent = kelvin + ' K';
    document.getElementById('resultadoFahrenheit').textContent = fahrenheit + ' °F';
});