# example of a dictionary with key:value pairs
movie = {
    "name":"Star Wars",
    "episode":4,
    "year":"1977",
    "villains":["Vader","Tarkin"],
    "heroes": ["Luke", "Hans", "Leia"]
}


# How to access a key pair value

print(movie["year"])
print(movie['heroes'])

bad_guys = movie["villains"]
print(bad_guys)
print(bad_guys[1])
bad_guys.append("Jabba")
print(movie)

search = "heroes"
print(movie[search])

if "published" in movie:
    print("Yes this has a year.")

# add a new item

movie["ships"] = ["Falcon", "Death Star"]
print(movie)

# Looping through dictionaries

for key in movie: 
    print(key)   # prints the keys

for key in movie:
    print(movie[key])   # prints the value of the keys

for key in movie:
    print(key,":", movie[key])