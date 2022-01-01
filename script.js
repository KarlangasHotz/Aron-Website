/* Canvas ; hidden for now, soon to be given role in website
*/

const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "seashell";

ctx.fillRect(0, 0, 100, 100);

ctx.moveTo(0, 0);

ctx.stroke();