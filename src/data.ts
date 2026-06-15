// =============================================================================
// INTERFACES
// =============================================================================

export interface Room {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  subtitle: string;
  type: string;
  specifications: string[];
  images: string[];
}

export interface Advantage {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface BookingStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  origin: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface RentalPackage {
  label: string;
  value: string;
}

export interface ImportantNote {
  id: number;
  text: string;
}

// =============================================================================
// CONSTANTS — dipakai di komponen modal
// =============================================================================

/** Jumlah pilihan nomor kamar di form booking */
export const ROOM_COUNT = 10;

/** Daftar paket sewa */
export const rentalPackages: RentalPackage[] = [
  { label: "1 Hari (Rp 100.000)",    value: "1 Hari (Rp 100.000)" },
  { label: "1 Bulan (Rp 750.000)",   value: "1 Bulan (Rp 750.000)" },
  { label: "3 Bulan (Rp 2.250.000)", value: "3 Bulan (Rp 2.250.000)" },
  { label: "6 Bulan (Rp 4.500.000)", value: "6 Bulan (Rp 4.500.000)" },
  { label: "1 Tahun (Rp 9.000.000)", value: "1 Tahun (Rp 9.000.000)" },
];

/** Catatan penting di bagian bawah galeri foto modal */
export const importantNotes: ImportantNote[] = [
  { id: 1, text: "Survei fisik kamar diantar langsung oleh staf representatif." },
  { id: 2, text: "Uang muka / DP booking mengamankan kamar untuk maks 14 hari." },
  { id: 3, text: "Aturan penyerahan jaminan sewa tertulis terlampir di kuitansi sewa." },
];

/** Label setiap baris spesifikasi kamar */
export const specLabels: string[] = [
  "Ukuran",
  "Kasur",
  "Lemari",
  "Belajar",
  "Kipas",
  "KM Mandi",
  "Token",
  "Lainnya",
];

// =============================================================================
// DATA
// =============================================================================

export const roomsData: Room[] = [
  {
    id: "KM-ALL",
    name: "Kamar Kost",
    price: 750000,
    priceFormatted: "Rp 750.000",
    subtitle: "Tipe Premium - Kamar rapi bersih dengan fasilitas lengkap siap huni",
    type: "Cowo-Cewe",
    specifications: [
      "4 x 4 Meter",
      "Single Springbed Comfort Premium",
      "Lemari Pakaian 2 Pintu + Cermin",
      "Meja Belajar Minimalis & Kursi Nyaman",
      "Kipas Angin Dinding Remote Control",
      "Kamar Mandi Dalam",
      "Free Token Listrik",
      "Gantungan Baju, Cermin, & Gorden Blackout",
    ],
    images: [
      "/image/imagekos1.avif",
      "/image/imagekos2.jpeg",
      "/image/imagekos3.jpeg",
      "/image/imagekos4.jpeg",
    ],
  },
];

export const advantagesData: Advantage[] = [
  { id: 1,  title: "Dekat UNDIP",         desc: "Hanya 5 menit berkendara menuju kampus PSDKU UNDIP Batang.",                         icon: "MapPin" },
  { id: 2,  title: "Kasur, Lemari, Kipas", desc: "Kamar siap huni dengan springbed premium, lemari pakaian, dan kipas angin.",        icon: "Bed" },
  { id: 3,  title: "Free Wi-Fi",           desc: "Koneksi internet Wi-Fi serat optik berkecepatan tinggi gratis tanpa batas kuota.",  icon: "Wifi" },
  { id: 4,  title: "Free PDAM",            desc: "Gratis biaya pemakaian air PDAM artetis yang bersih, jernih, dan lancar.",          icon: "Droplet" },
  { id: 5,  title: "Dapur Bersama",        desc: "Akses fasilitas dapur bersama bersih untuk kebutuhan memasak harian.",              icon: "Utensils" },
  { id: 6,  title: "Parkiran Luas",        desc: "Area parkir kendaraan roda dua dan roda empat yang luas dan aman.",                 icon: "Car" },
  { id: 7,  title: "Tempat Bersih",        desc: "Lingkungan kost yang bersih, rapi, tenang, dan terawat secara berkala.",            icon: "Sparkles" },
  { id: 8,  title: "Free Refill Air",      desc: "Gratis isi ulang air minum galon higienis dari dispenser komunal.",                 icon: "GlassWater" },
  { id: 9,  title: "Free Refill Sabun",    desc: "Gratis isi ulang sabun mandi cair yang disediakan di kamar mandi umum.",           icon: "ShowerHead" },
  { id: 10, title: "CCTV 24 Jam",          desc: "Keamanan kost terjamin dengan pengawasan CCTV nonstop selama 24 jam.",              icon: "Video" },
];

export const bookingSteps: BookingStep[] = [
  {
    step: 1,
    title: "Pilih Kamar & Paket",
    desc: "Klik detail pada unit kamar kost, pilih nomor kamar dan jangka waktu/paket sewa yang diinginkan.",
    icon: "search",
  },
  {
    step: 2,
    title: "Tentukan Tanggal Masuk",
    desc: "Isikan perkiraan tanggal mulai sewa/masuk kos pada form yang disediakan di dalam modal detail.",
    icon: "calendar",
  },
  {
    step: 3,
    title: "Booking via WhatsApp",
    desc: "Tekan tombol booking WhatsApp. Sistem akan meluncurkan chat WhatsApp dengan format rincian pesan otomatis yang rapi.",
    icon: "message-square",
  },
  {
    step: 4,
    title: "Survei & Konfirmasi",
    desc: "Pengelola akan menyambut Anda di lokasi untuk serah terima DP, peninjauan fisik kamar, serta pemberian kunci masuk resmi.",
    icon: "key",
  },
];

export const faqList: FAQItem[] = [
  {
    id: 1,
    question: "Apakah Kos Lievi ini kos cowo-cewe?",
    answer: "Ya, Kos Lievi merupakan kos cowo-cewe tertib. Kami menerima mahasiswa putra maupun mahasiswi putri. Setiap penghuni wajib menaati tata tertib keamanan, kesopanan, dan jam tenang demi kenyamanan belajar bersama.",
  },
  {
    id: 2,
    question: "Bagaimana sistem kelistrikan di dalam kamar?",
    answer: "Kabar gembira! Di Kos Lievi, pemakaian listrik/token sudah gratis (Free Token Listrik). Anda tidak perlu memikirkan biaya listrik tambahan untuk alat elektronik standar Anda.",
  },
  {
    id: 3,
    question: "Seberapa dekat lokasi Kos Lievi ke Kampus UNDIP PSDKU Batang?",
    answer: "Sangat dekat! Lokasi kami terletak hanya sekitar 5 menit berkendara / sekitar 1.8 KM dari Kampus PSDKU Universitas Diponegoro di Batang. Lokasi yang strategis di kawasan Mulyo Tumbrep Bandar, bebas macet dan aman.",
  },
  {
    id: 4,
    question: "Apakah harga sewa bulanan sudah termasuk fasilitas internet Wi-Fi?",
    answer: "Ya! Harga sewa kamar bulanan sudah gratis fasilitas internet Wi-Fi berkecepatan tinggi unlimited (tanpa FUP). Kami memiliki router nirkabel di setiap lantai agar sinyal tetap stabil untuk kebutuhan belajar, streaming, maupun video-call kuliah Anda.",
  },
  {
    id: 5,
    question: "Bagaimanakah sistem pembayaran dan jangka waktu sewa?",
    answer: "Kami menawarkan fleksibilitas pembayaran harian, bulanan (1 bulan, 3 bulan, 6 bulan), hingga tahunan. Pembayaran dilakukan di awal melalui transfer bank atau tunai kepada pengelola.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmad Rizky",
    role: "Mahasiswa D3 Administrasi",
    origin: "UNDIP PSDKU Batang",
    content: "Kos Lievi beneran deket banget dari kampus, cuma butuh waktu 5 menit naik motor langsung nyampe kelas. Fasilitas kamar mandinya bersih banget, internetnya kenceng pol buat nugas malem-malem. Manajemennya juga friendly dan tertib.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    id: 2,
    name: "Shafa",
    role: "Mahasiswi S1 Humas",
    origin: "UNDIP PSDKU Batang",
    content: "Sebagai mahasiswi rantau, saya merasa beruntung dapet kamar di Kos Lievi. Kos cowo-cewe di sini sangat aman, gerbang selalu terkunci rapi, lingkungannya tenang gak berisik kendaraan. Kamar adem dan kasur springbed-nya premium bikin tidur nyenyak.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    id: 3,
    name: "Bagus Setiawan",
    role: "Staf Administrasi Kampus",
    origin: "Bandar Batang",
    content: "Saya menyewa kamar di Kos Lievi. Kamarnya luas banget, ada furniture lengkap juga buat kenyamanan pulang kerja. Lokasinya asri di Tumbrep Bandar, suasananya sejuk dan aliran air artetisnya bersih banget gak pernah mampet.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  },
];
