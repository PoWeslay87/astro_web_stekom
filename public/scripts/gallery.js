const initGallery = () => {
    if (!window.Alpine) return;

    window.Alpine.data("galleryLightbox", (initialPhotos) => ({
        isOpen: false,
        activePhoto: { src: "", title: "" },
        photos: initialPhotos || [],
        currentIndex: 0,
        startX: 0,
        endX: 0,

        init() {
            console.log("Gallery Lightbox initialized [v5-FINAL-POINTER]");
            console.log("SWIPE SYSTEM IS ALIVE");
            if (!this.photos || this.photos.length === 0) {
                const data = this.$el.getAttribute("data-photos");
                if (data) {
                    try {
                        this.photos = JSON.parse(data);
                    } catch (e) {
                        console.error("Failed to parse photos", e);
                    }
                }
            }
        },

        openModal(index) {
            if (!this.photos[index]) return;
            this.currentIndex = index;
            this.activePhoto = this.photos[index];
            this.isOpen = true;
            document.body.style.overflow = "hidden";
        },

        closeModal() {
            this.isOpen = false;
            document.body.style.overflow = "auto";
        },

        next() {
            if (this.photos.length === 0) return;
            this.currentIndex = (this.currentIndex + 1) % this.photos.length;
            this.activePhoto = this.photos[this.currentIndex];
        },

        prev() {
            if (this.photos.length === 0) return;
            this.currentIndex =
                (this.currentIndex - 1 + this.photos.length) %
                this.photos.length;
            this.activePhoto = this.photos[this.currentIndex];
        },

        handlePointerDown(e) {
            this.startX = e.clientX;
        },

        handlePointerUp(e) {
            this.endX = e.clientX;
            const threshold = 40;
            const diff = this.endX - this.startX;

            if (Math.abs(diff) > threshold) {
                if (diff < 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        },
    }));
};

if (window.Alpine) {
    initGallery();
} else {
    document.addEventListener("alpine:init", initGallery);
}
