function dividirGrupos(arrayNomes, tamanhoDoGrupo) {
    let numGrupos = Math.ceil(arrayNomes.length / tamanhoDoGrupo);

    for (let i =0; i < numGrupos; i++) {
        const startIndex = i * tamanhoDoGrupo;
        const endIndex = startIndex + tamanhoDoGrupo;
        const grupo = arrayNomes.slice(startIndex, endIndex);
        console.log(`Grupo ${i + 1}: ${grupo.join(', ')}.`);
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Ailken'];
const tamanhoDoGrupo = 5;
dividirGrupos(nomes, tamanhoDoGrupo);