import { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Smartphone, ShieldCheck, Zap, CheckCircle2, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';

export function HeroSection() {
  const [loanAmount, setLoanAmount] = useState([50000]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted!\nName: ${formData.fullName}\nLoan Amount: ₹${loanAmount[0].toLocaleString('en-IN')}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="home" className="relative bg-[#FDFBF7] py-20 md:py-32 overflow-hidden">
      {/* Decorative Blob Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-100/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-sm shadow-[0_8px_30px_rgba(168,85,247,0.35)] border-2 border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              />
              <span className="flex items-center gap-2">
                Instant Loan Approval
                <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Sabka Loan
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Aapki Sabhi Jaruraton
                <br />ke Liye
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 font-medium max-w-lg leading-relaxed">
              Enjoy swift, hassle-free financial support with our instant 100% digital loan disbursal ⚡
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-2xl px-8 py-7 bg-gray-900 hover:bg-black text-white text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-3" />
                Apply Now 🚀
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8 py-7 border-2 border-blue-200 bg-white hover:bg-blue-50 text-blue-800 text-lg shadow-sm hover:shadow-md transition-all duration-300">
                <Smartphone className="w-5 h-5 mr-3 text-blue-600" />
                Download App 📱
              </Button>
            </motion.div>

            {/* Feature Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                  💯
                </div>
                <h4 className="font-bold text-gray-900 text-lg">100% Digital</h4>
                <p className="text-gray-500 text-sm mt-1">Paperless process</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                  💰
                </div>
                <h4 className="font-bold text-gray-900 text-lg">₹5L Max Loan</h4>
                <p className="text-gray-500 text-sm mt-1">Instant transfer</p>
              </motion.div>
            </motion.div>

            {/* Trust Indicators with Photos */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 pb-4"
            >
              <div className="flex -space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1758600587880-1d11b8a08b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                  alt="Happy customer"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1730130596425-197566414dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                  alt="Satisfied customer"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                  alt="Happy customer"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-700">
                  <span className="text-blue-700">50,000+</span> Happy Customers
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Loan Application Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
            className="perspective-1000"
          >
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Quick Application ✨</h3>
                  <p className="text-sm text-gray-500 font-medium">Safe & Secure Process</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="w-full bg-gray-50 border-gray-200 focus-visible:ring-blue-600 rounded-xl h-12 px-4 shadow-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-gray-50 border-gray-200 focus-visible:ring-blue-600 rounded-xl h-12 px-4 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full bg-gray-50 border-gray-200 focus-visible:ring-blue-600 rounded-xl h-12 px-4 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 pb-2">
                  <div className="flex justify-between items-end mb-4">
                    <label className="block text-sm font-semibold text-gray-700">
                      Loan Amount Needed
                    </label>
                    <span className="text-2xl font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                      ₹{loanAmount[0].toLocaleString('en-IN')}
                    </span>
                  </div>
                  
                  <div className="px-1 py-4">
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      min={10000}
                      max={100000}
                      step={5000}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-400 mt-2 px-1">
                    <span>₹10,000</span>
                    <span>Max: ₹1,00,000</span>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white shadow-[0_10px_30px_rgba(29,78,216,0.3)] hover:shadow-[0_15px_40px_rgba(29,78,216,0.4)] text-lg py-7 rounded-2xl font-bold border border-blue-600 transition-all">
                    Check Eligibility Now 🎯
                  </Button>
                </motion.div>
                
                <p className="text-center text-xs text-gray-400 font-medium">
                  By applying, you agree to our Terms & Privacy Policy
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}