let suwit = true;

while (suwit) {

// Input Player
    let p = prompt ('Pilih Gajah,Orang,Semut : ');

    // Menangkap Computer
    // Membangkitkan bilangan
    let comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'Gajah';
    }else if ( comp >= 0.34 && comp  < 0.67 ) {
        comp = 'Orang';
    }else {
        comp = 'Semut;'
    }

    // Menentukan Rules
    let hasil = '';

    if ( p === comp ) {
        hasil = 'Seri';
    }else if ( p == 'Gajah' ){
        hasil = ( comp == 'Orang' ) ? 'MENANG!' : 'KALAH';
    }else if ( p == 'Orang' ) {
        hasil = ( comp == 'Gajah' ) ? 'KALAH!' : 'MENANG!';
    }else if ( p == 'Semut' ) {
        hasil = ( comp == 'Orang' ) ? 'KALAH!' : 'MENANG!';
    }else {
        hasil = 'Anda Memasukkan Pilihan Yang Salah!!';
    }


    // Menampilkan Hasil
    alert('Kamu Memilih : ' + p + ' dan Komputer Memilih : ' + comp + ' \nMaka Hasilnya Kamu : ' + hasil);

    suwit = confirm ('lagi?');

}

alert ('Terimakasih Sudah Bermain');
