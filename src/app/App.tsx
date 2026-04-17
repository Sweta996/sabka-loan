import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { EligibilitySection } from './components/EligibilitySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustSection } from './components/TrustSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 selection:bg-blue-200">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <EligibilitySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
