"use client";
import { TailSpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex w-full h-[90vh] items-center justify-center">
      <TailSpin
        height="80"
        width="80"
        color="#1F2937"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loading;
