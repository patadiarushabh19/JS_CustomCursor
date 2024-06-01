var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x + "px"; // Adding "px" to specify it as pixels
  crsr.style.top = dets.y + "px"; // Adding "px" to specify it as pixels
});
