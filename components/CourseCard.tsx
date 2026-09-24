
"use client";

import { useState } from "react";
import Image from "next/image";

export type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

export type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  imageUrl?: string;
  members: Member[];
};

type CourseCardProps = {
  course?: Course;
  band?: Band;
};

export default function CourseCard({
  course,
  band,
}: CourseCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  if (course) {
    return (
      <article className="course-card">
        <h2>{course.title}</h2>
        <p>รหัสวิชา: {course.code}</p>
        <p>{course.credits} หน่วยกิต</p>
        <p>
          {course.isOpen
            ? "เปิดลงทะเบียน"
            : "ปิดลงทะเบียน"}
        </p>
      </article>
    );
  }

  if (band) {
    return (
      <article className="course-card">
        {band.imageUrl && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "180px",
              marginBottom: "1rem",
            }}
          >
            <Image
              src={band.imageUrl}
              alt={band.name}
              fill
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        )}

        <h2>{band.name}</h2>
        <p>แนวเพลง: {band.genre}</p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              setLikeCount(
                isLiked ? likeCount - 1 : likeCount + 1
              );
            }}
            style={{
              padding: "8px 15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: isLiked ? "#ffe5e5" : "white",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            {isLiked ? "❤️ ถูกใจแล้ว" : "♡ ถูกใจ"}{" "}
            {likeCount}
          </button>

          <button
            onClick={() => setIsFollowed(!isFollowed)}
            style={{
              padding: "8px 15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: isFollowed ? "#222" : "white",
              color: isFollowed ? "white" : "black",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            {isFollowed ? "✓ ติดตามแล้ว" : "+ ติดตาม"}
          </button>
        </div>

        <div
          style={{
            marginTop: "0.5rem",
            paddingTop: "0.5rem",
            borderTop: "1px solid #eee",
          }}
        >
          <h3>สมาชิกวง</h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {band.members.map((member) => (
              <li
                key={member.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "#f8f8f8",
                }}
              >
                {/* ใช้ imageUrl จากข้อมูลสมาชิกโดยตรง */}
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={60}
                    height={60}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#ddd",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    🎤
                  </div>
                )}

                <div>
                  <div
                    style={{
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </div>

                  <div
                    style={{
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    {member.role}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }

  return null;
}