/**
 * 344. 反转字符串
 * https://leetcode.cn/problems/reverse-string/
 */
var reverseString = function(s) {
    // let len = s.length
    // let maxIndex = s.length - 1

    // for(let i = 0; i < len / 2; i++) {
    //     let temp = s[i]
    //     s[i] = s[maxIndex]
    //     s[maxIndex] = temp

    //     maxIndex --
    // }

    let i = 0, j = s.length - 1
    while(i < j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp

        i++
        j--

    }

    return s
};
