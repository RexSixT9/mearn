// Output of the statement
// console.log("hari\"".length);

// // Explore the includes, startswith and endswith function of a string
// console.log("Luminar".includes("Lumi"));
// console.log("Luminar".startsWith("Lumi"));
// console.log("Luminar".endsWith("nars"));

// // Extract the amount out of  the string
// const str = "Please give Rs 10000";
// console.log(str.slice(15));
// console.log(str.substring(15));

// // Try to Change 4th character of a given string 
// const str1 = "Where you able to do it?";
// str1[4] = "a"; 
// console.log(str1);

// Dominos Coupon-  LIT1115

// Write a function to check if two strings are anagrams of each other. Anagrams have the same characters but in a different order. For example, "listen" and "silent" are anagrams
function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams("listen", "silent"));

// Write a function to count the number of vowels and consonants in a given string.
function vowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            vowels++;
        } else if (char >= "a" && char <= "z") {
            consonants++;
        }
    }
    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}
vowelsAndConsonants("Hello Guysss");


// Write a function that capitalizes the first letter of each word in a sentence.
function capitalize(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(capitalize("hello guys"));
