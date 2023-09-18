function palindrome(parameter) {
   let penampung = '';
   for (let index = parameter.length - 1; index >= 0; index--) {
      penampung = penampung + parameter[index];
   }
   if (penampung == parameter) {
      return true;
   } else {
      return false;
   }
}
const hasil = palindrome('kodok');
console.log(hasil);