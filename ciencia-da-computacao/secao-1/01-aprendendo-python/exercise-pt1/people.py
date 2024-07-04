import area

PEOPLE_SQUARE_PER_METER = 2
FIELD_LENGTH = 60
FIELD_WIDTH = 45
people_at_concert = area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_SQUARE_PER_METER

print(f"Estão presentes no show aproximadamente " f"{people_at_concert} pessoas.")
