'use client';

import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface LeadForm {
  name: string;
  email: string;
  mobile: string;
}

type ChatView = 'init' | 'form' | 'chat';

function ChatIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      id="askjg-chat-icon"
      onClick={onClick}
      title="Chat with Ask JG"
      className="w-14 h-14 rounded-full bg-[#b31b1b] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg border-2 border-white relative overflow-hidden cursor-pointer"
      aria-label="Open Ask JG chat"
    >
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="text-[10px] font-bold">ASK</span>
        <span className="text-sm font-black">JG</span>
      </div>
    </button>
  );
}

function ChatHeader({
  onBack,
  onClose,
  showBack,
}: {
  onBack: () => void;
  onClose: () => void;
  showBack: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between px-4 shrink-0"
      style={{
        height: 56,
        background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 50%, #b31b1b 100%)',
        borderRadius: '12px 12px 0 0',
      }}
    >
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={onBack}
            className="text-white text-xl font-bold hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Go back"
          >
            ‹
          </button>
        )}
        <span className="text-white font-bold text-[16px] tracking-wide">Ask JG</span>
      </div>
      <button
        onClick={onClose}
        className="text-white text-xl font-bold hover:opacity-80 transition-opacity cursor-pointer w-7 h-7 flex items-center justify-center"
        aria-label="Close chat"
      >
        ✕
      </button>
    </div>
  );
}

function BotAvatar() {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shrink-0 shadow-sm border border-amber-300/50">
      <svg viewBox="0 0 36 36" className="w-7 h-7">

        <circle cx="18" cy="13" r="6" fill="#d97706" />
        <circle cx="18" cy="13" r="5" fill="#fbbf24" />
        <ellipse cx="18" cy="11" rx="5" ry="4" fill="#92400e" />
        <circle cx="18" cy="14" r="4" fill="#fcd34d" />
        <circle cx="16.5" cy="13" r="0.6" fill="#1e293b" />
        <circle cx="19.5" cy="13" r="0.6" fill="#1e293b" />
        <path d="M16.8 15.5 Q18 16.5 19.2 15.5" stroke="#b91c1c" strokeWidth="0.6" fill="none" strokeLinecap="round" />
        <path d="M10 30 Q10 22 18 22 Q26 22 26 30" fill="#b31b1b" />
      </svg>
    </div>
  );
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 mb-4">
      <BotAvatar />
      <div
        className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 max-w-[85%]"
        style={{ fontSize: 14, lineHeight: '1.55', color: '#333' }}
      >
        {children}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end mb-4">
      <div
        className="bg-[#b31b1b] text-white rounded-xl rounded-tr-sm px-4 py-3 shadow-sm max-w-[85%]"
        style={{ fontSize: 14, lineHeight: '1.55' }}
      >
        {text}
      </div>
    </div>
  );
}

function LeadCaptureForm({
  form,
  onChange,
  onSubmit,
  submitting,
  errors,
}: {
  form: LeadForm;
  onChange: (field: keyof LeadForm, value: string) => void;
  onSubmit: () => void;
  submitting: boolean;
  errors: Partial<Record<keyof LeadForm, string>>;
}) {
  return (
    <div
      className="rounded-xl mx-1 mb-3 overflow-hidden"
      style={{
        border: '2px solid #e74c3c',
        background: 'linear-gradient(180deg, #fff5f5 0%, #ffffff 100%)',
      }}
    >
      <div className="px-4 pt-4 pb-2">
        <p className="font-semibold text-[14px] text-gray-900 mb-4">
          Please help us with your contact details below
        </p>

        <label className="block mb-1 text-[13px] font-medium text-gray-800">Name*</label>
        <input
          type="text"
          placeholder="Enter your Name*"
          value={form.name}
          onChange={(e) => onChange('name', e.target.value)}
          maxLength={100}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] mb-1 outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c]/20 transition-colors bg-white placeholder:text-[#e8a09a]"
        />
        {errors.name && <p className="text-red-500 text-[11px] mb-2">{errors.name}</p>}
        {!errors.name && <div className="mb-3" />}

        <label className="block mb-1 text-[13px] font-medium text-gray-800">Email ID*</label>
        <input
          type="email"
          placeholder="Email*"
          value={form.email}
          onChange={(e) => onChange('email', e.target.value)}
          maxLength={100}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] mb-1 outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c]/20 transition-colors bg-white placeholder:text-[#e8a09a]"
        />
        {errors.email && <p className="text-red-500 text-[11px] mb-2">{errors.email}</p>}
        {!errors.email && <div className="mb-3" />}

        <label className="block mb-1 text-[13px] font-medium text-gray-800">Mobile Number*</label>
        <input
          type="tel"
          placeholder="Mobile*"
          value={form.mobile}
          onChange={(e) => onChange('mobile', e.target.value.replace(/\D/g, ''))}
          maxLength={10}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] mb-1 outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c]/20 transition-colors bg-white placeholder:text-[#e8a09a]"
        />
        {errors.mobile && <p className="text-red-500 text-[11px] mb-2">{errors.mobile}</p>}
        {!errors.mobile && <div className="mb-3" />}
      </div>

      <div className="px-4 pb-4">
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="w-full py-3 rounded-full text-white font-semibold text-[14px] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-md active:scale-[0.98]"
          style={{
            background: submitting
              ? '#ccc'
              : 'linear-gradient(135deg, #e8a09a 0%, #e74c3c 50%, #b31b1b 100%)',
          }}
        >
          {submitting ? 'Submitting...' : 'Click to Proceed'}
        </button>
      </div>
    </div>
  );
}

