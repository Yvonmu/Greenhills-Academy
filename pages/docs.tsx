/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import DecoratedList from "@/components/Atoms/Decorate/decoratedList";

interface FormDataItem {
  _id: string;
  title: string;
  doc: string;
}

const GHADocs = ({ user }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [fileDoc, setFileDoc] = useState<File | null>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<FormDataItem | null>(
    null
  );
  const [docUrl, setDocUrl] = useState<string | null>();

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get("/api/docs");
      setDocuments(response.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
      toast.error(
        "An error occurred while fetching documents. Please try again later."
      );
    }
  };

  return (
    <main  style={{
      backgroundImage: `url(${"h/icons/white2_qkbyoe.svg"})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
    }} className="flex h-[80vh] justify-center flex-col gap-8">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center mt-4">
        <div className="w-3/4 bg-white p-4 rounded-lg">
          <div className="flex flex-col gap-4">
          <div className="flex">
            <img
              src="https://greenhillsacademy.rw:8081/images/logo_pjrxda.png"
              alt="Logo Top"
              className={"h-[150px] w-[150px] sm:h-[80px] sm:w-[80px]"}
            />
          </div>
            <div className=" pt-4 flex justify-between">
              <h3 className="font-bold italic text-black">GHA Documents</h3>
            </div>
            <div>
              {documents.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between py-2 bg-green border-b items-center sm:flex-wrap"
                  >
                    <DecoratedList color="#000" details={item.title} />
                    <motion.button
                      onClick={() => {
                        window.open(item.doc, "_blank");
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        background: "#018c79",
                        border: "1px solid var(--color-border)",
                        color: "#fff",
                      }}
                      className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
                    >
                      Download
                      <p>
                        <LuDownload className="text-[yellow]" />
                      </p>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GHADocs;
