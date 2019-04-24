//Changes the size and color of nav items on hover and 
const changeNavTextSize = document.querySelectorAll('nav a');
changeNavTextSize.forEach(a => {
    a.addEventListener('mouseenter', (ev) => {
        ev.target.style.fontSize = '2rem';
        ev.target.style.color = '#E7EBF7';

    });
});


changeNavTextSize.forEach(a => {
    a.addEventListener('touchstart', (ev) => {
        ev.target.style.fontSize = '1.2rem';
        ev.target.style.color = '#E7EBF7';

    });
});



//Changes the size and color of navigation items back to original when mouse is moved off
changeNavTextSize.forEach(a => {
    a.addEventListener('mouseleave', (ev) => {
        ev.target.style.fontSize = '1.8rem';
        ev.target.style.color = '#E7EBF7';
    });
});