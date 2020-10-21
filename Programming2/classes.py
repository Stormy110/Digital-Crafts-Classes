# class Person:
#     pass # this passes an emopty code block

# ian = Person()
# anna = Person()
# print(ian)

# we can define functions inside of classes

class Person:
    def __init__(self,name,age,height = "average"): # self is the first parameter in every method of every class in opython
        print("You created an instance of person")
        self.name = name
        self.age = age
        self.height = height
ian = Person("Ian",29,"Tall")
bob = Person("Bob",45)
print(f"Wow {bob.name} you are {bob.height} and you are {bob.age} years old!")
print(bob.name)
print(bob.age)