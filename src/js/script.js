//Seleciono um conjunto de elementos com a classe .liProduto-imgProduto
//a seguir adiciono um evento que se ativa quando se passa o mouse 
//por cima de cada elemento uso GSAP para criar uma animação suave

function enlargeImage() {
    if ($(window).width() > 1024) {
        $('.liProduto-imgProduto').on('mouseenter', fMouseEnter);
        $('.liProduto-imgProduto').on('mouseleave', fMouseLeave);
    } else {
        $('.liProduto-imgProduto').off('mouseenter', fMouseEnter);
        $('.liProduto-imgProduto').off('mouseleave', fMouseLeave);
    }
}

function fMouseEnter() {
    gsap.to(this, {
        scale: 1.2,
        duration: 0.5
    });
}

function fMouseLeave() {
    gsap.to(this, {
        scale: 1,
        duration: 0.5
    });
}

enlargeImage();

$(window).on('resize', enlargeImage)