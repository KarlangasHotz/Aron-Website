/* Canvas ; hidden for now, soon to be given role in website
*/

const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "seashell";

ctx.fillRect(0, 0, 100, 100);

ctx.moveTo(0, 0);

ctx.stroke();

//targeting button
let buttonnight = document.querySelector(".buttons");

//styling it -why not
buttonnight.style.backgroundColor = "black";
buttonnight.style.width = "10%";
buttonnight.style.height = "10%";

//function when dark mode button gets clicked
function dark (){
//when clicked:
//starting DOM changes from bottom elements to top

//footer.background goes black + its text color goes white
let footer = document.querySelector("footer");

footer.style.backgroundColor = "seashell";
footer.style.color = "black";




// <figcaption> have to go color white
let figcaption = document.querySelectorAll("a");

figcaption.forEach(element => element.style.color = "seashell");


//bottom background has to go black

let bottom = document.querySelector(".bottom");

bottom.style.backgroundColor = "black";

//bottom text has to go white

let bottomText = document.querySelectorAll(".bottom");

bottomText.forEach(element => element.style.color = "seashell");

//button itself switching colors

buttonnight.style.backgroundColor = "seashell";


//button text go black
buttonnight.style.color = "black";
//button text change to "white mode"
buttonnight.textContent = "White Mode"


//canvas background black 
let canvas = document.querySelector("canvas")
canvas.style.backgroundColor = "black";



//class center background has to go black
let center = document.querySelectorAll(".center");

center.forEach(element => element.style.backgroundColor = "black");


//class header has to go white backgound
let header = document.querySelector(".header");

header.style.backgroundColor = "white";

}


//toggle off aka 2nd click
function white (){
    //when clicked:
    //starting DOM changes from bottom elements to top
    
    //footer.background goes black + its text color goes white
    let footer = document.querySelector("footer");
    
    footer.style.backgroundColor = "black";
    footer.style.color = "seashell";
    
    
    
    
    // <figcaption> have to go color white
    let figcaption = document.querySelectorAll("a");
    
    figcaption.forEach(element => element.style.color = "black");
    
    
    
    
    
    //bottom background has to go black
    
    let bottom = document.querySelector(".bottom");
    
    bottom.style.backgroundColor = "seashell";
    
    //bottom text has to go white
    
    let bottomText = document.querySelectorAll(".bottom");
    
    bottomText.forEach(element => element.style.color = "black");
    
    
    
    //button itself switching colors
    
    buttonnight.style.backgroundColor = "black";
    
    
    //button text go black
    buttonnight.style.color = "seashell";
    //button text change to "white mode"
    buttonnight.textContent = "Dark Mode"
    
    
    //canvas background black 
    let canvas = document.querySelector("canvas")
    canvas.style.backgroundColor = "seashell";
    
    
    
    //class center background has to go black
    let center = document.querySelectorAll(".center");
    
    center.forEach(element => element.style.backgroundColor = "seashell");
    
    
    //class header has to go white backgound
    let header = document.querySelector(".header");
    
    header.style.backgroundColor = "black";

    }
    


//toggle button



function activateButton(button){
    button.addEventListener("click", dark)
}

function disableButton(button){
    button.removeEventListener("click", white );
}


function toggleButtons(value, button){

    if (value === 1){
        activateButton(button);
    } else {
        disableButton(button);

    }
};

let clickCounter = 0;

buttonnight.addEventListener("click", function (){


    for (i = 0; i < 11; i++){
        
        if (clickCounter  === 1|3|5|7|9){
            toggleButtons(1, buttonnight)
        }
        else {
            toggleButtons(0, buttonnight)

        }
        clickCounter += 1;
    }

})
console.log(clickCounter)

buttonnight.addEventListener("click", function (){
    toggleButtons(0, buttonnight)
})



