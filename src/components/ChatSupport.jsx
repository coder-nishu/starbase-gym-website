import { useState } from 'react';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! 👋 Welcome to STARBASE Fitness. How can I help you today?'
    }
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [questionsMinimized, setQuestionsMinimized] = useState(false);

  const faqs = [
    {
      question: 'What are your membership plans?',
      answer: 'We offer 3 membership plans: Basic (৳2,500/month), Premium (৳4,500/month), and Elite (৳7,500/month). All plans include access to our 19,000 sq ft facility and expert trainers. Save 30% with annual membership!'
    },
    {
      question: 'What are your operating hours?',
      answer: 'Monday-Friday: 5:00 AM - 11:00 PM\nSaturday-Sunday: 6:00 AM - 10:00 PM\nPublic Holidays: 7:00 AM - 8:00 PM\n\nPremium and Elite members get 24/7 access!'
    },
    {
      question: 'Where are you located?',
      answer: 'We\'re located at Level 5, Mirpur DOHS Cultural Centre, Road 9, Mirpur DOHS, Dhaka. Easy to find with ample parking available!'
    },
    {
      question: 'Do you offer personal training?',
      answer: 'Yes! All our membership plans include personal training sessions. Premium members get 2 sessions/month and Elite members get 8 sessions/month. Our 50+ certified trainers are ready to help you achieve your goals!'
    },
    {
      question: 'Can I try before joining?',
      answer: 'Absolutely! We offer a FREE trial session. Click the "Book Free Trial" button on our homepage or call us at +88 01776-117766 to schedule your visit.'
    },
    {
      question: 'What facilities do you have?',
      answer: 'We have:\n• State-of-the-art gym equipment\n• Group fitness classes (HIIT, Yoga, Spin)\n• Cardio zone with latest machines\n• Recovery spa with sauna & steam room\n• Nutrition consultation\n• Premium locker rooms'
    },
    {
      question: 'How do I cancel my membership?',
      answer: 'We offer flexible cancellation policies. You can cancel anytime with 30 days notice. Contact us at info@starbase.rocks or visit our front desk for assistance.'
    },
    {
      question: 'Do you have parking facilities?',
      answer: 'Yes! We have dedicated parking space for our members at Mirpur DOHS Cultural Centre. Free parking is available for all members.'
    }
  ];

  const handleQuestionClick = (faq) => {
    // Add user question
    setMessages(prev => [...prev, {
      type: 'user',
      text: faq.question
    }]);

    // Add bot answer after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: faq.answer
      }]);
      setShowQuestions(true);
    }, 500);

    setShowQuestions(false);
  };

  const handleReset = () => {
    setMessages([
      {
        type: 'bot',
        text: 'Hi! 👋 Welcome to STARBASE Fitness. How can I help you today?'
      }
    ]);
    setShowQuestions(true);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-full shadow-2xl hover:shadow-[#FF6B00]/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label="Customer Support"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
              1
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-4rem)] h-[600px] max-h-[calc(100vh-200px)] bg-[#0B0B0B] border-2 border-[#FF6B00] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-up">
          {/* Chat Header */}
          <div className="bg-linear-to-r from-[#FF6B00] to-[#FF8533] p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#FF6B00] font-black text-lg font-['Oswald']">S</span>
              </div>
              <div>
                <h3 className="text-white font-bold font-['Oswald'] text-lg">STARBASE Support</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-white/90 text-xs">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#111111]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-[#FF6B00] text-white rounded-br-none'
                      : 'bg-white/5 text-gray-200 rounded-bl-none border border-white/10'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {showQuestions && (
            <div className="bg-[#0B0B0B] border-t border-white/10">
              {/* Quick Questions Header with Minimize Button */}
              <div className="p-4 pb-3 flex items-center justify-between">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Quick Questions
                </p>
                <button
                  onClick={() => setQuestionsMinimized(!questionsMinimized)}
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  aria-label={questionsMinimized ? 'Expand questions' : 'Minimize questions'}
                >
                  {questionsMinimized ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Questions List */}
              {!questionsMinimized && (
                <div className="px-4 pb-4 max-h-64 overflow-y-auto space-y-2">
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(faq)}
                      className="w-full text-left p-3 bg-white/5 hover:bg-[#FF6B00]/20 border border-white/10 hover:border-[#FF6B00] text-gray-300 hover:text-white text-sm rounded-lg transition-all duration-200"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Chat Footer */}
          <div className="p-4 bg-[#0B0B0B] border-t border-white/10 space-y-3">
            {!showQuestions && (
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#FF6B00] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200"
              >
                Ask Another Question
              </button>
            )}
            <div className="flex gap-2">
              <a
                href="tel:+8801776117766"
                className="flex-1 py-2.5 px-4 bg-[#FF6B00] hover:bg-[#e66000] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a
                href="mailto:info@starbase.rocks"
                className="flex-1 py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSupport;
