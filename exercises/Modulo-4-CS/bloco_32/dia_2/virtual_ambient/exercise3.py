# file = open("students.txt", mode="r")
# content = file.read()
# lines = content.split("\n")

# for line in lines:
#     students = line.split(" ")
#     if int(students[1]) < 6:
#         print(students[0])

# file.close()

rejected_students = []

with open("students.txt") as students_grade:
    for line in students_grade:
        student_grade = line.split(" ")
        if int(student_grade[1]) < 6:
            rejected_students.append(f"{student_grade[0]}\n")

with open('rejected_students.txt', mode="w") as rejected_students_names:
    print(rejected_students)
    rejected_students_names.writelines(rejected_students)
