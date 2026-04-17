import { motion } from 'motion/react';
import { Download, FileText, CheckCircle, Wallet } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      title: 'Download App',
      description: 'Get the Sabka Loan app from Play Store or App Store.',
      icon: Download,
      number: '01'
    },
    {
      title: 'Quick Register',
      description: 'Sign up using your mobile number and PAN card.',
      icon: FileText,
      number: '02'
    },
    {
      title: 'Get Approval',
      description: 'Instant verification of your documents and profile.',
      icon: CheckCircle,
      number: '03'
    },
    {
      title: 'Money in Bank',
      description: 'Funds transferred directly to your bank account.',
      icon: Wallet,
      number: '04'
    }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
          >
            Process
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            How It Works
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -translate-y-1/2 z-0 rounded-full"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 200, damping: 20 }}
                className="relative z-10"
              >
                <div className="bg-white rounded-[2rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col items-center">
                  
                  {/* Floating Number */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white font-black text-xl w-12 h-12 flex items-center justify-center rounded-2xl shadow-xl group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="mt-8 mb-6 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-20 h-20 bg-blue-50 rounded-[1.5rem] flex items-center justify-center shadow-inner relative z-10 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}