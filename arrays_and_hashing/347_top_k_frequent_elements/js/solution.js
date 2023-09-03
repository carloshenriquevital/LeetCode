/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencyMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap[nums[i]]) {
      frequencyMap[nums[i]] += 1;
    } else {
      frequencyMap[nums[i]] = 1;
    }
  }
  const sortedFrequency = Object.entries(frequencyMap).sort((a, b) => {
    return b[1] - a[1];
  });

  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(Number(sortedFrequency[i][0]));
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
