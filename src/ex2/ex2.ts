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

/**
 * Cria uma lista não ordenada (ul).
 *
 * @param lista - O vetor a ser percorrido.
 * @param ul - O elemento <ul> a ser formado.
 *
 */
const criaLista = (lista: Pessoa[], ul: HTMLUListElement) => lista.forEach((pessoa: Pessoa) => {
  const li = document.createElement('li');
  li.textContent = `${pessoa.id}. ${pessoa.nome}`;
  ul.appendChild(li);
});

/* 
 * Paradigma funcional
 */

const buscaPorId = (id: number, lista: Pessoa[]) => lista.find((pessoa: Pessoa) => pessoa.id === id);

const acessarBio = (id: number, lista: Pessoa[], buscaPorId: Function) => buscaPorId(id, lista)?.bio;

const acessarNome = (id: number, lista: Pessoa[], buscaPorId: Function) => buscaPorId(id, lista)?.nome;

const removePessoa = (id: number, lista: Pessoa[]) => lista.filter((pessoa: Pessoa) => pessoa.id !== id);

const alteraPessoa = (id: number, lista: Pessoa[], nome: string, bio: string) => lista.map((pessoa: Pessoa) => (pessoa.id === id) ? { id: id, nome: nome, bio: bio } : pessoa);

// Criação de elementos HTML e demonstração das funções declarativas
let h2 = document.createElement('h2');
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let para3 = document.createElement('p');
let para4 = document.createElement('p');
let ul = document.createElement('ul');

h2.textContent = '1. Demonstração funcional';
para1.textContent = `a) ${acessarBio(2, lista, buscaPorId)}`;
para2.textContent = `b) ${acessarNome(2, lista, buscaPorId)}`;

let aux: Pessoa[] = removePessoa(4, lista);
para3.textContent = `c) Pessoa 4 removida`;

aux = alteraPessoa(3, aux, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
para4.textContent = `d) Pessoa 3 alterada. Lista atualizada:`;
criaLista(aux, ul);

document.body.append(h2, para1, para2, para3, para4, ul);

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

// Criação de elementos HTML e demonstração das funções imperativas
h2 = document.createElement('h2');
para1 = document.createElement('p');
para2 = document.createElement('p');
para3 = document.createElement('p');
para4 = document.createElement('p');
ul = document.createElement('ul');

h2.textContent = '2. Demonstração imperativo';
para1.textContent = `a) ${acessarBioImp(1)}`;
para2.textContent = `b) ${acessarNomeImp(1)}`;

removePessoaImp(2);
para3.textContent = `c) Pessoa 2 removida.`;

alteraPessoaImp(1, 'Brendan Eich', 'Brendan Eich é um programador de computadores e executivo de tecnologia americano. Ele criou a linguagem de programação JavaScript e foi cofundador do projeto Mozilla, da Mozilla Foundation e da Mozilla Corporation');
para4.textContent = `d) Pessoa 1 alterada. Lista atualizada:`;
criaLista(lista, ul);

document.body.append(h2, para1, para2, para3, para4, ul);
