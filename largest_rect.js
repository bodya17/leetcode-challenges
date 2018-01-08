// https://leetcode.com/problems/largest-rectangle-in-histogram/description/
// Given n non-negative integers representing the histogram's bar height
// where the width of each bar is 1, find the area of largest rectangle in the histogram.

function generateSubHistoram(histogram, len) {
    var subHistorgrams = []
    for (var i = 0; i < histogram.length - len + 1; i++) {
        subHistorgrams.push(histogram.slice(i, i + len))
    }
    return subHistorgrams
}

function largestRectangleArea(heights) {
    var subHistorgrams = []
    for (var i = 0; i < heights.length; i++) {
        subHistorgrams.push(...generateSubHistoram(heights, i + 1))
    }
    var areas = subHistorgrams.map(h => Math.min(...h) * h.length)
    return Math.max(...areas)
}


console.log(largestRectangleArea([2, 1, 5, 8, 0, 3, 3, 3, 5]))
 //  => 10

