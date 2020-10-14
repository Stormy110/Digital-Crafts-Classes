
i = 1
while i < 11:
    print(i) 
    i += 1

j = 10
while j > 0:
    print(j)
    j -= 1

#user_name = ""
#password = ""


#while user_name != "Ian":
    #user_name = input("Please input the correct user name\n")
    
#while password != "banana":
    #password = input("Please inout the correct password\n")
    
#print("Congrats you may proceed")



# now i will add a maximum number of attempts allowed before exiting the loop


user_name = "Ian"
password = "banana"
name = ""
pwd = ""
count = 0
while name != user_name and pwd != password and count != 3:
    name = input("What is your name?\n")
    pwd = input("What is the password?\n")
    count += 1
    if count == 3:
        print("You have no more chances")
print("You may proceed")
 #### this is not correct, need to fix