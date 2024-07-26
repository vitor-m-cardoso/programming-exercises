import pytest
from is_odd_number import is_odd
from divide import divide


def test_when_number_is_odd_returns_true():
    assert is_odd(3) is True


def test_when_number_is_even_returns_false():
    assert is_odd(2) is False


def test_divide_when_dividing_by_zero_raises_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(3, 0)
