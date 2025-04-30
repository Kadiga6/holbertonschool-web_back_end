#!/usr/bin/env python3
"""
Module qui définit une fonction annotée qui retourne un tuple à partir
d'une chaîne de caractères et d'un nombre (int ou float).
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Prend une chaîne `k` et une valeur numérique `v` (int ou float),
    et retourne un tuple contenant la chaîne `k` et le carré de `v` (en float)
    """
    return (k, float(v ** 2))
