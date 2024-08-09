def binary_search(numbers_list, target):
    start = 0
    end = len(numbers_list) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers_list[mid] == target:
            return mid
        if target < numbers_list[mid]:
            end = mid - 1
        else:
            start = mid + 1
    return -1
