import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

export function CTASection() {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden px-4 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="container mx-auto max-w-6xl relative z-10 bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-900 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_80px_-20px_rgba(29,78,216,0.5)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBMMTUgMTVMMCAzMEwxNSA0NWwxNS0xNXpNMTUgMTVsMTUtMTVIMHoxNSA0NWwxNSAxNUgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
          >
            Ready to Take the Next Step?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Join 50,000+ satisfied customers who have simplified their financial journey with Sabka Loan.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 justify-center pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="h-16 px-10 bg-white text-blue-800 hover:bg-blue-50 text-xl font-extrabold rounded-2xl shadow-xl transition-all">
                Apply for Loan Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="h-16 px-10 border-2 border-white/20 bg-white/10 hover:bg-white/20 text-white text-xl font-extrabold rounded-2xl backdrop-blur-md transition-all">
                <Download className="w-6 h-6 mr-3" />
                Download App
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}