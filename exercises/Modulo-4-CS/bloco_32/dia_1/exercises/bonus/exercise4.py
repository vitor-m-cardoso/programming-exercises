def fuel_test_price(liters, fuel):
    if fuel == "A":
        price = 1.90
        discount = 0.03 if liters <= 20 else 0.05
    elif fuel == "G":
        price = 2.50
        discount = 0.04 if liters <= 20 else 0.06
    else:
        print("Invalid data")

    total = price * liters
    total -= total * discount

    return total


print(fuel_test_price(19, "G"))
print(fuel_test_price(209, "A"))
