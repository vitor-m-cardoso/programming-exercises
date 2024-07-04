def calc_gasoline_price(quantity, type):
    if type.upper() == "G":
        price = 2.50
        discount = 0.04
        if quantity > 20:
            discount = 0.06
    elif type.upper() == "A":
        price = 1.90
        discount = 0.03
        if quantity > 20:
            discount = 0.05
    else:
        return "Adicione um tipo válido ('A' ou 'G')"
    total = price * quantity
    total -= total * discount
    return total


print(calc_gasoline_price(quantity=10, type="G"))
