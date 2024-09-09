import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tag = ({ tag }) => {
  return <p className="p-1 px-[6px] bg-[#e8e8e8] rounded-lg ">{tag}</p>;
};

const NewsCard = ({ image, title, id, tags, text }) => {
  return (
    <>
      <div className="flex flex-col gap-2 h-fit w-full hover:scale-[1.03] hover:shadow-2xl transition-all rounded-xl overflow-hidden">
        <div className="h-[55%]">
          <Link href={`/news/${id}`}>
            <Image
              src={image}
              width={500}
              height={500}
              className="h-full w-full object-cover cursor-pointer"
              alt="netgarages"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4 px-3 pb-4">
          <span className="flex justify-between">
            <h2 className="font-bold text-base">{title}</h2>
          </span>
          <span className="flex flex-wrap items-center gap-3 text-[0.7vw]">
            {tags?.map((item) => {
              return (
                <>
                  <Tag tag={item} />
                </>
              );
            })}
          </span>
          <span>
            <p>
              {text.substring(0, 100)}...
              <br />
              <Link href={`/news/${id}`}>
                <span className="btn font-bold cursor-pointer">
                  Read More &rarr;
                </span>
              </Link>
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
