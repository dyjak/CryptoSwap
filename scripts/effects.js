const box = document.querySelector("body");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {

    let x = event.pageX*(-1);
    let y = event.pageY*(-1);

  pageX.innerText = x;
  pageY.innerText = y;

  // box.style.backgroundPositionX=(x/4)+"px";
  // box.style.backgroundPositionY=(y/4)+"px";
}

box.addEventListener("mousemove", updateDisplay, false);



const inputItems = document.querySelectorAll("select, input, button");
inputItems.forEach((item) => {
  item.addEventListener("mouseenter", function(){
    box.style="backdrop-filter: blur(5px)";
  })
  item.addEventListener("mouseleave", function(){
    box.style="backdrop-filter: blur(0px)";
  })
});
