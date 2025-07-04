import React from "react";
import { Badge } from "@/components/ui/badge";
import SmallTypo from "./small-typo";

const SectionHeader = ({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
      {title && <SmallTypo title={title} />}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
        {heading}
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeader;
