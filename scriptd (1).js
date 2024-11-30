document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.topnav a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'rotate(1deg) scale(1.03)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotate(0) scale(1)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });

  // Button click effects with ripple animation
  const buttons = document.querySelectorAll('.learn-more, .feature-card button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      alert('More details about this service will be available soon!'); 
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      ripple.classList.add('ripple');
      button.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600); 
    });

    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
  });

  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  };

  const observerOptions = {
    root: null,
    threshold: 0.1, 
  };
  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate');
  elementsToAnimate.forEach(element => observer.observe(element));

  const allCards = document.querySelectorAll('.service-card, .feature-card, .testimonial-card');
  allCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'rotateX(5deg) rotateY(5deg) scale(1.05)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
});

/* Mobile Adjustments */
function toggleMenu() {
  const topnav = document.querySelector('.topnav');
  topnav.classList.toggle('active');
}

/* Overall Animation*/
document.addEventListener('DOMContentLoaded', () => {
  const addAnimationClass = () => {
    const targetElements = document.querySelectorAll('header ~ *');
    targetElements.forEach(element => element.classList.add('animate'));
  };

  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  addAnimationClass();
  const elementsToAnimate = document.querySelectorAll('.animate');
  elementsToAnimate.forEach(element => observer.observe(element));
});
