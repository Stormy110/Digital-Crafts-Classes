# Problem 1

name = input("What is your name?\n")
print(f"Hello there {name}!")

# Problem 2

name = input("WHAT IS YOUR NAME?\n")

length = len(name)

print(f"HELLO {name.upper()}!")
print(f"YOU HAVE {length} LETTERS IN YOUR NAME!")

# Problem 3

print("Please fill in the blanks below:")
print("I like to (verb) with the (adjective) (noun).")
verb = input("Pick a verb: ")
adj = input("Pick an adjective: ")
noun = input("Pick a noun: ")
print(f"I like to {verb} with the {adj} {noun}.")


# Problem 4

day = int(input('Day (0-6)? '))

if day == 1:
    print('Monday')
elif day == 2:
    print('Tuesday')
elif day == 3:
    print('Wednesday')
elif day == 4:
    print('Thursday')
elif day == 5:
    print('Friday')
elif day == 6:
    print('Saturday')
elif day == 0:
    print('Sunday')
else:
    print('Not a correct number')

#Problem 5

day = int(input('Day (0-6)? '))

if day == 0:
    print('Sleep in.')
elif day == 1:
    print('Go to work.')
elif day == 2:
    print('Go to work.')
elif day == 3:
    print('Go to work.')
elif day == 4:
    print('Go to work.')
elif day == 5:
    print('Go to work.')
elif day == 6:
    print('Sleep in.')
else:
    print('Not a correct number')

#Problem 6

celsius = int(input("Temperature in C?\n"))
fahrenheit = (celsius * 9/5) + 32
print(f"{fahrenheit} F")

#Problem 7

i = 1
while i < 11:
    print(i)
    i += 1

#Problem 8

start_num = int(input("Pick a number."))
end_num = int(input("Pick a higher number."))

while start_num <= end_num:
    print(start_num)
    start_num += 1

#Problem 9

print('''*****
*****
*****
*****
*****''')

#Problem 10

side = int(input("How big is the square: "))
for i in range(side):
    for i in range(side):
        print('*', end = ' ')
    print()

