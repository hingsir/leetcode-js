/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    for (var i = 0, len = s.length; i < len; i++) {
        for (var j = i + 1; j <= len; j++) {
            var sub = s.substring(i, j),
                subLen = sub.length;
            if (sub.indexOf(sub[subLen - 1]) === subLen - 1) {
                if (subLen > longest) longest = subLen;
            } else {
                break;
            }
        }
    }
    return longest;
};
