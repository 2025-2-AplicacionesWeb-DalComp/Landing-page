// File: i18n.js
// Language switcher with complete ES/EN translations
// Saves user preference in localStorage and updates ARIA attributes

const translations = {
  es: {
    logo: "BusTrack",
    nav: {
      features: "Qué ofrece",
      forWhom: "Para quién es",
      howTo: "Cómo usar",
      benefits: "Beneficios"
    },
    header: {
      login: "Iniciar Sesión"
    },
    hero: {
      title: "Encuentra tu bus en tiempo real y viaja sin esperas innecesarias",
      subtitle: "BusTrack es una plataforma web que te ayuda a rastrear tu bus en tiempo real, ver tiempos de llegada estimados, paraderos cercanos y recibir alertas sobre tu ruta. Diseñada para estudiantes y trabajadores que dependen del transporte público en Perú, también ofrece herramientas básicas de monitoreo para empresas de transporte."
    },
    features: {
      title: "¿Qué ofrece BusTrack?",
      intro: "Nuestra plataforma MVP incluye todas las herramientas esenciales para mejorar tu experiencia en transporte público.",
      f1: {
        title: "Búsqueda de rutas",
        text: "Encuentra rápidamente las mejores opciones de buses ingresando tu origen y destino."
      },
      f2: {
        title: "Ubicación en tiempo real",
        text: "Ve dónde está tu bus en este momento con actualización continua en el mapa."
      },
      f3: {
        title: "Tiempos estimados de llegada (ETA)",
        text: "Conoce cuánto falta para que llegue tu bus y planifica mejor tu salida."
      },
      f4: {
        title: "Paraderos cercanos",
        text: "Localiza los paraderos más próximos a tu ubicación actual."
      },
      f5: {
        title: "Alertas y notificaciones",
        text: "Recibe avisos sobre retrasos, cambios de ruta o incidentes de tráfico."
      },
      f6: {
        title: "Rutas favoritas",
        text: "Guarda tus rutas más usadas para acceder a ellas con un solo clic."
      },
      f7: {
        title: "Panel de monitoreo para empresas",
        text: "Las empresas de transporte pueden supervisar su flota y optimizar rutas desde un dashboard básico."
      }
    },
    audience: {
      title: "¿Para quién es BusTrack?",
      students: {
        title: "Estudiantes",
        text: "Si eres estudiante y dependes del transporte público para llegar a clases, BusTrack te ayuda a salir de casa en el momento exacto, evitando largas esperas en el paradero y llegando puntual a la universidad o instituto."
      },
      workers: {
        title: "Trabajadores",
        text: "Como trabajador, tu tiempo es valioso. BusTrack te permite organizar mejor tus desplazamientos diarios, reducir el estrés de esperar sin información y llegar a tiempo a tu trabajo sin complicaciones."
      },
      companies: {
        title: "Empresas de transporte",
        text: "Si administras una flota de buses, BusTrack ofrece un panel básico de monitoreo para que puedas supervisar tus unidades en tiempo real, mejorar la puntualidad y optimizar tus operaciones."
      }
    },
    howTo: {
      title: "Cómo usar BusTrack",
      intro: "En solo 3 pasos simples, puedes empezar a viajar más tranquilo y organizado.",
      step1: {
        title: "1. Busca tu ruta",
        text: "Ingresa tu punto de origen y tu destino. BusTrack te mostrará las mejores opciones de rutas y buses disponibles en tu zona, con información actualizada."
      },
      step2: {
        title: "2. Ve buses en tiempo real",
        text: "Consulta en el mapa la ubicación exacta de los buses, los paraderos más cercanos y los tiempos estimados de llegada. Todo se actualiza automáticamente para que siempre tengas la información más reciente."
      },
      step3: {
        title: "3. Recibe alertas y viaja tranquilo",
        text: "Activa las notificaciones para recibir avisos sobre retrasos, cambios de ruta, incidentes de tráfico o cualquier evento que pueda afectar tu viaje. Así podrás ajustar tu plan a tiempo."
      }
    },
    benefits: {
      title: "Beneficios de usar BusTrack",
      intro: "Descubre cómo BusTrack hace tu día a día más eficiente, seguro y predecible.",
      b1: {
        title: "Información en tiempo real",
        text: "Nunca más te preguntarás \"¿dónde está mi bus?\". Con BusTrack sabes exactamente dónde está tu bus y cuándo llegará al paradero. Esto te permite salir de casa en el momento justo y evitar largas esperas bajo el sol o la lluvia."
      },
      b2: {
        title: "Ahorra tiempo todos los días",
        text: "Guarda tus rutas favoritas y accede a ellas instantáneamente. Si usas la misma ruta cada día para ir al trabajo o la universidad, BusTrack te permite planificar tu viaje en segundos sin necesidad de buscar cada vez."
      },
      b3: {
        title: "Viaja más seguro e informado",
        text: "Las alertas te mantienen al tanto de cualquier imprevisto: desvíos, retrasos o incidentes que puedan afectar tu ruta habitual. Toma decisiones informadas y llega a tu destino sin sorpresas."
      },
      b4: {
        title: "Mejora operativa para empresas",
        text: "Si eres una empresa de transporte, el panel de monitoreo te permite supervisar tu flota en tiempo real, identificar áreas de mejora y optimizar rutas para ofrecer un mejor servicio a tus pasajeros."
      }
    },
    about: {
      title: "Sobre Nosotros",
      mission: {
        title: "Misión",
        text: "Transformar la experiencia del transporte público en Perú proporcionando información precisa y en tiempo real que permita a estudiantes, trabajadores y empresas viajar de manera más eficiente, segura y predecible."
      },
      vision: {
        title: "Visión",
        text: "Ser la plataforma líder en movilidad urbana en Perú, haciendo que el transporte público sea más predecible, accesible y confiable para millones de usuarios, mientras apoyamos a las empresas de transporte en la optimización de sus operaciones."
      }
    },
    videos: {
      mainTitle: "Conoce más sobre BusTrack",
      video1: {
        title: "Sobre el producto: BusTrack",
        desc: "Conoce en detalle las funcionalidades principales de BusTrack: búsqueda de rutas, rastreo en tiempo real, alertas, y más. Te mostramos cómo la plataforma te ayuda a encontrar tu bus y viajar sin incertidumbre."
      },
      video2: {
        title: "Conoce al equipo detrás de BusTrack",
        desc: "Te presentamos a las personas que trabajaron en el desarrollo de BusTrack, compartiendo su visión y compromiso con mejorar el transporte público en Perú."
      }
    },
    footer: {
      rights: "© 2025 DelComp. Todos los derechos reservados."
    }
  },

  en: {
    logo: "BusTrack",
    nav: {
      features: "What We Offer",
      forWhom: "Who It's For",
      howTo: "How to Use",
      benefits: "Benefits"
    },
    header: {
      login: "Log In"
    },
    hero: {
      title: "Find your bus in real time and travel without unnecessary waits",
      subtitle: "BusTrack is a web platform that helps you track your bus in real time, view estimated arrival times, nearby stops, and receive route alerts. Designed for students and workers who depend on public transportation in Peru, it also offers basic monitoring tools for transport companies."
    },
    features: {
      title: "What Does BusTrack Offer?",
      intro: "Our MVP platform includes all essential tools to improve your public transportation experience.",
      f1: {
        title: "Route Search",
        text: "Quickly find the best bus options by entering your origin and destination."
      },
      f2: {
        title: "Real-Time Location",
        text: "See where your bus is right now with continuous map updates."
      },
      f3: {
        title: "Estimated Time of Arrival (ETA)",
        text: "Know how long until your bus arrives and plan your departure better."
      },
      f4: {
        title: "Nearby Stops",
        text: "Locate the stops closest to your current location."
      },
      f5: {
        title: "Alerts and Notifications",
        text: "Receive notifications about delays, route changes, or traffic incidents."
      },
      f6: {
        title: "Favorite Routes",
        text: "Save your most-used routes to access them with one click."
      },
      f7: {
        title: "Monitoring Panel for Companies",
        text: "Transport companies can monitor their fleet and optimize routes from a basic dashboard."
      }
    },
    audience: {
      title: "Who Is BusTrack For?",
      students: {
        title: "Students",
        text: "If you're a student and rely on public transportation to get to class, BusTrack helps you leave home at the exact right time, avoiding long waits at stops and arriving on time to university or institute."
      },
      workers: {
        title: "Workers",
        text: "As a worker, your time is valuable. BusTrack lets you better organize your daily commute, reduce the stress of waiting without information, and arrive at work on time without complications."
      },
      companies: {
        title: "Transport Companies",
        text: "If you manage a bus fleet, BusTrack offers a basic monitoring panel so you can supervise your units in real time, improve punctuality, and optimize your operations."
      }
    },
    howTo: {
      title: "How to Use BusTrack",
      intro: "In just 3 simple steps, you can start traveling more calmly and organized.",
      step1: {
        title: "1. Search Your Route",
        text: "Enter your starting point and destination. BusTrack will show you the best route and bus options available in your area, with updated information."
      },
      step2: {
        title: "2. See Buses in Real Time",
        text: "Check the exact location of buses on the map, nearby stops, and estimated arrival times. Everything updates automatically so you always have the most current information."
      },
      step3: {
        title: "3. Receive Alerts and Travel Calmly",
        text: "Enable notifications to receive alerts about delays, route changes, traffic incidents, or any event that may affect your trip. This way you can adjust your plan in time."
      }
    },
    benefits: {
      title: "Benefits of Using BusTrack",
      intro: "Discover how BusTrack makes your daily life more efficient, safe, and predictable.",
      b1: {
        title: "Real-Time Information",
        text: "Never again wonder \"where is my bus?\". With BusTrack you know exactly where your bus is and when it will arrive at the stop. This lets you leave home at just the right moment and avoid long waits in the sun or rain."
      },
      b2: {
        title: "Save Time Every Day",
        text: "Save your favorite routes and access them instantly. If you use the same route every day to go to work or university, BusTrack lets you plan your trip in seconds without searching each time."
      },
      b3: {
        title: "Travel Safer and More Informed",
        text: "Alerts keep you aware of any unexpected events: detours, delays, or incidents that may affect your usual route. Make informed decisions and arrive at your destination without surprises."
      },
      b4: {
        title: "Operational Improvement for Companies",
        text: "If you're a transport company, the monitoring panel lets you supervise your fleet in real time, identify areas for improvement, and optimize routes to offer better service to your passengers."
      }
    },
    about: {
      title: "About Us",
      mission: {
        title: "Mission",
        text: "Transform the public transportation experience in Peru by providing accurate, real-time information that enables students, workers, and companies to travel more efficiently, safely, and predictably."
      },
      vision: {
        title: "Vision",
        text: "Become the leading urban mobility platform in Peru, making public transportation more predictable, accessible, and reliable for millions of users, while supporting transport companies in optimizing their operations."
      }
    },
    videos: {
      mainTitle: "Learn More About BusTrack",
      video1: {
        title: "About the Product: BusTrack",
        desc: "Learn in detail about BusTrack's main features: route search, real-time tracking, alerts, and more. We show you how the platform helps you find your bus and travel without uncertainty."
      },
      video2: {
        title: "Meet the Team Behind BusTrack",
        desc: "Meet the people who worked on developing BusTrack, sharing their vision and commitment to improving public transportation in Peru."
      }
    },
    footer: {
      rights: "© 2025 DelComp. All rights reserved."
    }
  }
};

