"use client";
import appwriteAuth from "@/appwrite/appwriteAuth";
import appwriteDB from "@/appwrite/appwriteDB";
import appwriteStorage from "@/appwrite/appwriteStorage";
import SelectImage from "@/components/SelectImage";
import conf from "@/conf/config";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const router = useRouter();

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const [user, setUser] = useState("");

  const [file, setFile] = useState<File | undefined>(undefined);

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("auto-expand-textarea");
    textarea!.style.height = "auto";
    textarea!.style.height = textarea!.scrollHeight + "px";
  };

  const id = ID.unique();

  useEffect(() => {
    appwriteAuth.getCurrentUser()?.then((res) => setUser(res!.name));
  }, []);

  const handleClick = () => {
    if (data.title && data.content && file) {
      try {
        appwriteDB
          .createDocument({
            databaseID: conf.appwriteDatabaseId,
            collectionID: conf.appwriteCollectionId,
            documentID: id,
            data: {
              title: data.title,
              content: data.content,
              user: user,
              timestamp: new Date(),
              views: 0,
            },
          })
          .then((res) => {
            try {
              appwriteStorage
                .createFile({
                  bucketID: conf.appwriteStorageId,
                  fileID: res.$id,
                  file: file,
                })
                .then(() => router.push("/"));
            } catch (error) {
              alert(`Storage Error: ${error}`);
            }
          });
      } catch (error) {
        alert(`Content Error: ${error}`);
      }
    } else {
      alert("Please fill all the fields or input an image");
    }
  };
  return (
    <div className="w-full min-h-screen">
      <div className="w-[80vw] mx-auto flex flex-col items-end">
        <p
          onClick={handleClick}
          className="cursor-pointer w-fit mt-10 bg-gray-800 text-white py-2 px-4 rounded-md font-semibold text-base tracking-wider"
        >
          Upload
        </p>
        <SelectImage file={file} setFile={setFile} />
        <input
          className="w-full border-b-2 outline-none border-gray-300 focus:border-gray-800 transition-colors text-5xl my-10"
          type="text"
          value={data.title}
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          required
          placeholder="Title"
        />
        <textarea
          id="auto-expand-textarea"
          required
          placeholder="Write your story here..."
          className="w-full outline-none resize-none mb-10"
          rows={5}
          value={data.content}
          onChange={(e) => {
            setData((prev) => ({ ...prev, content: e.target.value }));
            adjustTextareaHeight();
          }}
        />
      </div>
    </div>
  );
}

export default Page;
