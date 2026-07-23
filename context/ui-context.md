# Konteks UI

## Tema

Dark mode penuh. Tidak ada light mode. Bahasa desain adalah ruang kerja teknis gelap
— latar near-black, surface berlapis, dan warna aksen cerah untuk elemen interaktif.
Nuansa sci-fi / cyberpunk halus dengan aksen cyan dan biru elektrik.

## Warna

Semua komponen harus menggunakan token CSS berikut — tanpa hardcoded hex value.

| Peran              | CSS Variable       | Value     |
| ------------------ | ------------------ | --------- |
| Latar halaman      | `--bg-deep`        | `#050810` |
| Kartu              | `--bg-card`        | `#0A0F1E` |
| Surface            | `--bg-surface`     | `#0F1629` |
| Aksen biru         | `--blue`           | `#00B4FF` |
| Aksen cyan         | `--cyan`           | `#00FFE5` |
| Glow cyan          | `--glow-cyan`      | `rgba(0, 255, 229, 0.2)` |
| Teks utama         | `--text-main`      | `#E8EDF5` |
| Teks redup         | `--text-dim`       | `#8892A4` |
| Teks samar         | `--text-faint`     | `#3D4A5C` |
| Border             | `--border`         | `rgba(0, 180, 255, 0.15)` |
| Transisi           | `--transition`     | `0.25s ease` |

## Tipografi

| Peran      | Font                | CSS Variable      |
| ---------- | ------------------- | ----------------- |
| Judul/logo | Orbitron (sans)     | inline `font-family` |
| Teks UI    | Inter (sans)        | body default      |
| Kode/mono  | Space Mono (mono)   | inline `font-family` |

## Border Radius

| Konteks             | Nilai     |
| ------------------- | --------- |
| Inline / UI kecil   | none (border solid) |
| Kartu / panel       | none (border solid) |
| Modal / overlay     | none (border solid) |

Desain menggunakan border `1px solid` dengan sudut siku-siku untuk kesan teknis.

## Component Library

Tidak ada. Semua komponen ditulis manual dengan CSS vanilla.
Tidak ada framework UI eksternal selain Google Fonts.

## Pola Layout

- **Hero**: Full-viewport split grid (kiri: teks, kanan: foto + orbit ring)
- **Section**: Max-width 1100px, centered, padding 6rem 4rem
- **About Grid**: Dua kolom (bio + skills)
- **Experience**: Timeline dua kolom (tanggal + deskripsi)
- **Projects**: Grid 2 kolom (card dengan thumbnail)
- **Certifications**: Grid 2 kolom (card sederhana)
- **Contact**: Center alignment dengan email dan social buttons

## Ikon

Tidak ada library ikon eksternal. Menggunakan karakter Unicode sederhana:
`◈`, `⬡`, `↗`, dan emoji untuk placeholder proyek.
