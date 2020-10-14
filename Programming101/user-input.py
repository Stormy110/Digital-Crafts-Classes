print("hello")
name = input("Name Please:\n")
subject = input("Favorite subject:\n")
age = input("How old are you?\n")


#if age >= 21:
    #print("Grab a beer?")  # Will not work because inout returns a string always

if int(age) >= 21:
    print("Grab a beer?")
print(f"You said your name is {name}")
print(f"You said your favorite subject is {subject}")
print(f"You said you were {age} years old")