 //totalUber = 2 + distancia * 1.4 + tempoEmMinutos * 0.26
    //TEMPO_EM_HORAS = DISTANCIA / VELOCIDADE_MEDIA
    //tempoEmMinutos = tempo_em_horas * 60
    var tarifaBasica = 2;
    var precoPorKM = 1.4;
    var tempoemMinutos = (tempoemHoras * 60);
    var tempoemHoras = parseFloat(prompt("Quanto tempo levou para percorrer o trajeto em horas?")); 
    var distancia = parseFloat(prompt("Qual a distância que será percorrida em KM?"));
    var velocidade_Media = parseFloat(prompt("Qual a velocidade Média?"));

    var totalUber = (tarifaBasica + distancia * precoPorKM) + (tempoemMinutos * 0.26);

    
    document.write(`<h1>UBER</h1>Total: R$ ${totalUber.toFixed(2).replace(".", ",")}`);

