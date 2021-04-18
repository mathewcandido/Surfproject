//Animação do texto 

function typeWriter(elemento) {

    var arraynome = elemento.innerHTML.split('');

    elemento.innerHTML = "";

    arraynome.forEach((letra, i) => {

        setTimeout(() => elemento.innerHTML += letra, 25 * i);


        console.log(letra)
    });

}
const titulo = document.getElementById('p');
typeWriter(titulo);


//modal

let imagens = document.querySelectorAll('.small-img');
let modal = document.querySelector('.modal');
let modalimg = document.querySelector('#modal-img');
let btn = document.querySelector('#btn-close');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function () {
        srcVal = imagens[i].getAttribute('src');
        modalimg.setAttribute('src', srcVal);
        modal.classList.toggle('modal-active');
});
}

btn.addEventListener('click', function () {
    modal.classList.toggle('modal-active');
})