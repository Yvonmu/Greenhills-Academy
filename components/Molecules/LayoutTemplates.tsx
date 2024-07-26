/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Toast, Toaster, toast } from "react-hot-toast";
import ImageSection from "../Atoms/SectionLayout/ImageSection";
import SpeechSection from "../Atoms/SectionLayout/SpeechSection";
import RightSection from "../Atoms/SectionLayout/RightSection";
import LeftSection from "../Atoms/SectionLayout/LeftSection";
import ColumnSection from "../Atoms/SectionLayout/ColumnSection";
import ParagraphSection from "../Atoms/SectionLayout/ParagraphSection";
import HeaderSection from "../Atoms/SectionLayout/HeaderSection";
import OtherSection from "../Atoms/SectionLayout/OtherSection";

interface LayoutTemplatesProps {
  landing: boolean;
  slug: string;
  description: string;
  iconUrl: string;
  category: string;
  image: string[];
  doc: string;
  docTitle: string;
  docUrl: string;
  layoutSection: string;
  headerTitle: string;
  headerDescription: string;
  backgroundImage: string[];
  backgroundVideo: string;
  backgroundImageTitle: string;
  backgroundImageButton: string;
  backgroundImageUrl: string;
  leadershipId: string;
  reasonjoinId: string;
  missionId: string;
  numbersId: string;
  newsId: string;
  schoolcardId: string;
  aboutcardId: string;
  boardingcardId: string;
  universitiesId: string;
  otherTitle: string;
  selectedCategory: string;
  alumniId: string;
  galleryId: string;
}

export default function LayoutTemplates({
  
  landing,
  slug,
  description,
  category,
  image,
  doc,
  iconUrl,
  docTitle,
  docUrl,
  layoutSection,
  headerTitle,
  headerDescription,
  backgroundImage,
  backgroundVideo,
  backgroundImageTitle,
  backgroundImageButton,
  backgroundImageUrl,
  leadershipId,
  reasonjoinId,
  missionId,
  numbersId,
  newsId,
  schoolcardId,
  aboutcardId,
  boardingcardId,
  universitiesId,
  otherTitle,
  selectedCategory,
  alumniId,
  galleryId,
}: LayoutTemplatesProps) {

  return (
    <section style={{ position: "relative" }}>
      <Toaster position="top-center" reverseOrder={false} />

      {slug === "header_image" && (
        <HeaderSection
          headerTitle={headerTitle}
          backgroundImage={backgroundImage}
          backgroundVideo={backgroundVideo}
          backgroundImageTitle={backgroundImageTitle}
          backgroundImageButton={backgroundImageButton}
          backgroundImageUrl={backgroundImageUrl}
        />
      )}
      {slug.startsWith("paragraph_") && (
        <ParagraphSection
          doc={doc}
          docTitle={docTitle}
          docUrl={docUrl}
          headerDescription={headerDescription}
        />
      )}
      {slug.startsWith("other_") && (
        <OtherSection
          leadershipId={leadershipId}
          reasonjoinId={reasonjoinId}
          missionId={missionId}
          numbersId={numbersId}
          newsId={newsId}
          schoolcardId={schoolcardId}
          aboutcardId={aboutcardId}
          boardingcardId={boardingcardId}
          universitiesId={universitiesId}
          headerTitle={headerTitle}
          otherTitle={otherTitle}
          selectedCategory={selectedCategory}
          landing={landing}
          alumniId={alumniId}
          galleryId={galleryId}
        />
      )}
      {slug.startsWith("image_") && (
        <ImageSection headerTitle={headerTitle} image={image} />
      )}
      {slug.startsWith("speech_") && (
        <SpeechSection
          headerTitle={headerTitle}
          image={image}
          backgroundImageTitle={backgroundImageTitle}
          headerDescription={headerDescription}
          description={description}
        />
      )}
      {layoutSection === "right" && (
        <RightSection
          description={description}
          category={category}
          iconUrl={iconUrl}
          doc={doc}
          docTitle={docTitle}
          docUrl={docUrl}
          image={image}
          headerTitle={headerTitle}
          headerDescription={headerDescription}
          layoutSection={layoutSection}
        />
      )}
      {layoutSection === "left" && (
        <LeftSection
          iconUrl={iconUrl}
          description={description}
          category={category}
          doc={doc}
          docTitle={docTitle}
          docUrl={docUrl}
          image={image}
          headerTitle={headerTitle}
          headerDescription={headerDescription}
          layoutSection={layoutSection}
        />
      )}
      {layoutSection === "columns" && (
        <ColumnSection
          iconUrl={iconUrl}
          description={description}
          category={category}
          doc={doc}
          docTitle={docTitle}
          docUrl={docUrl}
          image={image}
          headerTitle={headerTitle}
          headerDescription={headerDescription}
        />
      )}
    </section>
  );
}
