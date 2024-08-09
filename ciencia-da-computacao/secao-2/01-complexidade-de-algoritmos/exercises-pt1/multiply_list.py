import time

start_time = time.time()


def multiply_list(list1, list2):
    result = []
    number_of_iterations = 0

    for number1 in list1:
        print(f"list 1: {number1}")
        for number2 in list2:
            print(f"list 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1
    print(f"{number_of_iterations} iterações")
    end_time = time.time()
    print("--- %s seconds ---" % (end_time - start_time))
    return result


my_list = list(range(1000))
multiply_list(my_list, my_list)
