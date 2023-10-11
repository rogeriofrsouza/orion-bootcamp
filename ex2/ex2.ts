interface Pessoa {
  id: number;
  nome: string;
  bio: string;
}

const lista: Pessoa[] = [
  { id: 1, nome: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { id: 2, nome: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
  { id: 3, nome: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { id: 4, nome: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

/* 
 * Paradigma funcional
 */

const buscaPorId = (id: number, lista: Pessoa[]) => lista.find((pessoa: Pessoa) => pessoa.id === id);

const acessarBio = (id: number, lista: Pessoa[], buscaPorId: Function) => buscaPorId(id, lista)?.bio;

const acessarNome = (id: number, lista: Pessoa[], buscaPorId: Function) => buscaPorId(id, lista)?.nome;

const removePessoa = (id: number, lista: Pessoa[]) => lista.filter((pessoa: Pessoa) => pessoa.id !== id);

const alteraPessoa = (id: number, lista: Pessoa[], nome: string, bio: string) => lista.map((pessoa: Pessoa) => (pessoa.id === id) ? { id: id, nome: nome, bio: bio } : pessoa);

const imprimeLista = (lista: Pessoa[]) => lista.forEach((pessoa: Pessoa) => console.log(`${pessoa.id}. ${pessoa.nome}`));

console.log('1. Demonstracao funcional');
console.log('-------------------------');
console.log(`a) ${acessarBio(2, lista, buscaPorId)}`);
console.log(`b) ${acessarNome(2, lista, buscaPorId)}`);

let aux: Pessoa[] = removePessoa(4, lista);
console.log(`\nc) Pessoa 4 removida. Lista atualizada:`);
imprimeLista(aux);

aux = alteraPessoa(3, aux, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log(`\nd) Pessoa 3 alterada. Lista atualizada:`);
imprimeLista(aux);

/* 
 * Paradigma imperativo
 */

function acessarBioImp(id: number): string {
  return lista[id - 1].bio;
}

function acessarNomeImp(id: number): string {
  return lista[id - 1].nome;
}

function removePessoaImp(id: number): void {
  lista.splice(id - 1, 1);
}

function alteraPessoaImp(id: number, nome: string, bio: string): void {
  lista[id - 1].nome = nome;
  lista[id - 1].bio = bio;
}

function imprimeListaImp(): void {
  for (const pessoa of lista) {
    console.log(`${pessoa.id}. ${pessoa.nome}`);
  }
}

console.log('\n2. Demonstracao imperativo');
console.log('--------------------------');
console.log(`a) ${acessarBioImp(3)}`);
console.log(`b) ${acessarNomeImp(3)}`);

removePessoaImp(2);
console.log(`\nc) Pessoa 2 removida. Lista atualizada:`);
imprimeListaImp();

alteraPessoaImp(1, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log(`\nd) Pessoa 1 alterada. Lista atualizada:`);
imprimeListaImp();

