let dropdown = document.querySelectorAll(".dropdown");
let open = document.querySelectorAll(".open");
let close = document.querySelectorAll(".close");
let dropBtn = document.querySelectorAll(".dropBtn");

// console.log(dropdown, close, open);
let flag = false;


dropBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (!flag) {
      dropdown[index].classList.add("hidden");
      open[index].classList.add("hidden");
      close[index].classList.remove("hidden");
      flag = true;
    } else {
      dropdown[index].classList.remove("hidden");
      close[index].classList.add("hidden");
      open[index].classList.remove("hidden");
      flag = false;
    }
  });
});

function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }

  
