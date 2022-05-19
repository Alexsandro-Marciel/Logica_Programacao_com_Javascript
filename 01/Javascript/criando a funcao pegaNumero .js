var distancia = pegaNumero("Qual a distância que será percorrida?")
        
        var velocidadeMedia = pegaNumero("Qual a velocidade média do carro?")
        var tempoEmHoras = distancia / velocidadeMedia
        var tempoEmMinutos = tempoEmHoras * 60
        var totalUber = 2 + distancia * 1.4 + tempoEmMinutos * 0.26
       /* document.write(`Total: R$ ${totalUber.toFixed(2).replace(".", ",")}`)*/
       tempo = tempoEmMinutos
       var tempoFormatado = formataRelogio()
       document.write(`Tempo: ${tempoFormatado}<br> Total: R$ ${totalUber.toFixed(2).replace(".", ",")}`)

       
       
        
        var autonomia = pegaNumero("Quantos km seu carro faz por litro?" )
        
        var precoLitroGasolina = pegaNumero("Qual o preço do litro da gasolina?")
        
        var totalEstacionamento = pegaNumero("Digite o quanto gastará com estacionamento")
        var totalGasolina = (distancia / autonomia) * precoLitroGasolina
        var totalCarro = totalGasolina + totalEstacionamento
        document.write(`Gasolina: R$ ${totalGasolina.toFixed(2).replace(".", ",")}
        <br>Estacionamento: R$ ${totalEstacionamento.toFixed(2).replace(".", ",")}
        <br>Total: R$ ${totalCarro.toFixed(2).replace(".", ",")}`)
       