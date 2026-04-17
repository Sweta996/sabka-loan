import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../imports/sabkaloan-logo.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 bg-white/5 inline-block px-4 py-2 rounded-2xl backdrop-blur-md border border-white/10">
              <img src={logo} alt="Sabka Loan" className="h-8 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm mb-4 font-semibold text-gray-400 uppercase tracking-widest">(A Unit Of Mahashakti Financiers Ltd)</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are an RBI-registered Non-Banking Financial Company (NBFC) bringing swift, transparent financial solutions.
            </p>
            <div className="mt-6 text-sm text-gray-400 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>First Floor Plot No:-17, Pocket-8, Block-C, Sector-17, Dwarka New Delhi-110075</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span><strong>NBFC No:</strong> B-11.00019</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 hover:translate-x-2 transition-all">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-blue-400 hover:translate-x-2 transition-all">Products</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('policies')} className="hover:text-blue-400 hover:translate-x-2 transition-all">Policies</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 hover:translate-x-2 transition-all">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Policies
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 hover:translate-x-2 transition-all block">Grievance Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 hover:translate-x-2 transition-all block">Data Deletion</a></li>
              <li><a href="#" className="hover:text-blue-400 hover:translate-x-2 transition-all block">Fair Practice Code</a></li>
              <li><a href="#" className="hover:text-blue-400 hover:translate-x-2 transition-all block">Interest Rate Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 hover:translate-x-2 transition-all block">KYC Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 hover:translate-x-2 transition-all block">Refund and Cancellation</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></div>
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="tel:+918527696663" className="flex items-center gap-3 hover:text-blue-400 transition-colors bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50">
                  <Phone className="w-5 h-5 text-blue-400" />
                  +91 8527696663
                </a>
              </li>
              <li>
                <a href="mailto:info@sabkaloan.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50">
                  <Mail className="w-5 h-5 text-blue-400" />
                  info@sabkaloan.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:-translate-y-1 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium">
            <p>Copyright © 2026 Mahashakti Financiers Ltd - All Rights Reserved</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500 font-bold tracking-widest uppercase">
            D&B D-U-N-S Number: 86-023-0250
          </div>
        </div>
      </div>
    </footer>
  );
}