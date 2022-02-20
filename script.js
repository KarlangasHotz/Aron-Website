/* Canvas ; hidden for now, soon to be given role in website


const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "seashell";

ctx.fillRect(0, 0, 100, 100);

ctx.moveTo(0, 0);

ctx.stroke();
*/

//targeting button
let buttonnight = document.querySelector(".buttons");

//styling it -why not
buttonnight.style.backgroundColor = "rgb(36, 35, 35)";
buttonnight.style.width = "10%";
buttonnight.style.height = "10%";

//function when dark mode button gets clicked
function dark (){
//when clicked:
//starting DOM changes from bottom elements to top

//footer.background goes rgb(36, 35, 35) + its text color goes white
let footer = document.querySelector("footer");
let footerEmail = document.querySelector("footer a");

console.log(footerEmail)

footer.style.backgroundColor = "seashell";
footer.style.color = "rgb(36, 35, 35)";
footerEmail.style.color = "rgb(36, 35, 35)";




// <figcaption> have to go color white
let figcaption = document.querySelectorAll("figcaption a");

figcaption.forEach(element => element.style.color = "seashell");


//bottom background has to go rgb(36, 35, 35)

let bottom = document.querySelector(".bottom");

bottom.style.backgroundColor = "rgb(36, 35, 35)";

//bottom text has to go white

let bottomText = document.querySelectorAll(".bottom");

bottomText.forEach(element => element.style.color = "seashell");

//button itself switching colors

buttonnight.style.backgroundColor = "seashell";


//button text go rgb(36, 35, 35)
buttonnight.style.color = "rgb(36, 35, 35)";
//button text change to "white mode"
buttonnight.textContent = "White Mode"

/*
//canvas background rgb(36, 35, 35) 
let canvas = document.querySelector("canvas")
canvas.style.backgroundColor = "rgb(36, 35, 35)";
*/


//class center background has to go rgb(36, 35, 35)
let center = document.querySelectorAll(".center");

center.forEach(element => element.style.backgroundColor = "rgb(36, 35, 35)");


//class header has to go white backgound
let header = document.querySelector(".header");

header.style.backgroundColor = "seashell";

}


//toggle off aka 2nd click
function white (){
    //when clicked:
    //starting DOM changes from bottom elements to top
    
    //footer.background goes rgb(36, 35, 35) + its text color goes white
    let footer = document.querySelector("footer");
    let footerEmail = document.querySelector("footer a");
    
    footerEmail.style.color = "seashell";
    footer.style.backgroundColor = "rgb(36, 35, 35)";
    footer.style.color = "seashell";
    
    
    
    
    // <figcaption> have to go color white
    let figcaption = document.querySelectorAll("figcaption a");
    
    figcaption.forEach(element => element.style.color = "rgb(36, 35, 35)");
    
    
    
    
    
    //bottom background has to go rgb(36, 35, 35)
    
    let bottom = document.querySelector(".bottom");
    
    bottom.style.backgroundColor = "seashell";
    
    //bottom text has to go white
    
    let bottomText = document.querySelectorAll(".bottom");
    
    bottomText.forEach(element => element.style.color = "rgb(36, 35, 35)");
    
    
    
    //button itself switching colors
    
    buttonnight.style.backgroundColor = "rgb(36, 35, 35)";
    
    
    //button text go rgb(36, 35, 35)
    buttonnight.style.color = "seashell";
    //button text change to "white mode"
    buttonnight.textContent = "Dark Mode"
    
    /*
    //canvas background rgb(36, 35, 35) 
    let canvas = document.querySelector("canvas")
    canvas.style.backgroundColor = "seashell";
    
    */
    
    
    //class center background has to go rgb(36, 35, 35)
    let center = document.querySelectorAll(".center");
    
    center.forEach(element => element.style.backgroundColor = "seashell");
    
    
    //class header has to go white backgound
    let header = document.querySelector(".header");
    
    header.style.backgroundColor = "rgb(36, 35, 35)";

    }
    








//toggle button
//dark() & white ()
const buttonName = document.querySelector(".buttons")

let counter = 1;

let toggle = () =>{
 
    if (counter % 2){
        
        dark();
        buttonName.textContent = "White Mode";
    }else {
        white();
        buttonName.textContent = "Dark Mode";
    }

    counter++;
}

buttonName.addEventListener("click", toggle)




