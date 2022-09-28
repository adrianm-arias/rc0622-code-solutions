/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const frontQ = queue.dequeue();
  queue.enqueue(frontQ);
}
