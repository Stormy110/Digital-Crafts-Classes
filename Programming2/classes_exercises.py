# Make the Vehicle have a 'category' attribute which can
#  be anything like, sport, truck, motorcycle, minivan.
# Make the Vehicle class have 'wheels' as an attribute.
# Make the Vehicle class have 4 as the default value for the class.
# Create 5 different instances of the 
# class with at least one being a motorcycle.

class Vehicle:
    def __init__(self,category,color,wheels=4):
        self.category = category
        self.wheels = wheels
        self.color = color
jeep = Vehicle("SUV","black")
ford = Vehicle("coupe", "red")
ferrari = Vehicle("sports car", "cherry red")
ducati = Vehicle("motorcycle", "yellow", 2)
helicopter = Vehicle("aircraft", "black", 0)

print(jeep.category,jeep.color,jeep.wheels)
print(ford.category,ford.color,ford.wheels)
print(ferrari.category,ferrari.color,ferrari.wheels)
print(ducati.category,ducati.color,ducati.wheels)
print(helicopter.category,helicopter.color,helicopter.wheels)