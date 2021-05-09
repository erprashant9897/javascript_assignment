function reverseString(str){

    return str.split("").reverse().join("");
}
function palindrome(str){
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re,"");
    var reverseStr = lowRegStr.split("").reverse().join(""); 
    return reverseStr === lowRegStr;
}
document.write(reverseString("MADAM")+"<br>"+palindrome("MADAM"));