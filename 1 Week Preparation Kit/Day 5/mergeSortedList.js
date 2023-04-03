/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list.
Either head pointer may be null meaning that the corresponding list is empty.
Complete the mergeLists function in the editor below.
mergeLists has the following parameters:
SinglyLinkedListNode pointer headA: a reference to the head of a list
SinglyLinkedListNode pointer headB: a reference to the head of a list
Returns
SinglyLinkedListNode pointer: a reference to the head of the merged list
*/

function mergeLists(head1, head2) {
    let dummy = new SinglyLinkedListNode();
    let tail = dummy;
    while (head1 !== null && head2 !== null) {
        if (head1.data < head2.data) {
            tail.next = head1;
            head1 = head1.next;
        } else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }
    tail.next = head1 === null ? head2 : head1;
    return dummy.next;
}