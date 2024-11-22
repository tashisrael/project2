function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
    const menuButton = document.getElementById('menuButton');
    if (nav.classList.contains('open')) {
        menuButton.innerHTML = '<i class="bx bx-x"></i>'; // Change to close icon
    } else {
        menuButton.innerHTML = '<i class="bx bx-menu"></i>'; // Change back to menu icon
    }
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('open');
        const menuButton = document.getElementById('menuButton');
        menuButton.innerHTML = '<i class="bx bx-menu"></i>'; // Change back to menu icon
    });
});
