const progressBar = document.querySelector('.scroll-progress');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + '%';
  
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  const homeSection = document.querySelector('.homee');
  if (homeSection) {
    homeSection.style.backgroundPositionY = window.scrollY * 0.3 + 'px';
  }
});

document.querySelectorAll('.card').forEach((card, index) => {
  card.classList.add('active');
  card.style.transitionDelay = (index * 0.1) + 's';
  
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    if (card.classList.contains('premium')) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1.05)';
    } else {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
  });
});

document.querySelectorAll('.stat-item').forEach(stat => {
  const numberElement = stat.querySelector('.stat-number');
  if (numberElement) {
    const target = parseInt(numberElement.textContent);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        numberElement.textContent = target + '+';
        clearInterval(timer);
      } else {
        numberElement.textContent = Math.floor(current) + '+';
      }
    }, 20);
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.querySelectorAll('.btn, .navbar button, .homee button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});