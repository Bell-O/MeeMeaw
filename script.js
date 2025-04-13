// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Toggle active class on the button
        this.classList.toggle('active');
        
        // Get the content panel
        const content = this.nextElementSibling;
        
        // Toggle active class on the content
        content.classList.toggle('active');
      });
    });
    
    // Initialize the first accordion item as open
    if (accordionButtons.length > 0) {
      accordionButtons[0].click();
    }
    
    // Portfolio "ดูเพิ่มเติม" button functionality
    const moreButton = document.querySelector('.portfolio-more .btn');
    if (moreButton) {
      moreButton.addEventListener('click', function() {
        // This would typically load more portfolio items
        // For now, we'll just show an alert
        alert('จะมีตัวอย่างผลงานเพิ่มเติมในอนาคต!');
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for the navbar
            behavior: 'smooth'
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // =============== ANIMATIONS ON SCROLL ===============
    // เพิ่มเอฟเฟกต์เมื่อเลื่อนหน้าจอมาถึงแต่ละส่วน
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate');
        }
      });
    };
    
    // เพิ่ม class สำหรับ animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
    });
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
      item.classList.add('animate-on-scroll');
      item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
      step.classList.add('animate-on-scroll');
      step.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // เรียกใช้ animateOnScroll เมื่อโหลดหน้าและเมื่อเลื่อนหน้าจอ
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // =============== ACCORDION FUNCTIONALITY ===============
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Toggle active class on the button
        this.classList.toggle('active');
        
        // Get the content panel
        const content = this.nextElementSibling;
        
        // Toggle active class on the content
        content.classList.toggle('active');
      });
    });
    
    // Initialize the first accordion item as open
    if (accordionButtons.length > 0) {
      accordionButtons[0].click();
    }
    
    // =============== TYPING ANIMATION ===============
    // เอฟเฟกต์พิมพ์ข้อความในส่วน Hero
    const heroTitle = document.querySelector('h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // เริ่มเอฟเฟกต์พิมพ์หลังจากโหลดหน้า
    setTimeout(typeWriter, 500);
    
    // =============== INTERACTIVE CAT ===============
    // เพิ่มแมวที่เคลื่อนไหวได้ตามเมาส์
    const createInteractiveCat = () => {
      const cat = document.createElement('div');
      cat.className = 'interactive-cat';
      cat.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path>
          <path d="M8 14v.5"></path><path d="M16 14v.5"></path>
          <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
        </svg>
      `;
      document.body.appendChild(cat);
      
      // ทำให้แมวเคลื่อนที่ตามเมาส์แบบนุ่มนวล
      let mouseX = 0;
      let mouseY = 0;
      let catX = 0;
      let catY = 0;
      
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      
      const moveCat = () => {
        // คำนวณตำแหน่งใหม่ของแมวให้เคลื่อนที่แบบนุ่มนวล
        const dx = mouseX - catX;
        const dy = mouseY - catY;
        
        catX += dx * 0.1;
        catY += dy * 0.1;
        
        cat.style.left = `${catX}px`;
        cat.style.top = `${catY}px`;
        
        // หมุนแมวตามทิศทางการเคลื่อนที่
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        cat.style.transform = `rotate(${angle}deg)`;
        
        requestAnimationFrame(moveCat);
      };
      
      moveCat();
      
      // เพิ่มเอฟเฟกต์เมื่อคลิกที่แมว
      cat.addEventListener('click', () => {
        cat.classList.add('cat-jump');
        setTimeout(() => {
          cat.classList.remove('cat-jump');
        }, 500);
        
        // สร้างเอฟเฟกต์ confetti เมื่อคลิกที่แมว
        createConfetti(mouseX, mouseY);
      });
    };
    
    // สร้างแมวหลังจากโหลดหน้า
    setTimeout(createInteractiveCat, 2000);
    
    // =============== CONFETTI EFFECT ===============
    // เอฟเฟกต์ confetti เมื่อคลิกที่แมว
    const createConfetti = (x, y) => {
      const colors = ['#ff33ad', '#9c59ff', '#ffc2eb', '#e4d8ff', '#fef08a'];
      
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        
        // สุ่มทิศทางและความเร็ว
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;
        
        document.body.appendChild(confetti);
        
        // เคลื่อนที่และหายไป
        let posX = x;
        let posY = y;
        let opacity = 1;
        let scale = Math.random() * 0.8 + 0.2;
        
        const moveConfetti = () => {
          posX += dx;
          posY += dy + 1; // เพิ่มแรงโน้มถ่วง
          opacity -= 0.02;
          scale -= 0.01;
          
          confetti.style.left = `${posX}px`;
          confetti.style.top = `${posY}px`;
          confetti.style.opacity = opacity;
          confetti.style.transform = `scale(${scale}) rotate(${posX}deg)`;
          
          if (opacity > 0) {
            requestAnimationFrame(moveConfetti);
          } else {
            confetti.remove();
          }
        };
        
        moveConfetti();
      }
    };
    
    // =============== PARALLAX EFFECT ===============
    // เอฟเฟกต์ parallax ในส่วน hero
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image-wrapper');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    });
    
    // =============== PORTFOLIO LIGHTBOX ===============
    // เพิ่ม lightbox สำหรับดูรูปในส่วน portfolio
    const createLightbox = () => {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <span class="close-lightbox">&times;</span>
          <img class="lightbox-image" src="/placeholder.svg" alt="Portfolio Image">
          <h3 class="lightbox-title"></h3>
        </div>
      `;
      document.body.appendChild(lightbox);
      
      const portfolioImages = document.querySelectorAll('.portfolio-image');
      const lightboxImage = document.querySelector('.lightbox-image');
      const lightboxTitle = document.querySelector('.lightbox-title');
      const closeLightbox = document.querySelector('.close-lightbox');
      
      portfolioImages.forEach(image => {
        image.addEventListener('click', () => {
          const src = image.getAttribute('src');
          const title = image.closest('.portfolio-item').querySelector('.portfolio-title').textContent;
          
          lightboxImage.setAttribute('src', src);
          lightboxTitle.textContent = title;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      });
      
      closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
      
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    };
    
    createLightbox();
    
    // =============== FLOATING ELEMENTS ===============
    // เพิ่มเอฟเฟกต์ลอยขึ้นลงเบาๆ ให้กับองค์ประกอบต่างๆ
    const floatingElements = document.querySelectorAll('.cat-badge, .contact-icon-wrapper, .process-number');
    
    floatingElements.forEach(element => {
      // สุ่มความเร็วและระยะทางในการลอย
      const speed = Math.random() * 0.5 + 0.5;
      const distance = Math.random() * 5 + 5;
      
      // เพิ่ม animation
      element.style.animation = `float ${speed}s ease-in-out infinite alternate`;
      
      // เพิ่ม keyframes สำหรับ animation
      const styleSheet = document.styleSheets[0];
      const keyframes = `
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(${distance}px);
          }
        }
      `;
      
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
    
    // =============== BUTTON HOVER EFFECTS ===============
    // เพิ่มเอฟเฟกต์เมื่อ hover ปุ่ม
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('btn-pulse');
      });
      
      button.addEventListener('mouseleave', () => {
        button.classList.remove('btn-pulse');
      });
    });
    
    // =============== SMOOTH SCROLLING ===============
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for the navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    // =============== BACKGROUND PARTICLES ===============
    // เพิ่มเอฟเฟกต์พาร์ติเคิลลอยในพื้นหลัง
    const createParticles = () => {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'particles-container';
      document.body.prepend(particlesContainer);
      
      const colors = ['#ffc2eb', '#e4d8ff', '#fff0fb', '#f0e9ff'];
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // สุ่มคุณสมบัติของพาร์ติเคิล
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    // =============== LOADING ANIMATION ===============
    // เพิ่มเอฟเฟกต์โหลดหน้าเว็บ
    const createLoadingAnimation = () => {
      const loader = document.createElement('div');
      loader.className = 'page-loader';
      loader.innerHTML = `
        <div class="loader-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loader-icon">
            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path>
            <path d="M8 14v.5"></path><path d="M16 14v.5"></path>
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
          </svg>
          <p>กำลังโหลด...</p>
        </div>
      `;
      document.body.appendChild(loader);
      
      // ซ่อน loader หลังจากโหลดเสร็จ
      window.addEventListener('load', () => {
        setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500);
        }, 1000);
      });
    };
    
    createLoadingAnimation();
  });

