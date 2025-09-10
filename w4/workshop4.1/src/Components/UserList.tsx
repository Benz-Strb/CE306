import React, { useState } from "react";
import type { UserData } from "./UserProfileCard";
import UserProfileCard from "./UserProfileCard";

const UserList: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | number | null>(null);

  const users: UserData[] = [
    {
      id: "UserID: 1",
      name: "Robert Downer Jr.",
      email: "rdj@example.com",
      isOnline: false,
      avatarUrl: "https://thvnext.bing.com/th/id/OIP.xoYtSXPcFHpC-bD2Omj-HAHaHa?w=176&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      id: "UserID: 2",
      name: "Scarlett Johansson",
      email: "scarlett@example.com",
      isOnline: false,
      avatarUrl: "https://thvnext.bing.com/th/id/OIP.GEZJObjcQJaKjN0W0xZ8YQHaFm?w=222&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
      skills: [
        { name: "Java", level: "Intermediate" },
        { name: "Spring Boot", level: "Beginner" },
      ],
    },
    {
      id: "UserID: 3",
      name: "Chris Hemsworth",
      email: "chris@example.com",
      isOnline: true,
      avatarUrl: "https://thvnext.bing.com/th/id/OIP.Zxv6K75-8kmyYByPSVa-6gHaJs?w=153&h=200&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Django" },
      ],
    },
    {
      id: "UserID: 4",
      name: "Chris Evan",
      email: "evan@example.com",
      isOnline: true,
      avatarUrl: "https://thvnext.bing.com/th/id/OIP.rVVvMYM71V8YWQqiliwsCgHaHa?w=170&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
      skills: [
        { name: "UI/UX", level: "Advanced" },
        { name: "Figma" },
      ],
    },
  ];

  const handleViewDetails = (userId: string | number) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          onViewDetails={handleViewDetails}
        />
      ))}

      {selectedUserId && (
        <div className="popup">
          <div className="popup-content">
            <p>Viewing details for {selectedUserId}</p>
            <button onClick={() => setSelectedUserId(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;