def triangle(ang1, ang2, ang3):
    is_triangle = ang1 + ang2 > ang3 and ang2 + ang3 > ang1 and ang1 + ang3 > ang2

    if not is_triangle:
        return "Não é triângulo"
    elif ang1 == ang2 == ang3:
        return "Triângulo Equilátero"
    elif ang1 == ang2 or ang1 == ang3 or ang2 == ang3:
        return "Triângulo Isóceles"
    else:
        return "Triângulo Escaleno"


print(triangle(9, 10, 11))
