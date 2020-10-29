print('Hello World') #The string 'hello world' is an argument
print(1,2,3) # more than one argument

my_list = ['I','am','a','list']

len(my_list) #my_list is an argument


# a and b are parameters
def add_two_numbers(a,b):
    print(a+b)

# a list datatype 
def print_list(a_list):
    for item in a_list:
        print(item)

# Functions from above example
add_two_numbers(10,20)
print_list(["I","Am","Awesome"])

a = 10
b = 10
add_two_numbers(a,b)

# Order matters
def tell_me_stuff(first_name, age, gender):
    print(f"My name is {first_name}")
    print(f"I am {age} years old.")
    print(f"I am {gender} human")

tell_me_stuff("Clint", 38, "Male")
tell_me_stuff("Male", "Clint", 38)

#Giving the wrong type causes an error
add_two_numbers("foo", "bar")