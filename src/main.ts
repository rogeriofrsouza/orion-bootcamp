// Criação de elementos HTML
const list = document.createElement('ul');

interface Commit {
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
}

// Requisição para a API do GitHub
const url: string = 'https://api.github.com/repos/rogeriofrsouza/orion-bootcamp/commits';

fetch(url)
  .then(response => response.json())
  .then((data: Commit[]) => data.forEach((item: Commit) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const a = document.createElement('a');

    h3.textContent = item.commit.author.name;
    para1.textContent = new Date(item.commit.author.date).toLocaleString('pt-BR');
    para2.textContent = item.commit.message;
    a.textContent = 'commit HTML URL';
    a.setAttribute('href', item.html_url);
    a.setAttribute('target', '_blank');

    li.append(h3, para1, para2, a);
    list.append(li);
  }))
  .catch(error => {
    console.log(error);
    const para = document.createElement('p');
    para.textContent = error.message;
    document.body.appendChild(para);
  });

document.body.appendChild(list);
