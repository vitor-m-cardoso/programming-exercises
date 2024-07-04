books = 60
discount = 0.4
book_price = (1 - discount) * 24.20
transport = 0.75
logistic = 3 + (books - 1) * transport
totalPrice = books * book_price + logistic

print("Preço total: ", round(totalPrice, 2))
