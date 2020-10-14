pet_name = input("What is your pet name? ")

if pet_name == "Shadow":
    print("El Gato Diablo")
elif pet_name == "Daisy":
    print("Good Dog!")
else:
    if len(pet_name) < 3:
        print("Your pet name is too short")
    elif len(pet_name) > 3:
            print(f"Awww sweet {pet_name}")
    else:
        print("perfect length")





#If pet_name is "Shadow" output ONLY "El Gato Diablo!"
#If the input is equal to "Daisy" output ONLY "Good Dog!"
        
