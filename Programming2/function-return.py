def add_numbers(a,b):
    result = a+b
    return result #sends result out

add_numbers(1,2) #Where did it go?

# assign the result of the return to the variable
new_number = add_numbers(1,2)
print(new_number)
#directly returning something more complex
def make_dictionary(first, last, phone, zip):
    return {
        "first_name":first,
        "last_name":last,
        "phone_number":phone,
        "zip_code":zip
    }

clint_data = make_dictionary("Clint", "Fleetwood", "555-555-5555", "30076")

print(clint_data["zip_code"])
#Do something a bit more complex
def make_grid(size):
    row = 0
    col = 0
    grid = {}
    while row <= size:
        col = 0
        while col <= size:
            grid[str(col)+'-'+str(row)] = {
                "row":row,
                "col":col
            }
            col +=1
        row += 1
    return grid

grid5 = make_grid(5)
print(grid5['4-3'])

#explicit return
def add_numbers_and_return(a,b):
    print(a+b)
    return a+b # written return is explicit

result = add_numbers_and_return(2,3)
print(result) #5

#implicit return
def add_numbers(a,b):
    print(a+b)

result = add_numbers(2,3)
print(result) #None which is a datatype

length = len([2,3,4]) 
#len is a python native function that returns the length of an list
print(length)

#same results
print(len([1,3,4]))
#The return value can be directly used as an argument
def add_numbers(a,b):
    return a+b

result = add_numbers(2, add_numbers(3,4))
print(result)

