#!/usr/bin/env python3
"""
Module qui définit une fonction qui prend une liste de flottants et
retourne leur somme sous forme de flottant.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Prend une liste de flottants, renvoie leur somme sous forme de flottant.
    """
    return float(sum(mxd_lst))
