import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Quote, Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Business Owner',
      content: 'Sabka Loan helped me expand my shop with a quick business loan. The process was 100% digital and very smooth!',
      image: 'https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    },
    {
      name: 'Priya Patel',
      role: 'Software Engineer',
      content: 'I needed urgent funds for a medical emergency. They disbursed the loan within hours. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1600430665436-d4ff685937eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    },
    {
      name: 'Amit Kumar',
      role: 'Teacher',
      content: 'The interest rates are reasonable and the customer support is excellent. Best loan app I have used.',
      image: 'https://images.unsplash.com/photo-1601655781320-205e34c94eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    },
    {
      name: 'Sneha Gupta',
      role: 'Freelancer',
      content: 'Very transparent process with no hidden charges. The EMI calculator helped me plan better.',
      image: 'https://images.unsplash.com/photo-1639655958585-2bd97599d6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[100px] -mr-[200px] -mt-[200px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-semibold text-sm mb-6"
          >
            <Star className="w-4 h-4 fill-orange-500" />
            Customer Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="-mx-4"
        >
          <Slider {...settings} className="testimonial-slider pb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 outline-none">
                <div className="bg-[#FDFBF7] rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <Quote className="w-10 h-10 text-orange-200 mb-6" />
                  <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 bg-gray-900 text-white rounded-[1rem] flex items-center justify-center font-extrabold text-xl shadow-md">
                      <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-[1rem] object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .testimonial-slider .slick-dots li button:before {
          font-size: 12px;
          color: #d1d5db;
          opacity: 1;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #2563eb;
        }
      `}</style>
    </section>
  );
}