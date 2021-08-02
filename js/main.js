$(document).ready(() => {

   
/*-------------- Webpage Fade In -------------*/
  $('.fadein').addClass('load');
  $('.fadein-second').addClass('load');


/*----- Show Title Color Randomizer --------*/
let targetTitle = document.getElementById('target-title');
let cfatTitle = document.getElementById('cfat-title');


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
cfatTitle.addEventListener("wheel", backgroundColorChange);

targetTitle.addEventListener("touchmove", backgroundColorChange);
targetTitle.addEventListener("touchmove", fontColorChange);
cfatTitle.addEventListener("touchmove", backgroundColorChange);

/*----- Photo Gallery Zoom in Hover --------*/
$('.box').on('mouseenter', event => { 
  $(event.currentTarget).addClass('photo-active');
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('photo-active');
});

})
