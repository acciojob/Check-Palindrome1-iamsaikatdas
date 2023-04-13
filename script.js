// complete the given function

function palindrome(str){
	const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  // reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  // compare the cleaned string with its reversed version
  return cleanedStr === reversedStr;
}
module.exports = palindrome
