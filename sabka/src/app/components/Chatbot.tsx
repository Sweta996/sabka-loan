import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm SabkaBot. May I help you? 🤖", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getLoanResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    // Age related questions
    if (message.includes('age') || message.includes('old')) {
      return "You must be at least 21 years old and not more than 60 years old to apply for a loan with us. 📅";
    }
    
    // Amount related questions
    if (message.includes('amount') || message.includes('much') || message.includes('loan')) {
      return "We offer personal loans ranging from ₹10,000 to ₹5,00,000. The amount you're eligible for depends on your income and credit score. 💰";
    }
    
    // How to apply
    if (message.includes('how') || message.includes('apply') || message.includes('process')) {
      return "It's super easy! Just fill out the application form on our website, submit your documents (Aadhaar, PAN, bank statements), and get instant approval! 100% digital process. 🚀";
    }
    
    // Interest rates
    if (message.includes('interest') || message.includes('rate') || message.includes('emi')) {
      return "Our interest rates start from 12% per annum and vary based on your credit profile. Use our EMI calculator to plan your repayments! 📊";
    }
    
    // Documents
    if (message.includes('document') || message.includes('required') || message.includes('need')) {
      return "You'll need: Aadhaar Card, PAN Card, 3 months bank statements, and proof of income. All can be uploaded digitally! 📄";
    }
    
    // Eligibility
    if (message.includes('eligible') || message.includes('qualify')) {
      return "You're eligible if you're 21-60 years old, have a steady income (min ₹15,000/month), and a good credit score. Check your eligibility now! ✅";
    }
    
    // What not to do
    if (message.includes('not') || message.includes('avoid') || message.includes('don\'t')) {
      return "Important: Never share your OTP or banking passwords with anyone. Always repay on time to avoid penalties. Only make payments to our official bank accounts! ⚠️";
    }
    
    // Approval time
    if (message.includes('fast') || message.includes('quick') || message.includes('time') || message.includes('when')) {
      return "We provide instant approval! Once approved, the loan amount is disbursed to your account within 30 minutes to 24 hours. ⚡";
    }
    
    // Repayment
    if (message.includes('repay') || message.includes('payment') || message.includes('pay back')) {
      return "You can repay through our app, website, or auto-debit. Flexible EMI options available from 3 to 36 months. 💳";
    }

    // Support/Help
    if (message.includes('help') || message.includes('support') || message.includes('contact')) {
      return "You can reach us at +91 8527696663 or email info@sabkaloan.com. We're here to help! 📞";
    }
    
    // Default response
    return "I can help you with information about loan amounts, eligibility, age requirements, application process, interest rates, documents needed, and more! What would you like to know? 😊";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInput('');
    
    setTimeout(() => {
      const botResponse = getLoanResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end flex-col gap-4">
      {/* Robot Mascot with "May I help you?" */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div className="relative">
            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-br-sm shadow-xl border-2 border-blue-100 whitespace-nowrap font-semibold text-sm"
            >
              May I help you? 💬
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -bottom-1 right-3 w-3 h-3 bg-white border-r-2 border-b-2 border-blue-100 transform rotate-45"
              />
            </motion.div>

            {/* Robot Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-5 rounded-full shadow-2xl relative group flex items-center justify-center cursor-pointer"
            >
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -5, 5, -5, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Bot className="w-9 h-9" />
              </motion.div>
              
              {/* Pulsing ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 bg-blue-400 rounded-full"
              />
              
              {/* Sparkle animations */}
              <motion.div
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute -top-2 -right-2 text-yellow-300"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0.5, 1.2, 0.5],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                className="absolute -bottom-1 -left-1 text-yellow-300"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>

              {/* Notification dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, originY: 1, originX: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden border border-blue-100 flex flex-col h-[450px]"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Sabka Support</h4>
                  <p className="text-xs text-blue-100">Usually replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm self-end'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm self-start shadow-sm'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-50 border-gray-200 focus-visible:ring-blue-600 rounded-xl"
              />
              <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-xl rounded-bl-xl">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}