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







# # Problem 3
# import random

# print("I am thinking of a number 1 - 10.\nNumber of attempts left: 5")
# count = 5
# secret_number = random.randint(1, 10)
# guess = int(input("Guess a number between 1 and 10:\n"))
# if guess == secret_number:
#     print("Congrats you win!")
# while guess != secret_number and count > 1:
#     if guess > secret_number:
#         print(f"{guess} is too high.")
#     elif guess < secret_number:
#         print(f"{guess} is too low.")
#     count -= 1
#     print(f"Number of attempts left: {count}")
#     guess = int(input("Guess a number between 1 and 10:\n"))
#     if guess == secret_number:
        # print("Congrats you win!")

# # BONUS - ask the user if they want to play again at the end of the game
# #   and, if yes, start the game again.
    
    

# Class solution
# import random

# secret_number = random.randint(1,10)
# guess = 0
# guess_count = 0
# play_again = "yes"
# while play_again == "yes":
#     secret_number = random.randint(1,10)
#     guess = 0
    # guess_count = 0
    # while guess != secret_number and guess_count < 5:
    #     while guess_count < 5:
    #         guess_count += 1
    #         try:
    #             guess = int(input("Please guess a number.\n"))
    #             break
    #         except ValueError:
    #             print("You did not enter a number! Loser!")
    #     if guess == secret_number:
    #         print("Yes, you win.")
    #     elif guess < secret_number:
    #         print("Your number is too low")
    #     else:
    #         print("Your number is too high")
    #     guess_count += 1
    # if guess_count >= 5:
    #     print("You guessed too many times.")
    # play_again = input("Do you want to play again?")   
            
# Make a to-do list

# todo_list = []

# Main_Menu = """
# Choose an action:
# P = Print to do list.
# A = Add a new thing to do.
# R = Replace an item in the list.
# C = Complete a to-do item.

# (Press Enter to exit the program)
# """
# choice = input(Main_Menu)
# choice = choice.upper()


# while len(choice) > 0:
#     if choice == "P":
#         print("To-Do List:")
#         print("=========================")
#         count = 1
#         for todo in todo_list:
#             print("%d: %s" % (count, todo))
#             count += 1
#     elif choice == "A":
#         new_todo = input("What do you need to do?\n")
#         if len(new_todo) > 0:
#             todo_list.append(new_todo)
#     elif choice == "R":
#         # Print the current list of to-do items
#         print("\n\n\nTo do:")
#         print("====================")
#         count = 1
#         for todo in todo_list:
#             print("%d: %s" % (count, todo))
#             count += 1
        
#         which_index = input("Which to-do number? ")
#         try:
#             which_index = int(which_index)
#             which_index -= 1 # Convert from human-readable to 0-based index
            
#             if which_index >= 0 and which_index < len(todo_list):
#                 new_todo = input("What do you need to do? ")
#                 todo_list[which_index] = new_todo
#         except ValueError:
#             print("\n\n***Please enter a number.***") 
#     elif choice == "C":
#         # Print the current list of to-do items
#         print("\n\n\nTo do:")
#         print("====================")
#         count = 1
#         for todo in todo_list:
#             print("%d: %s" % (count, todo))
#             count += 1
        
#         which_index = input("Which to-do number? ")
#         try:
#             which_index = int(which_index)
#             which_index -= 1 # Convert from human-readable to 0-based index
            
#             if which_index >= 0 and which_index < len(todo_list):
#                 completed_todo = todo_list[which_index]
#                 del todo_list[which_index]
#                 print("%s has been marked complete!" % completed_todo)
#         except ValueError:
#             print("\n\n***Please enter a number.***")   
#     else:
#         print("\n\n***Please enter a valid menu option.***")    

#     choice = input(Main_Menu)
#     choice = choice.upper() # Simplifies our if-conditions

# print("Have a nice day!")