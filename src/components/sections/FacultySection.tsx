

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faculty = [
  { name: "Dr. Namika Patel", school: "School of Management", image: "/images/namika-1.png" },
  { name: "Dr. Hitesh Harwani", school: "School of Management", image: "/images/hitesh-1.png" },
  { name: "CA CPA Harshil Trivedi", school: "School of Commerce", image: "/images/harshil-1%20(1).jpg" },
  { name: "Dr. Pratik Darji", school: "School of Management", image: "/images/pratik-1%20(1).jpg" },
  { name: "Dr. Sanjay Christian", school: "School of Management", image: "/images/sanjay-1.png" },
  { name: "CA Parag Soni", school: "School of Commerce", image: "/images/parag-1.png" },
  { name: "Dr. Megha Bhatt", school: "School of Commerce", image: "/images/megha-1.jpg" },
  { name: "Prof. Dinesh Patel", school: "School of Commerce", image: "/images/dinesh-1.jpg" },
  { name: "Dr. Aarti Shah", school: "School of Commerce", image: "/images/aarti-1.jpg" },
  { name: "Dr. Delnaz Jokhi", school: "School of Commerce", image: "/images/delnaz-1.jpg" },
  { name: "Dr. Vaibhav Shah", school: "School of Management", image: "/images/vaibhav-1.jpg" },
  { name: "Dr. Jigar Aggarwal", school: "School of Commerce", image: "/images/jigar-1.jpg" }
];

export default function FacultySection() {
  const [center, setCenter] = useState(0);
  const len = faculty.length;

  const left  = (center - 1 + len) % len;
  const right = (center + 1) % len;

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="faculty">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 border-b-2 border-gray-100 pb-4">Faculty Members</h2>
      <div className="flex items-center justify-center gap-6">

        <button
          onClick={() => setCenter((c) => (c - 1 + len) % len)}
          className="w-10 h-10 rounded-full bg-red-700 hover:bg-red-800 text-white flex items-center justify-center text-lg flex-shrink-0 font-bold transition-colors cursor-pointer shadow-md"
        >
          ‹
        </button>

        <div className="flex items-center gap-4">

          <div className="w-40 opacity-50 scale-90 transition-all duration-300 hidden sm:block">
            <Link href="/faculty">
              <FacultyCard member={faculty[left]} active={false} />
            </Link>
          </div>

          <div className="w-52 scale-105 transition-all duration-300 shadow-lg">
            <Link href="/faculty">
              <FacultyCard member={faculty[center]} active={true} />
            </Link>
          </div>

          <div className="w-40 opacity-50 scale-90 transition-all duration-300 hidden sm:block">
            <Link href="/faculty">
              <FacultyCard member={faculty[right]} active={false} />
            </Link>
          </div>
        </div>

        <button
          onClick={() => setCenter((c) => (c + 1) % len)}
          className="w-10 h-10 rounded-full bg-red-700 hover:bg-red-800 text-white flex items-center justify-center text-lg flex-shrink-0 font-bold transition-colors cursor-pointer shadow-md"
        >
          ›
        </button>
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/faculty" 
          className="inline-block px-8 py-3 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold text-sm shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          View Full Faculty Directory ({faculty.length}+ Members)
        </Link>
      </div>
    </section>
  );
}

function FacultyCard({ member, active }: { member: typeof faculty[0]; active: boolean }) {
  return (
    <div className={`rounded-xl overflow-hidden border-2 transition-all bg-white ${active ? "border-red-700" : "border-transparent"}`}>
      <div className="relative h-56 w-full bg-gray-50">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top" 
        />
      </div>
      <div className={`text-center py-2 px-3 ${active ? "bg-red-700 text-white" : "bg-gray-50 text-gray-800 border-t border-gray-100"}`}>
        <p className="font-bold text-xs truncate">{member.name}</p>
        <p className="text-[10px] opacity-80 truncate">{member.school}</p>
      </div>
    </div>
  );
}
