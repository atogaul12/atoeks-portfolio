# M. Ato'ulloh — Portofolio

Website portofolio pribadi dengan tema Sci-Fi / Space.

## Struktur Proyek

```
portfolio/
├── index.html              ← Halaman utama (edit konten di sini)
├── css/
│   └── style.css           ← Semua styling (warna, layout, font, dll)
├── js/
│   └── main.js             ← Starfield, scroll reveal, active nav
├── assets/
│   ├── img/
│   │   ├── foto.jpg        ← Taruh foto profil di sini
│   │   ├── proj-pentest.jpg    ← Screenshot proyek 1
│   │   ├── proj-poverty.jpg    ← Screenshot proyek 2
│   │   ├── proj-idfarm.jpg     ← Screenshot proyek 3
│   │   └── proj-lms.jpg        ← Screenshot proyek 4
│   └── cv.pdf              ← Taruh file CV di sini
├── context/                ← Dokumentasi proyek & panduan AI
└── README.md
```

## Cara Upload Foto Profil

1. Taruh file foto di `assets/img/` (nama bebas, misal `foto.jpg`)
2. Buka `index.html`, cari bagian `<!-- CARA GANTI FOTO -->`
3. Hapus baris `<div class="photo-placeholder">MA</div>`
4. Uncomment (hapus `<!--` dan `-->`) pada baris `<img src="assets/img/foto.jpg" ...>`

## Cara Upload Thumbnail Proyek

1. Taruh screenshot proyek di `assets/img/`
2. Cari komentar `<!-- CARA GANTI THUMBNAIL PROYEK -->` di `index.html`
3. Lakukan hal yang sama seperti foto profil

## Cara Upload CV / Resume

1. Rename file CV menjadi `cv.pdf`
2. Taruh di folder `assets/`
3. Tombol "LIHAT CV" akan otomatis mengarah ke file tersebut

## Deploy ke Vercel

Repo GitHub `atogaul12/atoeks-portfolio` sudah disiapkan untuk deploy. Situs
berada di subfolder `portfolio/`.

### Cara deploy

1. Buka [vercel.com](https://vercel.com) → **Add New Project**
2. Pilih repo `atoeks-portfolio` dari GitHub
3. Set konfigurasi:
   - **Framework Preset**: `Other`
   - **Root Directory**: `portfolio`
   - **Build Command**: kosong (tidak ada build)
   - **Output Directory**: kosong
4. Klik **Deploy**

> Situs 100% statis, jadi tidak perlu command build apa pun.

## Kustomisasi Cepat

| Yang ingin diubah | Lokasi |
|---|---|
| Warna cyan/biru | `css/style.css` → bagian `:root` |
| Nama, bio, deskripsi | `index.html` → section `#hero` & `#tentang` |
| Data pengalaman | `index.html` → section `#pengalaman` |
| Link proyek (GitHub/demo) | `index.html` → `href="#"` di `.project-card` |
| Data sertifikasi | `index.html` → section `#sertifikasi` |
| Link sosial media | `index.html` → section `#kontak` |
