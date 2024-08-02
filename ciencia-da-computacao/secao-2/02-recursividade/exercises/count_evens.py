def evens(n):
    counter = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            counter += 1
    return counter


print(evens(10))
