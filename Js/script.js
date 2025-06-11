
  document.addEventListener('DOMContentLoaded', () => {
    // Typing animation for subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        subtitle.textContent += text[i];
        i++;
        setTimeout(type, 100);
      } else {
        subtitle.classList.remove('typing');
      }
    };
    setTimeout(type, 500);

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate nav items
    gsap.from('nav ul li', {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Animate sections
    gsap.utils.toArray('section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animate skill, education, experience, and testimonial items
    gsap.utils.toArray('.skill-item, .education-item, .experience-item, .testimonial-item').forEach(item => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Navbar toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navUl.classList.toggle('active');
        gsap.to(navUl, { opacity: navUl.classList.contains('active') ? 1 : 0, duration: 0.3 });
      });

      // Smooth scrolling without collapsing menu
      document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', e => {
          e.preventDefault();
          const sectionId = anchor.getAttribute('href');
          const targetSection = document.querySelector(sectionId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Optionally close the menu if desired
            // menuToggle.classList.remove('active');
            // navUl.classList.remove('active');
            // gsap.to(navUl, { opacity: 0, duration: 0.3 });
          }
        });
      });

      document.addEventListener('click', e => {
        if (!navUl.contains(e.target) && !menuToggle.contains(e.target) && navUl.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navUl.classList.remove('active');
          gsap.to(navUl, { opacity: 0, duration: 0.3 });
        }
      });
    }
  });
