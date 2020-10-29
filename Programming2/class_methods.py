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



bad_guy = Mob("SnakeMan", 10, 10)

hero = Mob("Loma", 30, 10)
hero.get_hit(6)
print(hero.health)
hero.get_hit(15)
print(hero.health)
print(bad_guy.health)
bad_guy.get_hit(9)
print(bad_guy.health)
bad_guy.attack(hero)
hero.attack(bad_guy)
hero.attack(bad_guy)