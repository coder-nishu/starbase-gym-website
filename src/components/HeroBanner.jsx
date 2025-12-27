import { useEffect, useState } from 'react';

const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { value: '19,000+', label: 'Sqft Facility', icon: '📐' },
    { value: '50+', label: 'Expert Trainers', icon: '💪' },
    { value: '5000+', label: 'Active Members', icon: '👥' },
    { value: '4.8', label: 'Google Rating', icon: '⭐' },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-a-treadmill-in-an-empty-gym-45119-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/90 z-0"></div>
      <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0B] via-transparent to-transparent z-0"></div>

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="flex flex-col items-center justify-center space-y-10">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full backdrop-blur-sm transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase">
              Premium Fitness Experience
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`font-['Oswald'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            TRANSFORM YOUR
            <br />
            <span className="bg-linear-to-r from-[#FF6B00] via-[#FF8C33] to-[#FF6B00] bg-clip-text text-transparent">
              BODY & MIND
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Welcome to Mirpur DOHS's most advanced fitness center. State-of-the-art equipment, expert trainers, and a community that drives results.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 mt-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="w-64 h-16 group px-10 py-10 bg-linear-to-r from-[#FF6B00] to-[#FF8C33] hover:from-[#FF8C33] hover:to-[#FF6B00] text-white rounded-lg font-bold text-lg shadow-2xl shadow-[#FF6B00]/40 hover:shadow-[#FF6B00]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="w-64 h-16 px-10 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-[#FF6B00] text-white rounded-lg font-semibold text-lg backdrop-blur-md hover:scale-105 transition-all duration-300">
              Free Trial
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 max-w-4xl mx-auto transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-[#FF6B00]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#FF6B00] font-['Oswald'] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <span className="text-gray-400 text-xs tracking-[0.2em] uppercase group-hover:text-[#FF6B00] transition-colors duration-300">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-gray-400/50 group-hover:border-[#FF6B00] rounded-full p-1 transition-colors duration-300">
            <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default HeroBanner;
