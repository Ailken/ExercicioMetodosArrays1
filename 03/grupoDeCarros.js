function encontrarCarros (carros, posicao) {
    const carrosEncontrados = carros.slice(posicao, posicao + 3);
    console.log(carrosEncontrados.join(' - '));
}

const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
encontrarCarros(carros, posicao);