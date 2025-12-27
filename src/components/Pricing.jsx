const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '2,500',
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to gym equipment',
        'Locker room facilities',
        'Free WiFi',
        'Basic fitness assessment',
        'Access during off-peak hours',
        'Mobile app access'
      ],
      highlight: false,
      badge: null
    },
    {
      name: 'Premium',
      price: '4,500',
      period: 'month',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'All Basic plan features',
        '24/7 gym access',
        '5 group classes per month',
        'Personal training (2 sessions)',
        'Nutrition consultation',
        'Access to sauna & steam room',
        'Guest pass (2 per month)',
        'Premium locker'
      ],
      highlight: true,
      badge: 'MOST POPULAR'
    },
    {
      name: 'Elite',
      price: '7,500',
      period: 'month',
      description: 'Complete fitness solution with exclusive perks',
      features: [
        'All Premium plan features',
        'Unlimited group classes',
        'Personal training (8 sessions)',
        'Advanced nutrition planning',
        'Recovery spa access',
        'Priority booking',
        'Free merchandise',
        'Guest passes (5 per month)',
        'Dedicated personal locker',
        'Complimentary towel service'
      ],
      highlight: false,
      badge: 'BEST VALUE'
    }
  ];

  const yearlyDiscount = {
    basic: '25,000',
    premium: '45,000',
    elite: '75,000'
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,0,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,0,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Membership Plans
            </span>
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Oswald'] text-white mb-6 leading-tight">
            CHOOSE YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] via-[#FF8533] to-[#FFA366]">
              FITNESS PLAN
            </span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Flexible membership options designed for every fitness goal and budget. 
            Located at <span className="text-white font-semibold">Level 5, Mirpur DOHS Cultural Centre</span>.
          </p>

          {/* Discount Banner */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-[#FF6B00] to-[#FF8533] rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Save up to 30% with annual membership
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.highlight 
                  ? 'md:scale-105 z-10' 
                  : 'hover:scale-[1.02]'
              } transition-all duration-300`}
            >
              {/* Card */}
              <div
                className={`relative h-full flex flex-col bg-[#111111] border-2 ${
                  plan.highlight
                    ? 'border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/20'
                    : 'border-white/5 hover:border-[#FF6B00]/30'
                } rounded-2xl p-8 transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${
                  plan.highlight 
                    ? 'from-[#FF6B00]/10 via-transparent to-transparent' 
                    : 'from-transparent to-transparent group-hover:from-[#FF6B00]/5'
                } transition-all duration-300`}></div>

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 right-8">
                    <div className="bg-linear-to-r from-[#FF6B00] to-[#FF8533] text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-black font-['Oswald'] text-white mb-2 uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-gray-500 text-2xl font-bold">৳</span>
                      <span className="text-5xl sm:text-6xl font-black font-['Oswald'] text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg font-medium">
                        /{plan.period}
                      </span>
                    </div>
                    
                    {/* Yearly price */}
                    <div className="text-sm text-gray-500">
                      or ৳{yearlyDiscount[plan.name.toLowerCase()]}/year 
                      <span className="text-[#FF6B00] font-semibold ml-1">(Save 30%)</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <svg 
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.highlight ? 'text-[#FF6B00]' : 'text-[#FF6B00]/70'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 font-black text-sm uppercase tracking-wider rounded-lg transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-[#FF6B00] text-white hover:bg-[#e66000] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B00]/30'
                        : 'bg-transparent border-2 border-white/20 text-white hover:border-[#FF6B00] hover:bg-[#FF6B00]/10'
                    }`}
                  >
                    {plan.highlight ? 'Get Started Now' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-[#111111] border border-white/5 rounded-xl">
            <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white font-bold mb-2">Flexible Schedule</h4>
            <p className="text-gray-400 text-sm">
              Train at your convenience with 24/7 access options
            </p>
          </div>

          <div className="text-center p-6 bg-[#111111] border border-white/5 rounded-xl">
            <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white font-bold mb-2">No Commitment</h4>
            <p className="text-gray-400 text-sm">
              Cancel anytime with our flexible membership terms
            </p>
          </div>

          <div className="text-center p-6 bg-[#111111] border border-white/5 rounded-xl">
            <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-white font-bold mb-2">Expert Support</h4>
            <p className="text-gray-400 text-sm">
              50+ certified trainers ready to guide your journey
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Have questions? Our team is here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="tel:+8801776117766" 
              className="flex items-center gap-2 text-[#FF6B00] hover:text-[#e66000] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +88 01776-117766
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="mailto:info@starbase.rocks" 
              className="flex items-center gap-2 text-[#FF6B00] hover:text-[#e66000] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@starbase.rocks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
