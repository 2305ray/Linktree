
//function togglemode () {
//const html = document.documentElement

//if (html.classList.contains("light")) 
//    { html.classList.remove("light")} 
//   else 
//  {html.classList.add("light")} }

function togglemode(){
    const html = document.documentElement
html.classList.toggle('light')




//pegar a tag img
const img = document.querySelector ('#profile img')

//substituir a imagem
if (html.classList.contains("light")) {
//se tiver light mode adicionar a imagem light
img.setAttribute('src','./assets/assets/avatar-light.png')
} else {
//se tiver sem o light mode, manter a imagem normal
img.setAttribute ('src', './assets/assets/avatar.png')
}


//mudar a frase da imagem
const alt = document.querySelector ('#profile img')


if (html.classList.contains("light")) {

alt.setAttribute('alt','foto de uma elfa')
} else {

img.setAttribute ('alt', 'foto de uma bruxinha')

}

}