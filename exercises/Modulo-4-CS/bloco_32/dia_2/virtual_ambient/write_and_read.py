# escrita

# file = open("write_and_read.txt", mode="w")
# file.write("Hello World!")
# file.close()

# # leitura
# file = open("write_and_read.txt", mode="r")
# content = file.read()
# print(content)
# file.close()  # não podemos esquecer de fechar o arquivo

# lendo multiplos arquivos
# escrita
file = open("write_and_read.txt", mode="w")
LINES = ["Ola\n", "mundo\n", "belo\n", "do\n", "python\n"]

file.writelines(LINES)

file.close()

# leitura
file = open("write_and_read.txt", mode="r")

for line in file:
    print(line)  # não esqueça que a quebra de linha também é um caractere da linha

file.close()
