/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let frontQ = queue.dequeue();
  for (let i = 0; index > i; i++) {
    queue.enqueue(frontQ);
    frontQ = queue.dequeue();
  }
  return frontQ;
}
