import random
import csv


def write_random_words(word):
    with open("random_words.csv", mode="w", encoding="utf-8") as file:
        writer = csv.writer(file)
        headers = ["Palavras Aleatórias"]
        writer.writerow(headers)
        counter = 0
        while counter < 3:
            scrambled_word = "".join(random.sample(word, len(word)))
            writer.writerow([scrambled_word])
            counter += 1


def guess_random_word(word):
    write_random_words(word)
    with open("random_words.csv", mode="r", encoding="utf-8") as file:
        random_words_dict = csv.DictReader(file, delimiter=",", quotechar='"')
        random_words_list = []
        for row in random_words_dict:
            random_word = row["Palavras Aleatórias"]
            random_words_list.append(random_word)
        word = random.choice(random_words_list)
        print(random_words_list)
        user_choice = input("Qual a palavra sorteada? ")
        if word == user_choice:
            print("Você venceu! Acertou a palavra sorteada.")
        else:
            print(f"Você perdeu! A palavra sorteada era: {word}.")


if __name__ == "__main__":
    guess_random_word("paralelepipedo")
