import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h3 className="flex items-center justify-between">
        <span className="section_title ">{title}</span>
        <button className="btn text-primary_dark">View All &rarr;</button>
      </h3>
    </>
  );
};

export default SectionTitle;
