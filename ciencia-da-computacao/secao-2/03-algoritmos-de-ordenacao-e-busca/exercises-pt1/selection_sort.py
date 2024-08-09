import random


# primeira forma de criar o algoritmo
def selection_sort(numbers_list):
    # quantidade de elementos da lista
    list_size = len(numbers_list)

    # precisamos ordenar N - 1 elementos
    for index in range(list_size - 1):
        # definir a variável para buscar o MENOR elemento
        min_element_index = index
        # início da busca pelo menor elemento
        for search_index in range(index + 1, list_size):
            if numbers_list[search_index] < numbers_list[min_element_index]:
                min_element_index = search_index
        # também é necessário trocar os elementos de posição
        current_element = numbers_list[index]
        numbers_list[index] = numbers_list[min_element_index]
        numbers_list[min_element_index] = current_element
    return numbers_list


num_list = list(range(1, 50))
random.shuffle(num_list)
print(f"Lista inicial: {num_list}")

ordered_list = selection_sort(num_list)
print(f"Lista ordenada: {ordered_list}")


# outra forma de criar o algoritmo de busca
def search(numbers_list, start, end):
    min_element = numbers_list[start]
    min_element_index = start

    for index in range(start + 1, end):
        if numbers_list[index] < min_element:
            min_element = numbers_list[index]
            min_element_index = index
    return min_element_index


def s_selection_sort(numbers_list):
    list_size = len(num_list)

    for index in range(list_size - 1):
        min_element_index = search(numbers_list, index, list_size)
        # aqui, nós trocamos os elementos utilizando desempacotamento
        numbers_list[index], numbers_list[min_element_index] = (
            numbers_list[min_element_index],
            numbers_list[index],
        )
    return numbers_list
