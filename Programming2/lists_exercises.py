# Problem 1

favorite_foods = ["Tacos","Steak","Chicken Wings"]
print(favorite_foods[1])
print(favorite_foods[-1])


# Problem 2

things = ["coffee", "notebook", "pen", "phone"]
count = 0
for thing in things:
    count += 1
    print("%d. %s" % (count, thing))

# Problem 3

things = ["coffee", "notebook", "pen", "phone"]
count = 0
for thing in things:
    count += 1
    print("%d. %s" % (count, thing))

user_thing = int(input("What thing is the most interesting? (Choose a number)\n"))

if user_thing == 0:
    print("You chose coffee!")
elif user_thing == 1:
    print("You chose notebook!")
elif user_thing == 2:
    print("You chose pen!")
elif user_thing == 3:
    print("You chose phone!")
else:
    print("Try again.")
