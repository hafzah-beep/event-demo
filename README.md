# DEMO PENANGANAN PERISTIWA PADA JAVASCRIPT

## 1. Latar Belakang
Pengembangan aplikasi web modern menuntut sistem yang mampu merespons interaksi pengguna secara cepat dan akurat. Interaksi tersebut diwujudkan melalui berbagai peristiwa seperti klik, pengetikan, pemilihan opsi, serta pergerakan kursor. Dalam konteks ini, JavaScript menyediakan mekanisme event handling yang memungkinkan pengembang mengontrol bagaimana sistem merespons setiap aksi pengguna secara terstruktur.

Pemahaman terhadap event handling menjadi penting karena berperan langsung dalam meningkatkan kualitas pengalaman pengguna serta efektivitas antarmuka.

---

## 2. Rumusan Masalah
1. Bagaimana cara mengimplementasikan event handling pada JavaScript?
2. Jenis event apa saja yang dapat digunakan dalam interaksi web?
3. Bagaimana respons sistem terhadap berbagai input pengguna?

---

## 3. Tujuan Praktikum
1. Menganalisis konsep dasar event dalam JavaScript  
2. Mengimplementasikan berbagai jenis event pada elemen HTML  
3. Menghubungkan interaksi pengguna dengan output secara dinamis  
4. Mengevaluasi respons sistem terhadap aksi pengguna  

---

## 4. Dasar Teori
Event merupakan kejadian yang terjadi pada elemen HTML, baik dipicu oleh pengguna maupun sistem. JavaScript menyediakan metode `addEventListener()` untuk menangkap dan menangani event tersebut.

Contoh sintaks:

```javascript
element.addEventListener("event", function() {
  // aksi yang dijalankan
});

Jenis event yang digunakan dalam proyek ini meliputi:

Click Event → terjadi saat tombol diklik
Input Event → terjadi saat pengguna mengetik
Change Event → terjadi saat pilihan berubah
Submit Event → terjadi saat form dikirim
Keyup Event → terjadi saat tombol keyboard dilepas
Mouseover & Mouseout → terjadi saat mouse masuk/keluar area
Focus & Blur → terjadi saat elemen aktif/tidak aktif
5. Implementasi Sistem
5.1 Struktur Teknologi
HTML5 digunakan untuk membangun struktur halaman
CSS3 digunakan untuk mengatur tampilan visual
JavaScript digunakan untuk mengelola event handling
5.2 Struktur Proyek
event-demo
│
├── index.html
├── style.css
└── script.js
5.3 Mekanisme Kerja

Setiap elemen HTML diberikan event listener menggunakan JavaScript. Ketika pengguna melakukan interaksi, sistem akan memproses event tersebut dan menampilkan output secara langsung pada halaman.

6. Hasil dan Pembahasan

Hasil pengujian menunjukkan bahwa seluruh event yang diimplementasikan berjalan sesuai dengan fungsi yang diharapkan.

Event klik berhasil memicu perubahan teks
Event input menampilkan data secara real-time
Event change menampilkan pilihan pengguna
Event submit memproses data tanpa reload halaman
Event keyup mendeteksi input keyboard terakhir
Event mouse memberikan respons visual terhadap pergerakan kursor
Event focus dan blur memberikan indikator aktif pada input

Implementasi ini menunjukkan bahwa event handling mampu meningkatkan interaktivitas sistem secara signifikan.

7. Kesimpulan

Event handling dalam JavaScript memungkinkan sistem merespons setiap interaksi pengguna secara dinamis dan terstruktur. Dengan mengimplementasikan berbagai jenis event, aplikasi web dapat memberikan pengalaman pengguna yang lebih responsif dan informatif.

8. Cara Menjalankan Program
Buka folder proyek
Jalankan file index.html menggunakan browser
Lakukan interaksi pada setiap elemen yang tersedia
Amati perubahan pada area output
9. Teknologi yang Digunakan
HTML5
CSS3
JavaScript (Vanilla JS)
10. Identitas Praktikan

Nama: [Isi Nama Kamu]
Kelas: [Isi Kelas Kamu]
Mata Kuliah: [Isi Mata Kuliah]

11. Link Repository

Repository GitHub:
https://github.com/hafzah-beep/event-demo


---

## Terakhir (biar masuk ke GitHub)

Setelah paste README ini:

```powershell
git add README.md
git commit -m "Update README lengkap"
git push