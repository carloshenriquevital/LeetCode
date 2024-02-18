/**
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * Example 1:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Example 2:
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Example 3:
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Constraints:
 * 1 <= str1.length, str2.length <= 1000
 * str1 and str2 consist of English uppercase letters.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let result = "";

  const shortestString = str1.length <= str2.length ? str1 : str2;

  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    const currentDivisor = shortestString.substring(0, i + 1);

    if (
      str1.length % currentDivisor.length !== 0 ||
      str2.length % currentDivisor.length
    )
      continue;

    let times1 = str1.length / currentDivisor.length;
    let times2 = str2.length / currentDivisor.length;

    let temp1 = "";
    for (let j = 0; j < times1; j++) {
      temp1 += currentDivisor;
    }

    let temp2 = "";
    for (let j = 0; j < times2; j++) {
      temp2 += currentDivisor;
    }

    if (
      temp1 === str1 &&
      temp2 === str2 &&
      result.length <= currentDivisor.length
    ) {
      result = currentDivisor;
    }
  }

  return result;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);
