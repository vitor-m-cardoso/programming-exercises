import csv


with open("graduacao_unb.csv", mode="r", encoding="utf-8") as file:
    graduacoes = csv.DictReader(file, delimiter=",", quotechar='"')

    group_by_department = {}
    for row in graduacoes:
        department = row["unidade_responsavel"]
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1


with open("department_report.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)
    headers = ["Departamento", "Total de Cursos"]
    writer.writerow(headers)

    for department, grades in group_by_department.items():
        row = [department, grades]
        writer.writerow(row)
