import { NewsItem, FacilityItem, Extracurricular, Testimonial } from './types';

export const TRANSLATIONS = {
  id: {
    navHome: "Beranda",
    navAbout: "Profil",
    navNews: "Berita & Pengumuman",
    navFacilities: "Fasilitas",
    navExtracurriculars: "Ekstrakurikuler",
    navContact: "Hubungi Kami",
    navAdmission: "Pendaftaran PPDB",

    schoolSubName: "Sekolah Menengah Pertama Negeri 1 Bantarkalong",
    schoolSlogan: "Unggul Berprestasi, Berkarakter Multi-Talenta & Berakhlak Mulia",
    schoolDescription: "Membentuk generasi emas Indonesia yang cerdas, berintegritas tinggi, produktif, serta berakar kuat pada nilai-nilai gotong royong dan budi pekerti luhur semenjak 1982.",
    heroCTAQuickTour: "Eksplorasi Kampus",
    heroCTAAdmission: "Info Pendaftaran",

    statStudents: "720+ Siswa",
    statStudentsDesc: "Peserta Didik Aktif",
    statTeachers: "45 Guru & Staff",
    statTeachersDesc: "Pendidik Berkompetensi",
    statExtracurriculars: "14 Bidang Ekstra",
    statExtracurricularsDesc: "Wadah Minat & Bakat",
    statAccreditation: "Akreditasi A",
    statAccreditationDesc: "Predikat Unggul Nasional",

    principalTitle: "Sambutan Kepala Sekolah",
    principalName: "Drs. H. Ahmad Saepudin, M.Pd.",
    principalMessage: "Selamat datang di portal informasi resmi SMPN 1 Bantarkalong. Sebagai salah satu sekolah menengah pertama unggulan di Tasikmalaya Selatan, kami berkomitmen untuk menyediakan lingkungan belajar yang kondusif, inklusif, dan berpijak pada kemajuan teknologi informasi demi melahirkan insan-insan kreatif unggul yang siap berkontribusi positif bagi bangsa dan negara.",
    principalVision: "Visi Kami",
    principalVisionText: "Terwujudnya insan pendidikan yang bertaqwa, berprestasi, ramah lingkungan, berdaya saing global, dan berbudaya lokal pada tahun 2030.",
    principalMission: "Misi Kami",
    principalMissionList: [
      "Menyelenggarakan pembelajaran berkualitas berasaskan budi pekerti luhur dan keimanan.",
      "Mengembangkan potensi akademik dan non-akademik siswa secara terpadu dan modern.",
      "Membina kesadaran melestarikan lingkungan hidup dan budaya lokal Tasikmalaya.",
      "Menerapkan tata kelola sekolah yang transparan, akuntabel, dan berbasis teknologi informasi."
    ],

    newsTitle: "Berita & Pengumuman Terbaru",
    newsSubtitle: "Dapatkan informasi terkini seputar kegiatan belajar mengajar, prestasi murid, dan edaran penting sekolah.",
    newsSearchPlaceholder: "Cari berita atau pengumuman...",
    newsFilterAll: "Semua",
    newsFilterNews: "Berita Kegiatan",
    newsFilterAnnouncement: "Pengumuman",
    newsFilterAchievement: "Prestasi Siswa",
    newsReadTime: "Menit Baca",
    newsNoResults: "Tidak ada berita atau pengumuman yang sesuai kata kunci.",

    facilitiesTitle: "Fasilitas Belajar & Pendukung",
    facilitiesSubtitle: "Guna menunjang efektivitas belajar-mengajar, sekolah menyediakan beragam ruang penunjang modern, higienis, dan ramah anak.",
    facilityViewDetails: "Lihat Detail Fasilitas",
    facilityCloseDetails: "Tutup Detail",
    facilityFeatureLabel: "Fasilitas Unggulan:",

    extracurricularsTitle: "Pengembangan Diri & Ekstrakurikuler",
    extracurricularsSubtitle: "Wadah penyaluran bakat, kepemimpinan, dan kreativitas guna membentuk generasi berkarakter unggul.",
    extraActiveMembers: "Anggota Aktif",
    extraScheduleLabel: "Jadwal Latihan:",

    admissionTitle: "Penerimaan Peserta Didik Baru (PPDB)",
    admissionSubtitle: "Bergabunglah bersama keluarga besar SMPN 1 Bantarkalong untuk mengukir masa depan gemilang.",
    admissionStep1: "1. Pendaftaran Online",
    admissionStep1Desc: "Isi data diri dan unggah berkas kelengkapan melalui portal resmi PPDB daerah.",
    admissionStep2: "2. Verifikasi Data",
    admissionStep2Desc: "Tim panitia memverifikasi dokumen syarat zonasi, prestasi, otentisitas, dan afirmasi.",
    admissionStep3: "3. Pengumuman Kelulusan",
    admissionStep3Desc: "Pengumuman hasil seleksi dirilis secara terbuka melalui website PPDB dan papan sekolah.",
    admissionStep4: "4. Daftar Ulang",
    admissionStep4Desc: "Siswa yang diterima melakukan daftar ulang langsung ke sekolah membawa dokumen fisik.",
    admissionCTALabel: "Unduh Pamflet PPDB PDF",
    admissionStatusLabel: "Status PPDB: Sedang Berlangsung!",

    contactTitle: "Hubungi Layanan Informasi",
    contactSubtitle: "Ada pertanyaan atau ingin melakukan studi banding? Silakan kirimkan pesan langsung melalui formulir di bawah ini.",
    contactFormName: "Nama Lengkap",
    contactFormEmail: "Alamat Email / Nomor WhatsApp",
    contactFormSubject: "Perihal",
    contactFormMessage: "Isi Pesan Anda",
    contactFormSend: "Kirim Pesan Layanan",
    contactFormSending: "Mengirimkan...",
    contactFormSuccess: "Pesan Anda berhasil dikirim! Tim Humas sekolah akan menghubungi Anda segera melalui WhatsApp atau Email.",
    contactFormError: "Harap isi semua kolom formulir dengan benar.",
    contactInfoLabel: "Detail Kontak",
    contactAddressLabel: "Alamat Sekolah",
    contactAddressText: "Jl. Raya Karangnunggal KM. 18, Desa Bantarkalong, Kecamatan Bantarkalong, Kabupaten Tasikmalaya, Jawa Barat, Kode Pos 46187",
    contactPhoneLabel: "Telepon / WA Humas",
    contactEmailLabel: "Email Resmi",
    contactHoursLabel: "Hari & Jam Layanan",
    contactHoursText: "Senin - Sabtu | 07:00 - 14:00 WIB",

    copyrightText: "Hak Cipta Terpelihara © 2026 SMPN 1 Bantarkalong. Dikembangkan untuk transparansi publik dan kemudahan informasi sekolah.",
    footerLinksHeader: "Tautan Penting",
    footerResourcesHeader: "Portal Internal"
  },
  en: {
    navHome: "Home",
    navAbout: "Profile",
    navNews: "News & Announcements",
    navFacilities: "Facilities",
    navExtracurriculars: "Extracurriculars",
    navContact: "Contact Us",
    navAdmission: "Admissions",

    schoolSubName: "State Junior High School 1 Bantarkalong",
    schoolSlogan: "Outstanding in Achievement, Multi-Talented Character & Noble Morals",
    schoolDescription: "Shaping the golden generation of Indonesia to be intelligent, highly integral, productive, and strongly rooted in the values of mutual cooperation and noble etiquette since 1982.",
    heroCTAQuickTour: "Explore Campus",
    heroCTAAdmission: "Admissions Info",

    statStudents: "720+ Students",
    statStudentsDesc: "Active Students",
    statTeachers: "45 Teachers & Staff",
    statTeachersDesc: "Qualified Educators",
    statExtracurriculars: "14 Activities",
    statExtracurricularsDesc: "Talent Development",
    statAccreditation: "A Accredited",
    statAccreditationDesc: "National Outstanding Grade",

    principalTitle: "Principal's Welcome Address",
    principalName: "Drs. H. Ahmad Saepudin, M.Pd.",
    principalMessage: "Welcome to the official information portal of SMPN 1 Bantarkalong. As one of the leading state junior high schools in South Tasikmalaya, we are committed to providing a conducive, inclusive, and modern technology-guided learning environment to develop creative, outstanding citizens prepared to contribute positively to the nation and the world.",
    principalVision: "Our Vision",
    principalVisionText: "To cultivate highly pious, outstanding, environment-friendly, globally competitive, and locally rooted educational individuals by 2030.",
    principalMission: "Our Mission",
    principalMissionList: [
      "Deliver premium quality learning anchored in noble virtues and strong religious values.",
      "Inculcate academic and non-academic potentials synergistically utilizing up-to-date methods.",
      "Foster eco-friendliness and safeguard West Javanese and national cultural heritages.",
      "Apply transparent, accountable school management using state-of-the-art information systems."
    ],

    newsTitle: "Latest News & Announcements",
    newsSubtitle: "Stay informed about learning activities, student achievements, and critical circulars.",
    newsSearchPlaceholder: "Search news or circulars...",
    newsFilterAll: "All",
    newsFilterNews: "Activities",
    newsFilterAnnouncement: "Announcements",
    newsFilterAchievement: "Achievements",
    newsReadTime: "Min Read",
    newsNoResults: "No news matching search keyword.",

    facilitiesTitle: "Learning & Supporting Facilities",
    facilitiesSubtitle: "To optimize teaching effectiveness, the school offers diverse modern, highly hygienic, and child-friendly spaces.",
    facilityViewDetails: "View Details",
    facilityCloseDetails: "Close Details",
    facilityFeatureLabel: "Premium Features Included:",

    extracurricularsTitle: "Talent & Extracurricular Development",
    extracurricularsSubtitle: "Dedicated platforms for nurturing talent, sportsmanship, and leadership qualities.",
    extraActiveMembers: "Active Members",
    extraScheduleLabel: "Schedule:",

    admissionTitle: "New Student Admission (PPDB)",
    admissionSubtitle: "Join the big family of SMPN 1 Bantarkalong and craft your bright future.",
    admissionStep1: "1. Online Registration",
    admissionStep1Desc: "Register your accounts and upload complete documents on the local PPDB web portal.",
    admissionStep2: "2. Document Validation",
    admissionStep2Desc: "The school committee reviews and verifies your zoning, legacy, and affirmative documents.",
    admissionStep3: "3. Selection Announcement",
    admissionStep3Desc: "Look up results publicly online or on the school information notice board.",
    admissionStep4: "4. Physical Verification",
    admissionStep4Desc: "Admitted students submit their original documents physically to complete enrollment.",
    admissionCTALabel: "Download Admission Guidelines (PDF)",
    admissionStatusLabel: "Admissions Status: Active!",

    contactTitle: "Information Service Desk",
    contactSubtitle: "Have questions or planning a benchmark visit? Send a message directly via the contact form below.",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address / WhatsApp No",
    contactFormSubject: "Subject",
    contactFormMessage: "Your Message Content",
    contactFormSend: "Send Message Now",
    contactFormSending: "Sending...",
    contactFormSuccess: "Message transmitted successfully! Our Public Relations team will contact you back via WhatsApp/Email shortly.",
    contactFormError: "Please ensure all fields are filled accurately.",
    contactInfoLabel: "Contact Details",
    contactAddressLabel: "School Address",
    contactAddressText: "Jl. Raya Karangnunggal KM. 18, Bantarkalong Village, Bantarkalong District, Tasikmalaya Regency, West Java, Indonesia, Zip Code 46187",
    contactPhoneLabel: "PR Phone / WhatsApp",
    contactEmailLabel: "Official Email Address",
    contactHoursLabel: "Service Hours",
    contactHoursText: "Monday - Saturday | 07:00 AM - 02:00 PM WIB",

    copyrightText: "Copyright © 2026 SMPN 1 Bantarkalong. Built for public accessibility, transparency, and education information dissemination.",
    footerLinksHeader: "Quick Links",
    footerResourcesHeader: "Internal Portals"
  }
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "news-1",
    titleId: "SMPN 1 Bantarkalong Sabet Juara Umum Lomba Pramuka Tingkat Kabupaten",
    titleEn: "SMPN 1 Bantarkalong Wins General Champion at Regency Scout Competition",
    contentId: "Regu Penggalang putra dan putri SMPN 1 Bantarkalong berhasil meraih juara umum dalam komite kepramukaan tahunan Kabupaten Tasikmalaya. Kerja keras latihan fisik, teknik pertolongan pertama, serta sandi Morse membuahkan hasil luar biasa yang mengharumkan nama sekolah.",
    contentEn: "The scouts' boys and girls teams of SMPN 1 Bantarkalong successfully secured the General Championship at the Tasikmalaya Regency Scouts Competition. Consistent physical drills, first-aid techniques, and Morse code expertise paved the way for this triumph.",
    date: "2026-06-15",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    readTimeId: "4",
    readTimeEn: "4"
  },
  {
    id: "news-2",
    titleId: "Informasi Pembagian Rapor Semester Genap Tahun Ajaran 2025/2026",
    titleEn: "Circular: Academic Report Assessment Distribution for Spring Semester",
    contentId: "Diberitahukan kepada seluruh orang tua siswa kelas VII, VIII, dan IX bahwa pembagian rapor semester genap akan dilaksanakan pada Sabtu, 20 Juni 2026. Kehadiran orang tua/wali sangat diwajibkan untuk mendiskusikan kemajuan karakter siswa bersama guru kelas.",
    contentEn: "We inform all parents and guardians of Grade VII, VIII, and IX students that progress report cards will be distributed on Saturday, June 20, 2026. Parents are highly encouraged to attend for teacher consultations regarding student character development.",
    date: "2026-06-12",
    category: "announcement",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    readTimeId: "3",
    readTimeEn: "3"
  },
  {
    id: "news-3",
    titleId: "Peluncuran Lab Bahasa Terpadu untuk Mendukung Literasi Digital Siswa",
    titleEn: "Inauguration of Digital Language Lab to Spark Student Digital Literacy",
    contentId: "Sekolah secara resmi meluncurkan fasilitas Lab Bahasa dengan 40 komputer berspesifikasi mutakhir dan sistem audio berkualitas. Fasilitas ini didedikasikan untuk memperlancar pembelajaran bahasa Inggris dan latihan listening mandiri.",
    contentEn: "The school officially launched a digital Language Lab fitted with 40 high-performance computer terminals and individual audio headsets. This platform supports adaptive English listening drills and speech practices.",
    date: "2026-06-05",
    category: "news",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    readTimeId: "5",
    readTimeEn: "5"
  },
  {
    id: "news-4",
    titleId: "Prestasi Gemilang: Juara 1 Olimpiade Matematika (OSN) Tingkat Priangan Timur",
    titleEn: "Outstanding Achievement: 1st Winner of OSN Mathematics Olympiad",
    contentId: "Siswa berbakat kita, Muhammad Syarifuddin dari Kelas IX-A, berhasil menduduki podium peringkat pertama pada Olimpiade Sains Nasional (OSN) Matematika tingkat Priangan Timur. Syarifuddin akan mewakili Tasikmalaya di tingkat Provinsi Jawa Barat.",
    contentEn: "Our outstanding student, Muhammad Syarifuddin of Class IX-A, secured 1st place in the prestigious OSN Mathematics Olympiad at East Priangan. Syarifuddin will advance to represent Tasikmalaya at the West Java provincial level.",
    date: "2026-05-28",
    category: "achievement",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    readTimeId: "3",
    readTimeEn: "3"
  },
  {
    id: "news-5",
    titleId: "Edukasi Peduli Lingkungan: Penanaman 100 Pohon di Lingkungan Sekitar Sekolah",
    titleEn: "Eco-Education: Tree Planting Drive Injects 100 Seedlings in Neighborhood",
    contentId: "Menyambut Hari Lingkungan Hidup Sedunia, OSIS SMPN 1 Bantarkalong bekerja sama dengan Dinas Kehutanan lokal mengadakan aksi penanaman pohon. Siswa belajar mencintai ekosistem dan mengasah tanggung jawab sosial seputar keberlanjutan bumi.",
    contentEn: "In observance of World Environment Day, the student council worked hand-in-hand with the local Forestry Agency to plant 100 seedlings. Students gained insights on environmental care, climate action, and natural systems stewardship.",
    date: "2026-05-21",
    category: "news",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    readTimeId: "4",
    readTimeEn: "4"
  },
  {
    id: "news-6",
    titleId: "Alur Pembelian Seragam Siswa Baru Tahun Pelajaran Baru 2026",
    titleEn: "Circular: Distribution Process and Fitting of Academic Uniforms for 2026 Intakes",
    contentId: "Koperasi sekolah membuka pendaftaran pengukuran ukuran dan pemesanan seragam batik, kemeja putih, pramuka, dan olahraga khusus siswa baru. Distribusi seragam dilakukan secara tertib guna menghindari antrean panjang orang tua.",
    contentEn: "School cooperative launches measurement slots and ordering protocols for batik, white-navy, scout, and physical garments. Grouped schedules are shared widely to avert crowd bottlenecks at the school site.",
    date: "2026-05-15",
    category: "announcement",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    readTimeId: "3",
    readTimeEn: "3"
  }
];

