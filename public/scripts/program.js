/**
 * Logika Modal Program Studi
 * Dipindahkan dari program.blade.php
 */

const programData = {
    dkv: {
        title: "Desain Komunikasi Visual (DKV)",
        description:
            "Program unggulan yang berkomitmen untuk mencetak sarjana profesional dan kreatif dalam bidang Desain Grafis. Kami membekali mahasiswa dengan kemampuan teknis mutakhir dan wawasan luas untuk memenuhi tantangan industri kreatif global. Didukung fasilitas studio modern dan dosen praktisi berpengalaman.",
        bgClass: "bg-purple-100",
        icon: `<svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`,
    },
    "sistem-komputer": {
        title: "Sistem Komputer (S.Kom)",
        description:
            "Program studi yang fokus pada integrasi hardware dan software. Mahasiswa dibekali keahlian dalam robotika, IoT, dan arsitektur komputer modern. Lulusan dipersiapkan menjadi tenaga ahli yang adaptif dan siap menghadapi tantangan revolusi industri 4.0.",
        bgClass: "bg-blue-100",
        icon: `<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>`,
    },
    "sistem-informasi": {
        title: "Sistem Informasi (S.Kom)",
        description:
            "Menjembatani dunia bisnis dan teknologi informasi. Fokus pada analisis sistem, manajemen basis data, dan pengembangan strategi digital untuk perusahaan. Dipersiapkan menjadi analis sistem dan konsultan TI handal.",
        bgClass: "bg-cyan-100",
        icon: `<svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`,
    },
    "teknik-informatika": {
        title: "Teknik Informatika (S.Kom)",
        description:
            "Berfokus pada pengembangan software, keamanan cyber, dan AI. Mahasiswa akan mendalami algoritma canggih dan teknologi terbaru untuk menciptakan solusi digital masif. Kurikulum adaptif yang menyesuaikan kebutuhan raksasa teknologi saat ini.",
        bgClass: "bg-indigo-100",
        icon: `<svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
    },
    bisnis: {
        title: "Bisnis (S.Bns)",
        description:
            "Mencetak entrepreneur masa depan yang fasih dalam dunia digital. Fokus pada strategi pemasaran, manajemen keuangan modern, dan pengembangan startup. Lulusan diharapkan mampu menciptakan lapangan kerja baru melalui inovasi bisnis.",
        bgClass: "bg-yellow-100",
        icon: `<svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>`,
    },
    hukum: {
        title: "Hukum (S.H)",
        description:
            "Mencetak praktisi hukum yang berintegritas dan mumpuni. Mahasiswa mempelajari berbagai aspek hukum perdata, pidana, hingga hukum siber yang menjadi kebutuhan kritis di era teknologi informasi.",
        bgClass: "bg-red-100",
        icon: `<svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>`,
    },
    akuntansi: {
        title: "Akuntansi (S.Ak.)",
        description:
            "Berfokus pada pengelolaan keuangan profesional berstandar internasional. Mahasiswa dilatih menggunakan software akuntansi terkini dan memahami analisis audit mendalam untuk kebutuhan korporasi modern.",
        bgClass: "bg-teal-100",
        icon: `<svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" /></svg>`,
    },
    "teknik-sipil": {
        title: "Teknik Sipil (S.T)",
        description:
            "Membentuk perancang infrastruktur yang tangguh dan inovatif. Mempelajari struktur bangunan masif, manajemen proyek konstruksi, hingga rekayasa transportasi untuk masa depan pembangunan nasional.",
        bgClass: "bg-orange-100",
        icon: `<svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>`,
    },
    manajemen: {
        title: "Manajemen (S.M)",
        description:
            "Program studi Manajemen fokus pada pengembangan keterampilan kepemimpinan global, manajemen SDM, dan strategi organisasi. Mahasiswa didorong untuk menjadi manajer handal yang visioner dan adaptif.",
        bgClass: "bg-pink-100",
        icon: `<svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
    },
    "d3-teknik-informatika": {
        title: "D3 Teknik Informatika (A.Md.Kom)",
        description:
            "Program Diploma 3 Teknik Informatika fokus pada pengembangan keterampilan praktis di bidang teknologi informasi. Mahasiswa akan belajar pemrograman, basis data, jaringan komputer, dan pengembangan aplikasi. Program ini dirancang untuk menghasilkan lulusan yang siap kerja di industri IT dengan gelar Ahli Madya Komputer yang mumpuni.",
        bgClass: "bg-blue-100",
        icon: '<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>',
    },
    "d4-akuntansi-perpajakan": {
        title: "D4 Akuntansi Perpajakan (S.Tr.Ak)",
        description:
            "Program Diploma 4 Akuntansi Perpajakan memberikan pemahaman komprehensif tentang sistem perpajakan Indonesia, akuntansi keuangan, dan auditing. Mahasiswa akan dibekali pengetahuan praktis tentang perpajakan perusahaan, pajak penghasilan, dan regulasi perpajakan terkini untuk menjadi Sarjana Terapan Akuntansi yang profesional dan siap pakai.",
        bgClass: "bg-green-100",
        icon: '<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    },
};

window.openModal = function (program) {
    const modal =
        document.getElementById("programModal") ||
        document.getElementById("diplomaModal");
    const modalContent = document.getElementById("modalContent");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const iconDiv = document.getElementById("modalIcon");

    if (programData[program]) {
        if (title) title.textContent = programData[program].title;
        if (description)
            description.textContent = programData[program].description;
        if (iconDiv) {
            iconDiv.className = `w-12 h-12 rounded-xl flex items-center justify-center ${programData[program].bgClass}`;
            iconDiv.innerHTML = programData[program].icon;
        }

        if (modal) {
            modal.classList.remove("hidden");
            modal.classList.add("flex", "items-center", "justify-center");
        }
        if (modalContent) {
            setTimeout(() => {
                modalContent.classList.remove("scale-95", "opacity-0");
                modalContent.classList.add("scale-100", "opacity-100");
            }, 50);
        }
    }
};

window.closeModal = function () {
    const modal =
        document.getElementById("programModal") ||
        document.getElementById("diplomaModal");
    const modalContent = document.getElementById("modalContent");

    if (!modalContent) {
        if (modal) {
            modal.classList.add("hidden");
            modal.classList.remove("flex", "items-center", "justify-center");
        }
        return;
    }

    modalContent.classList.add("scale-95", "opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");

    setTimeout(() => {
        if (modal) {
            modal.classList.add("hidden");
            modal.classList.remove("flex", "items-center", "justify-center");
        }
    }, 300);
};

// Tutup modal jika klik di luar area modal (overlay)
document.addEventListener("click", function (e) {
    const modal =
        document.getElementById("programModal") ||
        document.getElementById("diplomaModal");
    if (e.target === modal) {
        window.closeModal();
    }
});