/**
 * Helper function to get nested object values using dot notation
 * Example: getNested(obj, 'hero.title') returns obj.hero.title
 */
function getNested(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined) ? acc[k] : undefined, obj);
}

/**
 * Apply translations to all elements with data-i18n attribute
 * Updates textContent based on the selected language
 */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(translations[lang], key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update document lang attribute for accessibility and SEO
  document.documentElement.lang = lang;
}

/**
 * Update the language switcher button text and ARIA attributes
 */
function updateLangButton(lang) {
  const btn = document.getElementById('lang-switcher');
  if (!btn) return;

  // Display current language abbreviation
  btn.textContent = lang === 'es' ? 'ES' : 'EN';

  // Update ARIA attributes for accessibility
  btn.setAttribute('aria-pressed', String(lang === 'en'));
  btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-switcher');

  // Determine initial language: localStorage > browser language > default to Spanish
  const stored = localStorage.getItem('lang');
  const browserLang = navigator.language ? navigator.language.slice(0, 2) : null;
  const initial = stored || (browserLang === 'en' ? 'en' : 'es');

  // Apply initial translations
  applyTranslations(initial);
  updateLangButton(initial);

  // Save current language
  let currentLang = initial;
  localStorage.setItem('lang', currentLang);

  // Add click event listener to language switcher
  if (btn) {
    btn.addEventListener('click', () => {
      // Toggle between Spanish and English
      currentLang = currentLang === 'es' ? 'en' : 'es';

      // Save preference
      localStorage.setItem('lang', currentLang);

      // Update page content and button
      applyTranslations(currentLang);
      updateLangButton(currentLang);
    });
  }
});