import React from 'react';

export default function AdmissionOpenPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <img src="/images/jg_logo.png" alt="JG University" className="h-20 object-contain mb-2" />
              <p className="text-[10px] text-gray-500 tracking-wider">Sponsored by ASIA Charitable Trust</p>
            </div>

            <h1 className="text-center text-xl font-bold text-gray-900 mb-8 tracking-wide">
              REGISTER NOW FOR ADMISSION
            </h1>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name (As per SSC / HSC Marksheet)" 
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                <div className="bg-gray-50 px-3 py-3 border-r border-gray-300 flex items-center gap-2">
                  <span className="text-sm">🇮🇳 +91</span>
                  <span className="text-xs text-gray-400">▼</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="flex-grow px-4 py-3 text-sm focus:outline-none"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email Id" 
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_1rem_center]">
                  <option value="" disabled selected>Select Academic Year</option>
                  <option value="2026-27">2026-27</option>
                  <option value="2025-26">2025-26</option>
                </select>
              </div>

              <div>
                <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_1rem_center]">
                  <option value="" disabled selected>Select Level of Programme</option>
                  <option value="UG">Undergraduate (UG)</option>
                  <option value="PG">Postgraduate (PG)</option>
                </select>
              </div>

              <div>
                <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_1rem_center]">
                  <option value="" disabled selected>Select School</option>
                  <option value="Engineering">School of Engineering</option>
                  <option value="Management">School of Management</option>
                </select>
              </div>

              <div>
                <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_1rem_center]">
                  <option value="" disabled selected>Select Program</option>
                  <option value="BTech">B.Tech</option>
                  <option value="BBA">BBA</option>
                </select>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" id="agree" className="mt-1" />
                <label htmlFor="agree" className="text-xs text-gray-600 leading-snug">
                  * I agree to receive information regarding my submitted application by signing up on <a href="#" className="text-blue-500 hover:underline">https://jguni.in/</a>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
                <button type="button" className="text-primary font-bold text-sm tracking-wide hover:underline">
                  EXISTING USER? LOGIN
                </button>
                <button type="button" className="bg-[#b31b1b] hover:bg-[#8f1515] text-white font-bold py-3 px-8 rounded text-sm tracking-wide transition-colors w-full sm:w-auto shadow-md">
                  REGISTER NOW
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
}
