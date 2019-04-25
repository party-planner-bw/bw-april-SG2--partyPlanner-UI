const newButton = document.querySelectorAll('.btn');
newButton.forEach(btn => {
btn.addEventListener('mouseenter',(ev) =>{
    ev.target.style.backgroundColor = '#E7EBF7';
    ev.target.style.color = '#520D52';
})
});


newButton.forEach(btn => {
    btn.addEventListener('mouseleave',(ev) =>{
        ev.target.style.backgroundColor = '#520D52';
        ev.target.style.TextColor = '#E7EBF7';
    })
    });
    