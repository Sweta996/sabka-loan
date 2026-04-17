import { motion } from 'motion/react';
import { CheckCircle2, User, CreditCard, Landmark } from 'lucide-react';

export function EligibilitySection() {
  const criteria = [
    {
      title: 'Age Requirement',
      desc: 'You must be between 21 and 55 years of age.',
      icon: User
    },
    {
      title: 'Stable Income',
      desc: 'Minimum monthly income of ₹15,000.',
      icon: Landmark
    },
    {
      title: 'Credit Score',
      desc: 'A minimum CIBIL score of 650 is preferred.',
      icon: CreditCard
    },
    {
      title: 'Documentation',
      desc: 'Valid Aadhaar and PAN card required.',
      icon: CheckCircle2
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-50/50 rounded-full blur-[80px] -ml-[15rem] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-[#FDFBF7] rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl -z-10 blur-xl opacity-30 animate-pulse"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Simple Eligibility
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Criteria</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed">
              We've made our eligibility requirements straightforward so you can get the funds you need without jumping through hoops.
            </p>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {criteria.map((c, i) => (
                <motion.div 
                  key={i} 
                  variants={item}
                  className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white border border-transparent hover:border-gray-100 transition-all cursor-pointer group hover:shadow-sm"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{c.title}</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-12 text-center text-white">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 bg-white/10 rounded-[2rem] backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 shadow-2xl"
              >
                <CheckCircle2 className="w-16 h-16 text-white" />
              </motion.div>
              <h3 className="text-4xl font-extrabold mb-4">98% Approval</h3>
              <p className="text-blue-100 text-lg font-medium">Of applicants who meet these simple criteria get approved instantly.</p>
              
              <div className="mt-12 w-full max-w-sm bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '98%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
                <div className="text-sm font-semibold tracking-wider uppercase text-blue-100">Success Rate</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}