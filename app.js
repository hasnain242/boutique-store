let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
var sel = document.querySelector("select").value;
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function check() {
  var uname = document.getElementById("uname").value;
  if (uname == "") {
    alert("Username is obligatory");
  }
  var name = document.getElementById("name").value;
  if (name == "") {
    alert("address is obligatory");
  }
}

//  function inp(){
//  if(inp===0){
//     alert("input is empty")
//  }
// }
