import time

start_time = time.time()


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            end_time = time.time()
            print("--- %s seconds ---" % (end_time - start_time))
            return True
        previous_number = number
    end_time = time.time()
    print("--- %s seconds ---" % (end_time - start_time))
    return False


numbers_list = list([1, 1, 3, 4, 5, 6, 1])
# complexidade: O(n log n)
print(contains_duplicate(numbers_list))
