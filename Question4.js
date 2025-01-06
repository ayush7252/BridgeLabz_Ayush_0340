function slidingWindowMax(arr, k) {
    const result = [];
    const deque = [];

    for (let i = 0; i < arr.length; i++) {
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindowMax(arr, k));
