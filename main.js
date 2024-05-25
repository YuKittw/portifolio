const img = document.querySelector('.img');
const titulo = document.querySelector('.titulo');
const subtitulo = document.querySelector('.sub-titulo');
const bio = document.querySelector('.bio');
const qtdSeguidores = document.querySelector('.qtd-seguidores');
const qtdSeguindo = document.querySelector('.qtd-seguindo');
const qtdRepositorios = document.querySelector('.qtd-repositorios');

const url = 'https://api.github.com/users/YuKittw';

const getData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao carregar os dados do usuário');
        }
        const data = await response.json();

        console.log(data);

        img.setAttribute('src', data.avatar_url);
        titulo.textContent = data.name;
        subtitulo.textContent = data.login;
        bio.textContent = data.bio;
        qtdSeguidores.textContent = data.followers;
        qtdSeguindo.textContent = data.following;
        qtdRepositorios.textContent = data.public_repos;
    } catch (error) {
        console.error('Erro:', error.message);
    }
};

getData();