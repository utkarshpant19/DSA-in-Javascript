
// 10 -> 20 -> 30 -> 40 -> null

class Node {

    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
    }

    // Adding Item at the Beginning
    addFirst(data){

        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Adding to the last

    addLast(data){

        const newNode = new Node(data);

        if(!this.head){
            // Empty LL
            this.head = newNode;
            return;
        }

        let current = this.head;

        // Go to the last node
        while(current.next){

            current = current.next;
        }

        // Now we're at the tail node
        current.next = newNode;
    }

    size(){

        let current = this.head;
        let count = 0;
        while(current){
            current = current.next;
            count++;
        }

        return count;
    }

    // Adding Node at idx

    addAtIndex(data, idx){

        if(idx <0 || idx >= this.size()){
            console.error('Node not found');
        }

        let newNode = new Node(data);

        if(!this.head){
            this.addFirst(data);
            return;
        }

        let i=0, current = this.head;

        while(i+1 != idx){
            current = current.next;
            i++;
        }

        // We're at index -1 position
        const prevNext = current.next;
        current.next = newNode;
        newNode.next = prevNext;

    }

    // Remove 
    removeFirst(){

        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }

    removeLast(){

        if(!this.head){
            return;
        }

        // Go to the second last node, make it's next null

        let currentNode = this.head;
        while(currentNode.next.next){
            currentNode = currentNode.next;
        }

        currentNode.next = null;
    }

    removeAt(idx){
        if(!this.head){
            return;
        }
        if(idx < 0 || idx >= this.size()){
            console.error('Index out of bound');
            return;
        }

        if(idx == 0){
            const currentHead = this.head;
           this.head = this.head.next;
            return currentHead;
        }
        
        // Go to idx -1 position
        let count = 0;

        let currentNode = this.head;

        while(count != idx -1){
            currentNode = currentNode.next;
            count++;
        }

        // Make current node point to next of next node,
        const indexNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        return indexNode;

    }

    display(){

        if(this.size() > 0){

            let current = this.head;

            while(current){

                console.log(current.data);
                current = current.next;
            }
        }
    }
}

const linkedList = new LinkedList();
linkedList.addFirst(10);
linkedList.addFirst(20);
linkedList.addFirst(30);
linkedList.addLast(40);
linkedList.addAtIndex(5,1);
linkedList.removeFirst();
linkedList.removeLast();
linkedList.removeAt(2);




linkedList.display();
console.log('Size ',linkedList.size());