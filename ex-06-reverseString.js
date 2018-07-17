
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 *
 * (note: can't use the native Array .reverse() method )
 *
*/

// ++ Write YOUR CODE Below

function reverseString(string){
    var newArray = Array.from(string);
    var finalWord="";
    var endStart = newArray.length - 1;

    for (var i = endStart; i >= 0; i--){
        finalWord += newArray[i];
    }
    return finalWord;
}









// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
//  function accepts string and
//    should return the string in reverse order
/*--------------------------------------------------*/
console.log("==== ex-06-reverseString : TEST 1 ====");

console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')

/*-------------------END----------------------------*/
console.log('\n\n');
