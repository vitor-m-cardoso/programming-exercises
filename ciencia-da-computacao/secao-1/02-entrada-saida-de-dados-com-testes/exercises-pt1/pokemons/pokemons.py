import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]


grass_type_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)


with open("grass_pokemons.json", mode="w") as file:
    json.dump(grass_type_pokemons, file)


fire_type_pokemons = []
for pokemon in pokemons:
    if "Fire" in pokemon["type"]:
        fire_type_pokemons.append(pokemon)


with open("fire_pokemons.json", mode="w") as file:
    json.dump(fire_type_pokemons, file)
