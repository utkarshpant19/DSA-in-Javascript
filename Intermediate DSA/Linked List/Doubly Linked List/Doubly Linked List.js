
class Node{

    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {

    constructor(){
        this.head = null;
    }

    // Add First

    addFirst(data){

        let node = new Node(data);

        if(this.head){
        node.next = this.head;
        this.head.prev = node;
        }

        this.head = node;

    }

    // Add Last

    addLast(data){

        // Go to the last Node

        let node = new Node(data);
        if(!this.head){
            this.head = node;
            return;
        }

       // Traverse to the last Node
       
      let temp = this.head;

      while(temp.next){
        temp = temp.next;
      }

      temp.next = node;
      node.prev = temp;

    }

    // Size
    size(){

        let temp = this.head;
        let count = 0;
        while(temp){
            temp = temp.next;
            count++;
        }
        return count;
    }

    addAtIndex(idx, data){

        if(idx < 0 || idx >= this.size()){

            console.error('Index wrong');
            return;
        }

        let node = new Node(data);

        if(idx == 0){

            node.next = this.head;
            this.head.prev = node;
            this.head = node;       
            return;
        }

    
        // Go to index-1 node

        let count = 0, temp = this.head;

        while(count < idx-1){
            temp = temp.next;
            count++;
        }

        // save prev next node
        let prevNext = temp.next;
        temp.next = node;
        node.prev = temp;
        node.next = prevNext;
        prevNext.prev = node;

    }

    // Remove First

    removeFirst(){

            if(!this.head){
                return;
            }

            this.head = this.head.next;
            this.head.prev = null;
    }

    removeLast(){

        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null;
            return;
        }

        // Go to the second last node

        let temp = this.head;
        while(temp.next.next){
            temp = temp.next;
        }
        temp.next = null;
    }

    removeAtIndex(idx){

        if(idx <0 || idx>= this.size()){
            console.error('Wrong Index');
            return;
        }

        if(idx == 0){
            
            if(!this.head.next){
                this.head = null;
            }
            else
            this.head = this.head.next;

            return;
        }

        let temp = this.head, count = 0;

        while(count < idx){
            temp = temp.next;
            count++;
        }

        let prev = temp.prev;
        prev.next = temp.next;
        temp.next.prev = prev;

    }

    display(){

        let temp = this.head;

        while(temp != null){
            console.log(temp.data);
            temp =  temp.next;
        }
    }

}

let dll = new DoublyLinkedList();
dll.addFirst(10);
dll.addFirst(20);
dll.addFirst(30);
dll.addLast(40);
dll.addAtIndex(3, 25);
dll.addAtIndex(0, 5);
dll.removeFirst();
dll.removeLast();
dll.removeAtIndex(67);

console.log('Size ',dll.size());

dll.display();