var partition = function(head, x) {
    const beforeHead = new ListNode(0);
    const afterHead = new ListNode(0);
    let before = beforeHead;
    let after = afterHead;

    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    after.next = null;
    before.next = afterHead.next;

    return beforeHead.next;
};