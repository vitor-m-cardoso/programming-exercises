import math


def num_of_paint_cans(wall_size):
    can_price = 80
    required_liters = wall_size / 3
    required_cans = math.ceil(required_liters / 18)

    return f"Quantidade: {required_cans}, total: {required_cans * can_price}"


print(num_of_paint_cans(858))
