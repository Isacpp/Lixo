function gerarNumerosMegaSena(quantidade){
    var vetorNumeros = []
    var vetorGerados = []
    
    while (vetorNumeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*60 + 1)
         vetorGerados.push(aleatorio)

        if (vetorNumeros.includes(aleatorio)) {
            continue
        }else{
            vetorNumeros.push(aleatorio)
    }
}
console.log("Todos os gerados", vetorGerados)
console.log("Números exclusivos", vetorNumeros)

return vetorNumeros

}



function main(quantidade) {
    console.time("tempo")
    gerarNumerosMegaSena(quantidade)
    console.timeEnd("tempo")
    
}
