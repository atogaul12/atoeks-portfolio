# Standar Kode

## Umum

- Jaga file tetap kecil dan fokus pada satu tanggung jawab
- Perbaiki akar masalah, jangan menumpuk workaround
- Jangan campur urusan yang tidak terkait dalam satu komponen

## HTML

- Gunakan semantic HTML5 (`<nav>`, `<section>`, `<footer>`, dll)
- Setiap section harus memiliki `id` yang cocok dengan link navbar
- Komentar untuk panduan pengguna (misal: cara ganti foto) ditulis dalam Bahasa Indonesia
- Gunakan `lang="id"` di `<html>`

## CSS

- WAJIB menggunakan CSS custom properties dari `:root` — tidak boleh hardcoded hex
- Gunakan class `reveal` untuk elemen yang ingin dianimasi saat scroll
- Responsive breakpoint: 900px (tablet) dan 540px (mobile)
- Transition: `0.25s ease` via `var(--transition)`
- Selector menggunakan class — hindari ID selector kecuali untuk section dan canvas

## JavaScript

- Gunakan IIFE (Immediately Invoked Function Expression) untuk setiap modul
- Tidak boleh ada library eksternal (kecuali Google Fonts)
- Starfield: maksimal 220 bintang untuk performa
- Scroll reveal: gunakan IntersectionObserver dengan threshold 0.1
- Kode harus berjalan di semua browser modern

## File Organization

- `index.html` — Semua markup dan konten halaman
- `css/style.css` — Semua styling
- `js/main.js` — Semua JavaScript
- `assets/img/` — Gambar (foto profil, screenshot proyek)
- `assets/cv.pdf` — File CV
- `context/` — Dokumentasi proyek dan panduan AI
- **Jangan buat folder `public/`** — Vercel otomatis memakai folder bernama `public`
  sebagai output directory untuk situs statis, sehingga bisa menimpa `index.html`
  utama. File situs langsung disajikan dari akar direktori proyek.
