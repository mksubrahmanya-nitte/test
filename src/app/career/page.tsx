// ??$$$
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Image as ImageIcon, Send, RefreshCw, CheckCircle2, AlertCircle, ArrowLeft, Upload, Trash2 } from 'lucide-react';

export default function CareerPage() {
  // ??$$$ - Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [picFile, setPicFile] = useState<File | null>(null);
  const [captchaInput, setCaptchaInput] = useState('');
  
  // ??$$$ - UI States
  const [captchaCode, setCaptchaCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [picPreviewUrl, setPicPreviewUrl] = useState<string | null>(null);

  // ??$$$ - Captcha Generator
  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
    if (errors.captcha) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.captcha;
        return next;
      });
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // ??$$$ - Release image preview URL when unmounted
  useEffect(() => {
    return () => {
      if (picPreviewUrl) {
        URL.revokeObjectURL(picPreviewUrl);
      }
    };
  }, [picPreviewUrl]);

  // ??$$$ - CV drag & drop upload handlers
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrors((prev) => ({ ...prev, cv: 'Only PDF format is allowed' }));
        return;
      }
      setCvFile(file);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.cv;
        return next;
      });
    }
  };

  // ??$$$ - Picture drag & drop upload handlers
  const handlePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
        setErrors((prev) => ({ ...prev, picture: 'Only JPG/JPEG format is allowed' }));
        return;
      }
      setPicFile(file);
      if (picPreviewUrl) URL.revokeObjectURL(picPreviewUrl);
      setPicPreviewUrl(URL.createObjectURL(file));
      setErrors((prev) => {
        const next = { ...prev };
        delete next.picture;
        return next;
      });
    }
  };

  // ??$$$ - Reset file inputs
  const removeCv = () => {
    setCvFile(null);
  };

  const removePic = () => {
    setPicFile(null);
    if (picPreviewUrl) {
      URL.revokeObjectURL(picPreviewUrl);
      setPicPreviewUrl(null);
    }
  };

  // ??$$$ - Validation & submission simulation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please Enter Full Name';
    
    if (!email.trim()) {
      newErrors.email = 'Please Enter Email';
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
      newErrors.email = 'Please Enter Valid Email';
    }
    
    if (!contact.trim()) newErrors.contact = 'Please Enter Contact Number';
    if (!message.trim()) newErrors.message = 'Please Enter Message';
    
    if (!cvFile) newErrors.cv = 'Please upload your CV (PDF)';
    if (!picFile) newErrors.picture = 'Please upload your JPG picture';
    
    if (!captchaInput.trim()) {
      newErrors.captcha = 'Please Enter Verification Code';
    } else if (captchaInput.trim() !== captchaCode) {
      newErrors.captcha = 'CAPTCHA Code does not match';
      generateCaptcha(); // Reload captcha on failure
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ??$$$ - Begin high-fidelity upload progress bar animation
    setIsSubmitting(true);
    setUploadProgress(0);

    // Safely fire Google Analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'conversion', { 'send_to': 'AW-978228240/Ocb3CJufhcIDEJCoutID' });
      } catch (err) {}
    }

    // Increment progress counter realistically over 1.8 seconds
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    clearInterval(interval);
    setUploadProgress(100);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setContact('');
    setMessage('');
    setCvFile(null);
    setPicFile(null);
    if (picPreviewUrl) {
      URL.revokeObjectURL(picPreviewUrl);
      setPicPreviewUrl(null);
    }
    setCaptchaInput('');
    setIsSuccess(false);
    setUploadProgress(0);
    generateCaptcha();
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">
      {/* ??$$$ - Hero Section */}
      <div className="relative h-[280px] md:h-[320px] w-full flex items-center justify-center overflow-hidden shadow-md">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/collaborations.jpg"
            alt="Careers at JG University"
            className="w-full h-full object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/85 hover:text-white mb-4 text-sm font-semibold transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-lg uppercase font-sans">
            Career Form
          </h1>
          <p className="text-white/95 text-sm md:text-base font-medium max-w-2xl mt-3 tracking-wide leading-relaxed font-sans">
            Join a vibrant team of academics, researchers, and professional staff at JG University.
          </p>
        </div>
      </div>

      {/* ??$$$ - Main Form Section */}
      <div className="max-w-[850px] mx-auto px-6 mt-16">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
          <div className="border-l-4 border-red-700 pl-4 mb-8">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wider font-sans">
              Join Our Team!
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1 font-sans">
              Fill in the career interest application form below and upload your professional credentials.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="career-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Full Name & Email grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2 font-sans">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      className={`block w-full px-4 py-3 border ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      } rounded-xl bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm transition-all font-sans`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2 font-sans">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      className={`block w-full px-4 py-3 border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      } rounded-xl bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm transition-all font-sans`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2 font-sans">Contact Number</label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (errors.contact) setErrors((prev) => ({ ...prev, contact: '' }));
                    }}
                    className={`block w-full px-4 py-3 border ${
                      errors.contact ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                    } rounded-xl bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm transition-all font-sans`}
                  />
                  {errors.contact && (
                    <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2 font-sans">Write Your Message</label>
                  <textarea
                    placeholder="Write your message here"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    className={`block w-full px-4 py-3 border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                    } rounded-xl bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm transition-all font-sans`}
                  ></textarea>
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* File Upload Zones (Double Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Dropzone CV (PDF Only) */}
                  <div className="space-y-2">
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider font-sans">Upload Your CV (PDF only)</label>
                    <div className={`relative border-2 border-dashed rounded-2xl p-6 transition-all flex flex-col items-center justify-center min-h-[140px] text-center ${
                      cvFile ? 'border-emerald-500 bg-emerald-50/10' : errors.cv ? 'border-red-500 bg-red-50/10' : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                    }`}>
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleCvChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                      />
                      {!cvFile ? (
                        <>
                          <FileText className={`w-8 h-8 mb-2 ${errors.cv ? 'text-red-500' : 'text-slate-400'}`} />
                          <span className="text-[13px] font-bold text-slate-700 font-sans">Click or drag PDF CV here</span>
                          <span className="text-[11px] text-slate-400 mt-1 font-sans">File limit: 5MB</span>
                        </>
                      ) : (
                        <div className="z-20 w-full">
                          <FileText className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                          <p className="text-[13px] font-bold text-slate-800 truncate px-2 font-sans">{cvFile.name}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 font-sans">({(cvFile.size / 1024 / 1024).toFixed(2)} MB)</p>
                          <button
                            type="button"
                            onClick={removeCv}
                            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove CV
                          </button>
                        </div>
                      )}
                    </div>
                    {errors.cv && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.cv}
                      </p>
                    )}
                  </div>

                  {/* Dropzone Picture (JPG Only) */}
                  <div className="space-y-2">
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider font-sans">Upload Your Picture (JPG only)</label>
                    <div className={`relative border-2 border-dashed rounded-2xl p-6 transition-all flex flex-col items-center justify-center min-h-[140px] text-center ${
                      picFile ? 'border-emerald-500 bg-emerald-50/10' : errors.picture ? 'border-red-500 bg-red-50/10' : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                    }`}>
                      {!picFile && (
                        <input
                          type="file"
                          accept="image/jpeg, image/jpg"
                          onChange={handlePicChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                        />
                      )}
                      {!picFile ? (
                        <>
                          <ImageIcon className={`w-8 h-8 mb-2 ${errors.picture ? 'text-red-500' : 'text-slate-400'}`} />
                          <span className="text-[13px] font-bold text-slate-700 font-sans">Click or drag JPG Photo here</span>
                          <span className="text-[11px] text-slate-400 mt-1 font-sans">File limit: 2MB</span>
                        </>
                      ) : (
                        <div className="z-20 w-full flex flex-col items-center">
                          {picPreviewUrl && (
                            <img
                              src={picPreviewUrl}
                              alt="Applicant preview"
                              className="w-14 h-14 rounded-full object-cover border border-slate-200 mb-2 shadow-sm"
                            />
                          )}
                          <p className="text-[13px] font-bold text-slate-800 truncate px-2 max-w-[200px] font-sans">{picFile.name}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 font-sans">({(picFile.size / 1024).toFixed(0)} KB)</p>
                          <button
                            type="button"
                            onClick={removePic}
                            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove Picture
                          </button>
                        </div>
                      )}
                    </div>
                    {errors.picture && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.picture}
                      </p>
                    )}
                  </div>

                </div>

                {/* Premium Captcha Box */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col md:flex-row md:items-center gap-4">
                  {/* Stylized glassmorphic CAPTCHA Code display */}
                  <div className="flex items-center gap-3">
                    <div
                      className="relative px-5 py-2.5 rounded-xl border border-slate-200 bg-white font-mono font-black text-xl tracking-[6px] select-none text-slate-700 flex items-center justify-center overflow-hidden shadow-inner"
                      style={{
                        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
                        backgroundSize: '8px 8px',
                      }}
                    >
                      {/* Decorative CAPTCHA grid distortion lines */}
                      <div className="absolute inset-0 pointer-events-none opacity-20 border-b border-r border-slate-400 flex flex-wrap">
                        <div className="w-1/2 h-1/2 border-t border-l border-slate-400 rotate-3 transform scale-110" />
                        <div className="w-1/2 h-1/2 border-b border-r border-slate-400 -rotate-6 transform scale-110" />
                      </div>
                      <span className="relative z-10 italic skew-x-6 drop-shadow-sm">{captchaCode}</span>
                    </div>
                    
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="w-10 h-10 rounded-xl bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 flex items-center justify-center text-slate-500 hover:text-red-700 shadow-sm transition-colors cursor-pointer"
                      title="Reload Captcha"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Captcha Input field */}
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Enter verification code"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        if (errors.captcha) setErrors((prev) => ({ ...prev, captcha: '' }));
                      }}
                      className={`block w-full px-4 py-2.5 border ${
                        errors.captcha ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      } rounded-xl bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm transition-all font-sans`}
                    />
                    {errors.captcha && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-semibold mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.captcha}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submission uploading progress or submit button */}
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="progress-bar"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2 pt-2"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 font-extrabold uppercase font-sans">
                        <span>Uploading Files...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200/50">
                        <motion.div
                          className="bg-red-700 h-full rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: `${uploadProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit-btn"
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm transition-colors shadow-md shadow-red-700/10 cursor-pointer font-sans"
                    >
                      <Send className="w-4 h-4" />
                      Submit Application
                    </motion.button>
                  )}
                </AnimatePresence>

              </motion.form>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-10 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-slate-800 font-sans">Application Received!</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans px-8 max-w-xl mx-auto">
                    Your job application has been successfully submitted! Our Human Resources department will review your credentials and get back to you shortly.
                  </p>
                </div>

                {/* Uploaded statistics summary card */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left text-xs text-slate-600 space-y-3.5 max-w-md mx-auto font-sans shadow-inner">
                  <div className="border-b border-slate-200/60 pb-2 flex items-center justify-between font-bold text-slate-700 uppercase tracking-wide">
                    <span>Summary of details</span>
                    <span className="text-emerald-600 text-[10px]">Verified</span>
                  </div>
                  <p><strong>Applicant Name:</strong> {name}</p>
                  <p><strong>Email Address:</strong> {email}</p>
                  <p><strong>Contact Desk:</strong> {contact}</p>
                  {cvFile && (
                    <p className="flex items-center gap-1.5 truncate">
                      <FileText className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <strong>CV:</strong> <span className="truncate">{cvFile.name}</span> ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                  {picFile && (
                    <p className="flex items-center gap-1.5 truncate">
                      <ImageIcon className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <strong>Photo:</strong> <span className="truncate">{picFile.name}</span> ({(picFile.size / 1024).toFixed(0)} KB)
                    </p>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border border-slate-200 hover:border-red-700 text-slate-600 hover:text-red-700 font-extrabold text-xs transition-colors cursor-pointer font-sans"
                >
                  Apply For Another Position
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
