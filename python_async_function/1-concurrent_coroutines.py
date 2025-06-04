#!/usr/bin/env python3
""" Task 1: Let's execute multiple coroutines at the same time with async """
import asyncio
from typing import List, Any

wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """Run 'n' coroutines and return a list of delays (floats) in the order they complete."""
    all_delays: List[float] = []
    list_of_tasks: List[Any] = []

    for _ in range(n):
        list_of_tasks.append(asyncio.create_task(wait_random(max_delay)))

    for task in asyncio.as_completed(list_of_tasks):
        completed = await task
        all_delays.append(completed)

    return all_delay
