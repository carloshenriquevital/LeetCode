/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 *
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * Constraints:
 * 1 <= s.length <= 3 * 105
 * s consist of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  function isVowel(c) {
    const lower = c.toLowerCase(s);

    return (
      lower === "a" ||
      lower === "e" ||
      lower === "i" ||
      lower === "o" ||
      lower === "u"
    );
  }

  let i = 0;
  let j = s.length - 1;

  let splittedS = s.split("");

  while (i < j) {
    const firstIsVowel = isVowel(splittedS[i]);
    const seccondIsVowel = isVowel(splittedS[j]);

    if (firstIsVowel && seccondIsVowel) {
      const temp = splittedS[i];
      splittedS[i] = splittedS[j];
      splittedS[j] = temp;
      i++;
      j--;

      continue;
    }

    if (!firstIsVowel) {
      i++;
    }

    if (!seccondIsVowel) {
      j--;
    }
  }

  return splittedS.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
