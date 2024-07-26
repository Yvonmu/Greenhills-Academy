import AboutCardSection from "@/components/Atoms/OtherSection/AboutCardSection";
import AlumniSection from "@/components/Atoms/OtherSection/AlumniSection";
import BoardingCardSection from "@/components/Atoms/OtherSection/BoardingCardSection";
import GallerySection from "@/components/Atoms/OtherSection/GallerySection";
import LeadershipSection from "@/components/Atoms/OtherSection/LeadershipSection";
import MissionSection from "@/components/Atoms/OtherSection/MissionSection";
import NewsSection from "@/components/Atoms/OtherSection/NewsSection";
import NumbersSection from "@/components/Atoms/OtherSection/NumbersSection";
import ReasonToJoinSection from "@/components/Atoms/OtherSection/ReasonToJoinSection";
import SchoolCardSection from "@/components/Atoms/OtherSection/SchoolCardSection";
import UniversitiesSection from "@/components/Atoms/OtherSection/UniversitiesSection";
import React from "react";

interface SectionProps {
  landing: boolean;
  headerTitle: string;
  leadershipId: string;
  reasonjoinId: string;
  missionId: string;
  numbersId: string;
  newsId: string;
  schoolcardId: string;
  aboutcardId: string;
  boardingcardId: string;
  universitiesId: string;
  selectedCategory: string;
  otherTitle: string;
  alumniId: string;
  galleryId: string;
}

export default function OtherSection({
  headerTitle,
  leadershipId,
  reasonjoinId,
  missionId,
  numbersId,
  newsId,
  schoolcardId,
  aboutcardId,
  boardingcardId,
  universitiesId,
  selectedCategory,
  otherTitle,
  landing,
  alumniId,
  galleryId,
}: SectionProps) {

  return (
    <div>
      {leadershipId && (
        <LeadershipSection
          endpoint={leadershipId}
          title={otherTitle}
          selectedCategory={selectedCategory}
        />
      )}
      {reasonjoinId && (
        <ReasonToJoinSection endpoint={reasonjoinId} title={otherTitle} />
      )}
      {missionId && <MissionSection endpoint={missionId} title={otherTitle} />}
      {numbersId && <NumbersSection endpoint={numbersId} title={otherTitle} />}
      {newsId && <NewsSection endpoint={newsId} title={otherTitle} />}
      {schoolcardId && (
        <SchoolCardSection
          endpoint={schoolcardId}
          title={otherTitle}
          landing={landing}
        />
      )}
      {aboutcardId && (
        <AboutCardSection endpoint={aboutcardId} title={otherTitle} />
      )}
      {boardingcardId && (
        <BoardingCardSection endpoint={boardingcardId} title={otherTitle} />
      )}
      {universitiesId && (
        <UniversitiesSection endpoint={universitiesId} otherTitle={otherTitle} />
      )}
      {alumniId&&(
        <AlumniSection endpoint={alumniId} title={otherTitle}/>
      )}
      {galleryId&&(
        <GallerySection  endpoint={galleryId} title={otherTitle}/>
      )}
    </div>
  );
}
