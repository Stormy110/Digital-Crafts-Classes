# Problem 1

names = ["Ian", "Molly", "Sasha", "Ty"]
names = names + ["Reilly", "Kailly"]
print(names)


# Problem 2

names = ["Joe","Bob","Gary","James","Jim"]
names[2] = "Foo"
names[4] = "Bar"
print(names)
# Problem 3
index = 1
names = ["Joe","Bob","Gary","James","Jim"]
while index <= len(names):
    print(names[0])
    del names[0]
print(names)