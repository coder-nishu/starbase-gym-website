const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '2,500',
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to Gym Floor',
        'Locker Room Access',
        'Free WiFi',
        '1 Fitness Assessment'
      ],
      highlight: false
    },
    {
      name: 'Premium',
      price: '4,500',
      period: '/month',
      description: 'The most popular choice for serious fitness enthusiasts',
      features: [
        'All Basic Features',
        'Unlimited Group Classes',
        'Sauna & Steam Access',
        'Monthly Body Composition Analysis',
        '1 Personal Training Session'
      ],
      highlight: true
    },
    {
      name: 'Elite',
      price: '8,000',
      period: '/month',
      description: 'Ultimate access for those who want the best',
      features: [
        'All Premium Features',
        'Unlimited Personal Training',
        'Nutrition Consultation',
        'Priority Booking',
        'Guest Passes (2/month)',
        'Towel Service'
      ],
      highlight: false
    }
  ];

  return (
    <section id="membership" className="py-20 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#FF6B00]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm mb-4 block">
            Membership Plans
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold font-['Oswald'] text-white mb-6">
            CHOOSE YOUR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] to-[#FF8C33]">
              FITNESS JOURNEY
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Flexible plans designed to fit your lifestyle and budget. No hidden fees, just results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#1A1A1A] border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/20 scale-105 z-10' 
                  : 'bg-[#111111] border-white/10 hover:border-[#FF6B00]/50 hover:bg-[#161616]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2 font-['Oswald'] uppercase tracking-wide">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm h-10">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#FF6B00]">৳</span>
                  <span className="text-5xl font-bold text-white font-['Oswald']">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className={`w-5 h-5 ${plan.highlight ? 'text-[#FF6B00]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#FF6B00] hover:bg-[#e66000] text-white shadow-lg shadow-[#FF6B00]/30'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;