// =============== PORTFOLIO IFRAME PREVIEW ===============
document.addEventListener('DOMContentLoaded', function() {
    // สร้าง Modal สำหรับแสดง iframe แบบเต็มจอ
    const createPortfolioModal = () => {
      const modal = document.createElement('div');
      modal.className = 'portfolio-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <div class="close-modal">&times;</div>
          <iframe class="modal-iframe" src="" title="Portfolio Preview"></iframe>
        </div>
      `;
      document.body.appendChild(modal);
      
      return {
        modal,
        iframe: modal.querySelector('.modal-iframe'),
        closeBtn: modal.querySelector('.close-modal')
      };
    };
    
    const { modal, iframe, closeBtn } = createPortfolioModal();
    
    // เพิ่ม Event Listener สำหรับปุ่ม Preview
    const previewButtons = document.querySelectorAll('.preview-btn');
    
    previewButtons.forEach(button => {
      button.addEventListener('click', function() {
        // หา iframe ที่อยู่ใน portfolio item เดียวกัน
        const portfolioItem = this.closest('.portfolio-item');
        const portfolioIframe = portfolioItem.querySelector('.portfolio-iframe');
        const iframeSrc = portfolioIframe.getAttribute('src');
        const title = portfolioItem.querySelector('.portfolio-title').textContent;
        
        // ตั้งค่า iframe ใน modal
        iframe.setAttribute('src', iframeSrc);
        iframe.setAttribute('title', title);
        
        // แสดง modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนหน้าจอ
        
        // เพิ่มเอฟเฟกต์ confetti
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        createConfetti(x, y);
      });
    });
    
    // ปิด modal เมื่อคลิกที่ปุ่มปิดหรือพื้นที่นอก modal
    closeBtn.addEventListener('click', () => {
      closePortfolioModal();
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePortfolioModal();
      }
    });
    
    // ฟังก์ชันปิด modal
    const closePortfolioModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
      // รอให้ animation เสร็จก่อนล้าง src
      setTimeout(() => {
        iframe.setAttribute('src', '');
      }, 300);
    };
    
    // เพิ่ม hover effect ให้กับ portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
      const overlay = item.querySelector('.iframe-overlay');
      const previewBtn = item.querySelector('.preview-btn');
      
      item.addEventListener('mouseenter', () => {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        previewBtn.style.transform = 'scale(1.05)';
      });
      
      item.addEventListener('mouseleave', () => {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        previewBtn.style.transform = 'scale(1)';
      });
    });
    
    // ปุ่ม "ดูเพิ่มเติม"
    const moreButton = document.querySelector('.portfolio-more .btn');
    if (moreButton) {
      moreButton.addEventListener('click', function() {
        alert('จะมีตัวอย่างผลงานเพิ่มเติมในอนาคต!');
      });
    }
  });
  
  // ฟังก์ชัน confetti (ใช้ร่วมกับโค้ดเดิม)
  const createConfetti = (x, y) => {
    const colors = ['#ff33ad', '#9c59ff', '#ffc2eb', '#e4d8ff', '#fef08a'];
    
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      
      // สุ่มทิศทางและความเร็ว
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      
      document.body.appendChild(confetti);
      
      // เคลื่อนที่และหายไป
      let posX = x;
      let posY = y;
      let opacity = 1;
      let scale = Math.random() * 0.8 + 0.2;
      
      const moveConfetti = () => {
        posX += dx;
        posY += dy + 1; // เพิ่มแรงโน้มถ่วง
        opacity -= 0.02;
        scale -= 0.01;
        
        confetti.style.left = `${posX}px`;
        confetti.style.top = `${posY}px`;
        confetti.style.opacity = opacity;
        confetti.style.transform = `scale(${scale}) rotate(${posX}deg)`;
        
        if (opacity > 0) {
          requestAnimationFrame(moveConfetti);
        } else {
          confetti.remove();
        }
      };
      
      moveConfetti();
    }
  };

// =============== FAQ ACCORDION ===============
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      
      // ซ่อนคำตอบทั้งหมดตอนเริ่มต้น
      answer.style.maxHeight = '0';
      answer.style.opacity = '0';
      
      question.addEventListener('click', () => {
        // เช็คว่า item นี้เปิดอยู่หรือไม่
        const isOpen = item.classList.contains('active');
        
        // ปิดทุก item ก่อน (ถ้าต้องการให้เปิดได้ทีละอัน)
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = '0';
            otherItem.querySelector('.faq-answer').style.opacity = '0';
            otherItem.querySelector('.faq-icon').innerHTML = '+';
          }
        });
        
        // สลับสถานะของ item ที่คลิก
        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = '0';
          answer.style.opacity = '0';
          icon.innerHTML = '+';
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          answer.style.opacity = '1';
          icon.innerHTML = '−';
          
          // เพิ่มเอฟเฟกต์เล็กๆ น้อยๆ
          const rect = question.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          
          // สร้างเอฟเฟกต์คลื่นเมื่อคลิก
          createRippleEffect(x, y, item);
        }
      });
    });
    
    // ฟังก์ชันสร้างเอฟเฟกต์คลื่นเมื่อคลิก
    function createRippleEffect(x, y, element) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      
      // ตั้งค่าตำแหน่งเริ่มต้นของคลื่น
      ripple.style.left = '0';
      ripple.style.top = '0';
      ripple.style.transform = `translate(-50%, -50%) scale(0)`;
      
      // เพิ่ม ripple เข้าไปใน element
      element.appendChild(ripple);
      
      // เริ่มแอนิเมชัน
      setTimeout(() => {
        ripple.style.transform = `translate(-50%, -50%) scale(1)`;
        ripple.style.opacity = '0';
        
        // ลบ ripple หลังจากแอนิเมชันเสร็จสิ้น
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }, 10);
    }
  });

// =============== ACCORDION FUNCTIONALITY ===============
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Toggle active class on the button
        this.classList.toggle('active');
        
        // Get the content panel
        const content = this.nextElementSibling;
        
        // Toggle active class on the content
        content.classList.toggle('active');
        
        // ปรับความสูงของเนื้อหา
        if (content.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.padding = '0 0 1rem 0';
          // เปลี่ยนเครื่องหมาย + เป็น -
          this.innerHTML = this.innerHTML.replace('+', '-');
        } else {
          content.style.maxHeight = '0';
          content.style.padding = '0';
          // เปลี่ยนเครื่องหมาย - เป็น +
          this.innerHTML = this.innerHTML.replace('-', '+');
        }
        
        // เพิ่มเอฟเฟกต์คลื่นเมื่อคลิก
        createRippleEffect(this);
      });
    });
    
    // ฟังก์ชันสร้างเอฟเฟกต์คลื่นเมื่อคลิก
    function createRippleEffect(button) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      
      // เพิ่ม ripple เข้าไปใน element
      button.appendChild(ripple);
      
      // ตั้งค่าตำแหน่งและขนาด
      const buttonRect = button.getBoundingClientRect();
      ripple.style.width = buttonRect.width * 2 + 'px';
      ripple.style.height = buttonRect.width * 2 + 'px';
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      
      // เริ่มแอนิเมชัน
      setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(1)';
        ripple.style.opacity = '0';
        
        // ลบ ripple หลังจากแอนิเมชันเสร็จสิ้น
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }, 10);
    }
    
    // เพิ่มเครื่องหมาย + ให้กับทุกปุ่ม
    accordionButtons.forEach(button => {
      if (!button.innerHTML.includes('+') && !button.innerHTML.includes('-')) {
        button.innerHTML = button.innerHTML + ' +';
      }
    });
    
    // เปิด accordion แรกโดยอัตโนมัติ
    if (accordionButtons.length > 0) {
      accordionButtons[0].click();
    }
  });