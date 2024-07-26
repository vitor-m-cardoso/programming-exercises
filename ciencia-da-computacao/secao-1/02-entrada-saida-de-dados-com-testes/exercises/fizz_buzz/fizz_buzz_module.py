def fizz_buzz(n):
    if not isinstance(n, int):
        raise TypeError("Argument must be a number")

    list = []
    for index in range(1, n + 1):
        if index % 3 == 0 and index % 5 == 0:
            list.append("FizzBuzz")
        elif index % 3 == 0:
            list.append("Fizz")
        elif index % 5 == 0:
            list.append("Buzz")
        else:
            list.append(index)
    return list