function InitPanel({
  onContinue,
  onNewChat,
  hasPreviousChat,
}: {
  onContinue: () => void;
  onNewChat: () => void;
  hasPreviousChat: boolean;
}) {
  return (
    <div className="p-4">
      <p className="text-gray-500 text-[13px] font-medium mb-4 text-center">Talk to us...</p>

      {hasPreviousChat && (
        <>
          <button
            onClick={onContinue}
            className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors mb-2 text-left cursor-pointer"
          >
            <BotAvatar />
            <div>
              <p className="font-semibold text-[13px] text-gray-900">Continue old conversation</p>
              <p className="text-[12px] text-gray-500 mt-0.5">Greetings from JG University!</p>
            </div>
          </button>
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </>
      )}

      <button
        onClick={onNewChat}
        className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors text-left cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-[#b31b1b] text-white flex items-center justify-center shrink-0 shadow-sm">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[13px] text-gray-900">Start a new conversation</p>
          <p className="text-[12px] text-gray-500 mt-0.5">Hello there!</p>
        </div>
      </button>
    </div>
  );
}

function ChatInputBar({
  value,
  onChange,
  onSend,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 border-t border-gray-100 bg-white shrink-0" style={{ borderRadius: '0 0 12px 12px' }}>
      <textarea
        placeholder="Write your message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        rows={1}
        className="flex-1 resize-none border border-gray-200 rounded-full px-4 py-2 text-[13px] outline-none focus:border-[#e74c3c] transition-colors bg-gray-50"
      />
      <button
        onClick={onSend}
        className="w-9 h-9 rounded-full bg-[#b31b1b] text-white flex items-center justify-center hover:bg-[#8f1515] transition-colors shrink-0 cursor-pointer"
        aria-label="Send message"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}

function ChatCopyright() {
  return (
    <div className="text-center py-2 text-[10px] text-gray-400 shrink-0 bg-white" style={{ borderRadius: '0 0 12px 12px' }}>
      Powered by{' '}
      <a href="https://www.extraaedge.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        ExtraaEdge
      </a>
      {' | '}
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Privacy Policy
      </a>
    </div>
  );
}

const FAQ_RESPONSES: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['admission', 'apply', 'enroll', 'registration'],
    answer: 'Admissions for 2025-26 are open! Visit our Admission page or call +91 7567756758 for details. You can also apply online at jguni.in/admission-open.',
  },
  {
    keywords: ['fee', 'fees', 'cost', 'tuition', 'scholarship'],
    answer: 'Fee structures vary by programme. We also offer merit-based scholarships. Please contact our admission office at +91 7567756758 for detailed fee information.',
  },
  {
    keywords: ['course', 'programme', 'program', 'bba', 'mba', 'bca', 'mca', 'bcom', 'mcom'],
    answer: 'JG University offers UG programmes (BBA, BCA, B.Com, B.Sc IT), PG programmes (MBA, MCA, M.Com, M.Sc IT), and Doctoral programmes. Visit our Programmes page to explore all options!',
  },
  {
    keywords: ['campus', 'location', 'address', 'where'],
    answer: 'JG University is located in Ahmedabad, Gujarat. Our modern campus features state-of-the-art facilities including smart classrooms, labs, library, sports complex, and more.',
  },
  {
    keywords: ['placement', 'job', 'career', 'recruit'],
    answer: 'We have an excellent placement record with top recruiters visiting our campus. Our Training & Placement Cell provides career guidance, mock interviews, and industry connections.',
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach'],
    answer: 'You can reach us at:\n📞 +91 7567756758\n📧 info@jguni.in\n🌐 www.jguni.in\nOr visit us at our Ahmedabad campus!',
  },
  {
    keywords: ['hostel', 'accommodation', 'stay', 'housing'],
    answer: 'JG University provides comfortable hostel facilities for both boys and girls with modern amenities, mess facility, and 24/7 security.',
  },
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening'],
    answer: 'Hello! 👋 Welcome to JG University. How can I help you today? Feel free to ask about admissions, programmes, campus, placements, or anything else!',
  },
];

