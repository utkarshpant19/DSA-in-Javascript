const CircularQueue = function(size){
    this.queue = [];
    this.size = size;
}

// enqueue
CircularQueue.prototype.Enqueue = function(value){

    // Check if circular queue is already full

    if(this.size == this.queue.length){
        return false;
    }

    this.queue.push(value);
    return true;
}

// dequeue

CircularQueue.prototype.Dequeue = function(){

    // Check if Circular queue is empty

    if(this.queue.length == 0){
        return false;
    }
    this.queue.shift();
    return true;

}

// front

CircularQueue.prototype.Front = function(){

    if(this.queue.size == 0){
        return null;
    }

    return this.queue[0];

}
// Rear

CircularQueue.prototype.Rear = function(){

    if(this.queue.size == 0){
        return null;
    }

    return this.queue[this.queue.length -1];

}
// isEmpty

CircularQueue.prototype.IsEmpty = function(){

    return this.queue.length === 0;

}

// is Full: Circular queue will be full, if spot after rear is front

CircularQueue.prototype.isFull = ()=>{


    return this.queue.length === this.size;
}

const cQ = new CircularQueue(5);
cQ.Enqueue(10);
cQ.Enqueue(20);
cQ.Enqueue(30);
cQ.Enqueue(50);
cQ.Enqueue(70);


console.log(`Front ${cQ.Front()}, Rear ${cQ.Rear()}`);
console.log(`${cQ.queue}`);
cQ.Dequeue();
console.log(`${cQ.queue}`);

