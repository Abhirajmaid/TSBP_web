"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex gap-3 w-full h-full">
      <div className="w-[75%] h-auto rounded-lg overflow-hidden border">
        <Image
          src={images[index]?.attributes?.url}
          alt="MMJ"
          width={1500}
          height={1500}
          className="w-full h-[600px] object-cover "
          priority
        />
      </div>
      <div className="flex flex-col h-[600px] justify-between gap-3 w-[25%]">
        {images.slice(0, 3).map((item, i) => (
          <div
            className="w-auto h-[32%] gap-3 cursor-pointer rounded-lg border overflow-hidden"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item?.attributes?.url}
              alt="MMJ"
              width={500}
              height={500}
              className="object-cover h-full"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
