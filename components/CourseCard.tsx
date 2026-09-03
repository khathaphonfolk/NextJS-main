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

export default function CourseCard({ course, band }: CourseCardProps) {
  if (course) {
    return (
      <article className="course-card">
        <h2>{course.title}</h2>
        <p>รหัสวิชา: {course.code}</p>
        <p>{course.credits} หน่วยกิต</p>
        <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
      </article>
    );
  }

  if (band) {
    return (
      <article className="course-card">
        {band.imageUrl && (
          <div style={{ position: "relative", width: "100%", height: "200px", marginBottom: "1rem" }}>
            <Image
              src={band.imageUrl}
              alt={band.name}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        )}
        <h2>{band.name}</h2>
        <p>แนวเพลง: {band.genre}</p>

        <div style={{ marginTop: "1rem", paddingTop: "0.5rem", borderTop: "1px solid #eee" }}>
          <h3>สมาชิกในวง:</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))", gap: "10px", marginTop: "10px", marginBottom: "15px" }}>
            {band.members.map((m) => (
              <div key={m.id} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", width: "60px", height: "60px", margin: "0 auto 4px", borderRadius: "8px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
                  {m.imageUrl ? (
                    <Image src={m.imageUrl} alt={m.name} fill style={{ objectFit: "cover" }} />
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: "12px", color: "#888" }}>
                      No Pic
                    </div>
                  )}
                </div>
                <p style={{ fontSize: "11px", fontWeight: "bold", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.name.split(" ")[0]}</p>
              </div>
            ))}
          </div>

          <ul>
            {band.members.map((m) => (
              <li key={m.id}>{m.name} — {m.role}</li>
            ))}
          </ul>
        </div>
      </article>
    );
  }

  return null;
}