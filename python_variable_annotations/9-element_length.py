#!/usr/bin/env python3
"""
Module qui définit une fonction pour obtenir la longueur de chaque élément d’un itérable de séquences.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Retourne une liste de tuples (élément, longueur) pour chaque élément de l’itérable."""
    return [(i, len(i)) for i in lst]
