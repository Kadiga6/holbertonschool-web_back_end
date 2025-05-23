#!/usr/bin/env python3
""" Task 2: Measure the runtime """
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
        """ Measure total exec time for wait_n & returns total_time / n. """
        start_t: float = time.time()
        asyncio.run(wait_n(n, max_delay))
        end_t: float = time.time()
        return (end_t - start_t) / n
