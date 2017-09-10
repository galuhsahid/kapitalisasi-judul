# kapitalisasi-judul

kapitalisasi-judul adalah sebuah modul sederhana yang berguna untuk mengapitalisasi judul secara otomatis sesuai dengan aturan EYD.

Modul ini dapat digunakan langsung di *command line* maupun sebagai modul NPM yang dapat digunakan untuk keperluan lain.

![kapitalisasi-judul](https://raw.githubusercontent.com/galuhsahid/kapitalisasi-judul/master/screencap.png)

## 📖 referensi

Tautan-tautan di bawah merupakan referensi yang saya gunakan dalam pembuatan modul ini:
- ["Kapitalisasi Judul"](https://beritagar.id/artikel/tabik/kapitalisasi-judul)
- [Pembahasan mengenai kata tugas](https://id.wikibooks.org/wiki/Bahasa_Indonesia/Partikel)

## 📜 fitur-fitur

- Mengapitalisasi judul secara otomatis sesuai dengan aturan EYD
- Mengapitalisasi judul dengan pilihan opsi untuk mengabaikan beberapa kata yang diinginkan

## 💡 pengembangan
- Penggunaan opsi pada terminal

## 💭 isu dan kontribusi

Berikut adalah beberapa isu yang perlu untuk diselesaikan:

- **Daftar kata tugas:** Daftar kata tugas yang perlu untuk diubah menjadi huruf kecil masih perlu dicek lagi. Hal ini karena saya belum berhasil menemukan daftar kata tugas bahasa Indonesia yang komprehensif. Selain itu, saya juga belum sempat untuk mengonfirmasi kepada yang lebih ahli apakah terdapat pengecualian di antara kata tugas tersebut.

Apabila Anda menemukan isu atau ingin membantu memperbaiki modul ini, Anda bisa langsung membuka isu atau membuat *pull request*. 🙏

## ☁️ instalasi

Apabila Anda ingin menjadikan kapitalisasi-judul sebagai *dependency* untuk modul Anda, maka jalankan perintah berikut:

```
$ npm install --save kapitalisasi-judul
```

Sementara itu, apabila Anda ingin menggunakan kapitalisasi-judul di *command line* Anda, maka jalankan perintah berikut:

```
$ npm install -g kapitalisasi-judul
```

Apabila Anda ingin menjalankan tes untuk modul ini, Anda bisa membuka direktori modul ini kemudian menjalankan perintah:

```
mocha
```

## contoh penggunaan

### sebagai dependency

```

var kapitalisasiJudul = require('kapitalisasi-judul')

var judul = 'kepercayaan publik terhadap para anggota DPR pun menurun'

console.log(kapitalisasiJudul(judul));

```

Contoh di atas akan mencetak *output*:

```
> Kepercayaan Publik terhadap para Anggota DPR pun Menurun
```

#### penggunaan dengan opsi

Kita juga dapat menggunakan opsi agar kapitalisasi-judul mengabaikan kata yang telah kita simpan dalam opsi sebelumnya. Sebagai contoh:

```

var kapitalisasiJudul = require('kapitalisasi-judul')

var judul = 'antrian iPhone 8 dan iPad mencapai ribuan kilometer'

console.log(kapitalisasiJudul(judul, ['iPhone', 'ipad']));

```

Maka, contoh di atas akan mencetak *output*:

```
> Antrian iPhone 8 dan iPad Mencapai Ribuan Kilometer
```

### penggunaan pada terminal

Jalankan perintah berikut:

```
kapitalisasi-judul [judul]
```

Sebagai contoh:

```
> kapitalisasi-judul 'kepercayaan publik terhadap para anggota DPR pun menurun'
```

Maka akan menghasilkan *output*:

```
> Kepercayaan Publik terhadap para Anggota DPR pun Menurun
```

Kita juga dapat mengapitalisasi beberapa judul sekaligus:

```
> kapitalisasi-judul 'kepercayaan publik terhadap para anggota DPR pun menurun' 'presiden Tidak Akan menyetujui revisi UU KPK'
```

Maka akan menghasilkan *output*:

```
> Kepercayaan Publik terhadap para Anggota DPR pun Menurun
> Presiden Tidak Akan Menyetujui Revisi UU KPK
```

Untuk mengabaikan kata, gunakan parameter **-i**:

```
> kapitalisasi-judul 'antrian iPhone 8 dan iPad membludak' -i '["iPhone", "iPad"]'
```

```
> Antrian iPhone 8 dan iPad Membludak
```


