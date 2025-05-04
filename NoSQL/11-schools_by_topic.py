#!/usr/bin/env python3
""" 11-schools_by_topic: find schools by topic """


def schools_by_topic(mongo_collection, topic):
    """
    Return list of schools that have a specific topic.

    Args:
        mongo_collection: pymongo collection object
        topic (str): topic to search for

    Returns:
        List of matching documents
    """
    return mongo_collection.find({ "topics": topic })
