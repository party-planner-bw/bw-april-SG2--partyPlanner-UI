
const changeMenu = document.querySelectorAll('nav a');
const changColor =Array.from(changeMenu);
changeColor.map(a => {
    a.addEventListener('mouseenter', (ev) => {
        ev.target.style.color = 'rgb(143, 21, 143)';

    });
});

changeColor.map(a => {
    a.addEventListener('mouseleave', (ev) => {
        ev.target.style.color = '#E7EBF7';
    });
});




