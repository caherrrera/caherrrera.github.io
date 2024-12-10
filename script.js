
const img  = document.getElementById('headshot');
const date = new Date();
let   time = date.getHours();
let   p    = document.getElementById('greeting');

//console.log(time);

let greetings = ["Good Morning!", "Good Afternoon!", 
            "Good Evening!", "Hi! What are you doing awake??"];

function changeImg(image,source) {
    image.src = source;
}

function changeGreeting(element) {
    let greeting; 

    if(time >= 0 && time <= 5){
        greeting = greetings[3];
    }
    else if(time >= 12 && time < 18){
        greeting = greetings[1];
    }
    else if(time >= 18){
        greeting = greetings[2];
    } else {
        greeting = greetings[0];
    }

    element.innerText = greeting; 
}

img.addEventListener('mouseover', function() {
    changeImg(img,"assets/silly.png")
});
img.addEventListener('mouseout', function () {
    changeImg(img, "assets/headshot.png"); 
});

changeGreeting(p);
