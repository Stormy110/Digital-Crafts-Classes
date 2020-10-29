class Mob:
    def __init__(self,name,health = 10, power = 2):
        self.name = name
        self.health = health
        self.power = power

    def get_hit(self,power):
        self.health = self.health - power
        print(f"{self.name} was hit for {power} points and now has {self.health} left!")

    def attack(self,enemy):
        enemy.get_hit(self.power)
class Hero(Mob):
    def yell(self):
        print("I %s, say to though villain, I will attack thee!" % self.name)
    

hero = Hero("Ian")
print(hero.power)
bad_guy = Mob("Trump")
hero.attack(bad_guy)
hero.yell()
hero.attack(bad_guy)