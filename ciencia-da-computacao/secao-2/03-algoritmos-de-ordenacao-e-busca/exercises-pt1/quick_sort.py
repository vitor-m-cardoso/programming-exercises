import random


def quick_sort(numbers_list, start, end):
    if start < end:
        p = partition(numbers_list, start, end)
        quick_sort(numbers_list, start, p - 1)
        quick_sort(numbers_list, p + 1, end)
    return numbers_list


def partition(numbers_list, start, end):
    pivot = numbers_list[end]
    delimiter = start - 1

    for index in range(start, end):
        if numbers_list[index] <= pivot:
            delimiter += 1
            numbers_list[index], numbers_list[delimiter] = (
                numbers_list[delimiter],
                numbers_list[index],
            )
    numbers_list[delimiter + 1], numbers_list[end] = (
        numbers_list[end],
        numbers_list[delimiter + 1],
    )

    return delimiter + 1


num_list = list(range(9))
random.shuffle(num_list)
print(quick_sort(num_list, 0, len(num_list) - 1))
