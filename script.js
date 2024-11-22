function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('open');
    });
});
