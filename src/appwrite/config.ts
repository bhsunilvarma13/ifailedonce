import conf from "@/conf/config";
import {
  Client,
  Account,
  Teams,
  Databases,
  Storage,
  ID,
  Query,
  Avatars,
} from "appwrite";

const client = new Client()
  .setEndpoint(conf.appwriteURL)
  .setProject(conf.appwriteProjectId);

const account = new Account(client);
const teams = new Teams(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

export { account, teams, databases, storage, ID, Query, avatars };
