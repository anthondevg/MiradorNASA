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
      <div className="md:min-w-full md:grid md:grid-cols-4 mt-4">
        {loading && <SkeletonPhoto />}
        {!loading &&
          photos &&
          photos.map((photo: any, index: any) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        {!loading && photos.length === 0 && (
          <p>Looks like there is no photos on the selected date or camera</p>
        )}
      </div>
    </>
  );
};
