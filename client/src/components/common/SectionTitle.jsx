import Link from "next/link";
import React from "react";

const SectionTitle = ({ title, btn }) => {
  return (
    <>
      <h3 className="flex items-center justify-between">
        <span className="section_title ">{title}</span>
        {btn ? (
          <Link href={`${btn}`}>
            <button className="btn text-primary_dark">View All &rarr;</button>
          </Link>
        ) : (
          <></>
        )}
      </h3>
    </>
  );
};

export default SectionTitle;
