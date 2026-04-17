import { motion } from 'motion/react';
import { Target, Shield, Users, Smartphone, Zap } from 'lucide-react';

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-50/50 rounded-full blur-[100px] -mr-[20rem] -mt-[20rem] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={item}>
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">About Sabka Loan</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Empowering your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">financial journey</span>
              </h3>
            </motion.div>
            
            <motion.p variants={item} className="text-xl text-gray-600 leading-relaxed font-medium">
              Aapki jarurat, hamara prayas. We provide instant, hassle-free personal loans to help you meet your financial needs without delay.
            </motion.p>
            
            <motion.div variants={item} className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Our Mission</h4>
                  <p className="text-gray-600 font-medium">To make financial support accessible to everyone through a 100% digital, transparent process.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Our Vision</h4>
                  <p className="text-gray-600 font-medium">To be India's most trusted digital lending platform, known for fairness and speed.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats/Image Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div 
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#FDFBF7] p-8 rounded-[2rem] border border-orange-100/50 shadow-xl space-y-4 translate-y-8"
            >
              <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">50K+</div>
                <div className="text-gray-500 font-semibold text-sm">Happy Customers</div>
              </div>
            </motion.div>

            <motion.div 
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] border border-blue-50 shadow-xl space-y-4"
            >
              <div className="w-14 h-14 bg-blue-50 shadow-sm rounded-2xl flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">100%</div>
                <div className="text-gray-500 font-semibold text-sm">Digital Process</div>
              </div>
            </motion.div>

            <motion.div 
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] border border-purple-50 shadow-xl space-y-4 col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-1">24/7</div>
                  <div className="text-gray-500 font-semibold text-sm">Instant Approval & Disbursal</div>
                </div>
                <div className="w-16 h-16 bg-purple-50 shadow-sm rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}