with open("exercises-pt1/file.txt", "w") as file:
    file.write("My text")

with open("exercises-pt1/file.txt", "r") as file:
    file_content = file.read()
    print(file_content)

with open("exercises-pt1/new_file.txt", "w") as file:
    LINES = ["Hello\n", "beautiful\n", "Python\n", "World\n"]
    file.writelines(LINES)

with open("exercises-pt1/new_file.txt", "r") as file:
    for line in file:
        print(line)
