const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Abre/Fecha o menu ao clicar no ícone
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link (útil para navegação "One Page")
document.querySelectorAll(".nav-link").forEach(link => 
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);
