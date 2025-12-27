const Services = () => {
  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals and needs.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800',
      icon: '💪'
    },
    {
      title: 'Group Classes',
      description: 'High-energy classes including HIIT, Yoga, and Spin.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800',
      icon: '🧘'
    },
    {
      title: 'Strength Training',
      description: 'State-of-the-art free weights and resistance machines.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
      icon: '🏋️'
    },
    {
      title: 'Cardio Zone',
      description: 'Latest treadmills, ellipticals, and bikes with entertainment.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800',
      icon: '🏃'
    },
    {
      title: 'Nutrition Planning',
      description: 'Expert dietary guidance to fuel your workouts and recovery.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800',
      icon: '🥗'
    },
    {
      title: 'Recovery Spa',
      description: 'Sauna, steam room, and massage therapy for recovery.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800',
      icon: '🧖'
    }
  ];

  return (
    <section id="services" className="py-20 mt-10  lg:py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold font-['Oswald'] text-white mb-6">
            PUSH YOUR LIMITS WITH <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] to-[#FF8C33]">
              WORLD CLASS FACILITIES
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We offer a comprehensive range of services designed to help you achieve your fitness goals, 
            from expert personal training to diverse group classes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-4 text-2xl shadow-lg shadow-[#FF6B00]/30">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-['Oswald'] text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-[#FF6B00] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>Explore</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;