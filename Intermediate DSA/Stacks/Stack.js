class Stack {

    constructor(){
        this.stack = [];
    }
    // Stack Methods: push(), pop(), peek(), isEmpty(), size()

    push(value){

        this.stack.push(value);
    }

    size(){
        return this.stack.length;
    }

    pop(){

        if(this.size() === 0){
            console.error('Stack is empty');
            return;
        }
        return this.stack.pop();

    }
    peek(){

        if(this.size() === 0){
            console.error('Stack is empty');
            return;
        }

        return this.stack[this.size() -1];

    }

    isEmpty(){
        return this.size() === 0;
    }


}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);
stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.size());
stack.push(20);
console.log(stack.size);
