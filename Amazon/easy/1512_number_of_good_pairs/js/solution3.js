/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 *
 * Example 2:
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    map[item] = (map[item] || 0) + 1;
  }

  return Object.values(map).reduce(
    (acc, curr) => (curr >= 2 ? acc + (curr * (curr - 1)) / 2 : acc),
    0
  );
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
