function gerarNumerosMegaSena(quantidade) {
    // Criar um array com todos os números de 1 a 60
    const todosNumeros = Array.from({ length: 60 }, (_, i) => i + 1);

    // Embaralhar os números usando o algoritmo de Fisher-Yates (ou Knuth shuffle)
    for (let i = todosNumeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todosNumeros[i], todosNumeros[j]] = [todosNumeros[j], todosNumeros[i]]; // Trocar os elementos
    }

    // Retornar os primeiros 'quantidade' números do array embaralhado
    const resultado = todosNumeros.slice(0, quantidade);

    console.log("Números exclusivos:", resultado);

    return resultado;
}




function main(quantidade) {
    console.time("tempo")
    gerarNumerosMegaSena(quantidade)
    console.timeEnd("tempo")
    
}