function getBotReply(userMsg: string): string {
  const lower = userMsg.toLowerCase().trim();

  for (const faq of FAQ_RESPONSES) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }

  return "Thank you for your message! Our counselor will get back to you shortly. In the meantime, you can call us at +91 7567756758 or explore our website for more information.";
}

export default function AskJGChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ChatView>('init');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [form, setForm] = useState<LeadForm>({ name: '', email: '', mobile: '' });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNewChat = () => {
    setMessages([]);
    setLeadSubmitted(false);
    setForm({ name: '', email: '', mobile: '' });
    setFormErrors({});
    setView('form');
    
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Greetings from JG University! \n\nLet's start by knowing more about you.",
        timestamp: new Date(),
      },
    ]);
  };

  const handleContinueChat = () => {
    setView('chat');
  };

  const handleFormChange = (field: keyof LeadForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errs: Partial<Record<keyof LeadForm, string>> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!form.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (form.mobile.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = () => {
    if (!validateForm()) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setLeadSubmitted(true);
      setView('chat');

      setMessages((prev) => [
        ...prev,
        {
          id: 'user-lead',
          sender: 'user',
          text: `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}`,
          timestamp: new Date(),
        },
        {
          id: 'bot-thanks',
          sender: 'bot',
          text: `Thank you ${form.name}! 🎉\n\nYour details have been submitted successfully. Our counselor will reach out to you shortly.\n\nIn the meantime, feel free to ask me anything about JG University — admissions, programmes, campus, placements, and more!`,
          timestamp: new Date(),
        },
      ]);
    }, 1200);
  };

  const handleSendMessage = () => {
    const text = inputText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: getBotReply(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800 + Math.random() * 600);
  };

  const handleBack = () => {
    if (view === 'form' || view === 'chat') {
      setView('init');
    }
  };

  return (
    <>

      {isOpen && (
        <div
          id="askjg-chat-window"
          className="fixed z-[9999] flex flex-col"
          style={{
            bottom: 90,
            right: 16,
            width: 370,
            maxWidth: 'calc(100vw - 32px)',
            height: 560,
            maxHeight: 'calc(100vh - 120px)',
            borderRadius: 12,
            boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
            animation: 'askjg-slide-up 0.3s ease-out',
          }}
        >

          <ChatHeader
            onBack={handleBack}
            onClose={toggleChat}
            showBack={view !== 'init'}
          />

          <div
            className="flex-1 overflow-y-auto bg-[#f9fafb]"
            style={{ overscrollBehavior: 'contain' }}
          >
            {view === 'init' && (
              <InitPanel
                onContinue={handleContinueChat}
                onNewChat={handleNewChat}
                hasPreviousChat={messages.length > 0}
              />
            )}

            {view === 'form' && (
              <div className="p-3">

                <BotBubble>
                  <p className="mb-1">Greetings from JG University!</p>
                  <p>Let&apos;s start by knowing more about you.</p>
                </BotBubble>

                <LeadCaptureForm
                  form={form}
                  onChange={handleFormChange}
                  onSubmit={handleFormSubmit}
                  submitting={submitting}
                  errors={formErrors}
                />
              </div>
            )}

            {view === 'chat' && (
              <div className="p-3">
                {messages.map((msg) =>
                  msg.sender === 'bot' ? (
                    <BotBubble key={msg.id}>
                      {msg.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < msg.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </BotBubble>
                  ) : (
                    <UserBubble key={msg.id} text={msg.text} />
                  )
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {view === 'chat' && (
            <ChatInputBar
              value={inputText}
              onChange={setInputText}
              onSend={handleSendMessage}
            />
          )}

          <ChatCopyright />
        </div>
      )}

      <div className="fixed right-4 bottom-10 z-[9998]">
        <ChatIcon onClick={toggleChat} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes askjg-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}} />
    </>
  );
}

export { ChatIcon };
