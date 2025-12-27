const Blog = () => {
  const blogPosts = [
    {
      title: '10 Essential Tips for Building Muscle Mass',
      excerpt: 'Discover the science-backed strategies that will help you pack on lean muscle and achieve your bodybuilding goals faster.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800',
      category: 'Muscle Building',
      author: 'John Deo',
      date: 'December 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'The Ultimate Guide to HIIT Training',
      excerpt: 'Learn how High-Intensity Interval Training can transform your fitness routine and maximize fat burning in minimal time.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
      category: 'Cardio',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      readTime: '7 min read'
    },
    {
      title: 'Nutrition Essentials for Peak Performance',
      excerpt: 'What you eat directly impacts your workout results. Explore the fundamental nutrition principles every athlete should know.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800',
      category: 'Nutrition',
      author: 'Dr. Ahmed Rahman',
      date: 'December 5, 2024',
      readTime: '6 min read'
    },
    {
      title: 'Recovery Techniques: Rest Your Way to Gains',
      excerpt: 'Understanding the importance of rest and recovery in your fitness journey. Learn the techniques top athletes use.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
      category: 'Recovery',
      author: 'Mike Thompson',
      date: 'November 28, 2024',
      readTime: '4 min read'
    },
    {
      title: 'Strength Training for Beginners',
      excerpt: 'New to weightlifting? This comprehensive guide covers everything you need to know to start your strength training journey safely.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
      category: 'Strength',
      author: 'James Taylor',
      date: 'November 20, 2024',
      readTime: '8 min read'
    },
    {
      title: 'Mental Health & Fitness Connection',
      excerpt: 'Explore the powerful relationship between physical exercise and mental wellness, backed by latest research.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800',
      category: 'Wellness',
      author: 'Dr. Lisa Chen',
      date: 'November 15, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full backdrop-blur-sm mb-6">
            <svg className="w-4 h-4 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Our Blog
            </span>
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Oswald'] text-white mb-6 leading-tight">
            LATEST FITNESS
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B00] via-[#FF8533] to-[#FFA366]">
              TIPS & NEWS
            </span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Stay updated with expert advice, workout tips, and the latest fitness trends 
            from our certified trainers and nutrition specialists.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-[#0B0B0B] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF6B00]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B00]/10"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-['Oswald'] text-white mb-3 leading-tight group-hover:text-[#FF6B00] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#FF6B00] hover:text-[#e66000] font-bold text-sm uppercase tracking-wider transition-colors group"
                >
                  <span>Read More</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="group px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#FF6B00] text-white font-black text-sm uppercase tracking-wider rounded-lg hover:bg-[#FF6B00]/10 transition-all duration-300">
            <span className="flex items-center gap-2">
              Load More Articles
              <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Newsletter Subscribe Section */}
        <div className="mt-16 lg:mt-20 p-8 lg:p-12 bg-linear-to-r from-[#FF6B00] to-[#FF8533] rounded-2xl text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Oswald'] text-white mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-6">
              Get weekly fitness tips, nutrition advice, and exclusive content delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-[#0B0B0B] hover:bg-black text-white font-black uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
