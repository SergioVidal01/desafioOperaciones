// Función para realizar la suma
document.getElementById('btn-sumar').addEventListener('click', function() {
    // Obtiene los valores de los campos de entrada y los convierte a números
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    
    // Calcula la suma
    const resultado = valor1 + valor2;
    
    // Muestra el resultado en el span con la clase 'resultado'
    document.querySelector('.resultado').textContent = resultado;
});

// Función para realizar la resta
document.getElementById('btn-restar').addEventListener('click', function() {
    // Obtiene los valores de los campos de entrada y los convierte a números
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    
    // Calcula la diferencia
    let resultado = valor1 - valor2;

    // Muestra el resultado en el span con la clase 'resultado'
    document.querySelector('.resultado').textContent = resultado;
});

// Función para realizar la multiplicación
document.getElementById('btn-multiplicar').addEventListener('click', function() {
    // Obtiene los valores de los campos de entrada y los convierte a números
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    
    // Calcula la diferencia
    let resultado = valor1 * valor2;

    // Muestra el resultado en el span con la clase 'resultado'
    document.querySelector('.resultado').textContent = resultado;
});

// Función para realizar la división
document.getElementById('btn-dividir').addEventListener('click', function() {
    // Obtiene los valores de los campos de entrada y los convierte a números
    const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    
    // Calcula la diferencia
    let resultado = valor1 / valor2;

    
    // Muestra el resultado en el span con la clase 'resultado'
    document.querySelector('.resultado').textContent = resultado;
});