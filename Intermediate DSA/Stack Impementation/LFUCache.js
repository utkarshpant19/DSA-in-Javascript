

class DLLNode {

  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.frequency = 1;
    this.next = null;
    this.prev = null;
  }
}

class DLL {

  constructor() {
    this.head = new DLLNode(-1, -1);
    this.tail = new DLLNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insert(node) {
    // Insert in head
    const headNext = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = headNext;
    headNext.prev = node;
  }

  remove(node) {
    const nodeNext = node.next;
    node.prev.next = nodeNext;
    nodeNext.prev = node.prev;
  }

  isEmpty() {
    return this.head.next == this.tail; // Means no other node in between
  }
}

class LFUCache {

    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.freqMap = new Map();
      this.minFreq = 0;
    }
  
    get(key)  {
      if (this.cache.has(key)) {
        const currNode = this.cache.get(key);
  
        // Get currentNode's frequency
        const currFreq = currNode.frequency;
        // Get the list of current frequency
        let currList = this.freqMap.get(currFreq);
  
        // Remove the node from the current list ,increase the frequency, add to another list
        currList?.remove(currNode);
  
        // After removing check if dll is empty
        if (this.minFreq == currFreq && currList?.isEmpty() == true) {
          this.minFreq++;
        }
        currNode.frequency++;
        // Check if list exists for current frequency
  
        let newList = this.freqMap.get(currNode.frequency);
  
        if (!newList) {
          newList = new DLL();
          newList.insert(currNode);
          this.freqMap.set(currNode.frequency, newList);
        } else {
          newList.insert(currNode);
          this.freqMap.set(currNode.frequency, newList);
        }
  
        return currNode.value;
      } else {
        return -1;
      }
    }
  
    put(key, value) {


      // Check if key already present
      if(this.cache.has(key)){

        // Update
        const currNode = this.cache.get(key);
        currNode.value = value;

        // Now delete the node from current list
        const currFreq = currNode.frequency;
        const currList = this.freqMap.get(currFreq);

        currList.remove(currNode);

        // After removal check if min freq list is empty

        if(currFreq == this.minFreq && currList.isEmpty() == true){
          this.minFreq++;
        }
        currNode.frequency++;

        // Now insert the node in updated frequency list
        let newList = this.freqMap.get(currNode.frequency);

        if(!newList){
          newList = new DLL();
        }
        newList.insert(currNode);
        this.freqMap.set(currNode.frequency, newList);
        this.cache.set(key, currNode);

      }
      else{

        // New Node

        const newNode = new DLLNode(key, value);

          if(this.capacity == this.cache.size){

            // Remove the tail prev node from minFreq list
            let minFreqList = this.freqMap.get(this.minFreq);
            const tailPrev = minFreqList.tail.prev;
            minFreqList.remove(tailPrev);
            this.cache.delete(tailPrev.key);

            // Space ban gya 
          }

          // New min frequency will be 1
          let minFreqList = this.freqMap.get(1);
          if(!minFreqList){
            minFreqList = new DLL();
          }
          minFreqList.insert(newNode);
          this.freqMap.set(1, minFreqList);
          this.cache.set(key, newNode);
          this.minFreq = 1;
      }

    }
  }

// const lfu = new LFUCache(2);
// lfu.put(1,1);
// lfu.put(2,2);
// console.log(lfu.get(1));
// lfu.put(3,3);
// console.log(lfu.get(2));
// console.log(lfu.get(3));
// lfu.put(4,4);
// console.log(lfu.get(1));
// console.log(lfu.get(3));
// console.log(lfu.get(4));





