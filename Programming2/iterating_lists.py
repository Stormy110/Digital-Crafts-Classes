my_siblings = ["Ty", "Molly", "Kailly", "Reilly"]

index = 0

#my_list[index] # same as saying my_list[0]
# while loop
while index < len(my_siblings):
    print(index + 1, ":", my_siblings[index])
    index += 1


# for loop
index = 1
for sibling in my_siblings:
    print("%d: %s" % (index, sibling))
    index += 1