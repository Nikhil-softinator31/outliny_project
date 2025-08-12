import React from 'react';

interface CaseStudyProps {
  icon: React.ReactNode;
  title: string;
  client: string;
  challenge: string;
  solution: string[];
  results: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  icon,
  title,
  client,
  challenge,
  solution,
  results,
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold text-white mb-3">
        {icon} {title}
      </h2>

      <p className="mb-2 font-medium">Client: {client}</p>
      <p className="mb-2">Challenge:</p>
      <p className="mb-2">{challenge}</p>

      <p className="mb-2">Solution:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        {solution.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="mb-2">Results:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudy;
