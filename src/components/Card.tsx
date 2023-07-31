import appwriteStorage from "@/appwrite/appwriteStorage";
import conf from "@/conf/config";

const getImage = async (data: any) => {
  return await appwriteStorage.getFileView({
    bucketID: conf.appwriteStorageId,
    fileID: data.$id,
  });
};

const Card = async ({ data }: { data: any }) => {
  const img = await getImage(data);
  const date = new Date(data.timestamp);
  return (
    <div className="bg-gray-800 h-[40vh] cursor-pointer rounded-lg border-4 border-gray-800 overflow-clip">
      {img && (
        <img
          src={img.href}
          alt="banner-image"
          className="h-2/3 w-full rounded-lg object-cover"
        />
      )}
      <div className="h-1/3 w-full text-white p-2">
        <div className="space-y-1">
          <p className="text-gray-300">
            <span className="font-bold text-sm">{data.user}</span>
            {" | "}
            <span className="text-sm">{date.toLocaleDateString()}</span>
          </p>
          <hr />
          <h1 className="font-bold line-clamp-2 text-sm tracking-wide">
            {data.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
