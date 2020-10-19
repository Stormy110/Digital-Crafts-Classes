# how to modify a list

#append method

# my_pets = ["Stella", "Aspen", "Mao"]
# my_pets.append("Xena")
# print(my_pets)


# concatenate
my_dogs = ["Stella", "Aspen"]
my_cats = ["Mao"]
my_pets = my_dogs + my_cats
my_pets = my_pets + ["Rainbow"]
print(my_pets)
print(len(my_pets)) 

combined_literal = [1,2,3] + ["a", "b", True]
print(combined_literal)

print([1,2,3] + ["a", "b", True])



new_pets = []

new_pets.extend(my_cats)
print(new_pets)

# change an items value

my_pets[1:2] = ["CrazyMan","Yes"]
print(my_pets)

# remove an item

del my_pets[1]
print(my_pets)