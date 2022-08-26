// 1. Two Sum (Easy)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    map.set(nums[i], i);
  }
}

export default twoSum;
