/**
 * 88. 合并两个有序数组
 * https://leetcode.cn/problems/merge-sorted-array/description/
 */
function mergeArray(nums1, m, nums2, n) {

    while (m > 0 || n > 0) {

        if (n <= 0) return

        let index = m + n - 1

        // 原理是从两个数组的最后一个值比较
        // 把最大的值放到新数组的后面
        if (m > 0 && nums1[m - 1] > nums2[n -1]) {
            nums1[index] = nums1[--m]
        } else {
            nums1[index] = nums2[--n]
        }
    }
}
