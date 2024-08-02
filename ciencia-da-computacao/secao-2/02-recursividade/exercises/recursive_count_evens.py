def recursive_evens(n, count):
    if n == 1:
        return count
    if n % 2 == 0:
        return recursive_evens(n - 1, count + 1)
    return recursive_evens(n - 1, count)


print(recursive_evens(10, 0))