export const MOCK_FACILITIES: FacilityItem[] = [
  {
    id: "fac-1",
    nameId: "Laboratorium Komputer Sempurna",
    nameEn: "Digital Computer Laboratory",
    descriptionId: "Ruangan ber-AC yang dilengkapi 36 PC Core-i5, koneksi internet serat optik dedicated, proyektor nirkabel, dan perangkat lunak pemrograman interaktif guna menunjang kelas Informatika siswa.",
    descriptionEn: "Refurbished air-conditioned laboratory housing 36 computer terminals with fibre internet networks, smart wireless presentation units, and software packages support for ICT classes.",
    iconName: "Monitor",
    featuresId: ["AC Penyejuk Ruangan", "Akses Serat Optik 100 Mbps", "Lisensi Software Legal", "Ujian Nasional Berbasis Komputer (UNBK) Standard"],
    featuresEn: ["Air-Conditioned Comfort", "Dedicated 100 Mbps Fibre", "Licensed Educational Suites", "UNBK Certification Standards"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-2",
    nameId: "Perpustakaan 'Widya Mandala'",
    nameEn: "Widya Mandala Library Hub",
    descriptionId: "Memiliki koleksi lebih dari 7.000 judul pustaka mulai dari buku pelajaran resmi, ensiklopedia pengetahuan, novel fiksi inspiratif, hingga pojok baca digital dengan gawai pintar penunjang literasi.",
    descriptionEn: "Shelving over 7,000 prints encompassing academic textbooks, scientific encyclopedias, children classics, and an interactive digital corner containing curated reading tablets.",
    iconName: "BookOpen",
    featuresId: ["Pojok Baca Lesehan Nyaman", "E-Journal & Buku Digital", "Sistem Peminjaman Komputerisasi", "Ruang Diskusi Panel"],
    featuresEn: ["Cozy Floor Reading Mats", "E-Journal & Digital Assets", "Computerized Lending System", "Panel Discussion Pods"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-3",
    nameId: "Laboratorium Ilmu Pengetahuan Alam (IPA)",
    nameEn: "General Sciences Laboratory",
    descriptionId: "Dilengkapi dengan mikroskop elektrik monokuler, ratusan preparat biologi, alat peraga sains fisik dasar, serta sarana keselamatan laboratorium modern demi keamanan eksperimen.",
    descriptionEn: "Featuring monocular electrical microscopes, biology slide preparates, physics mechanical demonstration units, and chemical safety equipment supporting inquiry-driven labs.",
    iconName: "Beaker",
    featuresId: ["Set Lengkap Alat Praktikum Kimia & Fisika", "Preparat Organik & Hewan", "Aturan K3 Laboratorium Terpantau", "Sink Cuci Bersih Berlimpah"],
    featuresEn: ["Fully Equipped Chemistry & Physics Kits", "Organic & Animal Preparates", "Robust Safety Systems", "Dedicated Wash Sinks"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-4",
    nameId: "Lapangan Olahraga & Seni Multi-Guna",
    nameEn: "Multi-Purpose Sports Court",
    descriptionId: "Fasilitas terbuka yang dipugar rapi dengan garis batas multifungsi untuk pertandingan Basket, Voli, Futsal, dan latihan upacara bendera mingguan yang teduh dengan rindangnya pepohonan.",
    descriptionEn: "Well-paved court hosting markings for competitive basketball matches, badminton, volleyball drills, and weekly flag ceremonial drills beneath perimeter tree canopies.",
    iconName: "Dribbble",
    featuresId: ["Ring Basket Portabel Handal", "Tiang Voli & Futsal Standar", "Tribun Penonton Teduh", "Taman Perimeter Hijau Nyaman"],
    featuresEn: ["Quality Portable Basketball Rings", "Official Volley Nets & Goals", "Shaded Audience Benches", "Lush Perimeter Tree Gardens"],
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-5",
    nameId: "Masjid 'Babul Ilmi'",
    nameEn: "Babul Ilmi Mosque",
    descriptionId: "Tempat ibadah yang bersih dan luas, menjadi pusat pembinaan mental spiritual siswa melalui sholat Dhuhur berjamaah, mentoring keagamaan, serta kajian rohani Islam berkala.",
    descriptionEn: "Sizable, serene place of worship. Serves as a sanctuary for spiritual development through congregational prayers, character mentoring, and religious events.",
    iconName: "Compass",
    featuresId: ["Kapasitas Hingga 400 Jemaah", "Tempat Wudhu Terpisah yang Rapi", "Sistem Suara Akustik Jernih", "Perpustakaan Kitab Islam Makmur"],
    featuresEn: ["Sits up to 400 Worshippers", "Clean Separate Ablution Bays", "Excellent Pristine Sound System", "Curated Islamic Scripture Shelf"],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-6",
    nameId: "Studio Kesenian & Musik Kebudayaan",
    nameEn: "Performing Arts & Music Studio",
    descriptionId: "Wadah pelestarian gamelan khas Sunda, angklung Jawa Barat, serta set alat musik modern seperti gitar akustik, drum, dan keyboard dalam ruangan kedap suara.",
    descriptionEn: "Sanctuary for traditional West Javanese gamelan, angklung ensembles, along with modern acoustic guitars, drums, and keyboards within acoustic soundproofed space.",
    iconName: "Music",
    featuresId: ["Gamelan Sunda Lengkap", "Instrumen Angklung Bambu Premium", "Sound System 2000W Tangguh", "Peralatan Teater Lengkap"],
    featuresEn: ["Full Traditional Gamelan Sets", "Premium Bamboo Angklung Sets", "Active 2000W Audio Equipment", "Drama & Theatre Equipment Assets"],
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"
  }
];

export const MOCK_EXTRACURRICULARS: Extracurricular[] = [
  {
    id: "ex-1",
    nameId: "Pramuka Inti (Gugus Depan)",
    nameEn: "Royal Scouts (GUDEP)",
    descriptionId: "Sebagai pilar pembentukan karakter wajib, Pramuka memperlatih kemandirian, survival skill, navigasi darat, kepanduan, dan kerelawanan tanggap bencana.",
    descriptionEn: "As our cornerstone program, the Scouts teach students life skills, woodcraft, emergency response, wilderness navigation, and citizenship values.",
    iconName: "Compass",
    scheduleId: "Rabu & Sabtu, 14:00 - 16:00 WIB",
    scheduleEn: "Wednesday & Saturday, 02:00 - 04:00 PM",
    bannerColor: "bg-amber-600 text-white"
  },
  {
    id: "ex-2",
    nameId: "PMR & Unit Kesehatan Remaja",
    nameEn: "Youth Red Cross & Health Unit",
    descriptionId: "Membina kecakapan pemberian pertolongan pertama, donor darah, hidup bersih sehat, dan pengabdian masyarakat di bawah arahan PMI.",
    descriptionEn: "Instructing emergency resuscitation, community wellness, physical care, healthcare protocols, and empathy under Red Cross principles.",
    iconName: "HeartPulse",
    scheduleId: "Kamis, 14:00 - 15:30 WIB",
    scheduleEn: "Thursday, 02:00 - 03:30 PM",
    bannerColor: "bg-rose-600 text-white"
  },
  {
    id: "ex-3",
    nameId: "Klub Olahraga Bola (KOBAL)",
    nameEn: "Futsal & Football Club",
    descriptionId: "Fokus pada peningkatan ketahanan fisik, kerja sama regu, teknik taktis sepak bola, serta pembinaan mental olahraga yang sportif dalam turnamen.",
    descriptionEn: "Honing strategic moves, ball dribbling, physical condition, team synergy, and absolute sportsmanship to contest in high school leagues.",
    iconName: "Trophy",
    scheduleId: "Selasa & Jumat, 15:30 - 17:00 WIB",
    scheduleEn: "Tuesday & Friday, 03:30 - 05:00 PM",
    bannerColor: "bg-teal-600 text-white"
  },
  {
    id: "ex-4",
    nameId: "English Speaking & Debate Union",
    nameEn: "English Speaking & Debate Club",
    descriptionId: "Mendorong kecakapan pidato bahasa Inggris, teknik debat formal parlemen, persiapan TOEFL anak, dan keterampilan public speaking yang memukau audiens.",
    descriptionEn: "Elevating speech articulation, logic structuring, world affairs debate systems, and basic TOEFL preparedness to enhance conversational confidence.",
    iconName: "MessageCircle",
    scheduleId: "Senin, 14:00 - 15:30 WIB",
    scheduleEn: "Monday, 02:00 - 03:30 PM",
    bannerColor: "bg-indigo-600 text-white"
  },
  {
    id: "ex-5",
    nameId: "Paskibra (Pasukan Pengibar Bendera)",
    nameEn: "Elite Flag Raising Regiment",
    descriptionId: "Menanamkan nilai patriotisme yang teguh, disiplin tingkat tinggi, latihan PBB (Peraturan Baris Berbaris) fisik yang prima demi upacara resmi kenegaraan.",
    descriptionEn: "Inculcating firm discipline, physical stamina, synchronization, patriotism, and structured parade maneuvers for national official ceremonies.",
    iconName: "Shield",
    scheduleId: "Kamis & Sabtu, 15:00 - 17:00 WIB",
    scheduleEn: "Thursday & Saturday, 03:00 - 05:00 PM",
    bannerColor: "bg-blue-600 text-white"
  },
  {
    id: "ex-6",
    nameId: "Seni Suara & Musik Tradisional",
    nameEn: "Ensemble Choir & Folk Music",
    descriptionId: "Menyalurkan hasrat bermusik dalam wadah paduan suara sekolah dan orkes angklung tradisional Sunda, mengisi upacara dan pementasan seni daerah.",
    descriptionEn: "A vibrant home for classical choral performance and folk music ensembles that represent indigenous Sundanese culture on state-wide festivals.",
    iconName: "Tv",
    scheduleId: "Jumat, 14:00 - 16:00 WIB",
    scheduleEn: "Friday, 02:00 - 04:00 PM",
    bannerColor: "bg-purple-600 text-white"
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sri Rahayu, S.Pd.",
    roleId: "Alumni Angkatan 1998, Sekarang Mengajar",
    roleEn: "Alumna Class of 1998, Now Teacher",
    quoteId: "SMPN 1 Bantarkalong bukan sekadar almamater bagi saya, melainkan keluarga besar yang membentuk karakter tangguh. Saya sangat bangga kini dapat mengabdi kembali sebagai guru mendidik adik-adik tercinta.",
    quoteEn: "SMPN 1 Bantarkalong is not just an alma mater for me, but a great family that shaped my resilience. I am incredibly proud to serve my local community back here as an official educator.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t-2",
    name: "Denden Hermawan",
    roleId: "Ketua Komite & Tokoh Masyarakat",
    roleEn: "Committee Chair & Community Leader",
    quoteId: "Kami melihat perkembangan yang luar biasa dalam adaptasi teknologi sekolah semenjak satu dekade terakhir. Disiplin siswa terjaga dengan harmonis di bawah asuhan guru yang ikhlas.",
    quoteEn: "We witness highly remarkable modern technology adoptions in this academy during the last decade. Student character is exceptionally nurtured under caring educators.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t-3",
    name: "Almira Nurul Husna",
    roleId: "Ketua OSIS Periode 2025/2026",
    roleEn: "Student Council Chairwoman 2025/2026",
    quoteId: "Sekolah ini sangat merayakan bakat setiap murid. Melalui organisasi OSIS dan ekskul, saya belajar mengorganisasi agenda besar, melatih kerja sama, dan berani bersuara di depan umum.",
    quoteEn: "The school heavily celebrates the potential of every pupil. Representing the student council and clubs, I acquired project management skills, team coordination, and speech confidence.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  }
];
