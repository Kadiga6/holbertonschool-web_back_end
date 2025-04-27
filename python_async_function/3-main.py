#!/usr/bin/env python3
"""Fichier de test pour la fonction task_wait_random."""

import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def test_task():
        """Test pour exécuter la coroutine task_wait_random."""
        task = task_wait_random(5)
        await task  # Pas d'indentation en trop ici



asyncio.run(test_task())
