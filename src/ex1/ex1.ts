// Referências de elementos no DOM
const botao = document.querySelector('#conta-vogais');
const saida = document.querySelector('#saida');

/**
 * Retorna a quantidade de vogais contidas em uma palavra.
 *
 * @param palavra - A palavra a ser percorrida.
 * @returns O numero de vogais encontradas em palavra.
 *
 */
function contaVogais(palavra: string): number {
  const vogais: string[] = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'â', 'ê', 'î', 'ô', 'û'];
  let quantidade: number = 0;

  // Percorre a string
  for (const letra of palavra) {
    if (vogais.includes(letra.toLowerCase())) {
      quantidade++;
    }
  }

  return quantidade;
}

// Event handlers
botao!.addEventListener('click', () => {
  const palavra: string = 'Paralelepípedo';
  const palavraInput: string = (document.querySelector('#palavra') as HTMLInputElement).value;
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  para1.textContent = `A palavra "${palavra}" possui ${contaVogais(palavra)} vogais.`;
  para2.textContent = `A palavra "${palavraInput}" possui ${contaVogais(palavraInput)} vogais.`;
  saida!.innerHTML = '';
  saida!.append(para1, para2);
});
