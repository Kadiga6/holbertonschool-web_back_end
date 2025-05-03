#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Retourne une liste de tuples (élémenlongueur) pour chaque élémente l'it�rable"""
    return [(i, len(i)) for i in lst]
