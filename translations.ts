
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
    historyPage: {
      title: 'Nuestra Historia',
      subtitle: 'Conectando el origen con el destino a través de la excelencia y el control.',
      cta: '¿Listo para llevar berries premium a su mercado?',
      ctaButton: 'Contáctenos ahora',
      content: [
        'Velve Produce nace para dar respuesta a una necesidad estructural del comercio internacional de fruta fresca. En muchos países de origen, productores de alta calidad tienen dificultades para acceder de forma consistente y controlada a mercados internacionales exigentes. Al mismo tiempo, compradores en destinos como Europa, Medio Oriente, Canadá o Israel se enfrentan con frecuencia a variabilidad, falta de transparencia y riesgos operativos al trabajar con múltiples orígenes.',
        'Velve Produce surge como respuesta a ese desequilibrio. La empresa opera como una plataforma comercial independiente especializada en fruta premium, diseñada para conectar productores seleccionados con compradores internacionales bajo un marco comercial claro, controlado y profesional. En lugar de actuar como un trader tradicional, Velve Produce estructura programas de suministro, alinea estándares de calidad y coordina el proceso comercial desde el origen hasta el destino.',
        'El proyecto se apoya en experiencia sectorial, conocimiento profundo de los mercados de origen y un enfoque firme en control de calidad, trazabilidad y consistencia. Cada decisión de sourcing se basa en relaciones a largo plazo, no en operaciones puntuales.',
        'Hoy, Velve Produce trabaja con productores en distintas regiones de producción, adaptando cada programa de suministro a los requisitos específicos de los mercados de destino. El objetivo es claro: hacer que el acceso a fruta premium sea más fiable, transparente y eficiente para compradores profesionales.'
      ]
    },
    contactPage: {
      title: 'Contáctanos',
      subtitle: '¡PONTE EN CONTACTO EN CUALQUIER MOMENTO!',
      description: 'Estamos aquí para resolver tus dudas sobre exportación, logística y calidad de nuestros productos. Nuestro equipo te responderá a la mayor brevedad posible.',
      emailLabel: 'DIRECCIÓN DE EMAIL',
      callLabel: 'LLÁMANOS OR WHATSAPP',
      visitLabel: 'VISÍTANOS',
      form: {
        name: 'Nombre',
        email: 'Email Address',
        phone: 'Número de Teléfono',
        message: 'Mensaje',
        submit: 'ENVIAR'
      }
    },
    history: {
      title: 'Nuestras Raíces',
      text: 'Velve Produce nació de la pasión por la tierra fértil de España. Lo que comenzó como un sueño local se ha transformado en un puente global que conecta a los mejores productores con los mercados más exigentes de ultramar.',
      highlight: 'Calidad que trasciende fronteras.'
    },
    services: {
      title: 'Excelencia en el Servicio',
      description: 'En Velve Produce, la calidad no es una promesa. Es el resultado de un modelo comercial controlado. Operamos como una plataforma comercial independiente, seleccionando y supervisando productores en regiones clave de producción. Gestionamos el sourcing, la alineación de calidad y la coordinación comercial, para que los compradores accedan a fruta premium con confianza, claridad y continuidad. Nuestro modelo reduce riesgos operativos, mejora la consistencia y adapta cada programa de suministro a las exigencias específicas de los mercados de destino.',
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
        { name: 'Frambuesa', desc: 'El toque aterciopelado de la huerta española.', img: 'https://github.com/elizagarate/images/blob/main/velveproduce/Franbuesas.webp?raw=true?q=80&w=600' },
        { name: 'Fresa', desc: 'Intensidad aromática y color vibrante.', img: 'https://github.com/elizagarate/images/blob/main/velveproduce/Fresas.webp?raw=true?q=80&w=600' },
        { name: 'Mora', desc: 'Un tesoro silvestre lleno de antioxidantes.', img: 'https://github.com/elizagarate/images/blob/main/velveproduce/Moras.webp?raw=true?q=80&w=600' }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿Qué es exactamente Velve Produce?', a: 'Velve Produce es una plataforma comercial independiente que conecta productores seleccionados con compradores internacionales bajo un marco de control de calidad y comercial. No es un marketplace abierto ni un trader tradicional. Estructuramos y gestionamos programas de suministro enfocados en fruta premium.' },
        { q: '¿Con qué orígenes trabajáis?', a: 'Trabajamos con productores seleccionados en distintas regiones de producción, incluyendo el sur de Europa, Latinoamérica y el norte de África. Cada origen se integra en función del producto y de los requisitos del mercado destino.' },
        { q: '¿A qué mercados suministráis?', a: 'Nos centramos en compradores profesionales en Europa, Medio Oriente, Canadá e Israel. Cada programa de suministro se adapta a los estándares y expectativas específicas de cada mercado.' },
        { q: '¿Cómo garantizáis la calidad y la consistencia?', a: 'La calidad se gestiona a través de la selección de productores, la definición de especificaciones y una alineación continua entre origen y mercado. Nuestro modelo está diseñado para reducir variabilidad y asegurar consistencia entre envíos.' },
        { q: '¿Cómo garantizan la cadena de frío?', a: 'Utilizamos tecnología IoT de monitoreo constante desde el packing hasta el destino final.' },
        { q: '¿Son productores?', a: 'Trabajamos como exportadores estratégicos uniendo a los mejores productores certificados con compradores globales.' },
        { q: '¿Trabajáis con productores certificados?', a: 'Colaboramos con productores que cumplen estándares internacionales de seguridad alimentaria, trazabilidad y buenas prácticas agrícolas, siempre alineados con los requisitos del mercado de destino. Las certificaciones concretas dependen del producto y del mercado.' },
        { q: '¿Qué productos ofrecéis?', a: 'Velve Produce trabaja con categorías de fruta fresca premium. La disponibilidad depende del origen y de la estacionalidad. La información detallada se comparte en el marco de la conversación comercial.' },
        { q: '¿Qué volúmenes podéis manejar?', a: 'Trabajamos con compradores profesionales y programas estructurados. Los volúmenes se definen según producto, origen y mercado, priorizando fiabilidad y continuidad frente a operaciones puntuales.' },
        { q: '¿Cómo puedo empezar a trabajar con Velve Produce?', a: 'El primer paso es solicitar información comercial a través del formulario de contacto. Nuestro equipo revisará la solicitud y dará seguimiento para entender tus necesidades de sourcing.' }
      ]
    },
    contact: {
      title: 'Contacta con nosotros',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      msg: 'Mensaje',
      send: 'Enviar Consulta',
      success: '¡Gracias! Nos pondremos en contacto pronto.',
      addressLabel: 'Sede Central',
      address: 'VELVE PRODUCE, SL\nCalle Rioja 13, 1ºC.\n41001, Sevilla',
      whatsappLabel: 'WhatsApp',
      whatsappNumber: '+34 618 07 75 68'
    },
    footer: {
      rights: '© 2026 Velve Produce. Todos los derechos reservados.'
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
    historyPage: {
      title: 'Our History',
      subtitle: 'Connecting origin with destination through excellence and control.',
      cta: 'Ready to bring premium berries to your market?',
      ctaButton: 'Contact us now',
      content: [
        'Velve Produce was born to respond to a structural need in the international fresh fruit trade. In many origin countries, high-quality producers face challenges in accessing demanding international markets in a consistent and controlled manner. Simultaneously, buyers in destinations such as Europe, the Middle East, Canada, or Israel frequently encounter variability, lack of transparency, and operational risks when working with multiple origins.',
        'Velve Produce emerges as a response to this imbalance. The company operates as an independent commercial platform specialized in premium fruit, designed to connect selected producers with international buyers under a clear, controlled, and professional commercial framework. Instead of acting as a traditional trader, Velve Produce structures supply programs, aligns quality standards, and coordinates the commercial process from origin to destination.',
        'The project is supported by sectoral experience, deep knowledge of source markets, and a firm focus on quality control, traceability, and consistency. Every sourcing decision is based on long-term relationships rather than one-off operations.',
        'Today, Velve Produce works with producers across various production regions, tailoring each supply program to the specific requirements of destination markets. The goal is clear: to make access to premium fruit more reliable, transparent, and efficient for professional buyers.'
      ]
    },
    contactPage: {
      title: 'Contact Me',
      subtitle: 'GET IN TOUCH ANYTIME!',
      description: 'We are here to answer your questions about exports, logistics, and product quality. Our team will get back to you as soon as possible.',
      emailLabel: 'EMAIL ADDRESS',
      callLabel: 'CALL ME OR WHATSAPP',
      visitLabel: 'VISIT ME',
      form: {
        name: 'Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message',
        submit: 'SUBMIT'
      }
    },
    history: {
      title: 'Our Roots',
      text: 'Velve Produce was born from a passion for Spain\'s fertile land. What started as a local dream has blossomed into a global bridge, connecting top producers with the most demanding overseas markets.',
      highlight: 'Quality that transcends borders.'
    },
    services: {
      title: 'Service Excellence',
      description: 'At Velve Produce, quality is not just a promise; it\'s the result of a controlled commercial model. We operate as an independent commercial platform, selecting and supervising producers in key production regions. We manage sourcing, quality alignment, and commercial coordination, ensuring buyers access premium fruit with confidence, clarity, and continuity. Our model reduces operational risks, improves consistency, and tailors each supply program to the specific requirements of destination markets.',
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
        { name: 'Raspberry', desc: 'The velvet touch of the Spanish orchard.', img: 'https://github.com/elizagarate/images/blob/main/velveproduce/Franbuesas.webp?raw=true?q=80&w=600' },
        { name: 'Strawberry', desc: 'Aromatic intensity and vibrant color.', img: 'https://github.com/elizagarate/images/blob/main/velveproduce/Fresas.webp?raw=true?q=80&w=600' },
        { name: 'Blackberry', desc: 'A wild treasure packed with antioxidants.', img: 'https://github.com/elizagarate/images/blob/main/velveproduce/Moras.webp?raw=true?q=80&w=600' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What exactly is Velve Produce?', a: 'Velve Produce is an independent commercial platform that connects selected producers with international buyers under a framework of quality and commercial control. It is not an open marketplace or a traditional trader. We structure and manage supply programs focused on premium fruit.' },
        { q: 'Which origins do you work with?', a: 'We work with selected producers in different production regions, including Southern Europe, Latin America, and Northern Africa. Each origin is integrated based on the product and the destination market requirements.' },
        { q: 'Which markets do you supply?', a: 'We focus on professional buyers in Europe, the Middle East, Canada, and Israel. Each supply program is tailored to the specific standards and expectations of each market.' },
        { q: 'How do you guarantee quality and consistency?', a: 'Quality is managed through producer selection, specification definition, and continuous alignment between origin and market. Our model is designed to reduce variability and ensure consistency between shipments.' },
        { q: 'How do you guarantee the cold chain?', a: 'We utilize IoT monitoring technology from packing to the final destination.' },
        { q: 'Are you growers?', a: 'We act as strategic exporters, linking certified premium growers with global buyers.' },
        { q: 'Do you work with certified producers?', a: 'We collaborate with producers who comply with international food safety, traceability, and good agricultural practice standards, always aligned with destination market requirements. Specific certifications depend on the product and the market.' },
        { q: 'What products do you offer?', a: 'Velve Produce works with premium fresh fruit categories. Availability depends on origin and seasonality. Detailed information is shared within the framework of the commercial conversation.' },
        { q: 'What volumes can you handle?', a: 'We work with professional buyers and structured programs. Volumes are defined according to product, origin, and market, prioritizing reliability and continuity over one-off operations.' },
        { q: 'How can I start working with Velve Produce?', a: 'The first step is to request commercial information through the contact form. Our team will review the request and follow up to understand your sourcing needs.' }
      ]
    },
    contact: {
      title: 'Contact Us',
      name: 'Full Name',
      email: 'Email Address',
      msg: 'Message',
      send: 'Send Inquiry',
      success: 'Thank you! We will get in touch shortly.',
      addressLabel: 'Headquarters',
      address: 'VELVE PRODUCE, SL\nCalle Rioja 13, 1ºC.\n41001, Sevilla',
      whatsappLabel: 'WhatsApp',
      whatsappNumber: '+34 618 07 75 68'
    },
    footer: {
      rights: '© 2026 Velve Produce. All rights reserved.'
    }
  }
};
