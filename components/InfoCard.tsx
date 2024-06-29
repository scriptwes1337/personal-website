import React from "react";
import {
  Code,
} from "@nextui-org/react";

interface InfoCardProps {
  text: string;
}

export const InfoCard = ({text}: InfoCardProps) => {
  return (
    <Code className="flex max-w-fit">
      {text}
    </Code>
  );
}
