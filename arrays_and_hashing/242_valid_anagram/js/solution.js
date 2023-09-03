/**
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1;
    } else {
      sMap[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (tMap[t[j]]) {
      tMap[t[j]] += 1;
    } else {
      tMap[t[j]] = 1;
    }
  }

  if (Object.keys(sMap).length !== Object.keys(tMap).length) return false;

  for (const skey in sMap) {
    if (sMap[skey] !== tMap[skey]) return false;
  }

  for (const tKey in tMap) {
    if (sMap[tKey] !== tMap[tKey]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
