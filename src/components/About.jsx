const About = () => {
  const features = [
    {
      number: '01',
      title: 'Modern Equipment',
      description: 'Latest technology and equipment from top brands worldwide'
    },
    {
      number: '02',
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to your success'
    },
    {
      number: '03',
      title: 'Flexible Hours',
      description: '24/7 access to fit your busy lifestyle'
    },
    {
      number: '04',
      title: 'Premium Facilities',
      description: 'Spacious, clean, and well-maintained environment'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B00]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#FF6B00]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content - Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" 
                  alt="Gym Interior" 
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl shadow-black/50 hover:scale-[1.02] transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800" 
                  alt="Training Session" 
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl shadow-black/50 hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800" 
                  alt="Weights" 
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl shadow-black/50 hover:scale-[1.02] transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800" 
                  alt="Cardio Area" 
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl shadow-black/50 hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-[#FF6B00]/20 rounded-[2rem] -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>
              <span className="text-[#FF6B00] text-sm font-bold tracking-widest uppercase">About Starbase</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold font-['Oswald'] text-white mb-8 leading-tight">
              WE ARE MORE THAN <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] to-[#FF8C33]">
                JUST A GYM
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Located in the heart of Mirpur DOHS, Starbase Fitness is your premier destination for achieving your fitness goals. With over 19,000 square feet of cutting-edge facilities, we provide everything you need to transform your body and mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-4xl font-['Oswald'] font-bold text-transparent bg-clip-text bg-linear-to-b from-[#FF6B00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity">
                      {feature.number}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-[#FF6B00] hover:text-white transition-all duration-300 skew-x-[-10deg] group">
                <span className="block skew-x-[10deg]">LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;