import conf from "@/conf/config";

import sdk from "node-appwrite";

const client = new sdk.Client();

const databases = new sdk.Databases(client);
const storage = new sdk.Storage(client);

client
  .setEndpoint(conf.appwriteURL)
  .setProject(conf.appwriteProjectId)
  .setKey(conf.appwriteApiKey);

export { databases, storage };
