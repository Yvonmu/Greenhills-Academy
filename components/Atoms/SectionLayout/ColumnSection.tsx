import ButtonBlank from "@/components/Atoms/Button/ButtonBlank";
import DecoratedList from "@/components/Atoms/Decorate/decoratedList";
import GreenDecoratedList from "@/components/Atoms/Decorate/greenDecoratedList";
import Image from "next/image";
import React from "react";
import { LuDownload, LuExternalLink } from "react-icons/lu";

interface Props {
  description: string;
  category: string;
  image: string[];
  doc: string;
  docTitle: string;
  docUrl: string;
  headerTitle: string;
  headerDescription: string;
  iconUrl: string;
}

const ColumnSection: React.FC<Props> = ({
  description,
  category,
  image,
  doc,
  iconUrl,
  docTitle,
  docUrl,
  headerTitle,
  headerDescription,
}) => {
  const parser = new DOMParser();
  const docHtml = parser.parseFromString(description, "text/html");
  const heading = docHtml.querySelector("h1")?.textContent || "";

  const descDoc = Array.from(docHtml.children).filter(
    (child) => child.tagName.toLowerCase() !== "h1"
  );
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
      className={`flex bg-${category} ${
        category === "primary" ? "text-white" : "text-black"
      } w-full flex justify-center`}
      style={{
        backgroundImage: image[0]
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${image[0].replace(
            /\s/g,
            "%20"
          )})`
          : `url(${
              category === "white"
                ? "/icons/white2_qkbyoe.svg"
                : category === "primary"
                ? "/icons/green_c6iapo.svg"
                : "/icons/lightgreen_fotidt.svg"
            })`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="w-[80%] flex flex-col md:gap-8 gap-4 py-8">
        {(headerTitle || headerDescription) && (
          <div className="w-full h-full object-cover">
            <div>
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div
                    className={`w-[18px] h-[7px] my-2 ${
                      category === "white"
                        ? "bg-primary"
                        : category === "primary"
                        ? "bg-[yellow]"
                        : "bg-primary"
                    }`}
                  />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <h1
                className={`${
                  category === "white"
                    ? "text-primary"
                    : category === "primary"
                    ? "text-[yellow]"
                    : "text-primary"
                } font-bold ${!headerDescription && "text-center"}`}
              >
                {headerTitle}
              </h1>
            </div>
            <p className="text-justify text-white md:w-[80%]">
              {headerDescription}
            </p>
          </div>
        )}
        <div className="">
          <div className="w-full h-full flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              {iconUrl && heading && (
                <div className="md:h-12 h-6 w-6 md:w-12">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={iconUrl}
                    alt="Image"
                    className="object-cover w-full h-full"
                  />
                </div>
              )}{" "}
              <h2
                className={`${
                  category === "primary" ? "text-[yellow]" : "text-primary"
                } font-bold uppercase`}
              >
                {heading}
              </h2>
            </div>
            <div className="w-full h-full md:columns-2 gap-12">
              {descDoc1.map((child, index) => {
                if ((child as Element).tagName.toLowerCase() === "p") {
                  return (
                    <p key={index} className="text-justify mb-6">
                      {child.textContent && replaceLinks(child.textContent)}
                    </p>
                  );
                } else if ((child as Element).tagName.toLowerCase() === "ul") {
                  const listItems = Array.from(
                    (child as Element).querySelectorAll("li")
                  ).map((li) => li.textContent || "");
                  return (
                    <React.Fragment key={index}>
                      <div className="grid-cols-2 grid gap-4">
                        {listItems.map((item, idx) => (
                          <div key={idx} className="">
                            {category === "primary" ? (
                              <GreenDecoratedList
                                color={"#fff"}
                                details={item}
                              />
                            ) : (
                              <DecoratedList color="#000" details={item} />
                            )}
                          </div>
                        ))}
                      </div>
                    </React.Fragment>
                  );
                }
              })}

              <div className="flex justify-end w-full">
                {docTitle && (
                  <ButtonBlank
                    action={doc ? doc : docUrl}
                    name={docTitle}
                    background={`${
                      category === "primary" ? "#fff" : "#018c79"
                    } `}
                    border="1px solid var(--color-border)"
                    color={`${category === "primary" ? "#018c79" : "#fff"} `}
                    icon={
                      doc ? (
                        <LuDownload className="text-[yellow]" />
                      ) : (
                        <LuExternalLink className="text-[yellow]" />
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnSection;
