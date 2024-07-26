import json
import csv

with open("books.json", mode="r") as file:
    books = json.load(file)
    group_by_category = {}
    for row in books:
        categories = row["categories"]
        for category in categories:
            if category not in group_by_category:
                group_by_category[category] = 0
            group_by_category[category] += 1


def calculate_books_percentage(category, total):
    return round((category / total) * 100, 2)


with open("books_report.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)
    headers = ["categoria", "porcentagem"]
    writer.writerow(headers)

    for category, quantity in group_by_category.items():
        percentage = calculate_books_percentage(quantity, total=len(books))
        row = [category, f"{percentage}%"]
        writer.writerow(row)
