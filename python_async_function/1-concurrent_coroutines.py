#!/usr/bin/env python3
""" Task 1: Let's execute multiple coroutines at the same time with async """
import asyncio
from typing import List, Any

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Function takes in 2 int arguments """
    allDelays: List[float] = []
    List_of_tasks: List[Any] = []
    for i in range(n):
        List_of_tasks.append(asyncio.create_task(wait_random(max_delay)))
        for results in asyncio.as_completed(List_of_tasks):
            completed = await results
            allDelays.append(completed)
            """ return the list of all the delays (float values) """
            return allDelays
