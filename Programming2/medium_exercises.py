# Problem 1
list_1 = [10,5,3]
list_2 = [10,4,5]
result = []
i = 0

while i < len(list_1):
    result.append(list_1[i]*list_2[i])
    i += 1
print(result)

# Problem 2

matrix_1 = [[2,3],[3,4]]
matrix_2 = [[1,4],[3,2]]
new_matrix = []
new_matrix.append([matrix_1[0][0] + matrix_2[0][0],matrix_1[0][1]+matrix_2[0][1]])
new_matrix.append([matrix_1[1][0] + matrix_2[1][0],matrix_1[1][1]+matrix_2[1][1]])
print(new_matrix)

# another solution

i = 0
new_matrix = []
while i < len(matrix_1):
    j = 0
    m = []
    while j < len(matrix_1):
        m.append(matrix_1[i][j]+matrix_2[i][j])
        j += 1
    new_matrix.append(m)
    i += 1
print(new_matrix)

# Problem 3
matrix_1 = [[123,1,5,6],[23,4],[1]]
matrix_2 = [[14,32,12,5],[2,1],[2]]
i = 0
new_matrix = []
while i < len(matrix_1):
    j = 0
    m = []
    while j < len(matrix_1[i]):
        m.append(matrix_1[i][j] + matrix_2[i][j])
        j += 1
    new_matrix.append(m)
    i += 1
print(new_matrix)

# Problem 4

my_list = ['apple', 'cat', 'bird', 'grape', 'bird', 'cat']
new_list = []
for item in my_list:
    if not item in new_list:
        new_list.append(item)
print(new_list)

# Problem 5





# Problem 6


