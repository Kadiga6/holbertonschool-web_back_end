#!/usr/bin/env python3
"""
Il définit une fonction annotée qui retourne un tuple à partir
d'une chaîne de caractères et d'un nombre (int ou float).
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Prend une chaîne `k` et une valeur numérique `v` (int ou float),
    et retourne un tuple contenant la chaîne `k` et le carré de `v` (en float
    """
    return float(sum(mxd_lst))
