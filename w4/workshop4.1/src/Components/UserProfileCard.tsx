import React from "react";
import SkillTag from "./SkillTag";

export interface UserData {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: { name: string; level?: "Beginner" | "Intermediate" | "Advanced" }[];
}

interface UserProfileCardProps {
  user: UserData;
  onViewDetails: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
  return (
    <div className="user-card">
      <img
        src={user.avatarUrl || "https://via.placeholder.com/100"}
        alt={user.name}
        className="avatar"
      />
      <h3>{user.name}</h3>
      <p className="email">{user.email}</p>

      <p className={`status ${user.isOnline ? "online" : "offline"}`}>
        ● {user.isOnline ? "ออนไลน์" : "ออฟไลน์"}
      </p>

      <div className="skills">
        {user.skills.map((skill, index) => (
          <SkillTag key={index} skillName={skill.name} level={skill.level} />
        ))}
      </div>

      <button onClick={() => onViewDetails(user.id)}>View details</button>
    </div>
  );
};

export default UserProfileCard;