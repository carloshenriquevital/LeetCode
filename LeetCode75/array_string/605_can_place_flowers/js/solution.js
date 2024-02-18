/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 *
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 * Constraints:
 * 1 <= flowerbed.length <= 2 * 104
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let planted = [...flowerbed];
  let remainingFlowers = n;

  if (planted.length === 1 && planted[0] == 0) {
    return true;
  }

  for (let i = 0; i < planted.length; i++) {
    if (remainingFlowers === 0) continue;

    if (
      planted[i] === 0 &&
      ((i === 0 && planted[i + 1] === 0) ||
        (i === planted.length - 1 && planted[i - 1] === 0) ||
        (i > 0 &&
          i < planted.length - 1 &&
          planted[i - 1] === 0 &&
          planted[i + 1] === 0))
    ) {
      planted[i] = 1;
      --remainingFlowers;
    }
  }
  return remainingFlowers === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
