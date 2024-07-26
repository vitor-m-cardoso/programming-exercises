import pytest
from fizz_buzz_module import fizz_buzz


def test_when_number_is_3_if_list_returns_correctly():
    assert fizz_buzz(3) == [1, 2, "Fizz"]
    assert fizz_buzz(3) != [1, 2, 3]


def test_when_number_is_5_if_list_returns_correctly():
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]
    assert fizz_buzz(5) != [1, 2, 3, 4, 5]


def test_fizz_buzz_when_is_not_a_number_raises_an_exception():
    with pytest.raises(TypeError, match="Argument must be a number"):
        fizz_buzz("5")


if __name__ == "__main__":
    pytest.main()
