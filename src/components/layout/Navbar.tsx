/*
// Old Navbar code commented out:
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Programmes",       href: "#programmes" },
  { label: "Campus",           href: "#campus" },
  { label: "Industry Linkage", href: "#collaborations" },
  { label: "Collaborations",   href: "#collaborations" },
  { label: "Discover Us",      href: "#discover" },
  { label: "Media",            href: "#" },
  { label: "Career",           href: "#" },
  { label: "Contact Us",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  // Logo dimensions: large + overflows below navbar when at top, compact when scrolled
  const logoW = scrolled ? 80 : 148;
  const logoH = scrolled ? 56 : 110;

  return (
    <header
      className="sticky top-0 w-full bg-white shadow-sm"
      style={{ height: "64px", zIndex: 50, overflow: "visible" }}
    >
      <div
        className="max-w-[1400px] mx-auto flex items-center"
        style={{ height: "64px", paddingLeft: "16px", paddingRight: "16px", position: "relative" }}
      >
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "16px",
            top: "0",
            zIndex: 60,
            display: "block",
            width: `${logoW}px`,
            height: `${logoH}px`,
            transition: "width 0.4s ease, height 0.4s ease",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="JG University"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <div
          style={{
            width: `${logoW + 24}px`,
            flexShrink: 0,
            transition: "width 0.4s ease",
          }}
        />
        <nav className="hidden xl:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-semibold tracking-wider uppercase text-gray-700 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 ml-auto flex-shrink-0">
          {searchOpen && (
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-red-200 bg-gray-50 transition-all"
            />
          )}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="text-gray-500 hover:text-red-700 transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href="/apply" className="hidden md:inline-flex px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-700 text-xs font-semibold hover:bg-yellow-50 transition-colors whitespace-nowrap">Apply Now</a>
          <a href="/enquire" className="hidden md:inline-flex px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-700 text-xs font-semibold hover:bg-yellow-50 transition-colors whitespace-nowrap">Enquire Now</a>
          <Link href="/admission-open" className="px-5 py-2 rounded-lg text-white text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity whitespace-nowrap" style={{ backgroundColor: "#c21400" }}>Admission</Link>
        </div>
      </div>
    </header>
  );
}
*/

// ??$$$ newer code
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Programmes",       href: "#programmes" },
  { label: "Campus",           href: "#campus" },
  { label: "Industry Linkage", href: "#collaborations" },
  { label: "Collaborations",   href: "#collaborations" },
  { label: "Discover Us",      href: "#discover" },
  { label: "Media",            href: "#" },
  { label: "Career",           href: "#" },
  { label: "Contact Us",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header 
      className="sticky top-0 w-full bg-white shadow-sm transition-all duration-300"
      style={{ height: "70px", zIndex: 100, overflow: "visible" }}
    >
      <div 
        className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between relative"
        style={{ overflow: "visible" }}
      >
        {/* Absolutely positioned Logo Container — hangs as a white card at top, becomes a clean transparent logo on scroll */}
        <Link 
          href="/" 
          className={`absolute left-6 transition-all duration-300 flex items-center justify-center ${
            scrolled 
              ? "bg-transparent shadow-none border-none p-0" 
              : "bg-white px-4 pb-4 pt-2 shadow-md rounded-b-xl border-x border-b border-gray-100"
          }`}
          style={{
            zIndex: 110,
            top: scrolled ? "7px" : "0",
            width: scrolled ? "110px" : "212px",
            height: scrolled ? "56px" : "156px",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/logo.png"
              alt="JG University"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Left Spacer to account for the logo box width */}
        <div 
          className="transition-all duration-300 flex-shrink-0"
          style={{ width: scrolled ? "130px" : "225px" }}
        />

        {/* Central Nav Links — capitalized first letter, medium weight, 13.5px size */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-semibold text-gray-600 hover:text-red-700 transition-colors tracking-wide whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Search bar + Admission Button */}
        <div className="flex items-center gap-4 ml-auto xl:ml-0 flex-shrink-0">
          {/* Static Search box next to Admission */}
          <div className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-1.5 text-[13px] w-48 focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-white"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          {/* Admission CTA — Golden orange `#f5b041` with text "Admission" */}
          <Link
            href="/admission-open"
            className="px-6 py-2 rounded-lg text-white text-[13.5px] font-bold tracking-wider transition-all hover:brightness-105 whitespace-nowrap shadow-sm text-center"
            style={{ backgroundColor: "#f5b041" }}
          >
            Admission
          </Link>
        </div>
      </div>
    </header>
  );
}
