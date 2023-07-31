import React from "react";
import Card from "./Card";
import conf from "@/conf/config";
import { Query } from "../appwrite/config";
import Link from "next/link";
import { databases } from "@/appwrite/serverConfig";

const getPosts = async () => {
  return await databases.listDocuments(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionId,
    [Query.orderDesc("views"), Query.limit(6)]
  );
};

const TopStories = async () => {
  const posts = await getPosts();
  return (
    <div className="w-full h-[80vh] grid grid-cols-3 grid-rows-2 gap-5 mb-10">
      {posts.documents.map((post: any) => (
        <Link key={post.$id} href={"/blog/" + post.$id}>
          <Card data={post} />
        </Link>
      ))}
    </div>
  );
};

export default TopStories;
