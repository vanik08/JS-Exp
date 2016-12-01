/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var toLinkedList = function(list, result) {
    var itm = list.shift();

    result = itm;

    if (list.length > 0) {
        itm.next = toLinkedList(list, itm);
    }

    return result;
}

var addTwoNumbers = function(l1, l2) {
    var result;
    var resultStack = [];
    var tempSum;
    var carry = 0;
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);

     while (l1 || l2) {

        l1 = l1 || new ListNode(0);
        l2 = l2 || new ListNode(0);

        tempSum = l1.val + l2.val;
        finalSum = 0;

        if (tempSum + carry < 10) {
            finalSum = tempSum + carry;
            carry = 0;
        } else {
            finalSum = (tempSum + carry) - 10;
            carry = 1;
        }
        resultStack.push(new ListNode(finalSum));

        l1 = l1.next;
        l2 = l2.next;
    }

    if (carry > 0 && !l1 && !l2) {
        resultStack.push(new ListNode(carry));
    }

    result = toLinkedList(resultStack);

    console.log('---', result);

    return result;
};