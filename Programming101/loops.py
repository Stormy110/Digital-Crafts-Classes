i = 0
while i < 10:
    print(i)
    i += 1

i = 2
max_num = 50
increment = 2
while i < max_num:
    print(i)
    i *= increment


# example of infinite loop below
#j = 0
#while j < 10:
#   print(j)


# this is an infinite loop that stops once you enter the correct info
name = ""
while name != "ian":
    name = input("please say your name is ian\n")
print("great i knew you could do it")
