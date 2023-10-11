var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/*
 * Paradigma funcional
 */
var getBio = function (id, lista) { var _a; return (_a = lista.find(function (p) { return p.id === id; })) === null || _a === void 0 ? void 0 : _a.bio; };
var getName = function (id, lista) { var _a; return (_a = lista.find(function (p) { return p.id === id; })) === null || _a === void 0 ? void 0 : _a.name; };
var removePessoa = function (id, lista) { return lista.filter(function (p) { return p.id !== id; }); };
var alteraPessoa = function (id, lista, name, bio) { return lista.map(function (p) { return (p.id === id) ? { "id": id, "name": name, "bio": bio } : p; }); };
var imprimeLista = function (lista) { return lista.forEach(function (p) { return console.log("".concat(p.id, ". ").concat(p.name)); }); };
console.log('1. Demonstracao funcional');
console.log('-------------------------');
console.log("a) ".concat(getBio(2, lista)));
console.log("b) ".concat(getName(2, lista)));
var aux = removePessoa(4, lista);
console.log("\nc) Pessoa 4 removida. Lista atualizada:");
imprimeLista(aux);
aux = alteraPessoa(3, aux, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log("\nd) Pessoa 3 alterada. Lista atualizada:");
imprimeLista(aux);
/*
 * Paradigma imperativo
 */
function getBioImp(id) {
    return lista[id - 1].bio;
}
function getNameImp(id) {
    return lista[id - 1].name;
}
function removePessoaImp(id) {
    lista.splice(id - 1, 1);
}
function alteraPessoaImp(id, name, bio) {
    lista[id - 1].name = name;
    lista[id - 1].bio = bio;
}
function imprimeListaImp() {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var pessoa = lista_1[_i];
        console.log("".concat(pessoa["id"], ". ").concat(pessoa["name"]));
    }
}
console.log('\n2. Demonstracao imperativo');
console.log('-------------------------');
console.log("a) ".concat(getBioImp(3)));
console.log("b) ".concat(getNameImp(3)));
removePessoaImp(2);
console.log("\nc) Pessoa 2 removida. Lista atualizada:");
imprimeListaImp();
alteraPessoaImp(1, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log("\nd) Pessoa 1 alterada. Lista atualizada:");
imprimeListaImp();
