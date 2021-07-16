$(document).ready(() => {
    /*const $curatorSection = $('.curator-text');
    const $exhibitSection = $('.exhibition');
    const $landSection = $('.land-acknowledgement');
    const $thanksSection = $('.special-thanks');

    $curatorSection.on('scroll', () => {
        $curatorSection.fadeIn(4000); 
    }) */


    /*----- Photo Gallery Zoom in Hover --------*/
    $('.box').on('mouseenter', event => { 
        $(event.currentTarget).addClass('photo-active');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active');
    });

})

/*----- Show Title Color Randomizer --------*/
let targetTitle = document.getElementById('target-title');

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function backgroundColorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor;
}

function fontColorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.color = randomColor;
}

targetTitle.addEventListener("wheel", backgroundColorChange);
targetTitle.addEventListener("wheel", fontColorChange);

