#!/usr/bin/env python3
""" 9-insert_school: inserts a new document in a MongoDB collection """


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on keyword arguments.

    Args:
        mongo_collection: pymongo collection object
        **kwargs: key-value pairs representing the document fields

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
