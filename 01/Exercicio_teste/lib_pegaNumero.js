
//Formatação para utilizar no IMC e do UBER (pegaNumero)



function pegaNumero(mensagem) {
return parseFloat(prompt(mensagem).replace(",", ".")).toFixed(2)
}