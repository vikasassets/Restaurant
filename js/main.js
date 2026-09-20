// GRAND EATING POINT - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Menu Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuContents = document.querySelectorAll('.menu-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            menuContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            const target = btn.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // 4. GSAP Animations
    // Ensure GSAP is loaded
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation Sequence
        const heroTl = gsap.timeline();
        
        heroTl.to('#hero-img', {
            scale: 1,
            duration: 2.5,
            ease: 'power2.out'
        }, 0)
        .to('.hero-small-text', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 0.5)
        .to('.hero-title', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 0.7)
        .to('.hero-tagline', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 0.9)
        .to('.hero-desc', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 1.1)
        .to('.hero-location-text', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 1.3)
        .to('.hero-buttons', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out'
        }, 1.5);

        // Hero Scroll Parallax
        gsap.to('.hero-content', {
            y: -100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Cravings Scroll Animation
        gsap.to('#craving-cards', {
            x: () => -(document.getElementById('craving-cards').scrollWidth - window.innerWidth + 100),
            ease: 'none',
            scrollTrigger: {
                trigger: '.craving-section',
                start: 'top center',
                end: 'bottom top',
                scrub: 1,
                pin: false
            }
        });

        // Signature Dishes Reveal
        gsap.from('.sig-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.signature-section',
                start: 'top 70%'
            },
            onComplete: () => {
                gsap.set('.sig-card', { clearProps: 'all' });
                document.querySelectorAll('.sig-card').forEach(c => c.classList.add('ready'));
            }
        });

        // Story Parallax
        gsap.from('.story-image img', {
            scale: 1.2,
            ease: 'none',
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        // Final CTA Zoom
        gsap.from('.cta-bg img', {
            scale: 1.3,
            ease: 'none',
            scrollTrigger: {
                trigger: '.final-cta',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
        
    }
});
