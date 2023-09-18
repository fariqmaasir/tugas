let array = [1,2,3,4,10];
let penampung = [];
for (let index = array.length - 1; index >= array[0]; index--) {
    penampung = penampung + array[index];
    array.push(index);
}
console.log(array);

    // 1. cek parameter apakah polindrome
    // 2. jika ya return true
    // 3. jika tidak return false

    //palindrome bagaimana cara membuat palindrome
    //caranya adalah melihat dari kalimat tersebut,
    // apakah kalimat itu dapat dibaca dari awal kalimat atau dari 
    // akhir kalimat tanpa memperdulikan titik, koma, atau tanda petik

    // cara membuat palindrome adalah membalik kata tersebut dari akhir ke awal
    // apakah menghasilkan kata yang sama