
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
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { content, Language } from './translations.ts';

// --- Types ---
type Page = 'home' | 'history' | 'contact';

interface NavProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  activeSection: string;
}

// --- Components ---

const Header: React.FC<NavProps> = ({ lang, setLang, currentPage, setCurrentPage, activeSection }) => {
  const t = content[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (section === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Logic for scrolling to sections within the home page (history-roots, services, products)
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(section);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(section);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#464196] rounded-full flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#464196]">VELVE PRODUCE</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8 text-[1.125rem] font-medium">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className={`hover:text-[#464196] transition-colors ${currentPage === 'home' && activeSection === 'home' ? 'text-[#464196] font-bold' : 'text-gray-600'}`}>
            {t.home}
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, 'history-roots')} className={`hover:text-[#464196] transition-colors ${currentPage === 'home' && activeSection === 'history-roots' ? 'text-[#464196] font-bold' : 'text-gray-600'}`}>
            {t.history}
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, 'services')} className={`hover:text-[#464196] transition-colors ${currentPage === 'home' && activeSection === 'services' ? 'text-[#464196] font-bold' : 'text-gray-600'}`}>
            {t.services}
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, 'products')} className={`hover:text-[#464196] transition-colors ${currentPage === 'home' && activeSection === 'products' ? 'text-[#464196] font-bold' : 'text-gray-600'}`}>
            {t.products}
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className={`hover:text-[#464196] transition-colors ${currentPage === 'contact' ? 'text-[#464196] font-bold' : 'text-gray-600'}`}>
            {t.contact}
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 transition-all text-sm font-semibold"
          >
            <Globe className="w-4 h-4 text-[#464196]" />
            <span>{lang.toUpperCase()}</span>
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="hidden sm:block bg-[#BB4A4D] hover:bg-[#a33d40] text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
          >
            {content[lang].nav.contact}
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="text-center mb-16">
    <h2 className={`text-[1.875rem] md:text-[2.25rem] font-bold mb-4 ${light ? 'text-white' : 'text-[#464196]'}`}>{title}</h2>
    {subtitle && <p className={`text-[1.125rem] max-w-3xl mx-auto ${light ? 'text-blue-100' : 'text-gray-500'}`}>{subtitle}</p>}
    <div className={`w-20 h-1 mx-auto mt-6 rounded-full ${light ? 'bg-white' : 'bg-[#BB4A4D]'}`}></div>
  </div>
);

