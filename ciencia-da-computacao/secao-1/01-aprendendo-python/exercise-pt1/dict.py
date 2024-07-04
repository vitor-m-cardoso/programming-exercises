info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info.update({"recorrente": "sim"})
del info["origem"]
print(info)
