const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
if (menuOpen == false){
    navLinks.style.display = "block";
    menuOpen = true;
}
 
else if (menuOpen == true){
    navLinks.style.display = "none";
    menuOpen = false;
}
});


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') 
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item') 
    document.querySelector('.slide').prepend(items[items.length - 1])
})