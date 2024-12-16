// 49. Shuffle an array of strings

const arr = ['1', '2', '3', '4'];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    return arr;
}

const shuffledArray = shuffleArray(arr);

console.log(shuffledArray); 
