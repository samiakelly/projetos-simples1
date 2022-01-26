function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalId || e.target.className == 'fechar' ) {
            modal.classList.remove('mostrar');
        }
    });
    }

}

const botao = document.querySelector('.botaocadastro');
botao.addEventListener('click', () => iniciaModal('modal-cadastro'));

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }//,
        //600:{
          //  items:3
        //},
        //1000:{
          //  items:5
       // }
    }
})