#!/usr/bin/env python3
"""Module qui définit une fonction retournant une fonction multiplicatrice."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Rtrn une fonct qui multpli un nbre flottant par le multplicatr donné"""
    return lambda x: x * multiplier
