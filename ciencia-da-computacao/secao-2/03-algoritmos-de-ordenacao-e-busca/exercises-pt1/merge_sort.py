def merge_sort(numbers_list, start=0, end=None):
    if end is None:
        end = len(numbers_list)
    if (end - start) > 1:
        mid = start + end
        merge_sort(numbers_list, start, mid)
        merge_sort(numbers_list, mid, end)
        merge(numbers_list, start, mid, end)


def merge(numbers_list, start, mid, end):
    left = numbers_list[start:mid]
    right = numbers_list[mid:end]

    left_index, right_index = 0, 0

    for general_index in range(start, end):
        if left_index >= len(left):
            numbers_list[general_index] = right[right_index]
            right_index += 1
        elif right_index >= len(right):
            numbers_list[general_index] = left[left_index]
            left_index += 1
        elif left[left_index] < right[right_index]:
            numbers_list[general_index] = left[left_index]
            left_index += 1
        else:
            numbers_list[general_index] = right[right_index]
            right_index += 1
