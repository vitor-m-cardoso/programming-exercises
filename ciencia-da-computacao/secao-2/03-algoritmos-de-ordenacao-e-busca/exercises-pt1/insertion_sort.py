import random


def insertion_sort(numbers_list):
    list_size = len(numbers_list)

    for index in range(1, list_size):
        key = numbers_list[index]
        new_position = index - 1

        while new_position >= 0 and numbers_list[new_position] > key:
            numbers_list[new_position + 1] = numbers_list[new_position]
            new_position = new_position - 1
        numbers_list[new_position + 1] = key
    return numbers_list


num_list = list(range(1, 20))
random.shuffle(num_list)
print(insertion_sort(num_list))
