restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0

# for
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

# print(filtered_restaurants)

# for index in range(0, 11, 2):
#  print(index)

# while - fibonacci sequence
# n = 100
# last, next = 0, 1
# while last < n:
#     print(last)
#     last, next = next, last + next

# factorial number
n, result = 5, 1

for index in range(1, n + 1):
    result *= index
print(result)

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
print(new_ratings)

for rating in ratings:
    if (rating % 3) == 0:
        print(f"{rating} é multiplo de 3")
