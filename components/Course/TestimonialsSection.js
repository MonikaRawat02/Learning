
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "New Trader",
    content: "The course structure made everything so clear. I finally understand how to approach trading systematically instead of gambling.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Student",
    content: "The risk management module alone was worth the investment. It completely changed how I think about protecting my capital.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Beginner",
    content: "As someone with zero experience, I appreciated how everything was explained from the ground up. No confusing jargon.",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    role: "Learning Trader",
    content: "The real chart examples helped me understand concepts much better than just theory. Highly recommend for beginners.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Student",
    content: "Finally, a course that focuses on education rather than promises. The structured approach helped me build a solid foundation.",
    rating: 5
  },
  {
    name: "Anjali Verma",
    role: "New Learner",
    content: "The psychology module was eye-opening. I now understand why discipline and patience matter more than just strategies.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4">
            Student Feedback
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Hear from students who have completed the program
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl bg-[#0f172a]/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-emerald-500/20 mb-4 group-hover:text-emerald-500/40 transition-colors" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#E4E7EB] mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-800/50">
                <p className="text-[#E4E7EB] font-medium">{testimonial.name}</p>
                <p className="text-sm text-[#9CA3AF]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#9CA3AF] mt-12 italic">
          * Testimonials reflect individual learning experiences and do not represent financial outcomes
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
