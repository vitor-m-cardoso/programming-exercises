# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
# print(10 * (1 / 0))

# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
# print(4 + spam * 3)

# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
# print('2' + 2)

try:
    arquivo = open("write_and_read.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("Arquivo manipulado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")
