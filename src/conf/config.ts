const conf = {
  appwriteURL: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteStorageId: String(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID),
  appwriteDatabaseId: String(
    process.env.NEXT_PUBLIC_APPWRITE_STORAGE_DATABASE_ID
  ),
  appwriteCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_STORAGE_COLLECTION_ID
  ),
  appwriteTeamId: String(process.env.NEXT_PUBLIC_APPWRITE_TEAMS_ID),
};

export default conf;
