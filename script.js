document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.blog-card');

  const revealOnScroll = () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Triggers when the card enters 10% of the screen height from bottom
      if (cardTop < windowHeight - 50) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  };

  // Run on scroll and trigger initial check for top panels
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});