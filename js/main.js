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

/*----- Title Color Randomizer --------*/
let targetTitle = document.getElementById('target-title');

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function backgroundColorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor;
}

targetTitle.addEventListener("wheel", backgroundColorChange);


/*----- Subheader Color Randomizer --------*/
const subHeader1 = document.getElementById('sub-header1');
const subHeader2 = document.getElementById('sub-header2');
const subHeader3 = document.getElementById('sub-header3');
const subHeader4 = document.getElementById('sub-header4');


function fontColorChange(event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;
  }

subHeader1.addEventListener('wheel',fontColorChange);  
subHeader2.addEventListener('wheel',fontColorChange);  
subHeader3.addEventListener('wheel',fontColorChange);  
subHeader4.addEventListener('wheel',fontColorChange);  
 
  