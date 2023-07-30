import appwriteDB from "@/appwrite/appwriteDB";
import appwriteStorage from "@/appwrite/appwriteStorage";
import conf from "@/conf/config";
import { Query } from "../appwrite/config";
import Link from "next/link";
import Image from "next/image";

const LandingPagePost = async () => {
  const post = await appwriteDB.listDocuments({
    databaseID: conf.appwriteDatabaseId,
    collectionID: conf.appwriteCollectionId,
    queries: [Query.orderDesc("views"), Query.limit(1)],
  });

  const img = (
    await appwriteStorage.getFileView({
      bucketID: conf.appwriteStorageId,
      fileID: post.documents[0].$id,
    })
  )?.href;

  const date = new Date(post.documents[0].timestamp);

  return (
    <Link href={"/blog/" + post.documents[0].$id}>
      <div className="cursor-pointer relative border-8 bg-gray-800 border-gray-800 h-[88vh] rounded-lg overflow-clip mx-auto">
        {img && (
          <Image
            src={img}
            alt="banner-image"
            className="w-full h-2/3 rounded-lg object-cover"
          />
        )}
        <div className="w-full h-1/3 text-white">
          <div className="p-10 space-y-2">
            <p className="text-lg font-light text-gray-300">
              <span className="font-bold text-xl">
                {post.documents[0].user}
              </span>
              {" | "}
              <span>{date.toLocaleDateString("en-US")}</span>
            </p>
            <hr />
            <h1 className="text-5xl line-clamp-2 drop-shadow-xl font-black tracking-wide">
              {post.documents[0].title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandingPagePost;
