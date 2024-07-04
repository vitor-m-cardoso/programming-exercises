def print_square(n):
    counter = 0
    while counter < n:
        print(n * "*")
        counter += 1


def print_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")


print_triangle(5)
