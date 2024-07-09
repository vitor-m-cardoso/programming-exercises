while True:
    try:
        x = int(input("Please insert a number: "))
        break
    except ValueError:
        print("Oops! That's not a number. Please, try again...")
