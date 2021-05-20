//Animação do texto 

function typeWriter(elemento) {

    var arraynome = elemento.innerHTML.split('');

    elemento.innerHTML = "";

    arraynome.forEach((letra, i) => {

        setTimeout(() => elemento.innerHTML += letra, 25 * i);



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



//menu mobile

const BtnMobile = document.getElementById('btn-mobile');


function MenuMobile(event) {
    if(event.type ==="touchstart") event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded',active)

    if(active){
         event.currentTarget.setAttribute('aria-label','Fechar Menu')
        }else{
            event.currentTarget.setAttribute('aria-label','Abrir Menu')
        }


}


BtnMobile.addEventListener('click', MenuMobile)
BtnMobile.addEventListener('touchstart', MenuMobile)