# M. Ato'ulloh — Portfolio

## Struktur Project

```
porto/
├── index.html              ← Halaman utama
├── css/
│   └── style.css           ← Semua styling
├── js/
│   └── main.js             ← Animasi & interaksi
├── assets/
│   ├── img/
│   │   ├── foto.jpg              ✅ Sudah ada (foto profil)
│   │   ├── proj-agronow.jpg      ← Screenshot AgroNow LMS
│   │   ├── proj-superapp.jpg     ← Screenshot SuperApp
│   │   ├── proj-pentest.jpg      ← Screenshot Burp Suite/OWASP ZAP
│   │   ├── proj-idfarm.jpg       ← Screenshot ID Farm
│   │   └── proj-poverty.jpg      ← Screenshot PT Kebul Jaya
│   └── pdf/
│       ├── cv.pdf                ✅ Sudah ada (CV lengkap)
│       ├── porto-sementara.pdf   ← Taruh Porto_Sementara.pdf di sini
│       ├── sertif-bnsp.pdf       ← Sertifikat BNSP
│       ├── sertif-codepolitan.pdf ← Sertifikat Codepolitan
│       ├── sertif-google.pdf     ← Sertifikat Google/Coursera
│       └── sertif-idn.pdf        ← Sertifikat IDN
└── README.md
```

## Cara Tambah Thumbnail Screenshot Proyek

1. Screenshot halaman proyeknya
2. Rename sesuai nama file di atas (misal `proj-agronow.jpg`)
3. Taruh di `assets/img/`
4. Buka `index.html`, cari proyek yang bersangkutan
5. Hapus `<div class="proj-visual-placeholder">🎓</div>`
6. Uncomment tag `<img ...>` di atasnya

## Cara Tambah PDF Sertifikat

1. Rename file PDF sertifikat sesuai nama di atas
2. Taruh di folder `assets/pdf/`
3. Klik sertifikat di web akan otomatis terbuka

## Cara Tambah Porto PDF

1. Rename `Porto_Sementara.pdf` → `porto-sementara.pdf`
2. Taruh di `assets/pdf/`
3. Semua link "LIHAT DETAIL DI PORTFOLIO PDF" akan otomatis terhubung

## Deploy ke Vercel

```bash
git init
git add .
git commit -m "Portfolio v2 - with photo & projects"
# Push ke GitHub via VS Code Source Control
# Import repo di vercel.com → Framework: Other → Deploy
```
