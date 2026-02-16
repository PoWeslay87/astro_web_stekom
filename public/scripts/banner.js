/**
 * Logika Banner Artikel & Breadcrumb
 * Dipindahkan dari article-banner.blade.php dan file blade lainnya
 */

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("article-title-banner");
    const breadcrumbElement = document.getElementById("breadcrumb-title");

    if (!titleElement || !breadcrumbElement) return;

    // Get current URL path and remove trailing slash for consistency
    let path = window.location.pathname;
    if (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
    }

    // Define titles and breadcrumbs for different pages
    const pageData = {
        "/program": {
            title: "Program Sarjana (S1) Universitas STEKOM",
            breadcrumb: "Program",
        },
        "/program/diploma": {
            title: "Program Diploma Vokasi Universitas STEKOM",
            breadcrumb: "Program",
        },
        "/profil": {
            title: "Profil Universitas STEKOM",
            breadcrumb: "Profil",
        },
        "/sejarah": {
            title: "Sejarah Universitas STEKOM",
            breadcrumb: "Sejarah",
        },
        "/visi-misi": {
            title: "Visi dan Misi Universitas STEKOM",
            breadcrumb: "Visi & Misi",
        },
        "/struktur-organisasi": {
            title: "Struktur Organisasi Universitas STEKOM",
            breadcrumb: "Struktur Organisasi",
        },
        "/sambutan-rektor": {
            title: "Sambutan Rektor Universitas STEKOM",
            breadcrumb: "Sambutan Rektor",
        },
        "/tentang-kami": {
            title: "Tentang Kami Universitas STEKOM",
            breadcrumb: "Tentang Kami",
        },
        "/layanan": {
            title: "Layanan Universitas STEKOM",
            breadcrumb: "Layanan",
        },
        "/portal-akademik": {
            title: "Portal Akademik Universitas STEKOM",
            breadcrumb: "Layanan",
        },
        "/beasiswa": {
            title: "Beasiswa Universitas STEKOM",
            breadcrumb: "Layanan",
        },
        "/karir-alumni": {
            title: "Karir & Alumni Universitas STEKOM",
            breadcrumb: "Layanan",
        },
        "/galeri/kegiatan-akademik": {
            title: "Kegiatan Akademik Universitas STEKOM",
            breadcrumb: "Galeri",
        },
        "/galeri/kunjungan-industri": {
            title: "Kunjungan Industri Universitas STEKOM",
            breadcrumb: "Galeri",
        },
        "/galeri/wisuda": {
            title: "Wisuda Universitas STEKOM",
            breadcrumb: "Galeri",
        },
        "/berita": {
            title: "Berita Terbaru Universitas STEKOM",
            breadcrumb: "Berita",
        },
        "/artikel": {
            title: "Artikel Terbaru Universitas STEKOM",
            breadcrumb: "Artikel",
        },
        "/artikel-detail": {
            title: "Artikel Universitas STEKOM",
            breadcrumb: "Artikel",
        },
    };

    // Set content based on current path
    if (pageData[path]) {
        titleElement.textContent = pageData[path].title;
        breadcrumbElement.textContent = pageData[path].breadcrumb;
    } else if (path.includes("/berita-detail")) {
        titleElement.textContent = "Detail Berita";
        breadcrumbElement.textContent = "Berita";
    } else {
        // Default for unknown pages
        if (titleElement.textContent === "Loading...") {
            titleElement.textContent = "Universitas STEKOM";
        }
        if (breadcrumbElement.textContent === "Loading...") {
            breadcrumbElement.textContent = "Home";
        }
    }
});
