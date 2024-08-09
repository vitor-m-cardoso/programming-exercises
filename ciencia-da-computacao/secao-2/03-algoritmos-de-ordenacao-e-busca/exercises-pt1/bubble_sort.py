import random


def bubble_sort(numbers_list):
    n = len(numbers_list)

    for ordered_elements in range(n - 1):
        for idx in range(0, n - 1 - ordered_elements):
            if numbers_list[idx] > numbers_list[idx + 1]:
                numbers_list[idx], numbers_list[idx + 1] = (
                    numbers_list[idx + 1],
                    numbers_list[idx],
                )
    return numbers_list


num_list = list(range(10))
random.shuffle(num_list)
print(bubble_sort(num_list))
