let Node = function(key, value){

    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

var LRUCache = function(capacity) {

    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(-1,-1);
    this.tail = new Node(-1,-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.remove = function(node){
    this.map.delete(node.key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

LRUCache.prototype.insert = function(node){
    // Always insert next to head
   
    const headNext = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = headNext;
    headNext.prev = node;
    this.map.set(node.key, node);
}

LRUCache.prototype.get = function(key) {

    if(this.map.has(key)){
        const node = this.map.get(key);
        this.remove(node);
        this.insert(node);
        return node.value;
    }
    else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    const node = new Node(key, value);

    if(this.map.has(key)){
       this.remove(this.map.get(key));
    }
    if(this.capacity == this.map.size){
        this.remove(this.tail.prev);
    }
    this.insert(node);

};

const lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(2));
lRUCache.put(1,1);
lRUCache.put(4,1);
console.log(lRUCache.get(2));    // return 1