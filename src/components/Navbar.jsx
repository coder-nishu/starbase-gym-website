import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0B]/95 backdrop-blur-lg shadow-xl border-b border-[#FF6B00]/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4 group z-10">
            <div className="relative">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-linear-to-br from-[#FF6B00] to-[#FF8C33] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B00]/50 group-hover:shadow-[#FF6B00]/70 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-black text-2xl lg:text-3xl font-['Oswald']">S</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-black font-['Oswald'] leading-none">
                <span className="text-[#FF6B00]">STAR</span>
                <span className="text-white">BASE</span>
              </h1>
              <p className="text-[10px] lg:text-xs text-gray-400 tracking-[0.2em] uppercase font-medium">Fitness Club</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#FF6B00] text-base font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 text-white hover:text-[#FF6B00] font-semibold transition-colors duration-300">
              Sign In
            </button>
            <button className="px-8 py-3 bg-linear-to-r from-[#FF6B00] to-[#FF8C33] text-white rounded-xl font-bold shadow-lg shadow-[#FF6B00]/40 hover:shadow-[#FF6B00]/60 hover:scale-105 transition-all duration-300">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-10"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#FF6B00] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0B0B0B]/98 backdrop-blur-xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold text-white hover:text-[#FF6B00] transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-white border-2 border-white/20 hover:border-[#FF6B00] rounded-xl font-bold transition-all duration-300"
            >
              Sign In
            </button>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-linear-to-r from-[#FF6B00] to-[#FF8C33] text-white rounded-xl font-bold shadow-lg shadow-[#FF6B00]/40"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
