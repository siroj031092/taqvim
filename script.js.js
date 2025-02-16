document.getElementById('viloyat').addEventListener('change', function() {
    var viloyat = this.value;
    var saharlik, iftorlik;

    // Viloyatga qarab vaqtlarni belgilash
    if (viloyat === 'fargona') {
        saharlik = '04:45';
        iftorlik = '18:30';
    } else if (viloyat === 'toshkent') {
        saharlik = '04:50';
        iftorlik = '18:35';
    } else if (viloyat === 'buxoro') {
        saharlik = '04:40';
        iftorlik = '18:25';
    }

    // Vaqtlarni HTML elementlarida yangilash
    document.getElementById('saharlik').textContent = saharlik;
    document.getElementById('iftorlik').textContent = iftorlik;
});
