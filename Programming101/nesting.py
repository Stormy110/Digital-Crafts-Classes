name = input("what is your name? ")

if len(name) > 3:  #len = length = function that counts the length of the characters in the variable
    print("your name is long enough")

    if len(name) > 15:
        print("that is a huge name")
    else:
        print(f"welcome {name}")

length = len(name)
print(length)

if len(name) > 3:
    if len(name) < 10:
        if len(name) == 4:
            print("perfect length")
        else:
            print("It's an okay length")
        print(f"Welcome {name}")
    else:
        print("That's way too long partner")
else:
    print("%s is too few characters." % length)
    # can also do fstring
    #print(f"{length} is too few characters.")


# Multiple Conditions using  and  -  or
name = input("what is your name? ")
num = len(name)
if num > 3 and num < 15:
    if num == 4:
        print("perfect length")
    else:
        print("It is an ok length")
    print(f"Welcome {name}")
else:
    print(f"{length} is not a good number")

