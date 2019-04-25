
const changeMenu = document.querySelectorAll('nav a');
changeMenu.forEach(a => {
    a.addEventListener('mouseenter', (ev) => {
        ev.target.style.color = 'rgb(143, 21, 143)';

    });
});

changeMenu.forEach(a => {
    a.addEventListener('mouseleave', (ev) => {
        ev.target.style.color = '#E7EBF7';
    });
});




