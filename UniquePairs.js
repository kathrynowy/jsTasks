//Two Sum - Unique Pairs
// https://leetcode.com/discuss/interview-question/372434
const nums = [1, 1, 2, 45, 46, 46], target = 47; //output 2
const nums2 = [1, 1], target2 = 2; //output 1
const nums3 = [1, 5, 1, 5], target3 = 6; //output 1
const unique = new Set();
let count = 0;

for (let i = 0; i < nums2.length; i++) {
  for (let j = 0; j < nums2.length; j++) {
    if (nums2[i] + nums2[j] === target2 && i !== j) {
      if (nums2[i] === nums2[j]) {
        count++;
      } else {
        unique.add(nums2[i]);
        unique.add(nums2[j]);
      }
    }
  }
};

console.log('output', (unique.size + count) / 2);
