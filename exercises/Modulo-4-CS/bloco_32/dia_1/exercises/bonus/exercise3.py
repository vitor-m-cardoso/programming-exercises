def sum(limit):
    total = 0

    for number in range(1, limit + 1):
        print(number)
        total += number

    return total


print(sum(5))
