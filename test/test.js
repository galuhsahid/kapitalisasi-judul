'use strict'

var assert = require('assert')
var kapitalisasiJudul = require('../kapitalisasi-judul')

function test(input, expected, options) {
    assert.strictEqual(kapitalisasiJudul(input, options), expected);
}

describe('kapitalisasiJudul', function() {

    it('mengembalikan string kosong', function() {
        test('', '')
    });

    it('tidak mempengaruhi tanda baca', function() {
        test('foo (bar)', 'Foo (Bar)')
    });

    it('tidak mempengaruhi kata yang dikapitalkan seluruhnya', function() {
        test('saham ANTAM', 'Saham ANTAM')
    });

    it('tidak mempengaruhi judul yang telah dikapitalkan dengan benar sebelumnya', function() {
        test('Ani dan Budi Pergi ke Pasar', 'Ani dan Budi Pergi ke Pasar')
    });

    it('mengapitalisasi judul dengan satu kata', function() {
        test('tentang', 'Tentang')
    });

    it('mengapitalisasi kata yang didahului tanda baca !', function() {
        test('menegangkan! pada hari sabtu', 'Menegangkan! Pada Hari Sabtu')
    });

    // Aturan 1: Ikuti aturan kapitalisasi kalimat.
    it('tidak mengapitalisasi semua unsur nama', function() {
        test('tenggelamnya kapal van der wijck', 'Tenggelamnya Kapal van der Wijck')
    });

    // Aturan 2: Kapitalisasikan semua unsur kata ulang sempurna.
    it('mengapitalisasi semua unsur kata ulang sempurna', function() {
        test('perubahan undang-undang', 'Perubahan Undang-Undang')
    });

    it('tidak mengapitalisasi kata ulang tidak sempurna', function() {
        test('membeli sayur-mayur', 'Membeli Sayur-mayur')
    });
  
    // Aturan 3: Kapitalisasikan semua kata yang tidak termasuk kata tugas.
    it('mengapitalisasi kata yang bukan kata tugas', function() {
        test('presiden tidak akan menyetujui revisi UU KPK', 'Presiden Tidak Akan Menyetujui Revisi UU KPK')
    });

    it('tidak mengapitalisasi kata depan', function() {
        test('liburan di afrika', 'Liburan di Afrika')
    });

    it('tidak mengapitalisasi kata sambung', function() {
        test('macet karena demo', 'Macet karena Demo')
    });

    it('tidak mengapitalisasi artikula', function() {
        test('opini para pengamen', 'Opini para Pengamen')
    });

    it('tidak mengapitalisasi kata seru', function() {
        test('diambil dong', 'Diambil dong')
    });

    it('tidak mengapitalisasi kata penegas', function() {
        test('mereka pun menangis', 'Mereka pun Menangis')
    });

    // Aturan 4: Kapitalisasikan kata tugas bila terletak pada posisi awal judul.
    it('mengapitalisasi kata tugas di awal judul', function() {
        test('para demonstran', 'Para Demonstran')
    });

    // Opsi
    it('tidak mengapitalisasi kata yang masuk dalam daftar untuk diabaikan', function () {
        test('antrian iPhone 8 dan iPad mencapai ribuan kilometer', 'Antrian iPhone 8 dan iPad Mencapai Ribuan Kilometer', ['iPhone', 'iPad'])
    });

});
