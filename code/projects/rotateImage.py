def printMatrix(matrix):
    line = []
    n = len(matrix)
    for i in range(0, n):
        for j in range(0, n):
            line.append(str(matrix[i][j]))
        print(' '.join(line))
        line = []

def rotateImage(M):
    n = len(M)

    if (n == 0 or n != len(M[0])):
        return 
    
    return M


mat1 = [[1,2,3],
        [4,5,6],
        [7,8,9]]
mat2 = []
mat3 = [[1]]
mat4 = [1]

printMatrix(rotateImage(mat1))
printMatrix(rotateImage(mat2))
printMatrix(rotateImage(mat3))