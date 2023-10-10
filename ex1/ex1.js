var btn = document.querySelector('button');
var output = document.getElementById('output');
function qtdeVogais(str) {
    var vogais = 'aeiou' + 'áéíóú' + 'ãẽĩõũ' + 'âêîôû';
    var qtde = 0;
    for (var i = 0; i < str.length; i++) {
        if (vogais.indexOf(str[i]) > -1) {
            qtde++;
        }
    }
    return qtde;
}
btn.addEventListener('click', function () {
    var palavraInput = document.querySelector('input').value;
    var palavra = 'Paralelepípedo';
    var para1 = document.createElement('p');
    var para2 = document.createElement('p');
    para1.textContent = "A palavra \"".concat(palavra, "\" possui ").concat(qtdeVogais(palavra), " vogais.");
    para2.textContent = "A palavra \"".concat(palavraInput, "\" possui ").concat(qtdeVogais(palavraInput), " vogais.");
    output.append(para1, para2);
});
