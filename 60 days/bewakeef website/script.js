const carousel = document.querySelector('.carousel').
arrowICons = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img");
let left = document.getElementById('left');
let right = document.getElementById("right");
 let image = 0;

 left.addEventListener('click', function(){
    images()
    image--
 })
 right.addEventListener('click', function(){
    images()
    image++
 })
 
function images(){
    firstImg
}
