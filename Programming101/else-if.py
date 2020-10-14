age = input("How old are you?\n")
if int(age) >= 21:
    print("You are old enough")
else:
    print("You are not old enough")

# or you can do this 

# age = int(input("How old are you?\n"))

age = int(input("How old are you?\n"))

if age == 21:
    print("You are a great age to party!")
elif age > 21:
    print("You are old enough")
else:
    print("You are not old enough")

# if/elif/else only runs the first one that is true starting with if going down
