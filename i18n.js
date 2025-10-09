// File: i18n.js
// Minimal, robust i18n switcher. Guarda preferencia y actualiza atributos ARIA/lang.
const translations = {
  es: {
    logo: "BusTrack",
    nav: { howTo: "Cómo usar", benefits: "Beneficios", about: "Sobre Nosotros" },
    header: { login: "Iniciar Sesión" },
    hero: { title: "Encuentra tu bus en tiempo real, sin esperas innecesarias" },
    howTo: {
      title: "Cómo usar BusTrack",
      step1: { title: "Buscar ruta", text: "Encuentra fácilmente la mejor ruta para tu destino" },
      step2: { title: "Recibir alertas", text: "Mantente informado sobre cambios o retrasos en tu ruta" },
      step3: { title: "Viajar más seguro", text: "Planifica tu viaje con información precisa y reduce tiempos de espera" }
    },
    benefits: {
      title: "Beneficios de usar BusTrack",
      b1: { title: "Información en tiempo real", text: "Mantente actualizado con la ubicación de los buses y los horarios de llegada en vivo, para que nunca esperes más de lo necesario." },
      b2: { title: "Guardar rutas favoritas", text: "Accede rápidamente a tus rutas de bus diarias o preferidas para una planificación más rápida y conveniente." },
      b3: { title: "Alertas y notificaciones", text: "Recibe alertas instantáneas sobre cambios de ruta o incidentes de tráfico que afecten tu viaje." }
    },
    about: {
      title: "Sobre Nosotros",
      mission: { title: "Misión", text: "Mejorar la experiencia del transporte público ofreciendo información precisa y en tiempo real para estudiantes y trabajadores." },
      vision: { title: "Visión", text: "Lograr que el transporte público en el Perú sea más eficiente, seguro y accesible, reduciendo tiempos de espera y mejorando la calidad de vida urbana." }
    },
    footer: { rights: "© 2025 DelComp. Todos los derechos reservados." }
  },

  en: {
    logo: "BusTrack",
    nav: { howTo: "How to use", benefits: "Benefits", about: "About Us" },
    header: { login: "Log In" },
    hero: { title: "Find your bus in real time, without unnecessary waits" },
    howTo: {
      title: "How to use BusTrack",
      step1: { title: "Search route", text: "Easily find the best route to your destination" },
      step2: { title: "Receive alerts", text: "Stay informed about route changes or delays" },
      step3: { title: "Travel safer", text: "Plan your trip with accurate info and reduce waiting time" }
    },
    benefits: {
      title: "Benefits of using BusTrack",
      b1: { title: "Real-time information", text: "Stay updated with live bus locations and arrival times so you never wait too long." },
      b2: { title: "Save favorite routes", text: "Quickly access your daily or preferred routes for faster planning." },
      b3: { title: "Alerts and notifications", text: "Receive instant alerts about route changes or traffic incidents affecting your trip." }
    },
    about: {
      title: "About Us",
      mission: { title: "Mission", text: "Improve public transport experience by providing real-time and accurate information for students and workers." },
      vision: { title: "Vision", text: "Make public transport in Peru more efficient, safe, and accessible, reducing waiting times and improving urban life quality." }
    },
    footer: { rights: "© 2025 DelComp. All rights reserved." }
  }
};

function getNested(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined) ? acc[k] : undefined, obj);
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(translations[lang], key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // actualizar atributo lang del documento para accesibilidad y SEO
  document.documentElement.lang = lang;
}

function updateLangButton(lang) {
  const btn = document.getElementById('lang-switcher');
  if (!btn) return;
  // mostrar abreviatura; también se puede usar banderas: "🇪🇸" / "🇺🇸"
  btn.textContent = lang === 'es' ? 'ES' : 'EN';
  btn.setAttribute('aria-pressed', String(lang === 'en')); // aria-pressed true cuando en inglés
  btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-switcher');

  // idioma inicial: localStorage -> navigator -> es
  const stored = localStorage.getItem('lang');
  const browserLang = navigator.language ? navigator.language.slice(0,2) : null;
  const initial = stored || (browserLang === 'en' ? 'en' : 'es');

  applyTranslations(initial);
  updateLangButton(initial);

  // guardado actual
  let currentLang = initial;
  localStorage.setItem('lang', currentLang);

  if (btn) {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', currentLang);
      applyTranslations(currentLang);
      updateLangButton(currentLang);
    });
  }
});
