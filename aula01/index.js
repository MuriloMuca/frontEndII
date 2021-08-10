const media = (...notas) => {
    let notaParcial = 0;
    notas.forEach(nota => {
        // soma da nota parcial + nova nota
        notaParcial += nota;
        console.log(`Sua nota parcial até o momento é ${notaParcial}`);
    });

    let notaFinal = notaParcial / notas.length;
    console.log(`A sua média é ${notaFinal}`);
    return notaFinal;

};

console.log(media(8, 10, 7, 9));
