#!/usr/bin/env python3
"""
Import wait_random from the previous python file that you have written
and write an async routine called wait_n that takes in 2 int arguments
(in this order): n and max_delay. You will spawn wait_random n times
with the specified max_delay.
wait_n should return the list of all the delays (float values).
The list of the delays should be in ascending order without
using sort() because of concurrency.
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Let's execute multiple coroutines at the same time with async
    """
    delays = []
    coroutines = []
    for number_coroutines in range(n):
        coroutines.append(wait_random(max_delay))
    for coroutine in asyncio.as_completed(coroutines):
        # as_completed order coroutines by end of excecution (fastest first)
        delay = await coroutine
        delays.append(delay)
    return delays
