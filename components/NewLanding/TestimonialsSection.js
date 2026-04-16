import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The structured approach helped me understand market movements better. Great learning experience!",
    name: "Rajesh Kumar",
    role: "Verified Learner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Excellent content in Hindi. Finally understood risk management properly.",
    name: "Priya Sharma",
    role: "Verified Learner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The training cleared many of my doubts. Highly recommend for beginners.",
    name: "Amit Patel",
    role: "Verified Learner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
          What Our Learners Say
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-gray-400 text-lg mb-12">
          Real learners sharing their experience
        </p>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-400/50 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              
              {/* Testimonial Text */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
