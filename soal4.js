function reverseArray(parameter) {
    // masalah = membalik nilai akhir ke awal
    // solusi  = mengisi nilai akhir ke awal
    // teknis  = membuat variabel penampung
    let penampung = [];
    // teknis  = membuat looping nilai akhir ke awal
    for (   let index = parameter.length - 1; index >= 0; index--) {
        // teknis  = memasukan looping nilai ke variabel penampung 
        penampung.push(parameter[index]);
    }
    return penampung;
}
const hasil = reverseArray(['aku',true,false,'kelas',1124]);
console.log(hasil);