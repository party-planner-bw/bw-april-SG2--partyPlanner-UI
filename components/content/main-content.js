
const mainBtn = document.querySelectorAll('.content-btn');
mainBtn.forEach( btn => {
btn.addEventListener('mouseenter',(event) =>{
    event.target.style.boxShadow = "10px 20px 30px black";
})
});


mainBtn.forEach( btn => {
btn.addEventListener('mouseleave',(event) =>{
    event.target.style.boxShadow = "none";
})
});





//Feature buttons styles//

const featBtn = document.querySelectorAll('.feat-btn');
featBtn.forEach( featbtn => {
featbtn.addEventListener('mouseenter',(event) =>{
    event.target.style.boxShadow = "10px 20px 30px black";
})
});


featBtn.forEach( featbtn => {
featbtn.addEventListener('mouseleave',(event) =>{
    event.target.style.boxShadow = "none";
})
});



   