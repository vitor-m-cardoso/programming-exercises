import time

start_time = time.time()


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers_list, target):
    # definir os índices
    start = 0
    end = len(numbers_list) - 1

    # os índices podem, no máximo, serem iguais. O início nunca pode ultrapassar o fim
    while start <= end:
        # divisão inteira (arredonda para o menor fracionario) e encontra o meio
        mid = (start + end) // 2
        print(f"mid: {mid}")
        # se o elemento do meio for o alvo, devolve a posição
        if numbers_list[mid] == target:
            end_time = time.time()
            print("--- %s seconds ---" % (end_time - start_time))
            return mid

        # se o elemento for maior, atualiza o índice do fim
        if numbers_list[mid] > target:
            end = mid - 1
        # caso contrário, atualiza o índice do início
        else:
            start = mid + 1
    # caso não encontre o alvo, retorna -1.
    return -1


def search_list(numbers_list):
    for number in numbers_list:
        result = binary_search(numbers_list, target=number)
        print(f"Elemento encontrado na posição: {result}")


numbers_list = list(range(100000))
search_list(numbers_list)
# --- 4.2465879917144775 seconds ---
# Elemento encontrado na posição: 99999
