/**
 * Logika Detail Berita
 * Dipindahkan dari berita-detail.blade.php
 */

const newsItems = [
    {
        date: "20 Nov 2025",
        image: "/img/berita/berita1.jpg",
        title: "Universitas STEKOM Perkuat Pendekatan Kakak Asuh dalam Program Inklusi di SLB Negeri Karangasem",
        author: "Admin_STEKOM",
        fullContent:
            "Universitas Sains dan Teknologi Komputer (Universitas STEKOM) melaksanakan program pendekatan sosial melalui skema kakak asuh dan adik asuh di SLB Negeri Karangasem pada 30 Desember 2025. Program ini bertujuan membangun kedekatan emosional dan kepercayaan diri siswa disabilitas. Pendekatan ini melibatkan mahasiswa Universitas STEKOM sebagai kakak asuh yang mendampingi siswa disabilitas tuna rungu dan tuna grahita sebagai adik asuh. Interaksi dilakukan secara langsung melalui kegiatan edukatif dan dialog sederhana. \n\nSelain membangun keakraban, kegiatan ini juga dimanfaatkan untuk menyeleksi siswa kelas 10, 11, dan 12 yang dinilai memiliki kesiapan kerja. Program ini menjadi bagian dari pelatihan kebekerjaan bagi anak berkebutuhan khusus di Bali yang diselenggarakan oleh Universitas STEKOM.",
    },
    {
        date: "20 Nov 2025",
        image: "/img/berita/berita2.jpg",
        title: "Penandatanganan MoU dengan SLB untuk Pendidikan Inklusif",
        author: "Admin_STEKOM",
        fullContent:
            "Universitas Sains dan Teknologi Komputer (Universitas STEKOM) melaksanakan kunjungan resmi ke SLB Negeri 1 dan SLB Negeri 2 Buleleng pada 29 Desember 2025. Kunjungan ini menjadi momentum penting dalam memperkuat kerja sama kelembagaan melalui penandatanganan Nota Kesepahaman (MoU) sebagai bentuk komitmen bersama dalam pengembangan pendidikan inklusif dan pemberdayaan anak berkebutuhan khusus. \n\nPenandatanganan MoU dilakukan oleh Rektor Universitas STEKOM, Dr. Joseph Teguh Santoso, S.Kom., M.Kom., bersama Kepala Sekolah SLB Negeri 1 Buleleng, Drs. Made Winarsa. Kegiatan ini menjadi simbol sinergi antara perguruan tinggi dan satuan pendidikan khusus.",
    },
    {
        date: "12 Dec 2025",
        image: "/img/berita/berita3.png",
        title: "Pelatihan Pembuatan CV Digital bagi Siswa SLB Negeri Karangasem",
        author: "Admin_STEKOM",
        fullContent:
            "Universitas Sains dan Teknologi Komputer (Universitas STEKOM) menyelenggarakan kegiatan pelatihan dan pembuatan curriculum vitae (CV) bagi siswa SLB Negeri Karangasem pada 30 Desember 2025. Kegiatan ini merupakan tahapan lanjutan dari rangkaian tes kecakapan kerja yang sebelumnya telah dilaksanakan, dan ditujukan bagi siswa yang dinyatakan lolos seleksi kesiapan kerja. \n\nDalam kegiatan ini, siswa difasilitasi untuk pembuatan foto CV dan video CV sebagai media perkenalan diri secara profesional. Pendekatan ini disesuaikan dengan perkembangan dunia kerja yang semakin menuntut kemampuan presentasi diri melalui media visual dan digital.",
    },
    {
        date: "15 Dec 2025",
        image: "/img/berita/berita4.jpg",
        title: "MoU STEKOM and SLB Karangasem Disaksikan Disdikpora Bali",
        author: "Admin_STEKOM",
        fullContent:
            "Universitas Sains dan Teknologi Komputer (Universitas STEKOM) secara resmi menandatangani Nota Kesepahaman (MoU) dengan SLB Negeri Karangasem pada 30 Desember 2025. Penandatanganan ini menjadi tonggak penting dalam penguatan kerja sama di bidang pelatihan kerja dan pengembangan kompetensi siswa disabilitas. Penandatanganan MoU dilakukan oleh Rektor Universitas STEKOM, Dr. Joseph Teguh Santoso, S.Kom., M.Kom., bersama Kepala SLB Negeri Karangasem, Ibu Desak Ketut Caturwangi. Kegiatan ini disaksikan langsung oleh Kepala Bidang PK dan PLK Disdikpora Provinsi Bali.",
    },
    {
        date: "18 Dec 2025",
        image: "/img/berita/berita5.jpg",
        title: "Program Kakak Asuh dan Duta Inklusi untuk Kesiapan Kerja",
        author: "Admin_STEKOM",
        fullContent:
            "Universitas Sains dan Teknologi Komputer (Universitas STEKOM) melaksanakan kegiatan pendekatan sosial dan edukatif kepada siswa disabilitas di SLB Negeri 1 dan SLB Negeri 2 Buleleng pada 29 Desember 2025. Kegiatan ini difokuskan pada penguatan relasi antara mahasiswa Universitas STEKOM sebagai kakak asuh dengan siswa disabilitas sebagai adik asuh. \n\nYang membedakan kegiatan kali ini adalah keterlibatan Duta Inklusi yang dibawa langsung oleh Universitas STEKOM. Para Duta Inklusi tersebut merupakan siswa terpilih dari SMA dan SMK di Jawa Tengah yang telah mendapatkan pembekalan khusus terkait inklusivitas.",
    },
    {
        date: "22 Dec 2025",
        image: "/img/berita/berita6.jpg",
        title: "Penyerahan Hibah Sarana dan Penetapan Duta Kebekerjaan",
        author: "Admin_STEKOM",
        fullContent:
            "Universitas Sains dan Teknologi Komputer (Universitas STEKOM) melaksanakan kunjungan ke SLB Negeri Karangasem, Bali, pada 30 Desember 2025 dalam rangka penyerahan hibah sarana pendukung pembelajaran dan pelatihan kebekerjaan bagi siswa disabilitas. \n\nUniversitas STEKOM menyerahkan sejumlah hibah berupa dua unit lampu lighting, tripod, tablet, mikrofon nirkabel, kasur lipat, serta kipas angin. Selain penyerahan hibah, Universitas STEKOM juga melakukan seleksi siswa disabilitas untuk ditetapkan sebagai Duta Kebekerjaan. Siswa yang terpilih adalah Bagus, Budi, Sucita, Epina, dan Sindi.",
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const isBeritaPage = window.location.pathname.includes("/berita-detail");

    // Render Recent Posts in Sidebar (only if element exists)
    const recentPostsList = document.getElementById("recent-posts-list");
    if (recentPostsList) {
        recentPostsList.innerHTML = newsItems
            .slice(0, 4)
            .map(
                (item, i) => `
            <div class="flex gap-4 group">
                <div class="w-16 h-16 shrink-0 rounded-xl overflow-hidden shadow-sm">
                    <img src="${item.image}" alt="Post" class="w-full h-full object-cover group-hover:scale-110 transition-transform">
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1">Berita</span>
                    <a href="/berita-detail?index=${i}" class="text-sm font-bold text-gray-800 hover:text-cyan-600 line-clamp-2 leading-snug">
                        ${item.title}
                    </a>
                </div>
            </div>
        `,
            )
            .join("");
    }

    if (!isBeritaPage) return; // Stop execution if not on berita detail page

    const urlParams = new URLSearchParams(window.location.search);
    const indexStr = urlParams.get("index");
    const index = parseInt(indexStr);

    const titleEl = document.getElementById("article-title");
    const contentEl = document.getElementById("article-content");
    const authorEl = document.getElementById("article-author");
    const dateEl = document.getElementById("article-date-meta");
    const imageEl = document.getElementById("article-image");
    const bannerTitleEl = document.getElementById("article-title-banner");
    const breadcrumbEl = document.getElementById("breadcrumb-title");

    if (titleEl && !isNaN(index) && newsItems[index]) {
        const news = newsItems[index];

        // Update Content
        titleEl.textContent = news.title;
        if (authorEl) authorEl.textContent = news.author;
        if (dateEl) dateEl.textContent = news.date;
        if (imageEl) imageEl.src = news.image;

        if (contentEl) {
            contentEl.innerHTML = news.fullContent
                .split("\n\n")
                .map((p) => `<p class="mb-6">${p}</p>`)
                .join("");
        }

        // Update Banner & Breadcrumb with priority (to override banner.js)
        setTimeout(() => {
            if (bannerTitleEl) bannerTitleEl.textContent = "Detail Berita";
            if (breadcrumbEl) breadcrumbEl.textContent = news.title;
        }, 50);

        document.title = news.title + " | Universitas STEKOM";
    } else if (titleEl) {
        titleEl.textContent = "Berita Tidak Ditemukan";
        if (contentEl) {
            contentEl.innerHTML =
                '<div class="py-20 text-center"><p class="text-gray-400 font-bold">Maaf, berita yang Anda cari tidak tersedia.</p></div>';
        }
    }
});
