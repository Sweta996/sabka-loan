import { motion } from 'motion/react';
import { ShieldCheck, Lock, Award, Clock } from 'lucide-react';

export function TrustSection() {
  const items = [
    {
      title: 'RBI Registered',
      description: 'We are an RBI registered NBFC, ensuring complete compliance and safety.',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Bank-grade Security',
      description: 'Your data is protected with 256-bit encryption.',
      icon: Lock,
      color: 'indigo'
    },
    {
      title: '100% Transparent',
      description: 'No hidden charges or surprise fees, ever.',
      icon: ShieldCheck,
      color: 'green'
    },
    {
      title: 'Fast Processing',
      description: 'Loan approval in minutes, disbursal in hours.',
      icon: Clock,
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600'
  };

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none pointer-events-none">
        <ShieldCheck className="w-[800px] h-[800px] text-gray-900" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Why Trust Sabka Loan?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-600 font-medium max-w-2xl mx-auto"
          >
            We prioritize your security and peace of mind over everything else.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-8 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 group"
              >
                <div className={`w-20 h-20 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}