var lista = [
    { id: 1, nome: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, nome: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, nome: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, nome: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/*
 * Paradigma funcional
 */
var buscaPorId = function (id, lista) { return lista.find(function (pessoa) { return pessoa.id === id; }); };
var acessarBio = function (id, lista, buscaPorId) { var _a; return (_a = buscaPorId(id, lista)) === null || _a === void 0 ? void 0 : _a.bio; };
var acessarNome = function (id, lista, buscaPorId) { var _a; return (_a = buscaPorId(id, lista)) === null || _a === void 0 ? void 0 : _a.nome; };
var removePessoa = function (id, lista) { return lista.filter(function (pessoa) { return pessoa.id !== id; }); };
var alteraPessoa = function (id, lista, nome, bio) { return lista.map(function (pessoa) { return (pessoa.id === id) ? { id: id, nome: nome, bio: bio } : pessoa; }); };
var imprimeLista = function (lista) { return lista.forEach(function (pessoa) { return console.log("".concat(pessoa.id, ". ").concat(pessoa.nome)); }); };
console.log('1. Demonstracao funcional');
console.log('-------------------------');
console.log("a) ".concat(acessarBio(2, lista, buscaPorId)));
console.log("b) ".concat(acessarNome(2, lista, buscaPorId)));
var aux = removePessoa(4, lista);
console.log("\nc) Pessoa 4 removida. Lista atualizada:");
imprimeLista(aux);
aux = alteraPessoa(3, aux, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log("\nd) Pessoa 3 alterada. Lista atualizada:");
imprimeLista(aux);
/*
 * Paradigma imperativo
 */
function acessarBioImp(id) {
    return lista[id - 1].bio;
}
function acessarNomeImp(id) {
    return lista[id - 1].nome;
}
function removePessoaImp(id) {
    lista.splice(id - 1, 1);
}
function alteraPessoaImp(id, nome, bio) {
    lista[id - 1].nome = nome;
    lista[id - 1].bio = bio;
}
function imprimeListaImp() {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var pessoa = lista_1[_i];
        console.log("".concat(pessoa.id, ". ").concat(pessoa.nome));
    }
}
console.log('\n2. Demonstracao imperativo');
console.log('--------------------------');
console.log("a) ".concat(acessarBioImp(3)));
console.log("b) ".concat(acessarNomeImp(3)));
removePessoaImp(2);
console.log("\nc) Pessoa 2 removida. Lista atualizada:");
imprimeListaImp();
alteraPessoaImp(1, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log("\nd) Pessoa 1 alterada. Lista atualizada:");
imprimeListaImp();
