var elOpenNavBtn = document.querySelector(".burger-button");
var elHeader = document.querySelector(".site-header");

elOpenNavBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-nav-open");
});

