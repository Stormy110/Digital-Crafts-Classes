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


# This will print the first 2 options and those only and then check the name len



        
