import { storage } from "./config";

class AppwriteStorage {
  async createFile({
    bucketID,
    fileID,
    file,
  }: {
    bucketID: string;
    fileID: string;
    file: File;
  }) {
    try {
      return await storage.createFile(bucketID, fileID, file);
    } catch (error) {
      throw error;
    }
  }

  async listFiles({
    bucketID,
    queries,
    search,
  }: {
    bucketID: string;
    queries: string[];
    search: string;
  }) {
    try {
      return await storage.listFiles(bucketID, queries, search);
    } catch (error) {
      throw error;
    }
  }

  async getFileView({
    bucketID,
    fileID,
  }: {
    bucketID: string;
    fileID: string;
  }) {
    try {
      return await storage.getFileView(bucketID, fileID);
    } catch (error) {
      error;
    }
  }

  async deleteFile({ bucketID, fileID }: { bucketID: string; fileID: string }) {
    try {
      return await storage.deleteFile(bucketID, fileID);
    } catch (error) {
      throw error;
    }
  }
}

const appwriteStorage = new AppwriteStorage();

export default appwriteStorage;
