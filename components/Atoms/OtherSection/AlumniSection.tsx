/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";
import GreenDecoratedList from "../Decorate/greenDecoratedList";
import ButtonBlank from "../Button/ButtonBlank";
import { LuDownload, LuExternalLink } from "react-icons/lu";

interface SectionProps {
  title: string;
  endpoint: string;
}

export default function AlumniSection({ title, endpoint }: SectionProps) {
  const [section, setSection] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/${endpoint.toLowerCase()}`);
      setSection(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const parser = new DOMParser();
  const docHtml = parser.parseFromString(section?.description || "", "text/html");
  const heading = docHtml.querySelector("h1")?.textContent || "";
  const descDoc1 = Array.from(docHtml.body.childNodes).filter(
    (node) => node.nodeType === Node.ELEMENT_NODE
  );

  function replaceLinks(text: string) {
    const phoneRegex =
      /(?:(\+?\d{1,3}[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4})/g;
    const webLinkRegex = /((?:www\.|https?:\/\/)[^\s]+)/g;
    const textWithPhones = text.replace(
      phoneRegex,
      '<a href="tel:$&" class="text-link">$&</a>'
    );

    const textWithLinks = textWithPhones.replace(
      webLinkRegex,
      '<a href="$&" target="_blank" class="text-link">$&</a>'
    );

    return <span dangerouslySetInnerHTML={{ __html: textWithLinks }} />;
  }

  return (
    <section
      id="alumni_registration_form"
      className="flex justify-center overflow-hidden py-16"
    >
      <div
        className="w-[80%] bg-primary py-16 text-white flex flex-col justify-center p-8 gap-6 rounded-[36px] shadow-xl"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="mb-4">
          {title && <h2 className="font-bold text-[yellow]">{title}</h2>}
          <div className="flex pt-4 justify-center">
            <div className="w-[55px] grid place-items-center">
              <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
              <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
            </div>
          </div>
          {/* Access the title directly from the section state */}
          <h2 className="font-bold text-[yellow] text-center">{heading}</h2>
        </div>
        {/* Render other content similarly */}
        {descDoc1.map((child, index) => {
          if ((child as Element).tagName.toLowerCase() === "p") {
            return (
              <p key={index} className="text-justify">
                {child.textContent && replaceLinks(child.textContent)}
              </p>
            );
          } else if ((child as Element).tagName.toLowerCase() === "ul") {
            const listItems = Array.from(
              (child as Element).querySelectorAll("li")
            ).map((li) => li.textContent || "");
            return (
              <React.Fragment key={index}>
                {listItems.map((item, idx) => (
                  <div key={idx} className="text-justify">
                    <GreenDecoratedList color={"#fff"} details={item} />
                  </div>
                ))}
              </React.Fragment>
            );
          }
        })}
        <div className="w-full flex justify-center">
          {section?.docTitle && (
            <ButtonBlank
              action={section.doc ? section.doc : section.docUrl}
              name={section.docTitle}
              background={`#fff `}
              border="1px solid var(--color-border)"
              color={` #018c79 `}
              icon={
                section.doc ? (
                  <LuDownload className="text-primary" />
                ) : (
                  <LuExternalLink className="text-primary" />
                )
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}
