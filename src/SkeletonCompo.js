import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCompo = () => {
  return (
    <div className=" container grid grid-cols-12  gap-4">
      <div className=" col-span-3 ">
        <Skeleton count={3} height={20}></Skeleton>
      </div>
    </div>
  );
};

export default SkeletonCompo;
