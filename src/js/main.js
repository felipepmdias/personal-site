document.addEventListener('DOMContentLoaded', (event) => {
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');

    h1.addEventListener('mouseover', () => {
        h1.style.color = '#0077cc';
    });

    h1.addEventListener('mouseout', () => {
        h1.style.color = '#00aaff';
    });

    p.addEventListener('mouseover', () => {
        p.style.color = '#ffffff';
    });

    p.addEventListener('mouseout', () => {
        p.style.color = '#cccccc';
    });
});