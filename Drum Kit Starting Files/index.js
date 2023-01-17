
// let buttons = document.querySelector(".set")
// buttons.forEach(function (button) {
//     button.addEventListener("click",onClicked)
// });
function onClicked() {
    alert("First Sound")
}
// const buttons = document.querySelectorAll('.drum')
// buttons.forEach(function(currentBtn){
//     currentBtn.addEventListener('click', onClicked)
// })

let numberofbuttonstobeclicked = document.querySelectorAll(".drum").length

for(let i= 0;i<numberofbuttonstobeclicked;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

       let button = this.innerHTML
        makesound(button)

    })
}
document.addEventListener("keydown",function (event) {
makesound(event.key)
})

function makesound(key) {
    if (key === 'w') {
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        this.style.animation = 'purple'
    } else if (key === 'a') {
        let tom2  = new Audio("sounds/tom-2.mp3");
        tom2.play();
        this.style.color = 'yellow'
    } else if (key === 's') {
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        this.style.color = 'red'
    } else if (key === 'd') {
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        button.style.color = 'blue'
    } else if (key === 'j') {
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        this.style.color = 'maroon'
    } else if (key === 'k') {
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        this.style.color = 'green'
    } else if (key === 'l') {
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        this.style.color = 'blue'
    }

}


