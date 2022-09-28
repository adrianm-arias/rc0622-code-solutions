/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxNum = stack.peek();
  let topNum = 0;
  while (stack.peek() !== undefined) {
    topNum = stack.pop();
    if (topNum > maxNum) {
      maxNum = topNum;
    }
  }
  return maxNum;
}
