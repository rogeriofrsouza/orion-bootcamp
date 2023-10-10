const btn = document.querySelector('button');
const output = document.getElementById('output');

function qtdeVogais(str: string): number {
  const vogais = 'aeiou' + 'áéíóú' + 'ãẽĩõũ' + 'âêîôû';
  let qtde = 0;

  for (let i = 0; i < str.length; i++) {
    if (vogais.indexOf(str[i]) > -1) {
      qtde++;
    }
  }

  return qtde;
}

btn!.addEventListener('click', () => {
  const palavraInput = document.querySelector('input')!.value;
  const palavra = 'Paralelepípedo';
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  para1.textContent = `A palavra "${palavra}" possui ${qtdeVogais(palavra)} vogais.`;
  para2.textContent = `A palavra "${palavraInput}" possui ${qtdeVogais(palavraInput)} vogais.`;
  output!.append(para1, para2);
});
