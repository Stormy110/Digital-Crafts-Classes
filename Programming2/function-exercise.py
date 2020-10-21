# # function exercise
# def my_name():
#     print("My name is Ian.")
# my_name()
# my_name()
# my_name()

# # function arguments exercises
# # Problem 1

# def multiply(a,b):
#     try:
#         return a * b
#     except NameError:
#         print("Type in a number!")
# print(multiply(5,10))
# print(multiply(16,34))
# print(multiply(45,5))
    
# # Problem 2
# def movies(title,genre,year):
#     print(f"1. Title: {title}")
#     print(f"2. Genre: {genre}")
#     print(f"3. Year: {year}")
# movies("The Mask", "Comedy", "2000")

# # Problem 3

# def movies(movie_dict):
#     for count,key in enumerate(movie_dict):
#         print(f"{count + 1}. {key}: {movie_dict[key]}")
        

# movie = {"Title":"The Mask", "Genre":"Comedy", "Year":2000}
# movies(movie)

# # another solution

# def movie(movie_item):
#     title = movie_item[0]
#     genre = movie_item[1]
#     year = movie_item[2]
#     print(f"1. Title: {title}")
#     print(f"2. Genre: {genre}")
#     print(f"3. Year: {year}")

# the_mask = ["The Mask", "Comedy", 2000]
# movie(the_mask)


# Function return exercises

# Problem 1
def my_func(first_name,last_name):
    return first_name + " " + last_name
print(my_func("Ian", "Storms"))

# Problem 2
def total_count(my_list):
    list_length = len(my_list)
    total_chars = 0
    for item in my_list:
        total_chars += len(item)
    return {
    "list_length": list_length,
    "total_chars": total_chars
    }
blah = ["I","am","a","man","banana", "watwrmelon"]
print(total_count(blah))






# Function Scope Exercises
# Problem 1

# name = "Ian Storms"
# def my_func(message):
#     print(f"{name}, {message}.")
# my_func("wassssup")
# my_func("boooyah")
# my_func("Hell yea")


# Problem 2
name = "George"

def my_func(new_name):
    name = new_name
    print(name)
my_func("Ian")
my_func("Sasha")
my_func("Molly")