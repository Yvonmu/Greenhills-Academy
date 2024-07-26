import React from "react";
import LeadershipSection from "@/components/Atoms/OtherSection/LeadershipSection";
export default function Leadership_tab() {
  return (
    <LeadershipSection
      endpoint={"/leadership"}
      title={"SCHOOL LEADERSHIP"}
      selectedCategory={"staff"}
    />
  );
}
