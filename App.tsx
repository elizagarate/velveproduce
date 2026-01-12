
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
            src="https://github.com/elizagarate/images/blob/main/velveproduce/Franbuesas.webp?raw=true&auto=format&fit=crop&q=80&w=1200" 
            alt="Nature and Production" 
            className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover"
          />
        </div>

        <article className="space-y-8 text-lg md:text-xl text-gray-700 leading-[1.8] font-medium">
          {t.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = {
      service_id: 'service_0awikrb',
      template_id: 'template_4vtkno5',
      user_id: 'Q58TNQCchFLq3tOBW',
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
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-40 bg-white relative overflow-hidden animate-fade-in">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16">
          <h1 className="text-[3.5rem] md:text-[5rem] font-bold text-[#333] mb-4 tracking-tight leading-none">{t.title}</h1>
          <p className="text-[1.125rem] text-gray-400 max-w-3xl leading-relaxed">{t.description}</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-4 space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#FDBA74] rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-gray-800 mb-2 uppercase">{t.emailLabel}</h3>
                <p className="text-gray-500 font-medium">exports@velveproduce.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#DD6B55] rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-gray-800 mb-2 uppercase">{t.callLabel}</h3>
                <p className="text-gray-500 font-medium">+34 618 07 75 68</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[4rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-50">
              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#464196]">{c.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input required name="user_name" type="text" placeholder={t.form.name} className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all" />
                  <input required name="user_email" type="email" placeholder={t.form.email} className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all" />
                  <textarea required name="message" rows={6} placeholder={t.form.message} className="w-full px-8 py-6 bg-[#F8F9FD] border-none rounded-[1.5rem] focus:ring-2 focus:ring-[#26C29E] transition-all resize-none"></textarea>
                  <button type="submit" disabled={formStatus === 'sending'} className="bg-[#26C29E] hover:bg-[#1ea184] text-white px-12 py-5 rounded-full font-bold shadow-xl transition-all flex items-center gap-3">
                    {formStatus === 'sending' ? <Loader2 className="animate-spin" /> : t.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage: React.FC<{ lang: Language; setCurrentPage: (page: Page) => void }> = ({ lang, setCurrentPage }) => {
  const t = content[lang];
  return (
    <>
      <section id="home" className="min-h-screen hero-gradient flex items-center pt-20">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <span className="inline-block px-4 py-1 bg-blue-100 text-[#464196] rounded-full text-sm font-bold mb-6">GLOBAL EXPORT SOLUTIONS</span>
            <h1 className="text-[2.25rem] md:text-[3.75rem] font-extrabold text-[#464196] leading-tight mb-6">{t.hero.title}</h1>
            <p className="text-[1.125rem] text-gray-600 mb-8 max-w-lg leading-relaxed">{t.hero.subtitle}</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#464196] text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 transition-transform hover:scale-105">
                {t.hero.cta} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
             <img src="https://github.com/elizagarate/images/blob/main/velveproduce/Arandanos.webp?raw=true" alt="Berries" className="rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      <section id="history-roots" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <SectionTitle title={t.history.title} />
              <p className="text-gray-600 mb-8 leading-relaxed">{t.history.text}</p>
              <button 
                onClick={() => { setCurrentPage('history'); window.scrollTo(0, 0); }}
                className="text-xl font-bold italic text-[#BB4A4D] hover:underline"
              >
                {t.history.highlight}
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://github.com/elizagarate/images/blob/main/velveproduce/Franbuesas.webp?raw=true" className="rounded-3xl shadow-lg" alt="Berries" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 berry-gradient scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionTitle title={t.services.title} subtitle={t.services.description} />
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#464196] rounded-2xl flex items-center justify-center mb-6">
                  {idx === 0 ? <Thermometer className="text-white w-8 h-8" /> : 
                   idx === 1 ? <Leaf className="text-white w-8 h-8" /> : 
                   <Ship className="text-white w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-[#464196] mb-4">{item.title}</h3>
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
                  <img src={prod.img} alt={prod.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
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
              <details key={idx} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all">
                <summary className="flex justify-between items-center font-bold text-[#464196] cursor-pointer list-none text-lg">
                  {item.q}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 text-gray-600 border-t pt-4 leading-relaxed">{item.a}</div>
              </details>
            ))}
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { threshold: 0.5 });
    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col font-['Quicksand']">
      <Header lang={lang} setLang={setLang} currentPage={currentPage} setCurrentPage={setCurrentPage} activeSection={activeSection} />
      <main className="flex-grow">
        {currentPage === 'home' && <LandingPage lang={lang} setCurrentPage={setCurrentPage} />}
        {currentPage === 'history' && <HistoryPage lang={lang} setCurrentPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactPage lang={lang} />}
      </main>
      <footer className="bg-white py-12 border-t mt-auto text-center">
        <p className="text-gray-400 text-sm">{t.footer.rights}</p>
      </footer>
    </div>
  );
};

export default App;
