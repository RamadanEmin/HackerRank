//DAY 24: More Linked Lists

/*
A Node class is provided for you in the editor.A Node object has an integer data field, data,
and a Node instance pointer, next, pointing to another node(i.e.: the next node in a list).
A removeDuplicates function is declared in your editor, which takes a pointer to the head node 
of a linked list as a parameter.Complete removeDuplicates so that it deletes any duplicate 
nodes from the list and returns the head of the updated list.
*/

this.removeDuplicates = function (head) {
    let set = new Set();
    if (!head) {
        return 0;
    } else {
        let currentNode = head;
        while (head) {
            set.add(currentNode.data);
            if (currentNode.next) {
                currentNode = currentNode.next;
            } else if (!currentNode.next) {
                console.log(Array.from(set).join(" "));
                return;
            }
        }
    }
}