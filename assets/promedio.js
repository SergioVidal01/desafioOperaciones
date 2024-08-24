function calcular() {
    // Obtener los valores de los campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);


    // Calcular la suma
    const suma = num1 + num2 + num3 + num4 + num5;

    // Calcular el promedio
    const promedio = suma / 5;

    // Mostrar los resultados (tofixed se usa para decidir cuantos decimales se muestran en este caso es 2)
    document.getElementById('resultado').innerText = `La suma de los números es ${suma} y el promedio es ${promedio.toFixed(2)}.`;
}