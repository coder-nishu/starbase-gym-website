import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Classes', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg border-b border-white/5' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={handleNavClick}
              className="flex items-center gap-2.5 sm:gap-3 group z-50 relative"
              aria-label="STARBASE Fitness Home"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#FF6B00] flex items-center justify-center group-hover:bg-[#e66000] transition-all duration-300">
                <span className="text-white font-black text-lg sm:text-xl font-['Oswald']">S</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-bold font-['Oswald'] text-white leading-none tracking-tight">
                  STAR<span className="text-[#FF6B00]">BASE</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                className="px-5 py-2.5 text-sm font-semibold text-white hover:text-[#FF6B00] transition-colors duration-200"
                aria-label="Sign in"
              >
                Sign In
              </button>
              <button 
                className="px-6 py-2.5 bg-[#FF6B00] hover:bg-[#e66000] text-white text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Get started with membership"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`w-6 h-0.5 bg-[#FF6B00] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0B0B0B] z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-20">
          <nav aria-label="Mobile navigation" className="w-full max-w-sm">
            <ul className="flex flex-col items-stretch gap-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`block text-center py-4 text-xl font-bold text-white hover:text-[#FF6B00] border-b border-white/10 transition-all duration-500 ${
                      mobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div 
            className={`flex flex-col gap-3 w-full max-w-sm px-4 transition-all duration-500 ${
              mobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 border-2 border-white/30 text-white font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              Sign In
            </button>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-[#FF6B00] text-white font-bold uppercase tracking-wide hover:bg-[#e66000] transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
