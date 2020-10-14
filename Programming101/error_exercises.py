
i = 0
num = int(input("what is your number?\n"))
try:
    while num > i:
        num -= 1
        print(num)
except TypeError:
    print("That is not a number")
except ValueError:
    print("That is not a valid value")

num1 = input("Pick a number.")
num2 = input("Pick another number.")

try:
    print(int(num1) + int(num2))
except TypeError:
    print("Wrong type")
except ValueError:
    print("Wrong value")
except ZeroDivisionError:
    print("You can't divide by zero")
try:
    print(int(num1) * int(num2))
except TypeError:
    print("Wrong type")
except ValueError:
    print("Wrong value")
except ZeroDivisionError:
    print("You can't divide by zero")
try:
    print(int(num1) / int(num2))
except TypeError:
    print("Wrong type")
except ValueError:
    print("Wrong value")
except ZeroDivisionError:
    print("You can't divide by zero")