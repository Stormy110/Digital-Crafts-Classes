# Problem 1

numbers = [1,3,5,7]
sum = 0
for number in numbers:
    sum += number
print(sum)

# Problem 2

numbers = [1,34,5,7]
large_num = numbers[0]
for number in numbers:
    if number > large_num:
        large_num = number
print(large_num)

numbers.sort()
print(numbers[-1])

# Problem 3

numbers = [3,87,13,45,2]
small_num = numbers[0]
for number in numbers:
    if number < small_num:
        small_num = number
print(small_num)

print(min(numbers))


# Problem 4

numbers = [3,87,13,45,2, 6, 18]
for number in numbers:
    if number % 2 == 0:
        print(number)



# Problem 5

numbers = [3,87,13,45,2, -4, -6, -23]
for number in numbers:
    if number > 0:
        print(number)

# Problem 6

numbers = [3,87,13,45,2, -4, -6, -23]
new_list = []
for number in numbers:
    if number > 0:
        new_list.append(number)
print(new_list)

# Problem 7

numbers = [3,87,13,45,2]
new_list = []
factor = 12
for number in numbers:
    sum = factor * number
    new_list.append(sum)
print(new_list)

# Problem 8

string = "Banana"

print(string[::-1])