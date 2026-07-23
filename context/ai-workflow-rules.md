# Aturan Workflow AI

## Pendekatan

Bangun proyek ini secara inkremental menggunakan workflow berbasis spesifikasi.
File context mendefinisikan apa yang akan dibangun, bagaimana cara membangunnya,
dan status progress saat ini. Selalu implementasi sesuai spesifikasi —
jangan menebak atau menciptakan perilaku dari awal.

## Aturan Scoping

- Kerjakan satu unit fitur dalam satu waktu
- Utamakan perubahan kecil yang dapat diverifikasi daripada perubahan besar spekulatif
- Jangan menggabungkan batasan sistem yang tidak terkait dalam satu langkah implementasi

## Kapan Harus Memisahkan Pekerjaan

Pisahkan langkah implementasi jika menggabungkan:

- Perubahan UI DAN perubahan logic/animasi yang tidak terkait
- Multiple section yang tidak saling bergantung
- Perilaku yang belum jelas didefinisikan di file context

Jika perubahan tidak dapat diverifikasi secara end-to-end dengan cepat,
scope terlalu lebar — pisahkan.

## Menangani Kebutuhan yang Hilang

- Jangan menciptakan perilaku produk yang tidak didefinisikan di file context
- Jika kebutuhan ambigu, selesaikan di file context terkait sebelum implementasi
- Jika kebutuhan hilang, tambahkan sebagai pertanyaan terbuka di `progress-tracker.md`

## File yang Dilindungi

Jangan memodifikasi berikut tanpa instruksi eksplisit:

- `public/index.html` — File publik untuk deploy
- `assets/` — File aset (gambar, PDF) — hanya tambah, jangan hapus

## Menjaga Sinkronisasi Dokumen

Update file context yang relevan setiap kali implementasi mengubah:

- Arsitektur atau batasan sistem
- Keputusan model penyimpanan
- Konvensi atau standar kode
- Lingkup fitur

## Sebelum Pindah ke Unit Berikutnya

1. Unit saat ini berfungsi end-to-end dalam lingkup yang ditentukan
2. Tidak ada invariant yang dilanggar (lihat `architecture.md`)
3. `progress-tracker.md` mencerminkan pekerjaan yang selesai
4. Kode berfungsi tanpa error di browser
