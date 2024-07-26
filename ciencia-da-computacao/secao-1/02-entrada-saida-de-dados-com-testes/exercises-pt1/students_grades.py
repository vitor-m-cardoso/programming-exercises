students_failed = []

try:
    with open("exercises-pt1/students_grades.txt", mode="r") as file:
        for line in file:
            student = line.split(" ")[0]
            grade = line.split(" ")[1]
            if int(grade) < 6:
                students_failed.append(f"{student}\n")
    with open("exercises-pt1/failed_students", mode="w") as file:
        file.writelines(students_failed)
except FileNotFoundError:
    print("Failed to read file. Please, Try again.")
except TypeError:
    print("Type error. Please, try again.")
