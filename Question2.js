function rotate(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = n - 1;
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
            left++;
            right--;
        }
    }
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate(matrix);
console.log(matrix);
