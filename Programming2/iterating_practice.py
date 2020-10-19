# # Problem 1

# movie_stars = ["Daniel Craig", "Denzel Washington", "Robert DeNiro"]
# index = 0
# while index < len(movie_stars):
#     print(index + 1, ":", movie_stars[index])
#     index += 1

# # Problem 2
# index = 1
# for star in movie_stars:
#     print(index, ":", star)
#     index += 1

# Problem 3
sum = 0
number_list = [4,6,8,14]
for number in number_list:
    sum += number
print(sum)
    
# different solution

sum = 0
index = 0
number_list = [25, 43, 72,56,34,52,12,14,42]
while index < len(number_list):
    sum += number_list[index]
    index += 1
print(sum)