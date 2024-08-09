import random
import timeit


def biggest_num(num_list, control=0, biggest=None):
    if biggest is None:
        biggest = num_list[0]
    if len(num_list) == control:
        return biggest
    if num_list[control] > biggest:
        return biggest_num(num_list, control + 1, num_list[control])
    else:
        return biggest_num(num_list, control + 1, biggest)
    # chamada recursiva


number_list = list(range(100))
random.shuffle(number_list)
print(biggest_num(number_list))

setup = """
import random
from __main__ import biggest_num, number_list
"""
stmt = "biggest_num(number_list, 0, 0)"
tempo_execucao = timeit.timeit(stmt, setup=setup, number=10000)
print(f"Tempo de execução: {tempo_execucao} segundos")
