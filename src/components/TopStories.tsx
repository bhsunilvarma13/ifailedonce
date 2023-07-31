import React from "react";
import Card from "./Card";
import appwriteDB from "@/appwrite/appwriteDB";
import conf from "@/conf/config";
import { Query } from "../appwrite/config";
import Link from "next/link";

const getPosts = async () => {
  return await appwriteDB.listDocuments({
    databaseID: conf.appwriteDatabaseId,
    collectionID: conf.appwriteCollectionId,
    queries: [Query.orderDesc("views"), Query.limit(6)],
  });
};

const TopStories = async () => {
  const posts = await getPosts();
  return (
    <div className="w-full h-[80vh] grid grid-cols-3 grid-rows-2 gap-5 mb-10">
      {posts.documents.map((post) => (
        <Link key={post.$id} href={"/blog/" + post.$id}>
          <Card data={post} />
        </Link>
      ))}
    </div>
  );
};

export default TopStories;
