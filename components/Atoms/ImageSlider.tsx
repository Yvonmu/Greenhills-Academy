import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImageSliderProps {
  image: string;
}

export default function ImageSlider({ image }: ImageSliderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={toggleModal}>
        <DialogTrigger>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={1}
            className="h-[40vh] cursor-pointer"
          >
            <div className={`overflow-hidden my-4 h-full group sm:w-auto`}>
              <Image
                unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                src={image[0]}
                alt="Image"
                className={`w-full mx-2 h-full px-4 object-cover`}
              />
            </div>
          </motion.div>
        </DialogTrigger>
        <DialogContent>
          <div className="max-w-3xl bg-white rounded-lg p-4">
            <Button onClick={toggleModal} className="absolute top-2 right-2">
              Close
            </Button>
            <div className="overflow-hidden">
              <Image
                unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                src={image[0]}
                alt="Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
