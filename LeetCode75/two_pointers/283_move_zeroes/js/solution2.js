/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 *
 * Follow up: Could you minimize the total number of operations done?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
};

let inputTest1 = [0, 1, 0, 3, 12];
moveZeroes(inputTest1);
console.log(inputTest1);

let inputTest2 = [0];
moveZeroes(inputTest2);
console.log(inputTest2);

let inputTest3 = [0, 0];
moveZeroes(inputTest3);
console.log(inputTest3);
