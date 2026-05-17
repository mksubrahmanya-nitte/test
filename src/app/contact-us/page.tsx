// ??$$$
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

export default function ContactUsPage() {
  // ??$$$ - Form states
  const [formData, setFormData] = useState({
    txtFullName: '',
    txtEmail: '',
    txtMobile: '',
    txtCity: '',
    txtMessage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ??$$$ - Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // ??$$$ - Key press validator for phone numbers (allows only digits, plus, hyphens, and spaces)
  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.key;
    // Allow digits, spaces, plus, minus, and standard editing keys
    if (!/^[0-9+\-\s]$/.test(charCode) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'].includes(e.key)) {
      e.preventDefault();
    }
  };

  // ??$$$ - Form submission and validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Perform robust validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.txtFullName.trim()) {
      newErrors.txtFullName = 'Please Enter Full Name';
    }
    
    const email = formData.txtEmail.trim();
    if (!email) {
      newErrors.txtEmail = 'Please Enter Email Address';
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
      newErrors.txtEmail = 'Please Enter a Valid Email Address';
    }
    
    if (!formData.txtMobile.trim()) {
      newErrors.txtMobile = 'Please Enter Contact Number';
    }
    
    if (!formData.txtCity.trim()) {
      newErrors.txtCity = 'Please Enter City';
    }
    
    if (!formData.txtMessage.trim()) {
      newErrors.txtMessage = 'Please Enter Your Message';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ??$$$ - Simulate a premium form submission loading state
    setIsSubmitting(true);
    
    // Safely fire Google Analytics Conversion tags if tracking script is present on window
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'conversion', { 'send_to': 'AW-978228240/Ocb3CJufhcIDEJCoutID' });
      } catch (err) {
        console.warn('Google Ads Conversion Fire Failed:', err);
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // ??$$$ - Reset form to send another message
  const handleReset = () => {
    setFormData({
      txtFullName: '',
      txtEmail: '',
      txtMobile: '',
      txtCity: '',
      txtMessage: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  // Helper function to safely fire tel/whatsapp conversion triggers
  const firePhoneConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'conversion', { 'send_to': 'AW-978228240/qdNlCI6TzscDEJCoutID' });
      } catch (e) {}
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">
      {/* ??$$$ - Hero Section */}
      <div className="relative h-[280px] md:h-[320px] w-full flex items-center justify-center overflow-hidden shadow-md">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-banner.jpg"
            alt="Contact JG University"
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/85 hover:text-white mb-4 text-sm font-semibold transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-lg uppercase font-sans">
            Contact Us
          </h1>
          <p className="text-white/95 text-sm md:text-base font-medium max-w-2xl mt-3 tracking-wide leading-relaxed font-sans">
            Get in touch with our admissions desk, City Campus, or Main Campus offices.
          </p>
        </div>
      </div>

      {/* ??$$$ - Main Section Grid */}
      <div className="max-w-[1140px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ??$$$ - Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-l-4 border-red-700 pl-4 mb-2">
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wider font-sans">
                Contact Information
              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-[14.5px] leading-relaxed mb-6 font-sans">
              Have questions about program eligibility, admission dates, or syllabus structure? Connect with our dedicated support representatives directly.
            </p>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 text-red-700 border border-red-100/50">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-[16px] mb-2 font-sans">Main Campus Address</h4>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-sans">
                  ASIA Campus, Drive In Rd, Thaltej, Ahmedabad - 380054, Gujarat, India.
                </p>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600 border border-amber-100/50">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-[16px] mb-2 font-sans">Email Support</h4>
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:connect@jguni.in" className="text-red-700 hover:underline text-[14px] font-bold font-sans">
                    connect@jguni.in
                  </a>
                  <a href="mailto:admission@jguni.in" className="text-red-700 hover:underline text-[14px] font-bold font-sans">
                    admission@jguni.in
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600 border border-emerald-100/50">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-[16px] mb-2 font-sans">Phone Desk & Support</h4>
                <p className="text-slate-500 text-[12.5px] mb-2 font-sans">Available Monday - Saturday, 9:00 AM - 6:00 PM</p>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <a
                    href="tel:+917567756758"
                    onClick={firePhoneConversion}
                    className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 hover:bg-red-700 hover:text-white text-slate-700 font-extrabold text-xs rounded-lg transition-colors border border-slate-200/50 font-sans"
                  >
                    Call Support: +91 7567 7567 58/59
                  </a>
                  <a
                    href="https://wa.me/917567756758"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-lg transition-colors shadow-sm font-sans"
                  >
                    {/* WhatsApp Custom Svg Icon */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.905-6.993-1.876-1.875-4.357-2.904-6.996-2.905-5.439 0-9.86 4.417-9.864 9.861-.003 1.737.478 3.426 1.395 4.97l-.95 3.463 3.536-.932zM17.15 14.5c-.29-.145-1.72-.85-1.99-.95-.27-.1-.47-.145-.67.145-.2.29-.77.95-.94 1.15-.17.195-.34.22-.63.075-.29-.145-1.226-.452-2.334-1.444-.863-.77-1.446-1.72-1.616-2.01-.17-.29-.02-.45.13-.595.13-.13.29-.34.43-.51.15-.17.2-.29.3-.49.1-.2.05-.375-.025-.52-.075-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H8.7c-.2 0-.52.075-.79.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.062 3.148 4.995 4.413.698.301 1.243.481 1.667.615.702.224 1.34.193 1.846.118.563-.083 1.72-.702 1.96-1.38.24-.678.24-1.26.17-1.38-.07-.12-.27-.195-.56-.34z"/>
                    </svg>
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ??$$$ - Right Column: Interactive Form & Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Embedded Google Maps Box */}
            <div className="bg-white rounded-2xl overflow-hidden p-2.5 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7343.521402250024!2d72.54703035659176!3d23.032556970202684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6909d82c9319e0a0!2sJG%20University!5e0!3m2!1sen!2sin!4v1649422030185!5m2!1sen!2sin" 
                width="100%" 
                height="290" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>

            {/* Get in Touch Form Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
              <div className="border-l-4 border-red-700 pl-3 mb-6">
                <h3 className="text-[19px] font-extrabold text-slate-800 uppercase tracking-wide font-sans">
                  Get in Touch
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        name="txtFullName"
                        placeholder="Full Name"
                        value={formData.txtFullName}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border ${
                          errors.txtFullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        } rounded-xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.txtFullName ? 'focus:ring-red-500' : 'focus:ring-red-600'
                        } focus:border-transparent text-sm transition-all font-sans`}
                      />
                      {errors.txtFullName && (
                        <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.txtFullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        name="txtEmail"
                        placeholder="Email Address"
                        value={formData.txtEmail}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border ${
                          errors.txtEmail ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        } rounded-xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.txtEmail ? 'focus:ring-red-500' : 'focus:ring-red-600'
                        } focus:border-transparent text-sm transition-all font-sans`}
                      />
                      {errors.txtEmail && (
                        <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.txtEmail}
                        </p>
                      )}
                    </div>

                    {/* Contact Number & City in 2-column on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Mobile */}
                      <div>
                        <input
                          type="text"
                          name="txtMobile"
                          placeholder="Contact Number"
                          maxLength={15}
                          onKeyDown={handlePhoneKeyPress}
                          value={formData.txtMobile}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 border ${
                            errors.txtMobile ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                          } rounded-xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                            errors.txtMobile ? 'focus:ring-red-500' : 'focus:ring-red-600'
                          } focus:border-transparent text-sm transition-all font-sans`}
                        />
                        {errors.txtMobile && (
                          <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.txtMobile}
                          </p>
                        )}
                      </div>

                      {/* City */}
                      <div>
                        <input
                          type="text"
                          name="txtCity"
                          placeholder="City"
                          value={formData.txtCity}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 border ${
                            errors.txtCity ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                          } rounded-xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                            errors.txtCity ? 'focus:ring-red-500' : 'focus:ring-red-600'
                          } focus:border-transparent text-sm transition-all font-sans`}
                        />
                        {errors.txtCity && (
                          <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.txtCity}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="txtMessage"
                        placeholder="Write your message here..."
                        rows={3}
                        value={formData.txtMessage}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border ${
                          errors.txtMessage ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        } rounded-xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.txtMessage ? 'focus:ring-red-500' : 'focus:ring-red-600'
                        } focus:border-transparent text-sm transition-all font-sans`}
                      ></textarea>
                      {errors.txtMessage && (
                        <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.txtMessage}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-red-700 hover:bg-red-800 disabled:bg-slate-300 text-white font-extrabold text-sm transition-colors shadow-md shadow-red-700/10 cursor-pointer disabled:cursor-not-allowed font-sans"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-6 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold text-slate-800 font-sans">Thank you!</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-sans px-4">
                        Your message has been received successfully. Our admissions desk will connect with you shortly!
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left text-xs text-slate-600 space-y-2 max-w-sm mx-auto font-sans">
                      <p><strong>Name:</strong> {formData.txtFullName}</p>
                      <p><strong>Email:</strong> {formData.txtEmail}</p>
                      <p><strong>Phone:</strong> {formData.txtMobile}</p>
                      <p><strong>City:</strong> {formData.txtCity}</p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 hover:border-red-700 text-slate-600 hover:text-red-700 font-bold text-xs transition-colors cursor-pointer font-sans"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
