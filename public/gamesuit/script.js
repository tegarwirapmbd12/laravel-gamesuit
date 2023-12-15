// pilihan computer
function getPilihanComputer() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';

}

// Rules
function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!'
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

// Membuat seolah komputer mengacak jari terlebih dahulu
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','gamesuit/img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100)
}

// Dibuat menjadi 1 block program :
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        const imgComputer = document.querySelector('.img-komputer');

        putar();

        setTimeout(function() {
            imgComputer.setAttribute('src', 'gamesuit/img/' + pilihanComputer + '.png');
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });
});

// Dibuat menjadi 3 block program :
    // Script player memilih Gajah
        // const pGajah = document.querySelector('.gajah');
        // pGajah.addEventListener('click', function() {
        //     const pilihanComputer = getPilihanComputer();
        //     const pilihanPlayer = pGajah.className;
        //     const hasil = getHasil(pilihanComputer, pilihanPlayer);
        //     const imgComputer = document.querySelector('.img-komputer');
        //     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        //     const info = document.querySelector('.info');
        //     info.innerHTML = hasil;
        // });

    // Script player memilih Orang
        // const pOrang = document.querySelector('.orang');
        // pOrang.addEventListener('click', function() {
        //     const pilihanComputer = getPilihanComputer();
        //     const pilihanPlayer = pOrang.className;
        //     const hasil = getHasil(pilihanComputer, pilihanPlayer);
        //     const imgComputer = document.querySelector('.img-komputer');
        //     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        //     const info = document.querySelector('.info');
        //     info.innerHTML = hasil;
        // });

    // Script player memilih Semut
        // const pSemut = document.querySelector('.semut');
        // pSemut.addEventListener('click', function() {
        //     const pilihanComputer = getPilihanComputer();
        //     const pilihanPlayer = pSemut.className;
        //     const hasil = getHasil(pilihanComputer, pilihanPlayer);
        //     const imgComputer = document.querySelector('.img-komputer');
        //     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        //     const info = document.querySelector('.info');
        //     info.innerHTML = hasil;
        // });









