import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import React from "react";

interface SectionProps {
  doc: string;
  docTitle: string;
  docUrl: string;
  headerDescription: string;
}

export default function ParagraphSection({
  doc,
  docTitle,
  docUrl,
  headerDescription,
}: SectionProps) {
  return (
    <section className="bg-white">
      <div className="flex justify-center w-full">
        <div className="w-[80%] h-full flex flex-col gap-8 py-4">
          <p className={` ${docTitle?"text-center":"text-justify"}`}>{headerDescription}</p>
          {docTitle && (
            <div className="flex justify-center"><motion.button
              onClick={() => {
                window.open(doc ? doc : docUrl, "_blank");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "#018c79",
                color: "#fff",
                border: "1px solid var(--color-border)",
              }}
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              {docTitle}
              <p>
                <LuDownload className="text-[yellow]" />
              </p>
            </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
