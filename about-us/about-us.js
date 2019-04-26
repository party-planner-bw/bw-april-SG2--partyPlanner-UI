


const btn = document.querySelectorAll('button');
btn.forEach( btn => {
btn.addEventListener('mouseenter',(event) =>{
    event.target.style.boxShadow = "10px 20px 30px black";
})
});


btn.forEach( btn => {
btn.addEventListener('mouseleave',(event) =>{
    event.target.style.boxShadow = "none";
})
});


