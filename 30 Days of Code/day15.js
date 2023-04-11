//DAY 15: Linked List

//Complete the insert function in your editor so that it creates a new Node (pass data as the
//Node constructor argument) and inserts it at the tail of the linked list referenced by the head 
//parameter. Once the new node is added, return the reference to the head node.

this.insert=function(head,data){
    let node = new Node(data);
    
    if(head == null){
        head = node;
    } else {
        let temp = head;
        while (temp.next!=null)
            temp=temp.next;
            temp.next =node;
    }
    return head;
};