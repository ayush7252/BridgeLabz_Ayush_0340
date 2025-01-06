class FreqStack {
    constructor() {
        this.freqMap = new Map(); 
        this.groupMap = new Map(); 
        this.maxFreq = 0; 
    }

    push(val) {
        const freq = (this.freqMap.get(val) || 0) + 1;
        this.freqMap.set(val, freq);

        if (freq > this.maxFreq) {
            this.maxFreq = freq;
        }

        if (!this.groupMap.has(freq)) {
            this.groupMap.set(freq, []);
        }
        this.groupMap.get(freq).push(val);
    }

    pop() {
        const val = this.groupMap.get(this.maxFreq).pop();

        const freq = this.freqMap.get(val) - 1;
        if (freq === 0) {
            this.freqMap.delete(val);
        } else {
            this.freqMap.set(val, freq);
        }

        if (this.groupMap.get(this.maxFreq).length === 0) {
            this.maxFreq--;
        }

        return val;
    }
}

const fs = new FreqStack();

fs.push(5);
fs.push(7);
fs.push(5);
fs.push(7);
fs.push(4);
fs.push(5);

console.log(fs.pop());
console.log(fs.pop());
console.log(fs.pop()); 
console.log(fs.pop()); 
