// =====================================================
// ADITYA MORE PORTFOLIO
// JavaScript file
// =====================================================

// ---------- MOBILE MENU ----------
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Change the menu icon
    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close the mobile menu after clicking a navigation link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// ---------- AUTOMATIC FOOTER YEAR ----------
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
