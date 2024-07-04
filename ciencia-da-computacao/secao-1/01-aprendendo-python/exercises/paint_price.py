import math


def calc_paint_price(wall_size):
    coverage_per_can = 18 * 3
    price_per_can = 80.00

    num_cans = math.ceil(wall_size / coverage_per_can)

    total_price = num_cans * price_per_can

    return (num_cans, total_price)


print(calc_paint_price(wall_size=120))
