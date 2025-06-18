var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    let result = null;
    
    while (stack1.length || stack2.length || carry) {
        const val1 = stack1.pop() || 0;
        const val2 = stack2.pop() || 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        const newNode = new ListNode(sum % 10);
        newNode.next = result;
        result = newNode;
    }
    
    return result;
};