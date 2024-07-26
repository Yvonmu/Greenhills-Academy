/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Section {
  _id: string;
  imageUrls: string[];
}

interface SectionTableProps {
  sections: Section[];
  onDelete: (id: string) => void;
  onEdit: (section: Section) => void;
}

const SectionTable: React.FC<SectionTableProps> = ({
  sections,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Image Section</h2>

      <section className="flex flex-wrap gap-2 w-full">
        {sections.map((section, index) => (
          <div key={index} className="">
            <div className="p-3 w-[300px]">
              {section.imageUrls ? (
                section.imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className="h-20 mr-4"
                  />
                ))
              ) : (
                <span>No images</span>
              )}
            </div>
            <div className="p-3 flex">
              <button onClick={() => onDelete(section._id)}>
                {" "}
                <img
                  loading="lazy"
                  src="/icons/delete_tvo46a.svg"
                  alt=""
                  className=""
                />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SectionTable;
