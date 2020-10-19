max = 3
board = []
for y in range(max):
    board.append([])
    for x in range(max):
        board[y].append("[%d], [%d]" % (y,x))
for row in board:
    for column in row:
        print("%s " % column, end = "")
    print("\n")

    