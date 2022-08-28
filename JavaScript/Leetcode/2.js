// 2. Add Two Numbers (Medium)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Time: O(max(n, m)) | Space: O(max(n, m))
function addTwoNumbers(l1, l2) {
  const head = new ListNode();
  let tail = head;
  let carry = 0;
  
  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    
    carry = Math.trunc(sum / 10);
    tail.next = new ListNode(sum % 10);
    tail = tail.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  return head.next;
}

export default addTwoNumbers;
