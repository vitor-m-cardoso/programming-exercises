def get_biggest_name(names_list):
    biggest_name = names_list[0]
    for name in names_list:
        if len(biggest_name) < len(name):
            biggest_name = name
    return biggest_name


print(get_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
