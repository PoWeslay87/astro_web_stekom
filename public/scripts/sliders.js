/**
 * Logika Slider Alpine.js
 * Dipindahkan dari beranda.blade.php
 */

document.addEventListener("alpine:init", () => {
    // Component untuk Hero Slider
    Alpine.data("heroSlider", (initialSlides) => ({
        currentSlide: 0,
        slides: initialSlides,
        timer: null,
        startAuto() {
            this.timer = setInterval(() => {
                this.currentSlide =
                    (this.currentSlide + 1) % this.slides.length;
            }, 4000); // Dipercepat dari 6detik ke 4detik
        },
        stopAuto() {
            clearInterval(this.timer);
        },
    }));

    // Component untuk News Slider
    Alpine.data("newsSlider", (initialNews) => ({
        currentNewsSlide: 0,
        newsItems: initialNews,
        slidesPerView: 3,
        timer: null,
        get maxSlide() {
            return this.newsItems.length - this.slidesPerView;
        },
        nextSlide() {
            this.currentNewsSlide =
                this.currentNewsSlide < this.maxSlide
                    ? this.currentNewsSlide + 1
                    : 0;
        },
        prevSlide() {
            this.currentNewsSlide =
                this.currentNewsSlide > 0
                    ? this.currentNewsSlide - 1
                    : this.maxSlide;
        },
        startAutoSlide() {
            this.timer = setInterval(() => {
                this.nextSlide();
            }, 3000); // Dipercepat dari 4detik ke 3detik
        },
        stopAutoSlide() {
            clearInterval(this.timer);
        },
    }));
});
