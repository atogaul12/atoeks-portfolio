# Konteks Arsitektur

## Stack

| Layer     | Teknologi          | Peran                              |
| --------- | ------------------ | ---------------------------------- |
| Struktur  | HTML5              | Markup halaman & konten            |
| Styling   | CSS3 (vanilla)     | Layout, tema, animasi, responsif   |
| Interaksi | JavaScript (ES6)   | Starfield, scroll reveal, nav highlight |
| Font      | Google Fonts       | Orbitron, Inter, Space Mono        |
| Deploy    | Vercel / GitHub Pages | Hosting statis                  |

## Batasan Sistem

- `index.html` — Halaman utama, semua konten dan struktur
- `css/style.css` — Semua styling dalam satu file
- `js/main.js` — Semua interaksi JavaScript dalam satu file
- `assets/img/` — Foto profil dan screenshot proyek
- `assets/cv.pdf` — File CV/Resume
- `context/` — Dokumentasi proyek dan panduan AI

## Model Penyimpanan

- **File System**: Semua konten statis — HTML, CSS, JS, gambar, PDF
- **Tidak ada database**: Website sepenuhnya statis

## Model Akses

- **Publik**: Seluruh halaman dapat diakses tanpa autentikasi
- **Tidak ada auth**: Website satu halaman tanpa login/user system

## Invariant

1. Semua styling harus menggunakan CSS custom properties dari `:root` — tidak boleh hardcoded hex value
2. Animasi tidak boleh mengganggu performa (terutama starfield)
3. Setiap section harus memiliki `id` yang sesuai dengan href di navbar
4. File gambar dan PDF harus berada di folder `assets/`
5. Tidak boleh ada ketergantungan pada library eksternal selain Google Fonts