const HistoryPage: React.FC<{ lang: Language; setCurrentPage: (page: Page) => void }> = ({ lang, setCurrentPage }) => {
  const t = content[lang].historyPage;
  return (
    <div className="pt-32 pb-24 min-h-screen animate-fade-in relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-16 text-center">
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#464196] mb-6 tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-[#BB4A4D] mx-auto mt-8 rounded-full"></div>
        </header>

        <div className="grid gap-12 mb-20">
          <img 
            src="https://github.com/elizagarate/images/blob/main/velveproduce/Franbuesas.webp?raw=true?auto=format&fit=crop&q=80&w=1200" 
            alt="Nature and Production" 
            className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover"
          />
        </div>

        <article className="space-y-8 text-lg md:text-xl text-gray-700 leading-[1.8] font-medium">
          {t.content.map((paragraph, idx) => (
            <p key={idx} className="relative pl-0 md:pl-0">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mt-20 p-12 bg-blue-50 rounded-[3rem] border border-blue-100 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
             <div className="w-20 h-20 bg-[#464196] rounded-3xl flex items-center justify-center">
                <Leaf className="text-white w-10 h-10" />
             </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-[#464196] mb-4">
              {lang === 'es' ? 'Compromiso con la Calidad' : 'Commitment to Quality'}
            </h3>
            <p className="text-gray-600">
              {lang === 'es' 
                ? 'Nuestra gestión se basa en la transparencia y la consistencia en cada programa de suministro.' 
                : 'Our management is based on transparency and consistency in every supply program.'}
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 text-center bg-[#464196] rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-200">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-8 leading-tight">
            {t.cta}
          </h2>
          <button 
            onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
            className="inline-flex items-center gap-3 bg-white text-[#464196] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            {t.ctaButton} <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang].contactPage;
  const c = content[lang].contact;
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_0awikrb'.trim(); 
  const EMAILJS_TEMPLATE_ID = 'template_4vtkno5'.trim();
  const EMAILJS_PUBLIC_KEY = 'Q58TNQCchFLq3tOBW'.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: formData.get('user_name'),
        from_email: formData.get('user_email'),
        phone: formData.get('user_phone'),
        message: formData.get('message'),
        to_name: 'Velve Produce Team'
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const responseText = await response.text();

      if (response.ok) {
        setFormStatus('success');
      } else {
        console.error('Detailed EmailJS Error:', responseText);
        setErrorMessage(responseText);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setErrorMessage('Network connection error');
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-40 bg-white relative overflow-hidden animate-fade-in">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="fixed top-0 right-0 pt-[50px] w-64 md:w-[450px] opacity-40 pointer-events-none select-none z-0">
          <img 
            src="https://github.com/elizagarate/images/blob/main/velveproduce/nutritionist-26-1.png?raw=true" 
            alt="Decorative Berries" 
            className="w-full h-auto mask-gradient"
          />
        </div>

        <div className="relative z-10">
          <div className="mb-16">
            <h1 className="text-[3.5rem] md:text-[5rem] font-bold text-[#333] mb-4 tracking-tight leading-none">
              {t.title}
            </h1>
            <h2 className="text-[1.25rem] font-bold text-gray-500 tracking-[0.2em] mb-8">
              {t.subtitle}
            </h2>
            <p className="text-[1.125rem] text-gray-400 max-w-3xl leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-4 space-y-12">
              <a href="mailto:exports@velveproduce.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-orange-100 group-hover:scale-105 transition-transform">
                  <Mail className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-800 mb-2 uppercase">{t.emailLabel}</h3>
                  <p className="text-gray-500 font-medium group-hover:text-[#FDBA74] transition-colors">exports@velveproduce.com</p>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send?phone=34618077568" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-[#DD6B55] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-100 group-hover:scale-105 transition-transform">
                  <Phone className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-800 mb-2 uppercase">{t.callLabel}</h3>
                  <p className="text-gray-500 font-medium group-hover:text-[#DD6B55] transition-colors">+34 618 07 75 68</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#26C29E] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-teal-100">
                  <MapPin className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-800 mb-2 uppercase">{t.visitLabel}</h3>
                  <p className="text-gray-500 font-medium whitespace-pre-line">
                    VELVE PRODUCE, SL<br/>
                    Calle Rioja 13, 1ºC.<br/>
                    41001, Sevilla
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white rounded-[4rem] p-12 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-50">
                {formStatus === 'success' ? (
                  <div className="py-20 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#464196] mb-4">{c.success}</h3>
                    <button onClick={() => setFormStatus('idle')} className="text-[#464196] font-bold underline">
                      {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formStatus === 'error' && (
                      <div className="bg-red-50 text-red-600 p-6 rounded-3xl space-y-2 animate-pulse border border-red-100">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-6 h-6 shrink-0" />
                          <span className="font-extrabold">ERROR DE CONFIGURACIÓN</span>
                        </div>
                        <p className="text-sm opacity-80">
                          {errorMessage?.includes('template ID not found') 
                            ? (lang === 'es' 
                                ? `EmailJS no encuentra la plantilla. Verifique que el ID "${EMAILJS_TEMPLATE_ID}" sea correcto en su panel.` 
                                : `Template ID not found. Verify the ID "${EMAILJS_TEMPLATE_ID}" is correct.`)
                            : (lang === 'es' ? 'Error al enviar. Intente de nuevo.' : 'Error sending. Try again.')
                          }
                        </p>
                      </div>
                    )}
                    <div className="grid md:grid-cols-1 gap-6">
                      <input 
                        required 
                        name="user_name"
                        type="text" 
                        placeholder={t.form.name}
                        className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all placeholder:text-gray-400 font-medium" 
                        disabled={formStatus === 'sending'}
                      />
                      <input 
                        required 
                        name="user_email"
                        type="email" 
                        placeholder={t.form.email}
                        className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all placeholder:text-gray-400 font-medium" 
                        disabled={formStatus === 'sending'}
                      />
                      <input 
                        name="user_phone"
                        type="tel" 
                        placeholder={t.form.phone}
                        className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all placeholder:text-gray-400 font-medium" 
                        disabled={formStatus === 'sending'}
                      />
                    </div>
                    <textarea 
                      required 
                      name="message"
                      rows={6} 
                      placeholder={t.form.message}
                      className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all placeholder:text-gray-400 font-medium resize-none"
                      disabled={formStatus === 'sending'}
                    ></textarea>
                    
                    <div className="flex justify-end pt-4">
                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className={`bg-[#26C29E] hover:bg-[#1ea184] text-white px-12 py-5 rounded-full font-bold text-sm tracking-[0.2em] shadow-xl shadow-teal-100 transform active:scale-95 transition-all flex items-center gap-3 ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {lang === 'es' ? 'ENVIANDO...' : 'SENDING...'}
                          </>
                        ) : (
                          t.form.submit
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 animate-fade-in shadow-inner">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.9551662658846!2d-5.9982733593065225!3d37.390892534296064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1027b32a89%3A0x347242ea763ee5ab!2sC.%20Rioja%2C%2013%2C%201%C2%BAC%2C%20Casco%20Antiguo%2C%2041001%20Sevilla!5e0!3m2!1ses!2ses!4v1768118138125!5m2!1ses!2ses" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const LandingPage: React.FC<{ lang: Language; setCurrentPage: (page: Page) => void }> = ({ lang, setCurrentPage }) => {
  const t = content[lang];
  const tc = content[lang].contactPage;

  return (
    <>
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
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#464196] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0041C2] transition-all flex items-center justify-center gap-2 shadow-lg">
                {t.hero.cta} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact-info" onClick={(e) => { e.preventDefault(); document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-[#464196] text-[#464196] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center">
                {content[lang].nav.contact}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="bg-[#f0f4ff] rounded-[3rem] p-4 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://github.com/elizagarate/images/blob/main/velveproduce/Arandanos.webp?raw=true?auto=format&fit=crop&q=80&w=800" 
                  alt="Blueberry Export" 
                  className="rounded-[2.5rem] shadow-inner"
                />
             </div>
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

      <section id="history-roots" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://github.com/elizagarate/images/blob/main/velveproduce/Arandanos.webp?raw=true?w=400" className="rounded-3xl shadow-lg" alt="History 1" />
                <img src="https://github.com/elizagarate/images/blob/main/velveproduce/Franbuesas.webp?raw=true?w=400" className="rounded-3xl shadow-lg translate-y-8" alt="History 2" />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <SectionTitle title={t.history.title} />
              <p className="text-[1rem] md:text-[1.125rem] leading-[1.6] text-gray-600 mb-6">
                {t.history.text}
              </p>
              <div className="p-6 bg-[#fdf2f2] border-l-4 border-[#BB4A4D] rounded-r-2xl">
                <button 
                  onClick={() => { setCurrentPage('history'); window.scrollTo(0, 0); }}
                  className="text-xl font-bold italic text-[#BB4A4D] hover:underline transition-all text-left"
                >
                  {t.history.highlight}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 berry-gradient scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionTitle title={t.services.title} subtitle={t.services.description} />
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

      <section id="products" className="py-24 bg-white scroll-mt-24">
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

      <section id="faq" className="py-24 bg-gray-50 scroll-mt-24">
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

      <section id="contact-info" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle title={tc.title} />
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
            <a href="mailto:exports@velveproduce.com" className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-orange-100 group-hover:scale-105 transition-transform">
                <Mail className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-widest text-gray-800 mb-1 uppercase">{tc.emailLabel}</h3>
                <p className="text-gray-500 text-sm font-medium group-hover:text-[#FDBA74] transition-colors">exports@velveproduce.com</p>
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=34618077568" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-[#DD6B55] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-100 group-hover:scale-105 transition-transform">
                <Phone className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-widest text-gray-800 mb-1 uppercase">{tc.callLabel}</h3>
                <p className="text-gray-500 text-sm font-medium group-hover:text-[#DD6B55] transition-colors">+34 618 07 75 68</p>
              </div>
            </a>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#26C29E] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-teal-100">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-widest text-gray-800 mb-1 uppercase">{tc.visitLabel}</h3>
                <p className="text-gray-500 text-sm font-medium whitespace-pre-line leading-snug">
                  VELVE PRODUCE, SL<br/>
                  Calle Rioja 13, 1ºC.<br/>
                  41001, Sevilla
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeSection, setActiveSection] = useState('home');
  
  const t = content[lang];

  useEffect(() => {
    if (currentPage !== 'home') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    
    // Observamos las secciones del home para resaltar el menú activo
    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col font-['Quicksand']">
      <Header 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        activeSection={activeSection} 
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <LandingPage lang={lang} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'history' && (
          <HistoryPage lang={lang} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'contact' && (
          <ContactPage lang={lang} />
        )}
      </main>

      <footer className="bg-white py-12 border-t mt-auto">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#464196] rounded-full flex items-center justify-center">
                <Leaf className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#464196]">VELVE PRODUCE</span>
            </button>
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
