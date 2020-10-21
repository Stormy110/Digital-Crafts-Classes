x = 10  
#x not declared inside a function. It's a globally scoped variable.
def add_to_x(a):
    # can access x because it is a global variable 
    return x + a

print(add_to_x(2)) #12
def add_two_numbers(a,b):
    c = a+b
    print(c)
    return c

result = add_two_numbers(2,4)
print(result)

# print(c) # Error c is not in global scope!



def add_two_numbers(a,b):
    c = a+b
    print(c)
    return c

def add_to_c(d):
    e = c+d
    print(e)
    return e 

add_two_numbers(1,2) #c is in the function, but its local
# add_to_c(12) # errors .. c is not in scope



def repeat_stuff():
    x = 10
    def update_x():
        return x + x
    
    while x < 100:
        x = update_x()
        print(x)

#update_x cannot be accessed outside 
repeat_stuff()




## Cannot modify a global inside of a function
x = 10
def change_x_to(newX):
    x = newX
    print(x)
    return x

change_x_to(15) #prints 15..yea! x is 15
print(x) #x is 10? WTH?!?
def change_x_to(newX):
    global x #saying 'Hey x if your global stay that way or be a global var if not already created'
    x = newX
    print(x)
    return x

change_x_to(15)
print(x)
x = 10
def change_x_to(newX):
    global x
    x = newX
    print(x)
    return x

print(x) #10
change_x_to(15)
print(x) #15
# Global variable conditionally set is possible... but not a best practice
number = int(input("Give me a number:\n"))
if number > 10:
    x = number * 10

print(x)#if user entered <9 then it will error