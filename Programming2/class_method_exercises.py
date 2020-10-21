class Vehicle:
    def __init__(self,category,color,top_speed,acceleration,wheels=4,speed=0,position=0):
        self.category = category
        self.color = color
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.wheels = wheels
        self.speed = speed
        self.position = position
        

    def move(self):
        self.position += self.speed
        print(f"{self} has moved to position {self.position}")
    def accelerate(self):
        if self.speed <+ self.top_speed:
            self.speed += self.acceleration
            print(f"{self} accelerated to {self.speed} speed.")
jeep = Vehicle("SUV","black",7,2,4,0,0)
ford = Vehicle("coupe", "red",6,3,4,0,0)
ferrari = Vehicle("sports car", "cherry red",8,3,4,0,0)
ducati = Vehicle("motorcycle", "yellow", 8,4,2,0,0)
helicopter = Vehicle("aircraft", "black", 10,1,0,0,0)

second = 0
while second <= 60:
    jeep.accelerate()
    jeep.move()
    ford.accelerate()
    ford.move()
    ferrari.accelerate()
    ferrari.move()
    ducati.accelerate()
    ducati.move()
    helicopter.accelerate()
    helicopter.move()
    second += 1
print(f"Jeep has traveled {jeep.position} km.")
print(f"Ford has traveled {ford.position} km.")
print(f"Ferrari has traveled {ferrari.position} km.")
print(f"Ducati has traveled {ducati.position} km.")
print(f"Helicopter has traveled {helicopter.position} km.")

