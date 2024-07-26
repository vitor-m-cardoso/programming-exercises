def print_name():
    name = input("What is your name? ")
    for index in range(len(name)):
        print(name[: len(name) - index])


print_name()
