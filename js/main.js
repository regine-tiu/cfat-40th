$(document).ready(() => {
    /*const $curatorSection = $('.curator-text');
    const $exhibitSection = $('.exhibition');
    const $landSection = $('.land-acknowledgement');
    const $thanksSection = $('.special-thanks');

    $curatorSection.on('scroll', () => {
        $curatorSection.fadeIn(4000); 
    }) */


    $('.box').on('mouseenter', event => { 
        $(event.currentTarget).addClass('photo-active');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active');
    });

})