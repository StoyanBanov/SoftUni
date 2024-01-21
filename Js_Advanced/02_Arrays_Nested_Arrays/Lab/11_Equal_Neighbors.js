function findEqualNeighbors(matrix) {
    let count = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let val = matrix[i][j]

            i < matrix.length - 1 && matrix[i + 1][j] == val && count++

            matrix[i][j + 1] == val && count++
        }
    }

    return count
}

console.log(findEqualNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]));