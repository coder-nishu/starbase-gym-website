import { useState } from 'react';

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: 'Fahim Ahmed',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      review: 'Joining STARBASE was the best decision for my fitness journey. The trainers are incredibly knowledgeable and supportive. I\'ve lost 15kg in 4 months and gained so much confidence. The facilities are world-class!',
      achievement: 'Lost 15kg in 4 months'
    },
    {
      name: 'Tasnia Rahman',
      role: 'Marketing Manager',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      review: 'The group classes at STARBASE are phenomenal! The energy is contagious and the instructors push you to achieve more than you thought possible. The community here is like a second family. Highly recommend!',
      achievement: 'Completed first marathon'
    },
    {
      name: 'Rahul Hossain',
      role: 'Business Owner',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      rating: 5,
      review: 'Being a busy entrepreneur, I needed a gym that was flexible and results-driven. STARBASE exceeded my expectations. The 24/7 access and personalized training programs fit perfectly into my schedule.',
      achievement: 'Built 8kg muscle mass'
    },
    {
      name: 'Nadia Islam',
      role: 'Doctor',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      review: 'As a healthcare professional, I appreciate the attention to form and safety at STARBASE. The trainers are certified and truly care about your wellbeing. The nutrition guidance has been invaluable for my goals.',
      achievement: 'Improved overall fitness by 40%'
    },
    {
      name: 'Karim Sheikh',
      role: 'College Student',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 5,
      review: 'The student-friendly membership plans made it possible for me to join. The atmosphere is motivating without being intimidating. I\'ve made great friends here and my strength has increased dramatically!',
      achievement: 'Increased bench press by 30kg'
    },
    {
      name: 'Meher Afroz',
      role: 'Architect',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      review: 'STARBASE offers the perfect balance of cardio, strength training, and relaxation. The recovery spa with sauna and steam room is a game-changer after intense workouts. The entire experience is top-notch!',
      achievement: 'Achieved fitness goals in 6 months'
    }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const stats = [
    { value: '5000+', label: 'Happy Members' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '50+', label: 'Expert Trainers' }
  ];

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,0,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,0,0.08),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Testimonials
            </span>
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Oswald'] text-white mb-6 leading-tight">
            WHAT OUR MEMBERS
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] via-[#FF8533] to-[#FFA366]">
              SAY ABOUT US
            </span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Real stories from real members who transformed their lives at STARBASE. 
            Join our community and start your success story today.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[#111111] border border-white/5 rounded-xl hover:border-[#FF6B00]/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black font-['Oswald'] text-[#FF6B00] mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Review Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <svg className="w-32 h-32 text-[#FF6B00]" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            <div className="relative">
              {/* Review Header */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <img 
                  src={reviews[activeReview].image} 
                  alt={reviews[activeReview].name}
                  className="w-24 h-24 rounded-full border-4 border-[#FF6B00] object-cover shadow-lg"
                />
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold font-['Oswald'] text-white mb-1">
                    {reviews[activeReview].name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {reviews[activeReview].role}
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 justify-center sm:justify-start">
                    {[...Array(reviews[activeReview].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Achievement Badge */}
                <div className="px-4 py-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-lg">
                  <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider">
                    {reviews[activeReview].achievement}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-300 text-lg leading-relaxed italic mb-8">
                "{reviews[activeReview].review}"
              </blockquote>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeReview 
                        ? 'bg-[#FF6B00] w-8' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">
          <button
            onClick={prevReview}
            className="w-12 h-12 flex items-center justify-center bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-full transition-all duration-300"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="w-12 h-12 flex items-center justify-center bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-full transition-all duration-300"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold font-['Oswald'] text-white mb-4">
            READY TO START YOUR TRANSFORMATION?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 5000+ members who have already transformed their lives at STARBASE. 
            Your success story starts here.
          </p>
          <button className="px-10 py-4 bg-[#FF6B00] hover:bg-[#e66000] text-white font-black text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B00]/50">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
