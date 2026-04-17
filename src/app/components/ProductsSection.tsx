import { motion } from 'motion/react';
import { Briefcase, Plane, HeartPulse, GraduationCap, Home, Gift } from 'lucide-react';

const products = [
  {
    title: 'Personal Loan',
    description: 'For unexpected expenses or personal needs.',
    icon: HeartPulse,
    color: 'blue'
  },
  {
    title: 'Business Loan',
    description: 'Grow your business with our flexible financing.',
    icon: Briefcase,
    color: 'orange'
  },
  {
    title: 'Travel Loan',
    description: 'Fund your dream vacation today.',
    icon: Plane,
    color: 'green'
  },
  {
    title: 'Education Loan',
    description: 'Invest in your future with our education loans.',
    icon: GraduationCap,
    color: 'purple'
  },
  {
    title: 'Home Renovation',
    description: 'Upgrade your living space effortlessly.',
    icon: Home,
    color: 'rose'
  },
  {
    title: 'Wedding Loan',
    description: 'Make your special day truly memorable.',
    icon: Gift,
    color: 'indigo'
  }
];

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
  orange: 'bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-600 group-hover:text-white',
  green: 'bg-green-50 text-green-600 border-green-100 group-hover:bg-green-600 group-hover:text-white',
  purple: 'bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white',
  rose: 'bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-600 group-hover:text-white',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white'
};

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Loan Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 font-medium"
          >
            Explore our tailored financial solutions designed for every milestone of your life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 24 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 cursor-pointer group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <Icon className="w-32 h-32" />
                </div>
                
                <div className={`w-16 h-16 ${colorClasses[product.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 border`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{product.description}</p>
                
                <div className="mt-8 flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Learn more 
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}