const img = document.querySelector('.img')
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.sub-titulo')
const bio = document. querySelector('.bio')
const qtdseguidores = document.querySelector('.qtd-seguindo')
const qtdeguindo = document.querySelector('.qtd-seguindo')
const qtdrepositorios = document.querySelector('.qtd-repositorios')

const url = 'https://api.github.com/users/YuKittw'
const getData = async( )=>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    img.seAttribute('src','data.avatar_url')
    titulo.innerHTML = data.name
    subtitulo.innerHTML = data.login 
    bio.innerHTML = data.bio
    qtdseguidores.innerHTML = data.folloqrs
    qtdeguindo.innerHTML = data.public_repos
    
}
getData()

