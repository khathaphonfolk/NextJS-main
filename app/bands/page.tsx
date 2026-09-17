import CourseCard from "@/components/CourseCard";
import { Band } from "@/type/band";

const favoriteBands: Band[] = [
  {
    id: 1,
    name: "Bodyslam",
    genre: "Rock / Alternative Rock",
    imageUrl: "/images/bands/bodyslam.jpg",
    members: [
      { id: 101, name: "ตูน (อาทิวราห์ คงมาลัย)", role: "ร้องนำ", imageUrl: "/images/members/toon.jpg" },
      { id: 102, name: "ปิ๊ด (ธนชัย ตันตระกูล)", role: "เบส", imageUrl: "/images/members/pid.jpg" },
      { id: 103, name: "ยอด (ธนวัชร เกตุชำนาญ)", role: "กีตาร์", imageUrl: "/images/members/yod.jpg" },
      { id: 104, name: "ชัช (สุชัฒติ จั่นอี๊ด)", role: "กลอง", imageUrl: "/images/members/chatch.jpg" },
      { id: 105, name: "โอม (โอม เปล่งขำ)", role: "คีย์บอร์ด", imageUrl: "/images/members/ohm.jpg" },
    ],
  },
  {
    id: 2,
    name: "Tattoo Colour",
    genre: "Pop Rock / Indie Pop",
    imageUrl: "/images/bands/tattoocolour.jpg",
    members: [
      { id: 201, name: "ดิม (หรินทร์ สุธรรมจารุ)", role: "ร้องนำ", imageUrl: "/images/members/dim.jpg" },
      { id: 202, name: "รัฐ (รัฐ พิธาณสมบัติ)", role: "กีตาร์ / ร้องนำ", imageUrl: "/images/members/ruz.jpg" },
      { id: 203, name: "ตั้ม (เอกชัย โชติรุ่งโรจน์)", role: "กลอง", imageUrl: "/images/members/tum.jpg" },
      { id: 204, name: "จั๊ม (ธนบดี ธีรพงศ์ภักดี)", role: "เบส", imageUrl: "/images/members/jumps.jpg" },
    ],
  },
  {
    id: 3,
    name: "Three Man Down",
    genre: "Pop Rock / Synth Pop",
    imageUrl: "/images/bands/threemandown.jpg",
    members: [
      { id: 301, name: "กิต (กฤตย์ จีรพัฒนานุวงศ์)", role: "ร้องนำ", imageUrl: "/images/members/kit.jpg" },
      { id: 302, name: "ตูน (พีรพล เอี่ยมจำรัส)", role: "กีตาร์", imageUrl: "/images/members/toon_tmd.jpg" },
      { id: 303, name: "เต (เตธนันท์ ภีระจิรเดช)", role: "กลอง", imageUrl: "/images/members/tay.jpg" },
      { id: 304, name: "เส็ง (วิศรุต ปฐมสิริไพศาล)", role: "ซินธ์ไซเซอร์ / คีย์บอร์ด", imageUrl: "/images/members/seng.jpg" },
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