//*alert("Hello");
var nOB=document.querySelectorAll(".drum").length;
for(i=0;i<nOB;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
 var innerButton=this.innerHTML;
 makeSound(innerButton);
  buttonAnimation(innerButton);

});

document.addEventListener("keypress",function(){ 
  makeSound(event.key);
 buttonAnimation(event.key);
  });

}

function makeSound(key){
	switch (key) {
   case 'w':
   var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case 'a':
    var audio = new Audio("sounds/tom-3.mp3");
     audio.play();
     break;

     case 's':
     var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

      case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
       audio.play();
       break;

       case 'j':
       var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case 'k':
        var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;

         case 'l':
         var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
   default:

 }

}
function buttonAnimation(currentkey){
var activeButton=document.querySelector("." +currentkey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}

//var audio = new Audio("sounds/crash.mp3");
// audio.play();
