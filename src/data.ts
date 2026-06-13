export interface Room {
  id: string;
  name: string;
  status: "Tersedia" | "Penuh";
  price: number;
  priceFormatted: string;
  subtitle: string;
  type: string;
  specifications: {
    ukuran: string;
    kasur: string;
    lemari: string;
    meja: string;
    kipas: string;
    kamarMandi: string;
    listrik: string;
    lainnya: string;
  };
  images: string[];
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

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface BookingStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

export interface Advantage {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const advantagesData: Advantage[] = [
  {
    id: 1,
    title: "Dekat UNDIP",
    desc: "Hanya 5 menit berkendara menuju kampus PSDKU UNDIP Batang.",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "Kasur, Lemari, Kipas",
    desc: "Kamar siap huni dengan springbed premium, lemari pakaian, dan kipas angin.",
    icon: "Bed"
  },
  {
    id: 3,
    title: "Free Wi-Fi",
    desc: "Koneksi internet Wi-Fi serat optik berkecepatan tinggi gratis tanpa batas kuota.",
    icon: "Wifi"
  },
  {
    id: 4,
    title: "Free PDAM",
    desc: "Gratis biaya pemakaian air PDAM artetis yang bersih, jernih, dan lancar.",
    icon: "Droplet"
  },
  {
    id: 5,
    title: "Dapur Bersama",
    desc: "Akses fasilitas dapur bersama bersih untuk kebutuhan memasak harian.",
    icon: "Utensils"
  },
  {
    id: 6,
    title: "Parkiran Luas",
    desc: "Area parkir kendaraan roda dua dan roda empat yang luas dan aman.",
    icon: "Car"
  },
  {
    id: 7,
    title: "Tempat Bersih",
    desc: "Lingkungan kost yang bersih, rapi, tenang, dan terawat secara berkala.",
    icon: "Sparkles"
  },
  {
    id: 8,
    title: "Free Refill Air",
    desc: "Gratis isi ulang air minum galon higienis dari dispenser komunal.",
    icon: "GlassWater"
  },
  {
    id: 9,
    title: "Free Refill Sabun",
    desc: "Gratis isi ulang sabun mandi cair yang disediakan di kamar mandi umum.",
    icon: "ShowerHead"
  },
  {
    id: 10,
    title: "CCTV 24 Jam",
    desc: "Keamanan kost terjamin dengan pengawasan CCTV nonstop selama 24 jam.",
    icon: "Video"
  }
];

export const roomsData: Room[] = [
  {
    id: "KM-01",
    name: "Kamar 01",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Kamar rapi bersih dengan ventilasi maksimal",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-02",
    name: "Kamar 02",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Kamar rapi bersih dengan gorden blackout modern",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-03",
    name: "Kamar 03",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Interior minimalis nyaman dengan view timur sejuk",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-04",
    name: "Kamar 04",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Kamar ergonomis dengan pencahayaan alami melimpah",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-05",
    name: "Kamar 05",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Tenang, bebas bising dari jalan raya utama untuk fokus belajar",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-06",
    name: "Kamar 06",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Akses cepat ke area jemuran dan rooftop bersama",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-07",
    name: "Kamar 07",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Sirkulasi udara segar nan asri menyehatkan",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-08",
    name: "Kamar 08",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Desain modern, tenang, dan tertata rapi estetis",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-09",
    name: "Kamar 09",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Kamar pojok sejuk bebas kebisingan",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  },
  {
    id: "KM-10",
    name: "Kamar 10",
    status: "Tersedia",
    price: 850000,
    priceFormatted: "Rp 850.000",
    subtitle: "Tipe Deluxe Premium - Double window view dengan intensitas sirkulasi udara superior",
    type: "Cowo-Cewe",
    specifications: {
      ukuran: "3 x 3.5 Meter",
      kasur: "Single Springbed Comfort Premium",
      lemari: "Lemari Pakaian 2 Pintu + Cermin",
      meja: "Meja Belajar Minimalis & Kursi Nyaman",
      kipas: "Kipas Angin Dinding Remote Control",
      kamarMandi: "Kamar Mandi Dalam (Shower, Kloset Duduk, Jetshower)",
      listrik: "Token Listrik 900W Sendiri",
      lainnya: "Gantungan Baju, Cermin, & Gorden Blackout"
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=600&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=600&q=80"
    ]
  }
];

export const bookingSteps: BookingStep[] = [
  {
    step: 1,
    title: "Pilih Kamar Idaman",
    desc: "Lihat katalog 10 kamar kami di bawah, perhatikan status ketersediaan serta spesifikasi di detail tombol.",
    icon: "search"
  },
  {
    step: 2,
    title: "Tentukan Tanggal Masuk",
    desc: "Klik 'Detail & Booking' pada kamar yang siap huni. Isikan perkiraan tanggal mulai sewa/masuk kos pada form yang disediakan.",
    icon: "calendar"
  },
  {
    step: 3,
    title: "Booking via WhatsApp",
    desc: "Tekan tombol booking WhatsApp di dalam modal. Sistem akan meluncurkan web/aplikasi WhatsApp dengan format pesan otomatis yang rapi.",
    icon: "message-square"
  },
  {
    step: 4,
    title: "Survei & Konfirmasi",
    desc: "Pengelola akan menyambut Anda di lokasi tumbrep/bandar untuk serah terima DP, peninjauan fisik kamar, serta pemberian kunci masuk resmi.",
    icon: "key"
  }
];

export const faqList: FAQItem[] = [
  {
    id: 1,
    question: "Apakah Kos Lievi ini kos cowo-cewe?",
    answer: "Ya, Kos Lievi merupakan kos cowo-cewe tertib. Kami menerima mahasiswa putra maupun mahasiswi putri. Setiap penghuni wajib menaati tata tertib keamanan, kesopanan, dan jam tenang demi kenyamanan belajar bersama."
  },
  {
    id: 2,
    question: "Bagaimana sistem kelistrikan di dalam kamar?",
    answer: "Setiap kamar dilengkapi dengan meteran token listrik sendiri (900W hingga 1300W). Anda dapat membeli pulsa token listrik secara mandiri sesuai dengan pemakaian alat elektronik pribadi Anda (seperti laptop atau dispenser pribadi)."
  },
  {
    id: 3,
    question: "Seberapa dekat lokasi Kos Lievi ke Kampus UNDIP PSDKU Batang?",
    answer: "Sangat dekat! Lokasi kami terletak hanya sekitar 5 menit berkendara / sekitar 1.8 KM dari Kampus PSDKU Universitas Diponegoro di Batang. Lokasi yang strategis di kawasan Mulyo Tumbrep Bandar, bebas macet dan aman."
  },
  {
    id: 4,
    question: "Apakah harga sewa bulanan sudah termasuk fasilitas internet Wi-Fi?",
    answer: "Ya! Harga sewa kamar bulanan sudah gratis fasilitas internet Wi-Fi berkecepatan tinggi unlimited (tanpa FUP). Kami memiliki router nirkabel di setiap lantai agar sinyal tetap stabil untuk kebutuhan belajar, streaming, maupun video-call kuliah Anda."
  },
  {
    id: 5,
    question: "Bagaimanakah sistem pembayaran dan uang jaminan sewa?",
    answer: "Pembayaran dilakukan di awal setiap bulannya melalui transfer bank atau tunai kepada pengelola. Anda juga bisa menanyakan diskon sewa menarik jika melakukan pembayaran langsung untuk periode 6 bulan atau 1 tahun penuh."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmad Rizky",
    role: "Mahasiswa D3 Administrasi",
    origin: "UNDIP PSDKU Batang",
    content: "Kos Lievi beneran deket banget dari kampus, cuma butuh waktu 5 menit naik motor langsung nyampe kelas. Fasilitas kamar mandinya bersih banget, internetnya kenceng pol buat nugas malem-malem. Manajemennya juga friendly dan tertib.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    name: "Clarissa Shafa",
    role: "Mahasiswi S1 Humas",
    origin: "UNDIP PSDKU Batang",
    content: "Sebagai mahasiswi rantau, saya merasa beruntung dapet kamar di Kos Lievi. Kos cowo-cewe di sini sangat aman, gerbang selalu terkunci rapi, lingkungannya tenang gak berisik kendaraan. Kamar adem dan kasur springbed-nya premium bikin tidur nyenyak.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    name: "Bagus Setiawan",
    role: "Staf Administrasi Kampus",
    origin: "Bandar Batang",
    content: "Saya menyewa kamar di Kos Lievi. Kamarnya luas banget, ada furniture lengkap juga buat kenyamanan pulang kerja. Lokasinya asri di Tumbrep Bandar, suasananya sejuk dan aliran air artetisnya bersih banget gak pernah mampet.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  }
];
