def triangle(side1, side2, side3):
    if side1 == side2 == side3:
        print("é um triângulo equilátero")
    elif side1 != side2 != side3:
        print("é um triângulo escaleno")
    elif side1 == side2 or side2 == side3 or side1 == side3:
        print("é um triângulo isósceles")
    else:
        print("não é triangulo")


print(triangle(5, 3, 4))
