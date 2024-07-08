import sys

numbers_list = input(
    "Separando com um espaço, adicione todos os números que você deseja somar: "
).split()
total = 0

for number in numbers_list:
    if not number.isdigit():
        err = f"Erro ao somar valores, '{number}' é um valor inválido"
        print(f"Erro: {err}", file=sys.stderr)
    else:
        total += int(number)

print(total)
