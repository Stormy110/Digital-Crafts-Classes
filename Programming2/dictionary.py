superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}
# 3 ways to retrieve data from dictionary
hero_name = superhero["name"]# returns value of key using index form
hero_alias = superhero.get("alias")#returns the value of a key or returns none if it doesnt exist, 
# can also put a second arguemnt in .get , it will be returned if they 1st key does not exist
hero_values = superhero.values()#returns all values

# check to see if a key is in a dictionary

if "weakness" in superhero:
    print("The bad guys can totally win.")
else:
    print("Go home, bad guys.")

# check if not in dict.

if "weakness" not in superhero:
    print("Go home, bad guys.")

# to update a key; value in a dictionary

superhero["alias"] = "Princess Diana of Themyscira"#changes the value
superhero["hometown"] = "Themyscira"# adds a new key:value pair

# To iterate through a dictionary
for key, value in superhero.items():
    print("Superhero's %s is %s" % (key, value))

# to delete a key/value
#del superhero["vehicle"]
print("No vehicle. It's in the shop.")

# to access data in nested dictionaries

vehicle = superhero["vehicle"]
vehicle_title = vehicle["title"]

print(vehicle_title)


# OR

vehicle_title = superhero["vehicle"]["title"]

print(vehicle_title)
