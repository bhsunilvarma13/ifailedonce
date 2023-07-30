"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

function SelectImage({ file, setFile }: any) {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center w-[80vw] mx-auto mt-10">
      {!image ? (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          Select image for the blog banner
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-800">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-800">PNG, JPG or JPEG</p>
          </div>
          <input
            id="dropzone-file"
            value={file}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const image = e.target.files![0];
              if (image) {
                setImage(URL.createObjectURL(image));
                setFile(image);
              }
            }}
          />
        </label>
      ) : (
        <div className="z-0 relative w-full rounded-lg h-64 overflow-hidden">
          <Image
            src={image}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => {
              setImage("");
              setFile(undefined);
            }}
            className="absolute z-10 top-5 right-5 cursor-pointer bg-gray-800 text-white py-2 px-4 rounded-md text-base"
          >
            Change Banner
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectImage;
