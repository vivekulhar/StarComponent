let container = document.getElementById('container');

let star = document.querySelectorAll('.star');
let filled = 0;
let ratingCount = document.getElementById('count');
let starClicked = false;
container.addEventListener('click', function(e){
    let currentClicked = e.target.dataset.index;

    for(let i=0 ; i<filled ; i++){
        star[i].classList.remove('star-colored');
    }
    // console.log(currentClicked);
    for(let i=0 ; i<currentClicked ; i++){
        star[i].classList.add('star-colored');
    }
    filled = currentClicked;
    let count = parseInt(ratingCount.innerText)+1;
    ratingCount.innerText = count;
    starClicked = true;
    e.stopPropagation();
}, true)

container.addEventListener('mouseover', function(e) {
    let currentHover = e.target.dataset.index;
    for (let i = 0; i < currentHover; i++) {
        star[i].classList.add('star-colored');
    }
});

container.addEventListener('mouseout', function(e) {
    if(starClicked){
        return;
    }
    for (let i = 0; i < star.length; i++) {
        star[i].classList.remove('star-colored');
    }
});