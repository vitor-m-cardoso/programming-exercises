import json
import random

with open("pokemons.json", mode="r", encoding="utf-8") as file:
    pokemons = json.load(file)["results"]


def choose_random_pokemon():
    random_pokemon = random.choice(pokemons)["name"]
    result = ""
    for letter in random_pokemon:
        selected_pokemon = input("Quem é este pokemon? ")
        result += letter
        if selected_pokemon == random_pokemon:
            print(f"Você acertou! O pokemon é o {random_pokemon}!")
            break
        print(f"Dica: {result}")
    if len(random_pokemon) == len(result):
        print(f"Você perdeu! Mais sorte na próxima. O pokemon era o {random_pokemon}")


choose_random_pokemon()
