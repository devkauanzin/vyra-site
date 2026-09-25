const header = document.querySelector('.header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  nav.classList.remove('open');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.14 });

document.querySelectorAll('.hero-copy, .intro-body, .section-heading, .service-row, .manifesto-inner, .project, .metric, .process-list article, .about-band-inner, .contact-copy').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
