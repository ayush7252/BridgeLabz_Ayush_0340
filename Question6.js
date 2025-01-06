class MedianFinder {
    constructor() {
      this.maxHeap = []; 
      this.minHeap = []; 
    }
  
    add(num) {
      if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
        this.maxHeap.push(-num);
        this._heapifyUp(this.maxHeap);
      } else {
        this.minHeap.push(num);
        this._heapifyUp(this.minHeap, false);
      }
  
      if (this.maxHeap.length > this.minHeap.length + 1) {
        this.minHeap.push(-this.maxHeap.shift());
        this._heapifyDown(this.maxHeap);
        this._heapifyUp(this.minHeap, false);
      } else if (this.minHeap.length > this.maxHeap.length) {
        this.maxHeap.push(-this.minHeap.shift());
        this._heapifyDown(this.minHeap);
        this._heapifyUp(this.maxHeap);
      }
    }
  
    getMedian() {
      if (this.maxHeap.length > this.minHeap.length) {
        return -this.maxHeap[0]; // Return the root of max-heap
      }
      return (-this.maxHeap[0] + this.minHeap[0]) / 2; // If both heaps are balanced, return the average
    }
  
    _heapifyUp(heap, isMaxHeap = true) {
      let idx = heap.length - 1;
      const compare = isMaxHeap ? (a, b) => a > b : (a, b) => a < b;
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (compare(heap[idx], heap[parentIdx])) {
          [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
          idx = parentIdx;
        } else {
          break;
        }
      }
    }
  
    _heapifyDown(heap, isMaxHeap = true) {
      let idx = 0;
      const compare = isMaxHeap ? (a, b) => a > b : (a, b) => a < b;
      const len = heap.length;
      while (2 * idx + 1 < len) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let swapIdx = leftChildIdx;
  
        if (rightChildIdx < len && compare(heap[rightChildIdx], heap[leftChildIdx])) {
          swapIdx = rightChildIdx;
        }
  
        if (compare(heap[swapIdx], heap[idx])) {
          [heap[idx], heap[swapIdx]] = [heap[swapIdx], heap[idx]];
          idx = swapIdx;
        } else {
          break;
        }
      }
    }
  }
  let mf = new MedianFinder();
  mf.add(6);
  console.log("Median:", mf.getMedian()); 
  mf.add(10);
  console.log("Median:", mf.getMedian()); 
  mf.add(2);
  console.log("Median:", mf.getMedian()); 
  mf.add(8);
  console.log("Median:", mf.getMedian()); 
  mf.add(4);
  console.log("Median:", mf.getMedian()); 
  mf.add(12);
  console.log("Median:", mf.getMedian()); 
  