// 47. Deep copy a jagged array with numbers or other arrays in a new array

let jaggedArray = [
    [1, 2, 3],
    [4, 5],
    [6, [7, 8], 9]
];

// let copiedJaggedArray = JSON.parse(JSON.stringify(jaggedArray));

// console.log("Original Jagged Array:", jaggedArray);

// console.log("Copied Jagged Array:", copiedJaggedArray);

function deepCopy(jaggedArray) {
    return jaggedArray.map((val)=>{
        if(Array.isArray(val)){
            return deepCopy(val);
        }else{
            return val;
        }
    })

}

const copiedJaggedArray = deepCopy(jaggedArray);

copiedJaggedArray[2][1][0] = 100;

console.log("Original Jagged Array:", jaggedArray);

console.log("Copied Jagged Array:", copiedJaggedArray);