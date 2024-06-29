import React from 'react'
import { InfoCard } from './InfoCard';

interface TechStackProps {
  title: String,
  data: any[]
}

export const TechStack = ({title, data}: TechStackProps) => {
  return (
    <div className="pb-2">
      <p className="py-4">{title}</p>
      <div className="flex flex-row gap-2">
        {data.map((item) => <InfoCard text={item} />)}
      </div>
    </div>
  );
}
