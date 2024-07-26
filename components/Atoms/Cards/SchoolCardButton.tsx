/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SchoolCardButtonProps {
  title: string;
  url: string;
  image?: any;
}

function SchoolCardButton({
  title,
  url,
  image,
}: SchoolCardButtonProps) {
    const pathname = usePathname();

  const isCurrentPage = pathname === url;
  return (
    <Link href={url}>
      <div className={`cardButton ${isCurrentPage ? "active" : ""}`}>
        <div
          className="image"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div className="text flex flex-col gap-4">
            <p className="font-bold text-white">{title}</p>
          </div>
          {/* <motion.div style={{ scale: imageScale }}> */}
          <img
            src={image}
            alt={`image for ${title}`}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "8px",
            }}
          />
          {/* </motion.div> */}
        </div>
        <div className="overlay"></div>
      </div>
    </Link>
  );
}

export default SchoolCardButton;
