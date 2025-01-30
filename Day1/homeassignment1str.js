function lengthOfLastWord(s) {
    // Split the string into words (by space)
    const words = s.split(" ");

    // Find the last word (remove any extra spaces at the end)
    const lastWord = words[words.length - 1];

    // Calculate the length of the last word
    return lastWord.length;
}
console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord(" I am an automation tester "));



function lengthOfLastWord(s) {
    // Trim the string to remove leading/trailing spaces
    const trimmedString = s.trim();

    // Split the string into words
    const words = trimmedString.split(" ");

    // Identify the last word
    const lastWord = words[words.length - 1];

    // Calculate the length of the last word
    return lastWord.length;
}
console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord(" I am an automation tester "));  
console.log(lengthOfLastWord("  engineer "));  



function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram("listen", "silent"));  
console.log(isAnagram("hello", "world"));   
