import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import logo from '../../imports/FigJam_basics-3.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Disclaimer Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium tracking-wide">
        <strong>Disclaimer:</strong> All loan repayments must be made ONLY to official bank accounts mentioned on Repay Page.
      </div>

      {/* Main Header */}
      <header className="bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40 transition-all">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <img src={logo} alt="Sabka Loan" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-700 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-700 transition-colors">About Us</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-blue-700 transition-colors">Products</button>
              <button onClick={() => scrollToSection('repay')} className="hover:text-blue-700 transition-colors">Repay Loan</button>
              <button onClick={() => scrollToSection('policies')} className="hover:text-blue-700 transition-colors">Policies</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-700 transition-colors">Contact Us</button>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Button className="bg-blue-700 hover:bg-blue-800 text-white shadow-[0_0_20px_rgba(29,78,216,0.3)] hover:shadow-[0_0_30px_rgba(29,78,216,0.5)] rounded-full px-6 py-6 border-2 border-blue-400/20">
                  <Download className="w-5 h-5 mr-2 animate-bounce" />
                  Download App
                  <span className="ml-2 bg-yellow-400 text-blue-900 text-xs px-2 py-0.5 rounded-full font-bold shadow-sm">NEW 🎉</span>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-700 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-gray-100 bg-[#FDFBF7]"
            >
              <div className="flex flex-col gap-4 px-2">
                <button onClick={() => scrollToSection('home')} className="text-left font-medium text-gray-700 hover:text-blue-700 transition-colors py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left font-medium text-gray-700 hover:text-blue-700 transition-colors py-2">About Us</button>
                <button onClick={() => scrollToSection('products')} className="text-left font-medium text-gray-700 hover:text-blue-700 transition-colors py-2">Products</button>
                <button onClick={() => scrollToSection('repay')} className="text-left font-medium text-gray-700 hover:text-blue-700 transition-colors py-2">Repay Loan</button>
                <button onClick={() => scrollToSection('policies')} className="text-left font-medium text-gray-700 hover:text-blue-700 transition-colors py-2">Policies</button>
                <button onClick={() => scrollToSection('contact')} className="text-left font-medium text-gray-700 hover:text-blue-700 transition-colors py-2">Contact Us</button>
                
                <Button className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg rounded-xl mt-4 py-6 w-full justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </div>
            </motion.nav>
          )}
        </div>

        {/* RBI Badge */}
        <div className="bg-[#f0f4ff] border-y border-blue-100 py-1.5 px-4">
          <div className="container mx-auto flex items-center justify-center gap-2 text-xs font-bold text-blue-900 tracking-wider uppercase">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span>RBI Registered NBFC</span>
          </div>
        </div>
      </header>
    </>
  );
}