// Bulletproof navigation - visible in ALL conditions
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Ultimate navbar protection function
    function ensureNavbarAlwaysVisible() {
        if (navbar) {
            // Force all critical styles
            navbar.style.setProperty('position', 'fixed', 'important');
            navbar.style.setProperty('top', '0', 'important');
            navbar.style.setProperty('left', '0', 'important');
            navbar.style.setProperty('right', '0', 'important');
            navbar.style.setProperty('width', '100vw', 'important');
            navbar.style.setProperty('height', '70px', 'important');
            navbar.style.setProperty('z-index', '99999', 'important');
            navbar.style.setProperty('visibility', 'visible', 'important');
            navbar.style.setProperty('display', 'block', 'important');
            navbar.style.setProperty('pointer-events', 'auto', 'important');
            
            // Ensure scrolled state also maintains visibility
            if (navbar.classList.contains('scrolled')) {
                navbar.style.setProperty('position', 'fixed', 'important');
                navbar.style.setProperty('top', '0', 'important');
                navbar.style.setProperty('z-index', '99999', 'important');
            }
        }
    }

    // Apply immediately and continuously
    ensureNavbarAlwaysVisible();
    
    // Enhanced scroll-based navbar styling with immediate color change
    window.addEventListener('scroll', function() {
        ensureNavbarAlwaysVisible();
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            // Force immediate color change
            navbar.style.setProperty('background', 'rgba(10, 10, 10, 0.95)', 'important');
            navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            navbar.style.setProperty('box-shadow', '0 8px 32px rgba(0, 0, 0, 0.6)', 'important');
            navbar.style.setProperty('border-bottom', '3px solid #ffd700', 'important');
            ensureNavbarAlwaysVisible(); // Re-apply after class change
        } else {
            navbar.classList.remove('scrolled');
            // Force immediate color change back
            navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.1)', 'important');
            navbar.style.setProperty('backdrop-filter', 'blur(10px)', 'important');
            navbar.style.setProperty('box-shadow', 'none', 'important');
            navbar.style.setProperty('border-bottom', '1px solid rgba(255, 255, 255, 0.1)', 'important');
            ensureNavbarAlwaysVisible(); // Re-apply after class change
        }
    }, { passive: true });

    // Window resize protection
    window.addEventListener('resize', ensureNavbarAlwaysVisible);
    window.addEventListener('orientationchange', function() {
        setTimeout(ensureNavbarAlwaysVisible, 50);
    });

    // Continuous protection (every 50ms)
    setInterval(ensureNavbarAlwaysVisible, 50);

    // Page visibility protection
    document.addEventListener('visibilitychange', ensureNavbarAlwaysVisible);

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href').split('/').pop();
            
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    setActiveLink();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add ripple effect on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .feature-card, .service-item, .team-member, .project-item, .testimonial, .step').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Dynamic navbar height on scroll
    let lastScrollTop = 0;
    let navbarHeight = 70;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scrolling down
            navbar.style.transform = `translateY(-100%)`;
        } else {
            // Scrolling up
            navbar.style.transform = `translateY(0)`;
        }
        
        lastScrollTop = scrollTop;
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Portfolio Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!firstName || !lastName || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formSuccess.style.display = 'none';
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 5000);
            }, 2000);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Animated Counter for Stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }

    // Trigger counter animation when stats section is visible
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    animateCounter(entry.target, number);
                    entry.target.animated = true;
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    // Smooth reveal animations for elements
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements();

    // Typing effect for hero titles
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Apply typing effect to hero title on homepage
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Enhanced mobile menu touch gestures
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - close menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
        
        if (touchEndX > touchStartX + 50) {
            // Swipe right - open menu if closed and on mobile
            if (window.innerWidth <= 768 && !navMenu.classList.contains('active')) {
                hamburger.classList.add('active');
                navMenu.classList.add('active');
            }
        }
    }

    // Performance optimization - Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScroll = debounce(function() {
        // Scroll-related functions here
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    // Add CSS for notifications and animations
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            color: #333;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            background: rgba(76, 175, 80, 0.95);
            color: white;
        }
        
        .notification.error {
            background: rgba(244, 67, 54, 0.95);
            color: white;
        }
        
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        body.loaded {
            overflow-x: hidden;
        }
        
        .project-item {
            transition: all 0.3s ease;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);

    console.log('Prodigy Infotech website loaded successfully!');
});
