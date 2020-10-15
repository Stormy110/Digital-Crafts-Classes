# # Problem 1

# #print the first 100 triangle numbers - 1 + 2 = 3 + 3 = 6 + 4 = 10

# number = 1
# total = 1
# while total <= 100:
#     if number == 1:
#         print(number)
#     number += 1
#     total += number
#     print(total)
   
# # Problem 2 - Take an inputted number and return that numbers factors

# number = int(input("Give me a number:\n"))





# Problem 3
import random

print("I am thinking of a number 1 - 10.\nNumber of attempts left: 5")
count = 5
secret_number = random.randint(1, 10)
another_game = ""
guess = int(input("Guess a number between 1 and 10:\n"))
if guess == secret_number:
    print("Congrats you win!")
while guess != secret_number and count > 1:
    if guess > secret_number:
        print(f"{guess} is too high.")
    if guess < secret_number:
        print(f"{guess} is too low.")
    count -= 1
    print(f"Number of attempts left: {count}")
    guess = int(input("Guess a number between 1 and 10:\n"))
    if guess == secret_number:
        print("Congrats you win!")
    
    

