def linear_search(numbers_list, target):
    for index in range(0, len(numbers_list)):
        if numbers_list[index] == target:
            return index
    return -1
