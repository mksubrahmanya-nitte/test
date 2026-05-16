import React from 'react';
import { Button } from '../ui/Button';

export default function CtaSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Your Future Starts Here
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Take the first step towards a brilliant career. Admissions for the academic year 2026-27 are now open.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8">
            Apply Now
          </Button>
          <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
