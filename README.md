# Game Simon

Sebuah game memori klasik yang diimplementasikan menggunakan HTML, CSS, dan JavaScript. Game ini menantang pemain untuk mengingat dan mengulangi urutan tombol berwarna yang semakin lama semakin panjang.

## Tentang Game

Simon adalah game elektronik memori dan konsentrasi. Game ini memiliki empat tombol berwarna yang menyala dalam urutan yang harus diulangi oleh pemain. Setelah setiap percobaan yang sukses, urutan menjadi lebih panjang dan lebih sulit untuk diingat.

### Fitur:
- Empat tombol berwarna (merah, biru, hijau, kuning)
- Tingkat kesulitan yang progresif
- Umpan balik suara untuk setiap penekanan tombol
- Umpan balik visual dengan animasi tombol
- Layar game over dengan fungsi restart
- Urutan yang semakin panjang seiring pemain maju

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery (untuk manipulasi DOM)

## Struktur File

```
simon-game/
├── index.html          # Struktur HTML utama
├── game.js            # Logika dan fungsionalitas game
├── styles.css         # Styling dan animasi
├── sounds/            # Aset audio
│   ├── blue.mp3
│   ├── green.mp3
│   ├── red.mp3
│   ├── wrong.mp3
│   └── yellow.mp3
└── README.md          # Dokumentasi
```

## Instalasi

Untuk menjalankan game Simon secara lokal di komputer Anda:

1. Kloning atau unduh repositori ini ke mesin lokal Anda
2. Masuk ke direktori proyek
3. Buka `index.html` di browser web pilihan Anda
4. Game seharusnya dimuat dan siap dimainkan

### Prasyarat

- Browser web modern (Chrome, Firefox, Safari, Edge)
- Tidak perlu instalasi perangkat lunak tambahan

## Cara Bermain

1. Tekan tombol apa pun di keyboard Anda untuk memulai game
2. Perhatikan dan dengarkan saat game menunjukkan urutan nyalaan dan suara
3. Ulangi urutan tersebut dengan mengklik tombol berwarna dalam urutan yang sama
4. Berhasil menyelesaikan urutan untuk naik ke level berikutnya
5. Setiap level menambahkan satu penekanan tombol lagi ke urutan
6. Jika Anda membuat kesalahan:
   - Anda akan mendengar suara kesalahan
   - Layar akan menyala merah
   - Game akan menampilkan "Game Over"
   - Tekan tombol apa pun untuk memulai ulang game

### Tips Sukses:
- Perhatikan baik-baik urutan yang ditunjukkan di awal setiap level
- Dengarkan suara selain melihat lampu - setiap warna memiliki nadanya sendiri
- Cobalah mengingat urutan sebagai pola daripada tombol-tombol terpisah
- Tetap tenang di bawah tekanan karena urutan menjadi lebih panjang

## Mekanika Game

- **Kenaikan Level**: Setiap level meningkatkan panjang urutan sebanyak satu
- **Urutan Acak**: Elemen urutan baru dipilih secara acak dari empat warna
- **Validasi Input**: Game memeriksa setiap penekanan tombol terhadap urutan yang diharapkan
- **Umpan Balik Visual**: Tombol-tombol menyala saat ditekan dan saat menjadi bagian dari urutan
- **Umpan Balik Audio**: Setiap tombol memiliki suaranya sendiri, ditambah suara salah yang berbeda saat membuat kesalahan

## Kompatibilitas Browser

Game ini bekerja di semua browser modern yang mendukung:
- HTML5 Audio
- CSS3 animasi dan transisi
- Fitur JavaScript modern

Browser yang diuji meliputi:
- Google Chrome (terbaru)
- Mozilla Firefox (terbaru)
- Safari (terbaru)
- Microsoft Edge (terbaru)

## Pemecahan Masalah

### Masalah Umum:

1. **Tidak ada suara yang diputar**: Periksa volume browser Anda dan pastikan popup tidak diblokir
2. **Tombol tidak merespon**: Pastikan JavaScript diaktifkan di browser Anda
3. **Game tidak mulai**: Pastikan semua file berada dalam struktur direktori yang benar

### Masalah Audio:
- Jika menggunakan Chrome, audio mungkin tidak diputar jika halaman dibuka langsung dari sistem file. Coba jalankan server lokal.
- Untuk pengembangan, Anda bisa menggunakan server bawaan Python: `python -m http.server 8000`

## Kontribusi

Proyek ini dimaksudkan sebagai latihan pembelajaran untuk konsep-konsep pengembangan web. Jangan ragu untuk melakukan fork repositori dan membuat perbaikan. Peningkatan yang mungkin termasuk:
- Dukungan sentuhan mobile
- Pelacakan skor tertinggi
- Banyak mode permainan
- Perbaikan visual
- Kustomisasi suara

## Lisensi

Proyek ini tersedia secara bebas untuk tujuan pendidikan dan penggunaan pribadi.