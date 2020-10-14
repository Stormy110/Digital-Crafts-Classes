# 10/0 would be an error

try:
    if 2 > "3":
        print("never prints")
except:
    print("blah")

try:
    print(100 / int(input("Give me a number\n")))
except ZeroDivisionError:
    print("You tried to divide by zero")
except TypeError:
    print("You put the wront type")
except ValueError:
    print("You did not out a number")