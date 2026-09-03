import CourseCard, { Band } from "@/components/CourseCard";

const favoriteBands: Band[] = [
  {
    id: 1,
    name: "Tattoo Colour",
    genre: "Pop Rock / Indie Pop",
    imageUrl: "/images/bands/tattoocolour.jpg",
    members: [
      { id: 101, name: "ดิม (หรินทร์ สุธรรมจารุ)", role: "ร้องนำ", imageUrl: "/images/members/dim.jpg" },
      { id: 102, name: "รัฐ (รัฐ พิธาณสมบัติ)", role: "กีตาร์ / ร้องนำ", imageUrl: "/images/members/ruz.jpg" },
      { id: 103, name: "ตั้ม (เอกชัย โชติรุ่งโรจน์)", role: "กลอง", imageUrl: "/images/members/tum.jpg" },
      { id: 104, name: "จั๊ม (ธนบดี ธีรพงศ์ภักดี)", role: "เบส", imageUrl: "/images/members/jumps.jpg" },
    ],
  },
  {
    id: 2,
    name: "Three Man Down",
    genre: "Pop Rock / Synth Pop",
    imageUrl: "/images/bands/threemandown.jpg",
    members: [
      { id: 201, name: "กิต (กฤตย์ จีรพัฒนานุวงศ์)", role: "ร้องนำ", imageUrl: "/images/members/kit.jpg" },
      { id: 202, name: "ตูน (พีรพล เอี่ยมจำรัส)", role: "กีตาร์", imageUrl: "/images/members/toon_tmd.jpg" },
      { id: 203, name: "เต (เตธนันท์ ภีระจิรเดช)", role: "กลอง", imageUrl: "/images/members/tay.jpg" },
      { id: 204, name: "เส็ง (วิศรุต ปฐมสิริไพศาล)", role: "ซินธ์ไซเซอร์ / คีย์บอร์ด", imageUrl: "/images/members/seng.jpg" },
    ],
  },
  {
    id: 3,
    name: "ONLY MONDAY",
    genre: "Indie Rock / Alternative",
    imageUrl: "/images/bands/onlymonday.jpg",
    members: [
      { id: 301, name: "ธีร์ (ธีรดนย์ ดิษยวรวัฒน์)", role: "ร้องนำ / กีตาร์", imageUrl: "/images/members/thee.jpg" },
      { id: 302, name: "โปรด (โปรดปราน ลาภธนัญชัย)", role: "เบส", imageUrl: "/images/members/prod.jpg" },
      { id: 303, name: "เฟรม (คฑาวุธ ขำทอง)", role: "กลอง", imageUrl: "/images/members/frame.jpg" },
    ],
  },
];

export default function BandsPage() {
  return (
    <main className="page">
      <h1>วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>
      <section className="courseGrid">
        {favoriteBands.map((band) => (
          <CourseCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}