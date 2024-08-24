function convertirDias() {
    const diasTotales = parseInt(document.getElementById('dias').value, 10);

    const diasPorAño = 365;
    const diasPorSemana = 7;

    const años = Math.floor(diasTotales / diasPorAño);
    const diasRestantes = diasTotales % diasPorAño;
    const semanas = Math.floor(diasRestantes / diasPorSemana);
    const dias = diasRestantes % diasPorSemana;

    document.getElementById('resultado').innerText = `${años} año(s), ${semanas} semana(s) y ${dias} día(s)`;
}