// start of header nav line
let iconUp = document.querySelector(".nav-icon");
let list = document.querySelector(".header-links");
let iconChild = Array.from(document.querySelectorAll(".nav-icon div"));

iconUp.onclick = function appear() {
    list.classList.toggle('links-active');
    this.classList.toggle('show');
}
// end of header nav line

var typed = new Typed('.type', {
    strings: ['نسال الله ان يتقبل من جميع المحسنين صدقاتهم وان يجعله في ميزان حسناتهم.'],
    typeSpeed: 175,
    backSpeed: 0,
    loop: true
})

// scroll top
let toTop = document.querySelector(".images .container > span");
window.onscroll = function() {
    if(this.scrollY >= 700) toTop.classList.add("show");
    else toTop.classList.remove("show");
}
toTop.onclick = function() {
    window.scrollTo({
        top: "0",
        behavior: "smooth",
    })
}
// end of scroll top