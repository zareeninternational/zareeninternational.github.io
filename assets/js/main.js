/* MOBILE MENU TOGGLE */
function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}

/* CLOSE MENU WHEN CLICKING A LINK */
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.remove("active");
    });
});
