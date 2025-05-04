#!/usr/bin/env python3
""" 10-update_topics: update topics of a school document """


def update_topics(mongo_collection, name, topics):
    """
    Update the topics of a school document based on the name.

    Args:
        mongo_collection: pymongo collection object
        name (str): the name of the school to update
        topics (list): list of strings representing the new topics

    Returns:
        None
    """
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
