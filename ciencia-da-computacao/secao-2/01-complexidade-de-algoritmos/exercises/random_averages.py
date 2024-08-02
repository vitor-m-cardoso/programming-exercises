import random


def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        sum_random_numbers = 0
        for _ in range(n):
            sum_random_numbers += random.randrange(1, n)
        average = round(sum_random_numbers / n, 2)
        list_of_averages.append(average)
    return list_of_averages


print(random_averages(1000))
