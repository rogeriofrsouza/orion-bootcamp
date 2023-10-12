// Referências de elementos no DOM
var botao = document.querySelector('#conta-vogais');
var saida = document.querySelector('#saida');
/**
 * Retorna a quantidade de vogais contidas em uma palavra.
 *
 * @param palavra - A palavra a ser percorrida.
 * @returns O numero de vogais encontradas em palavra.
 *
 */
function contaVogais(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'â', 'ê', 'î', 'ô', 'û'];
    var quantidade = 0;
    // Percorre a string
    for (var _i = 0, palavra_1 = palavra; _i < palavra_1.length; _i++) {
        var letra = palavra_1[_i];
        if (vogais.includes(letra.toLowerCase())) {
            quantidade++;
        }
    }
    return quantidade;
}
// Event handlers
botao.addEventListener('click', function () {
    var palavra = 'Paralelepípedo';
    var palavraInput = document.querySelector('#palavra').value;
    var para1 = document.createElement('p');
    var para2 = document.createElement('p');
    para1.textContent = "A palavra \"".concat(palavra, "\" possui ").concat(contaVogais(palavra), " vogais.");
    para2.textContent = "A palavra \"".concat(palavraInput, "\" possui ").concat(contaVogais(palavraInput), " vogais.");
    saida.innerHTML = '';
    saida.append(para1, para2);
});
