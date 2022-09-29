/* exported updateNext */

function updateNext(list, value) {
  if (list.next !== null) {
    const newList = list;
    newList.next.data = value;
  }
}
