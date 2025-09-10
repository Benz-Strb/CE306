import React from "react";

export interface SkillTagProps {
  skillName: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

const SkillTag: React.FC<SkillTagProps> = ({ skillName, level }) => {
  return (
    <span className={`skill-tag ${level? level.toLowerCase() : ""}`}>
      {skillName}
      {level && <span className="skill-level"> ({level})</span>}
    </span>
  );
};

export default SkillTag;