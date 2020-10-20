# Problem 1

family = {
    "dog":["Stella", "Aspen"],
    "sibling": "Molly",
    "girlfriend": "Sasha"
}

print(family)

# Problem 2

person = {
    "first_name":"Ian",
    "last_name":"Storms",
    "age":29,
    "hair_color":"Brown"
}
for key in person:
    print(key, ":", person[key])
print("Hello", person["first_name"], person["last_name"], "you are", person["age"], "and have", person["hair_color"],"hair." )


people = [
    {
        "first_name":"Ian",
        "age":29
    },
    {
        "first_name": "Molly",
        "age":23
    },
    {
        "first_name":"Sasha",
        "age":28
    }
]

for person in people:
    print(person)