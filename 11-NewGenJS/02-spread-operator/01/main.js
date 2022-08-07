const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const nums3 = [5, ...nums1, -6, -1, ...nums2];

nums3; //?

sumnums = nums3.reduce((sum, item) => sum + item, 0); //?
