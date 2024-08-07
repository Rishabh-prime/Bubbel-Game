
var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector('#scoreValue').textContent = score;
}

function getNewHit(){
    hitrn=  Math.floor(Math.random()*10);
     document.querySelector('#hitPoint').textContent = hitrn
 }

function makeBubbel (){
    var clutter = "";
for (var i = 0; i <= 168; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubbel">${random}</div>`;
}
document.querySelector('#pbtm').innerHTML = clutter;

}
 // creat
function runTimer(){
   var timerInt =  setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerValue').textContent = timer;
        }
        else{
            clearInterval("timerInt");
            document.querySelector('#pbtm').innerHTML =`<h1>Game Over!!! Your Score : ${score}</h1>`
        }
    },1000)
     
}

document.querySelector('#pbtm')
.addEventListener('click', function(details){
      var clickedNumber = (Number(details.target.textContent));
      if(clickedNumber === hitrn){
        increaseScore();
        getNewHit();
        makeBubbel();
      }
      
});







getNewHit();
runTimer(); 
makeBubbel();


