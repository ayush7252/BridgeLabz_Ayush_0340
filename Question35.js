// 35. Create a function to convert a CSV text to a “bi-dimensional” array

let  csv = "1,2,3\n4,5,6\n7,8,9"

function csvToArray(csv) {
    let rows = csv.split("\n");
    let array = [];
    for (let row of rows) {
        let cols = row.split(",");
        array.push(cols);
    }
    return array;
}

console.log(csvToArray(csv)); 