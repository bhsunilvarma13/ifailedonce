"use client";
import BlogContent from "@/components/BlogContent";
import { useParams } from "next/navigation";
import React from "react";

const Page = async () => {
  const params = useParams();
  return (
    <div>
      <BlogContent id={params.id} />
    </div>
  );
};

export default Page;
