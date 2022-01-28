# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def return_biggest_value(val1, val2):
    b_val = f"O maior é: {val1}" if val1 > val2 else f"O maior é: {val2}"

    return b_val


print(return_biggest_value(10, 15))
