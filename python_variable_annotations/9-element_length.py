#!/usr/bin/env python3
"""
Module qui définit une fonction pour obtenir la longueur de chaqueelemnt
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Rtrn une liste de tuples (elemnt,longueur) pour chaquelemnt itérable."""
    return [(i, len(i)) for i in lst]
