import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'What is the maximum loan amount I can get?',
      answer: 'You can get a loan ranging from ₹10,000 up to ₹5,00,000 depending on your eligibility and credit profile.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Our 100% digital process ensures instant approval. Once approved, the funds are transferred to your bank account within hours.'
    },
    {
      question: 'What documents are required?',
      answer: 'You only need your PAN card, Aadhaar card, and the last 3 months of bank statements for income verification.'
    },
    {
      question: 'Can I foreclose my loan?',
      answer: 'Yes, you can foreclose your loan anytime. Please check our detailed terms and conditions for any applicable foreclosure charges.'
    },
    {
      question: 'Is my data safe with Sabka Loan?',
      answer: 'Absolutely. We use bank-grade 256-bit encryption to protect your data and are fully compliant with RBI guidelines.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -mr-[400px] -mt-[400px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
          >
            Got Questions?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#FDFBF7] rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-2xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-[1rem] border border-gray-100 px-6 overflow-hidden hover:border-blue-200 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6 text-lg hover:text-blue-700 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-medium pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}