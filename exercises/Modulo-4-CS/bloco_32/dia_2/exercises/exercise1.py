def print_inverted_name(name):
    for remove_letters in range(len(name)):
        for index in (range(len(name) - remove_letters)):
            print(name[index], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    print_inverted_name(name)
