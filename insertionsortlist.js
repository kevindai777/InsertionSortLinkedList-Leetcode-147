//Objective is to perform insertion sort on a linked list

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(4)
head.next = new Node(1)
head.next.next = new Node(8)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


//O(n) solution that inserts the value in between the current value and the head

let newNode = new ListNode(-1)
    
while (head) {
    //Keep a reference to 'head.next'
    let temp = head.next 
    let curr = newNode
    
    //Find the next larger value in new linked list
    while (curr && curr.next && curr.next.val < head.val) {
        curr = curr.next
    }
    
    //In the example of [4,2,1,3]
    //First iteration -> [-1, 4]
    //Second iteration -> head = 2, curr = -1
    //After 2 is 4
    //After -1 is 2 then 4
    head.next = curr.next 
    curr.next = head
    head = temp
}

return newNode.next