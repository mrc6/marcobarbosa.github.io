function calcularDataMarconiana() {
    const inicio = new Date("2026-01-04T00:00:00");
    const hoje = new Date();

    const diferencaMs = hoje - inicio;
    const diasTotais = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

    const ano = Math.floor(diasTotais / 91) + 1;
    const diaAno = ((diasTotais % 91) + 91) % 91;

    let mes, dia;

    if (diaAno < 28) {
        mes = "Abril";
        dia = diaAno + 1;
    } else if (diaAno < 56) {
        mes = "Agosto";
        dia = diaAno - 27;
    } else if (diaAno < 84) {
        mes = "Dezembro";
        dia = diaAno - 55;
    } else {
        mes = "Descansaria";
        dia = diaAno - 83;
    }

    document.getElementById("data-marconiana").innerHTML =
        `${dia} de ${mes}, Ano ${ano}`;

    document.getElementById("equivalencia").innerHTML =
        `Data gregoriana: ${hoje.toLocaleDateString("pt-BR")}`;
}
calcularDataMarconiana();
