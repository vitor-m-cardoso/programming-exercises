import sys

values = input("Digite vários números, separados por um espaço ").split(" ")
sum_values = 0

for value in values:
    if value.isdigit() is True:
        sum_values += int(value)
        print(sum_values)
    else:
        err = f"Erro ao somar valores, {value} é um valor inválido"

        print(f"Erro aconteceu: {err}", file=sys.stderr)
