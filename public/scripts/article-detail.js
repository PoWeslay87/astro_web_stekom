/**
 * Logika Halaman Detail Artikel
 * Dipindahkan dari artikel-detail.blade.php
 */

document.addEventListener("DOMContentLoaded", function () {
    const isArtikelPage = window.location.pathname.includes("/artikel-detail");
    const articleItems = [
        {
            date: "20 Nov 2025",
            image: "/img/artikel/artikel1.jpg",
            title: "AI untuk Mahasiswa: Memperkuat, Bukan Menggantikan, Pikir Kritis",
            author: "Dr. Made Arya, S.Kom., M.Kom.",
            fullContent: `Di era di mana kecerdasan buatan (AI) semakin mudah diakses, mahasiswa kini memiliki kekuatan luar biasa di ujung jari—dari menulis esai hingga menganalisis data hanya dalam hitungan detik. Namun, kemudahan ini juga membawa tantangan besar: bagaimana memastikan bahwa AI digunakan sebagai alat bantu, bukan sebagai pengganti proses berpikir sendiri? Artikel ini mengajak pembaca untuk merefleksikan peran AI dalam dunia akademik, sekaligus memberikan panduan praktis agar mahasiswa tetap melatih dan mempertajam daya pikir kritis mereka.\n\nKami menjelaskan mengapa berpikir kritis tetap menjadi fondasi utama pendidikan tinggi, bahkan—atau justru karena—kita hidup di zaman AI. Melalui contoh nyata, seperti memverifikasi informasi dari AI, merancang pertanyaan yang mendalam, hingga menggunakan AI untuk simulasi argumen, artikel ini menunjukkan bahwa kolaborasi antara manusia dan teknologi bisa menjadi sinergi yang memperkaya, bukan melemahkan, kemampuan intelektual.\n\nBagi mahasiswa, dosen, atau siapa pun yang peduli pada masa depan pendidikan, tulisan ini adalah ajakan untuk tidak hanya menggunakan AI, tetapi memahami, mempertanyakan, dan mengarahkannya dengan kesadaran penuh—karena teknologi terbaik adalah yang memperkuat, bukan menggantikan, cara kita berpikir.`,
        },
        {
            date: "22 Nov 2025",
            image: "/img/artikel/artikel2.jpg",
            title: "Cara Mengatasi Mahasiswa yang Sering Mengantuk Saat Kuliah",
            author: "Prof. Dr. Ni Luh Putu Sriyani, M.Pd.",
            fullContent: `Banyak mahasiswa mengalami rasa mengantuk saat mengikuti perkuliahan, terutama pada jam pagi atau setelah makan siang. Kondisi ini dapat mengganggu konsentrasi, menurunkan pemahaman materi, serta membuat prestasi akademik menurun. Rasa kantuk biasanya disebabkan oleh kurang tidur, pola makan tidak teratur, kelelahan, serta kebiasaan begadang.\n\nUntuk mengatasi masalah ini, mahasiswa perlu menerapkan pola hidup sehat. Tidur cukup minimal 7–8 jam setiap malam sangat penting agar tubuh dan otak tetap segar saat kuliah. Selain itu, sarapan dengan makanan bergizi seperti telur, buah, dan sayur dapat membantu menjaga energi sepanjang hari. Hindari makanan terlalu berminyak atau terlalu berat sebelum kuliah karena dapat membuat tubuh lebih cepat lemas dan mengantuk.\n\nAktivitas fisik ringan seperti berjalan kaki atau melakukan peregangan sebelum masuk kelas juga dapat membantu melancarkan peredaran darah dan mengurangi rasa kantuk. Saat di dalam kelas, usahakan duduk di posisi depan, mencatat materi, dan aktif bertanya agar pikiran tetap fokus. Mengonsumsi air putih yang cukup juga penting karena dehidrasi dapat menyebabkan tubuh cepat lelah.`,
        },
        {
            date: "10 Dec 2025",
            image: "/img/artikel/artikel3.png",
            title: "Kewirausahaan: Bangun Bisnis, Raih Kesuksesan, Ciptakan Peluang",
            author: "Ir. I Made Sudarma, M.T.",
            fullContent: `Poster ini menggambarkan pentingnya kewirausahaan sebagai bekal mahasiswa dalam menghadapi tantangan dunia kerja dan ekonomi masa depan. Kewirausahaan mendorong mahasiswa untuk berpikir kreatif, inovatif, serta berani mengambil peluang bisnis sejak dini.\n\nMelalui semangat kewirausahaan, mahasiswa tidak hanya belajar membangun usaha, tetapi juga mengembangkan kemampuan kepemimpinan, manajemen, dan pemecahan masalah. Dengan memulai dari ide sederhana, mahasiswa dapat menciptakan peluang baru yang berdampak pada kemandirian ekonomi dan pertumbuhan masyarakat.\n\nKewirausahaan bukan hanya tentang mencari keuntungan, tetapi juga tentang menciptakan solusi, membuka lapangan kerja, and membangun masa depan yang lebih baik melalui inovasi dan kerja keras.`,
        },
        {
            date: "15 Dec 2025",
            image: "/img/artikel/artikel4.png",
            title: "AI & Machine Learning: Teknologi Cerdas untuk Masa Depan Digital",
            author: "Dr. Komang Candra Brata, S.Kom., M.Cs.",
            fullContent: `Poster ini membahas tentang Artificial Intelligence (AI) dan Machine Learning (ML) sebagai teknologi cerdas yang mampu membantu manusia dalam menganalisis data, melakukan otomatisasi, serta membuat prediksi secara akurat. AI and ML telah digunakan dalam berbagai bidang seperti pendidikan, bisnis, kesehatan, and industri digital.\n\nDengan memahami konsep dasar AI & ML, mahasiswa and masyarakat dapat memanfaatkan teknologi ini untuk meningkatkan produktivitas, efisiensi kerja, and menciptakan inovasi baru di era transformasi digital. Selain itu, perkembangan AI & ML membuka peluang besar dalam dunia kerja and industri teknologi. Penguasaan teknologi ini menjadi keterampilan penting bagi generasi muda untuk menghadapi persaingan global.`,
        },
        {
            date: "18 Dec 2025",
            image: "/img/artikel/artikel5.jpg",
            title: " Gaji Fresh Graduate IT: Peluang Karier dan Penghasilan di Era Digital",
            author: "Dr. Ni Made Rai Sukmawati, S.E., M.M.",
            fullContent: `Poster ini membahas tentang kisaran gaji fresh graduate jurusan IT atau komputer yang semakin menjanjikan seiring berkembangnya teknologi digital. Lulusan IT memiliki peluang kerja luas di berbagai bidang seperti software development, data analyst, jaringan komputer, hingga cyber security.\n\nBesaran gaji fresh graduate IT dipengaruhi oleh beberapa faktor, seperti kemampuan teknis, sertifikasi, pengalaman magang, serta perusahaan tempat bekerja. Selain itu, lokasi kerja and jenis industri juga menentukan tingkat penghasilan yang diterima. Dengan menguasai keterampilan yang relevan seperti pemrograman, database, cloud computing, and Artificial Intelligence, fresh graduate IT dapat meningkatkan daya saing.`,
        },
        {
            date: "20 Dec 2025",
            image: "/img/artikel/artikel6.png",
            title: "Peran Pemerintah dalam Meningkatkan Kesejahteraan Masyarakat",
            author: "Dr. I Gusti Ayu Tri Lestari, M.Psi.",
            fullContent: `Poster ini membahas kondisi masyarakat yang masih menghadapi berbagai kesulitan ekonomi, seperti meningkatnya kebutuhan hidup, keterbatasan lapangan pekerjaan, serta akses pendidikan dan kesehatan yang belum merata. Situasi ini menuntut adanya peran aktif pemerintah dalam memberikan perlindungan dan dukungan kepada masyarakat.\n\nPemerintah memiliki tanggung jawab untuk menghadirkan kebijakan yang berpihak pada kesejahteraan rakyat, seperti program bantuan sosial, pemberdayaan ekonomi, penciptaan lapangan kerja, serta peningkatan layanan publik. Melalui kebijakan yang tepat, diharapkan beban masyarakat dapat berkurang and kualitas hidup dapat meningkat.`,
        },
    ];

    // Render Recent Articles in Sidebar
    const recentArticlesList = document.getElementById("recent-articles-list");
    if (recentArticlesList) {
        recentArticlesList.innerHTML = articleItems
            .slice(0, 4)
            .map(
                (item, i) => `
            <div class="flex gap-4 group">
                <div class="w-16 h-16 shrink-0 rounded-xl overflow-hidden shadow-sm">
                    <img src="${item.image}" alt="Post" class="w-full h-full object-cover group-hover:scale-110 transition-transform" onerror="this.src='/img/logo_stekom.png'">
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1">Artikel</span>
                    <a href="/artikel-detail?index=${i}" class="text-sm font-bold text-gray-800 hover:text-cyan-600 line-clamp-2 leading-snug">
                        ${item.title}
                    </a>
                </div>
            </div>
        `,
            )
            .join("");
    }

    if (!isArtikelPage) return; // Stop execution if not on artikel detail page

    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get("index"));

    if (
        document.getElementById("article-title") &&
        !isNaN(index) &&
        articleItems[index]
    ) {
        const article = articleItems[index];

        // Update UI Elements
        if (document.getElementById("article-title-banner")) {
            document.getElementById("article-title-banner").textContent =
                "Detail Artikel";
        }
        if (document.getElementById("breadcrumb-title")) {
            document.getElementById("breadcrumb-title").textContent =
                article.title;
        }

        document.getElementById("article-title").textContent = article.title;
        document.getElementById("article-author").textContent = article.author;
        if (document.getElementById("article-date-meta")) {
            document.getElementById("article-date-meta").textContent =
                article.date;
        }
        if (document.getElementById("article-image")) {
            document.getElementById("article-image").src = article.image;
        }

        // Format paragraphs
        const contentHtml = article.fullContent
            .split("\n\n")
            .map((p) => `<p class="mb-6">${p}</p>`)
            .join("");
        document.getElementById("article-content").innerHTML = contentHtml;

        document.title = article.title + " | Universitas STEKOM";
    } else if (document.getElementById("article-title")) {
        document.getElementById("article-title").textContent =
            "Artikel Tidak Ditemukan";
        document.getElementById("article-content").innerHTML =
            '<div class="py-20 text-center"><p class="text-gray-400 font-bold">Maaf, artikel yang Anda cari tidak tersedia atau telah dipindahkan.</p></div>';
    }
});
