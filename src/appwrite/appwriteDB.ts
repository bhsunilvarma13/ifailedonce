import { ID, databases } from "./config";

class AppwriteDB {
  async createDocument({
    databaseID,
    collectionID,
    documentID,
    data,
  }: {
    databaseID: string;
    collectionID: string;
    documentID: string;
    data: object;
  }) {
    try {
      return await databases.createDocument(
        databaseID,
        collectionID,
        documentID,
        data
      );
    } catch (error: any) {
      throw error;
    }
  }

  async listDocuments({
    databaseID,
    collectionID,
    queries,
  }: {
    databaseID: string;
    collectionID: string;
    queries: string[];
  }) {
    try {
      return await databases.listDocuments(databaseID, collectionID, queries);
    } catch (error) {
      throw error;
    }
  }

  async getDocument({
    databaseID,
    collectionID,
    documentID,
  }: {
    databaseID: string;
    collectionID: string;
    documentID: string;
  }) {
    try {
      return await databases.getDocument(databaseID, collectionID, documentID);
    } catch (error) {
      throw error;
    }
  }

  async updateDocument({
    databaseID,
    collectionID,
    documentID,
    data,
  }: {
    databaseID: string;
    collectionID: string;
    documentID: string;
    data: object;
  }) {
    try {
      return await databases.updateDocument(
        databaseID,
        collectionID,
        documentID,
        data
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteDocument({
    databaseID,
    collectionID,
    documentID,
  }: {
    databaseID: string;
    collectionID: string;
    documentID: string;
  }) {
    try {
      return await databases.deleteDocument(
        databaseID,
        collectionID,
        documentID
      );
    } catch (error) {
      throw error;
    }
  }
}

const appwriteDB = new AppwriteDB();

export default appwriteDB;
