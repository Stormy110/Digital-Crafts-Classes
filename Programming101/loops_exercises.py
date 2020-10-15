
# i = 1
# while i < 11:
#     print(i) 
#     i += 1

# j = 10
# while j > 0:
#     print(j)
#     j -= 1

#user_name = ""
#password = ""


#while user_name != "Ian":
    #user_name = input("Please input the correct user name\n")
    
#while password != "banana":
    #password = input("Please inout the correct password\n")
    
#print("Congrats you may proceed")



# now i will add a maximum number of attempts allowed before exiting the loop



user_name = ""
pwd = ""
i = 0

while i <= 2 and (user_name != "Ian" or pwd != "banana"):
    user_name = input("What is the user name? ")
    pwd = input("What is the password? ")
    i += 1
    if i == 2:
        print("You suck!")
        break
    if user_name == "Ian" and pwd == "banana":
        print(f"Welcome {user_name}! So glad you could make it!")
        break