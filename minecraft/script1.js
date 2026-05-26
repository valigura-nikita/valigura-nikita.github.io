// function scrollToContent(){
//     window.scrollTo({top:window.innerHeight, behavior:"smooth"});
// }

// const topBtn = document.getElementById("topBtn");
// const cards = document.querySelectorAll(".card");

// window.onscroll = function(){

//     if(document.documentElement.scrollTop > 300){
//         topBtn.style.display = "block";
//     } else {
//         topBtn.style.display = "none";
//     }

//     for(let i=0;i<cards.length;i++){
//         let pos = cards[i].getBoundingClientRect().top;
//         let screen = window.innerHeight;

//         if(pos < screen - 100){
//             cards[i].classList.add("show");
//         }
//     }
// }

// function scrollToTop(){
//     window.scrollTo({top:0, behavior:"smooth"});
// }



let btnTop = document.querySelector('.move-top');
btnTop.style.display = 'none'
function showBtnTop() {

    let height = window.innerHeight;
    console.log(height + 'height');
    if (window.scrollY > height) {
        btnTop.style.display = 'flex'
    }
    else {
        btnTop.style.display = 'none'
    }
}
window.addEventListener('scroll', showBtnTop);
