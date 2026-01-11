
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Globe, 
  Ship, 
  Leaf, 
  Thermometer, 
  CheckCircle, 
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { content, Language } from './translations';

// --- Types ---
interface NavProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
}

// --- Components ---

const Header: React.FC<NavProps> = ({ lang, setLang, activeSection }) => {
  const t = content[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#464196] rounded-full flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#464196]">VELVE PRODUCE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-[1.125rem] font-medium">
          {Object.entries(t).map(([key, label]) => (
            <a 
              key={key} 
              href={`#${key}`} 
              className={`hover:text-[#464196] transition-colors ${activeSection === key ? 'text-[#464196] font-bold' : 'text-gray-600'}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 transition-all text-sm font-semibold"
          >
            <Globe className="w-4 h-4 text-[#464196]" />
            <span>{lang.toUpperCase()}</span>
          </button>
          <a 
            href="#contact" 
            className="hidden sm:block bg-[#BB4A4D] hover:bg-[#a33d40] text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
          >
            {content[lang].nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="text-center mb-16">
    <h2 className={`text-[1.875rem] md:text-[2.25rem] font-bold mb-4 ${light ? 'text-white' : 'text-[#464196]'}`}>{title}</h2>
    {subtitle && <p className={`text-[1.125rem] max-w-2xl mx-auto ${light ? 'text-blue-100' : 'text-gray-500'}`}>{subtitle}</p>}
    <div className={`w-20 h-1 mx-auto mt-6 rounded-full ${light ? 'bg-white' : 'bg-[#BB4A4D]'}`}></div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  
  const t = content[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    
    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="overflow-x-hidden">
      <Header lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-gradient flex items-center pt-20">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <span className="inline-block px-4 py-1 bg-blue-100 text-[#464196] rounded-full text-sm font-bold mb-6 animate-fade-in">
              GLOBAL EXPORT SOLUTIONS
            </span>
            <h1 className="text-[2.25rem] md:text-[3.75rem] font-extrabold text-[#464196] leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-gray-600 mb-8 max-w-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#products" className="bg-[#464196] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0041C2] transition-all flex items-center justify-center gap-2 shadow-lg">
                {t.hero.cta} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="border-2 border-[#464196] text-[#464196] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center">
                {t.nav.contact}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="bg-[#f0f4ff] rounded-[3rem] p-4 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=800" 
                  alt="Berry Export" 
                  className="rounded-[2.5rem] shadow-inner"
                />
             </div>
             {/* Floaties */}
             <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-blue-50">
               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                 <CheckCircle className="text-green-600 w-6 h-6" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-400">STATUS</p>
                 <p className="text-sm font-bold text-gray-800">Quality Verified</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400" className="rounded-3xl shadow-lg" alt="History 1" />
                <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" className="rounded-3xl shadow-lg translate-y-8" alt="History 2" />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <SectionTitle title={t.history.title} />
              <p className="text-[1rem] md:text-[1.125rem] leading-[1.6] text-gray-600 mb-6">
                {t.history.text}
              </p>
              <div className="p-6 bg-[#fdf2f2] border-l-4 border-[#BB4A4D] rounded-r-2xl">
                <p className="text-xl font-bold italic text-[#BB4A4D]">{t.history.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 berry-gradient">
        <div className="container mx-auto px-6">
          <SectionTitle title={t.services.title} subtitle="Modern tools for global excellence." />
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-[#464196] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Thermometer className="text-white w-8 h-8" /> : 
                   idx === 1 ? <Leaf className="text-white w-8 h-8" /> : 
                   <Ship className="text-white w-8 h-8" />}
                </div>
                <h3 className="text-[1.25rem] font-bold text-[#464196] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title={t.products.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.products.items.map((prod, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-[2.5rem] mb-6 shadow-md relative">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#464196]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="text-white font-bold flex items-center gap-2">View Specs <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#464196] mb-2">{prod.name}</h3>
                <p className="text-gray-500">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle title={t.faq.title} />
          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <details key={idx} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all open:ring-2 open:ring-[#464196]/20">
                <summary className="flex justify-between items-center font-bold text-[#464196] cursor-pointer list-none text-lg">
                  {item.q}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-gray-600 border-t pt-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 berry-gradient relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-[#464196] text-white">
              <h2 className="text-4xl font-bold mb-8">{t.contact.title}</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <p className="text-blue-100">exports@velveproduce.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Headquarters</p>
                    <p className="text-blue-100">Sevilla, Spain • London, UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Call Us</p>
                    <p className="text-blue-100">+34 954 000 000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex space-x-6">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-300" />
                <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-300" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-300" />
                <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-300" />
              </div>
            </div>
            
            <div className="lg:w-1/2 p-12 lg:p-20">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#464196]">{t.contact.success}</h3>
                  <button onClick={() => setFormStatus('idle')} className="text-[#464196] font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2">{t.contact.name}</label>
                    <input required type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#464196] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2">{t.contact.email}</label>
                    <input required type="email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#464196] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 mb-2">{t.contact.msg}</label>
                    <textarea required rows={4} className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#464196] transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#BB4A4D] hover:bg-[#0041C2] text-white py-4 rounded-xl font-bold text-lg shadow-lg transform active:scale-95 transition-all">
                    {t.contact.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-[#464196] rounded-full flex items-center justify-center">
              <Leaf className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#464196]">VELVE PRODUCE</span>
          </div>
          <p className="text-gray-400 text-sm">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
