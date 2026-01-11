
export type Language = 'es' | 'en';

export const content = {
  es: {
    nav: {
      home: 'Inicio',
      history: 'Historia',
      services: 'Servicios',
      products: 'Productos',
      faq: 'FAQ',
      contact: 'Contacto'
    },
    hero: {
      title: 'Del Campo Español al Corazón del Mundo',
      subtitle: 'Exportamos frutos rojos de alta calidad con una logística impecable y un compromiso absoluto con la frescura.',
      cta: 'Nuestros Productos'
    },
    history: {
      title: 'Nuestras Raíces',
      text: 'Velve Produce nació de la pasión por la tierra fértil de España. Lo que comenzó como un sueño local se ha transformado en un puente global que conecta a los mejores productores con los mercados más exigentes de ultramar.',
      highlight: 'Calidad que trasciende fronteras.'
    },
    services: {
      title: 'Excelencia en el Servicio',
      items: [
        { title: 'Logística de Frío', desc: 'Control de temperatura en tiempo real para garantizar frescura absoluta.' },
        { title: 'Sourcing Estratégico', desc: 'Alianzas directas con productores locales certificados.' },
        { title: 'Control de Calidad', desc: 'Inspecciones rigurosas antes de cada envío internacional.' }
      ]
    },
    products: {
      title: 'Nuestra Selección Premium',
      items: [
        { name: 'Arándano Azul', desc: 'Dulzor equilibrado y textura firme.', img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600' },
        { name: 'Frambuesa', desc: 'El toque aterciopelado de la huerta española.', img: 'https://images.unsplash.com/photo-1544070078-a212eda27b49?q=80&w=600' },
        { name: 'Fresa', desc: 'Intensidad aromática y color vibrante.', img: 'https://images.unsplash.com/photo-1464960351845-d3ee63d66009?q=80&w=600' },
        { name: 'Mora', desc: 'Un tesoro silvestre lleno de antioxidantes.', img: 'https://images.unsplash.com/photo-1541411246234-73895e634707?q=80&w=600' }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿A qué mercados exportan?', a: 'Principalmente a mercados de ultramar en Asia, Medio Oriente y América del Norte.' },
        { q: '¿Cómo garantizan la cadena de frío?', a: 'Utilizamos tecnología IoT de monitoreo constante desde el packing hasta el destino final.' },
        { q: '¿Son productores?', a: 'Trabajamos como exportadores estratégicos uniendo a los mejores productores certificados con compradores globales.' }
      ]
    },
    contact: {
      title: 'Conectemos su Negocio',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      msg: 'Mensaje',
      send: 'Enviar Consulta',
      success: '¡Gracias! Nos pondremos en contacto pronto.'
    },
    footer: {
      rights: '© 2024 Velve Produce. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      history: 'History',
      services: 'Services',
      products: 'Products',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title: 'From Spanish Fields to the Heart of the World',
      subtitle: 'Exporting premium berries with impeccable logistics and an absolute commitment to freshness.',
      cta: 'Explore Products'
    },
    history: {
      title: 'Our Roots',
      text: 'Velve Produce was born from a passion for Spain\'s fertile land. What started as a local dream has blossomed into a global bridge, connecting top producers with the most demanding overseas markets.',
      highlight: 'Quality that transcends borders.'
    },
    services: {
      title: 'Service Excellence',
      items: [
        { title: 'Cold Chain Logistics', desc: 'Real-time temperature control for guaranteed freshness.' },
        { title: 'Strategic Sourcing', desc: 'Direct partnerships with certified local growers.' },
        { title: 'Quality Assurance', desc: 'Rigorous inspections before every international shipment.' }
      ]
    },
    products: {
      title: 'Our Premium Selection',
      items: [
        { name: 'Blueberry', desc: 'Balanced sweetness and firm texture.', img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600' },
        { name: 'Raspberry', desc: 'The velvet touch of the Spanish orchard.', img: 'https://images.unsplash.com/photo-1544070078-a212eda27b49?q=80&w=600' },
        { name: 'Strawberry', desc: 'Aromatic intensity and vibrant color.', img: 'https://images.unsplash.com/photo-1464960351845-d3ee63d66009?q=80&w=600' },
        { name: 'Blackberry', desc: 'A wild treasure packed with antioxidants.', img: 'https://images.unsplash.com/photo-1541411246234-73895e634707?q=80&w=600' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Which markets do you serve?', a: 'We primarily export to overseas markets in Asia, the Middle East, and North America.' },
        { q: 'How do you guarantee the cold chain?', a: 'We utilize IoT monitoring technology from packing to the final destination.' },
        { q: 'Are you growers?', a: 'We act as strategic exporters, linking certified premium growers with global buyers.' }
      ]
    },
    contact: {
      title: 'Connect Your Business',
      name: 'Full Name',
      email: 'Email Address',
      msg: 'Message',
      send: 'Send Inquiry',
      success: 'Thank you! We will get in touch shortly.'
    },
    footer: {
      rights: '© 2024 Velve Produce. All rights reserved.'
    }
  }
};
