//solution no- 1//

/*   function kilometerToMeter(kilometer){
    var meter = kilometer * 1000 ;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result); */

//solution no-2

/*  function budgetCalculator(watch, mobile, laptop){
    var watchprice = watch * 50;
    var mobileprice = mobile * 100;
    var laptopprice = laptop * 500;
    var total= watchprice + mobileprice + laptopprice;
    return total;
}
var sum = budgetCalculator(2, 2, 1);
console.log(sum);  */

//solution no-4//

function megaFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = megaFriend([`Spinim` , `Taha` , `Noha` , `Mumnim` , `Tarin`]);
  console.log(word);  