first = 'look only single quotes'
second = "look double quotes"
third = '''
    hello
    my friend
'''

fourth = '''hello
my friend'''
print(first)
print(second)
print(third)
print(fourth)

print("hello " + "world")

message = "Hello world!"

print("Hey you, ", message)

# f string
name = "ian"
print(f"Hello {name}")

# string interpolation
new_string = 'Hey this is %s, and I like it.' % "awesome"
print(new_string)

adjective = "cool"

print("Hey this is %s, and I like it." % adjective)

# using a tuple
print("I want to tell %s %s and hey this is %s" % (name, message, adjective))