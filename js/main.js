document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    
    // Suave movimento de flutuação para as tags de fundo
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        tags.forEach((tag, index) => {
            const speed = (index + 1) * 0.01;
            const x = (window.innerWidth - mouseX * speed) / 100;
            const y = (window.innerHeight - mouseY * speed) / 100;
            
            tag.style.transform = `translate(${x}px, ${y}px) rotate(${getInitialRotation(index)}deg)`;
        });
    });

    function getInitialRotation(index) {
        const rotations = [-15, 10, 5, -10, 15];
        return rotations[index] || 0;
    }

    // Efeito de fade-in suave para o container
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
        container.style.opacity = '1';
    }, 100);
});