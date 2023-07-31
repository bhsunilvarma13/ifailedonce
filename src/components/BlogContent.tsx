import appwriteDB from "@/appwrite/appwriteDB";
import appwriteStorage from "@/appwrite/appwriteStorage";
import conf from "@/conf/config";
import React from "react";

const getPost = async (id: any) => {
  return await appwriteDB.getDocument({
    databaseID: conf.appwriteDatabaseId,
    collectionID: conf.appwriteCollectionId,
    documentID: id,
  });
};

const getImage = async (id: any) => {
  return await appwriteStorage.getFileView({
    bucketID: conf.appwriteStorageId,
    fileID: id,
  });
};

const BlogContent = async ({ id }: { id: any }) => {
  const post = await getPost(id);

  const img = await getImage(id);

  const date = new Date(post.timestamp);

  return (
    <div className="space-y-10 h-[80vh]">
      <img
        src={img?.href}
        alt="Banner Image"
        className="w-full h-[40vh] object-cover"
      />
      <div className="w-[80vw] mx-auto">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">{post.title}</h1>
        <p>
          <span>{post.user}</span>
          {" | "}
          <span>{date.toLocaleDateString()}</span>
        </p>
        <hr className="border-b-2 border-gray-800 mt-2 mb-10" />
        <p className="text-lg">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogContent;
