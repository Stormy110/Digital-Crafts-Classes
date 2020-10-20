# # Problem 1

# total_bill = float(input("What is the total bill?\n"))
# service_level = input("How was the service? (Good, Fair, or Bad?\n")

# if service_level == "Good":
#     tip_amount = total_bill * 0.2
# elif service_level == "Fair":
#     tip_amount = total_bill * 0.15
# elif service_level == "Bad":
#     tip_amount = total_bill * 0.1
# else:
#     print("You did not enter the correct service level")
    

# total = total_bill + tip_amount

# print("Tip amount: " + '${:,.2f}'.format(tip_amount))
# print("Total amount: " + '${:,.2f}'.format(total))


# # Problem 2

# total_bill = float(input("What is the total bill?\n"))
# service_level = input("How was the service? (Good, Fair, or Bad?\n")
# diners = int(input("How many people will split the bill?\n"))

# if service_level == "Good":
#     tip_amount = total_bill * 0.2
# elif service_level == "Fair":
#     tip_amount = total_bill * 0.15
# elif service_level == "Bad":
#     tip_amount = total_bill * 0.1
    

# total = total_bill + tip_amount
# split_amount = total / diners

# print("Tip amount: " + '${:,.2f}'.format(tip_amount))
# print("Total amount: " + '${:,.2f}'.format(total))
# print("Each person pays: " + '${:,.2f}'.format(split_amount))

# # Problem 3

# coins = 0
# question = input("Do you want a coin? ")
# if question == "No":
#     print("Bye")
# while question == "Yes":
#     coins += 1
#     print(f"You have {coins} coins.")
#     question = input("Do you want a coin? ")
#     if question == "No":
#         print("Bye")

# # Problem 4

# rows = int(input("Give a height:\n"))
# columns = int(input("Give a width:\n"))

# for i in range(rows):
#     for j in range(columns):
#         print('*' if i in [0, rows-1] or j in [0, columns-1] else ' ', end='')
#     print()
    
## Another solution for 4:











# # Problem 5

# # Stackoverflow solution

# def asterix_triangle(depth):
#         rows = [ (depth-i)*' ' + i*'*' + '*' + i*'*'  for i in range(depth) ]
#         for j in rows:
#             print(j)
# asterix_triangle(6)

# # My Solution

# columns = (" " + " " + " " + "*" + " " + " " + " ")
# count = 0
# while count < 4:
#     if count == 0:
#         print(columns)
#     elif count == 1:
#         columns = (" " + " " + "*" + "*" + "*" + " " + " ")
#         print(columns)
#     elif count == 2:
#         columns = (" " + "*" + "*" + "*" + "*" + "*" + " ")
#         print(columns)
#     elif count == 3:
#         columns = ("*" + "*" + "*" + "*" + "*" + "*" + "*")
#         print(columns)
#     count += 1
    
# # Problem 6

# for i in range(1, 11):
#     for j in range(1, 11):
#         print(i, 'x', j, '=', i*j)
       

