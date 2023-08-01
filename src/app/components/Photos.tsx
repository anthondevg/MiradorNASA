import React, { useEffect } from "react";
import { SkeletonPhoto } from "./SkeletonPhoto";
import { PhotoCard } from "./PhotoCard";
type PhotosType = {
  photos: Array<any>;
  loading: boolean;
};
export const Photos = ({ photos, loading }: PhotosType) => {
  return (
    <>
      <div className="md:min-w-full md:grid md:grid-cols-2 mt-4">
        {!loading &&
          photos &&
          photos.map((photo: any, index: any) => (
            <PhotoCard key={index} photo={photo} />
          ))}
      </div>
    </>
  );
};
