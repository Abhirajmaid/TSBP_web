"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full h-full">
      {/* Main Image */}
      <div className="w-full md:w-[75%] h-auto rounded-lg overflow-hidden border">
        <Image
          src={images[index]?.attributes?.url}
          alt="MMJ"
          width={1500}
          height={1500}
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
          priority
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex md:flex-col w-full md:w-[25%] h-auto md:h-[600px] justify-between gap-3">
        {images.slice(0, 3).map((item, i) => (
          <div
            className={`cursor-pointer rounded-lg border overflow-hidden h-[100px] w-1/3 md:w-full md:h-[32%] ${
              i === index ? "border-2 border-blue-500" : ""
            }`}
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item?.attributes?.url}
              alt="MMJ Thumbnail"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
