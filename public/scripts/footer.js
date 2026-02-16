/**
 * Logika Button Back-to-Top
 * Dipindahkan dari footer.blade.php
 */

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const btn = document.getElementById("backToTop");
        if (btn) {
            if (window.scrollY > 700) {
                btn.classList.remove(
                    "opacity-0",
                    "invisible",
                    "translate-y-16",
                );
                btn.classList.add("opacity-100", "visible", "translate-y-0");
            } else {
                btn.classList.add("opacity-0", "invisible", "translate-y-16");
                btn.classList.remove("opacity-100", "visible", "translate-y-0");
            }
        }
    });
});
