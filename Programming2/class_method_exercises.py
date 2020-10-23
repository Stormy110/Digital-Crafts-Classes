# Class Exercise
class Vehicle:
    def __init__(self,category,color,top_speed,acceleration,wheels=4):
        self.category = category
        self.color = color
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.wheels = wheels
        self.speed = 0
        self.position = 0
        self.race_stats = []
        
# add gear change that affects the acceleration after a certsain amount of seconds

    def move(self):
        self.position += self.speed
        self.race_stats.append({"speed" : self.speed, "position": self.position})
        # print(f"{self} has moved to position {self.position}")
    def accelerate(self):
        self.speed += self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed
            

class Sport(Vehicle):
    def __init__(self):
        self.category = category
        self.color = color
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.turbo = turbo
        self.wheels = wheels
        self.speed = 0
        self.position = 0
        


class Motorcycle(Vehicle):
    pass

jeep = Vehicle("SUV","black",7,2,4)
ford = Vehicle("coupe", "red",6,3,4)
ferrari = Vehicle("sports car", "cherry red",8,3,4)
ducati = Vehicle("motorcycle", "yellow", 8,4,2)
helicopter = Vehicle("aircraft", "black", 10,1,0)

second = 0
while second <= 10:
    jeep.accelerate()
    jeep.move()
    # print(f"This is Jeep's current speed : {jeep.speed}")
    ford.accelerate()
    ford.move()
    # print(f"This is Ford's current speed : {ford.speed}")
    ferrari.accelerate()
    ferrari.move()
    # print(f"This is Ferrari's current speed : {ferrari.speed}")
    ducati.accelerate()
    ducati.move()
    # print(f"This is Ducati's current speed : {ducati.speed}")
    helicopter.accelerate()
    helicopter.move()
    # print(f"This is Helicopter's current speed : {helicopter.speed}")
    second += 1
print(f"Jeep has traveled {jeep.position} km.")
print(f"Ford has traveled {ford.position} km.")
print(f"Ferrari has traveled {ferrari.position} km.")
print(f"Ducati has traveled {ducati.position} km.")
print(f"Helicopter has traveled {helicopter.position} km.")
jeep_stats = jeep.race_stats
ford_stats = ford.race_stats
ferrari_stats = ferrari.race_stats
ducati_stats = ducati.race_stats
heli_stats = helicopter.race_stats


# print(jeep_stats)

# Give the sport class a 'turbo' attribute that is a number.
# Have the sport modify the accelerate method (using super), 
# by checking if turbo is greater than 0 double the acceleration 
# for that second and subtract one from turbo.
# for motorcycle have the default acceleration quite a bit higher
#  but top speed quite a bit lower.
# preform the same races as before.