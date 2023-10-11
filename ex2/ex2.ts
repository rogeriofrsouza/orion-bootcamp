interface Pessoa {
  id: number;
  name: string;
  bio: string;
}

const lista: Pessoa[] = [
  { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
  { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

/* 
 * Paradigma funcional
 */

const getBio = (id: number, lista: Pessoa[]) => lista.find(p => p.id === id)?.bio;

const getName = (id: number, lista: Pessoa[]) => lista.find(p => p.id === id)?.name;

const removePessoa = (id: number, lista: Pessoa[]) => lista.filter(p => p.id !== id);

const alteraPessoa = (id: number, lista: Pessoa[], name: string, bio: string) => lista.map(p => (p.id === id) ? { "id": id, "name": name, "bio": bio } : p);

const imprimeLista = (lista: Pessoa[]) => lista.forEach(p => console.log(`${p.id}. ${p.name}`));

console.log('1. Demonstracao funcional');
console.log('-------------------------');
console.log(`a) ${getBio(2, lista)}`);
console.log(`b) ${getName(2, lista)}`);

let aux = removePessoa(4, lista);
console.log(`\nc) Pessoa 4 removida. Lista atualizada:`);
imprimeLista(aux);

aux = alteraPessoa(3, aux, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log(`\nd) Pessoa 3 alterada. Lista atualizada:`);
imprimeLista(aux);

/* 
 * Paradigma imperativo
 */

function getBioImp(id: number): string {
  return lista[id - 1].bio;
}

function getNameImp(id: number): string {
  return lista[id - 1].name;
}

function removePessoaImp(id: number): void {
  lista.splice(id - 1, 1);
}

function alteraPessoaImp(id: number, name: string, bio: string): void {
  lista[id - 1].name = name;
  lista[id - 1].bio = bio;
}

function imprimeListaImp(): void {
  for (const pessoa of lista) {
    console.log(`${pessoa["id"]}. ${pessoa["name"]}`);
  }
}

console.log('\n2. Demonstracao imperativo');
console.log('-------------------------');
console.log(`a) ${getBioImp(3)}`);
console.log(`b) ${getNameImp(3)}`);

removePessoaImp(2);
console.log(`\nc) Pessoa 2 removida. Lista atualizada:`);
imprimeListaImp();

alteraPessoaImp(1, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
console.log(`\nd) Pessoa 1 alterada. Lista atualizada:`);
imprimeListaImp();

