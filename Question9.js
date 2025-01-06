function countDistinctSubsequences(s) {

    const n = s.length;
    let dp = new Array(n + 1).fill(0);
    
    dp[0] = 1;
    
    let lastOccurrence = new Map();
    
    for (let i = 1; i <= n; i++) {
        dp[i] = 2 * dp[i - 1];
        
        if (lastOccurrence.has(s[i - 1])) {
            dp[i] -= dp[lastOccurrence.get(s[i - 1]) - 1];
        }
        
        lastOccurrence.set(s[i - 1], i);
    }

    return dp[n] - 1;
}

let string = "abcbac";
let result = countDistinctSubsequences(string);
console.log("Number of Distinct Subsequences:", result);
