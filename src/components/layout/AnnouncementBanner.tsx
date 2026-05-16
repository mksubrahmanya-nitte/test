import React from 'react';

export default function AnnouncementBanner() {
  return (
    <div className="bg-secondary text-white px-4 py-2 text-center text-sm font-medium relative z-50">
      <p>
        Admissions Open 2026-27 |{' '}
        <a href="#apply" className="underline font-bold hover:text-primary transition-colors">
          Apply Now
        </a>
      </p>
    </div>
  );
}
