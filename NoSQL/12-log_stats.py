#!/usr/bin/python3
from pymongo import MongoClient

def main():
    # Connexion à la base de données MongoDB
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    # Compter le nombre total de documents
    total_logs = collection.count_documents({})

    # Afficher la première ligne avec le nombre total de logs
    print(f"{total_logs} logs")

    # Afficher les statistiques par méthode HTTP
    methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    print("Methods:")
    for method in methods:
        count_method = collection.count_documents({'method': method})
        print(f"\tmethod {method}: {count_method}")

    # Afficher les statistiques pour le chemin '/status' et la méthode 'GET'
    status_check = collection.count_documents({'method': 'GET', 'path': '/status'})
    print(f"{status_check} status check")

if __name__ == "__main__":
    main()
