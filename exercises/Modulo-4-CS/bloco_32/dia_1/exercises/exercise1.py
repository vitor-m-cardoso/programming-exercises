# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def return_biggest_value(val1, val2):
    if val1 > val2:
        return f"O maior valor é: {val1}"
    else:
        return f"O maior valor é: {val2}"


print(return_biggest_value(10, 15))
