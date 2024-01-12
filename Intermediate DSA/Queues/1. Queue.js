class Queue {

    constructor(){
        this.items = [];
    }

    enqueue(item){

    // FIFO: Items are pushed from rear, and retrieved from Front

    this.items.push(item); // O(1)
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    dequeue(){

        if(this.isEmpty()){
            console.error('Queue Underflow');
            return;
        }

        const first = this.items.shift(); // Remove Element from Front, O(n)
        return first;
    }

    front(){
        if(this.isEmpty()){
            console.error('Queue Underflow');
            return;
        }

        return this.items[0];
    }

    display(){

        if(this.isEmpty()){
            return 'Queue is empty';
        }

        let queueStr = '';

        for(let item of this.items){
            queueStr+=item+" ";
        }

        return queueStr;
    }

}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());

queue.dequeue();
console.log(queue.display());
queue.dequeue();
queue.dequeue();
console.log(queue.display());
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front());