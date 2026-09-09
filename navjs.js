/**
 * ==========================================================================
 * NAVIGATION, CURSEUR PERSONNALISÉ & INTERACTIONS DU PORTFOLIO
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. CURSEUR PERSONNALISÉ FLUIDE
    // ----------------------------------------------------------------------
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('cursor-dot');

    if (cursor && cursorDot && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = -100, mouseY = -100;
        let cursorX = -100, cursorY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Animation fluide pour le cercle suiveur
        const renderCursor = () => {
            cursorX += (mouseX - cursorX) * 0.18;
            cursorY += (mouseY - cursorY) * 0.18;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Effet d'agrandissement sur les éléments cliquables
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .stat-card, .skill-card, .project-card, .contact-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '48px';
                cursor.style.height = '48px';
                cursor.style.borderColor = 'rgba(56, 189, 248, 0.9)';
                cursor.style.backgroundColor = 'rgba(56, 189, 248, 0.08)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '32px';
                cursor.style.height = '32px';
                cursor.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                cursor.style.backgroundColor = 'transparent';
            });
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorDot.style.opacity = '1';
        });
    }

    // ----------------------------------------------------------------------
    // 2. BARRE DE NAVIGATION FLOTTANTE & BOUTON SCROLL-UP
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('NavBar');
    const scrollUpBtn = document.getElementById('scroll-up_nav');

    const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Sticky Navbar
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Bouton Scroll-to-top
        if (scrollUpBtn) {
            if (scrollY > 400) {
                scrollUpBtn.classList.add('show');
            } else {
                scrollUpBtn.classList.remove('show');
            }
        }

        // ------------------------------------------------------------------
        // Détection de la section active (Scroll Spy)
        // ------------------------------------------------------------------
        const sections = document.querySelectorAll('header[id], section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialisation au chargement

    // ----------------------------------------------------------------------
    // 3. MENU BURGER MOBILE
    // ----------------------------------------------------------------------
    const burger = document.getElementById('burger-btn');
    const navMenu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.nav-link, .btn-cv-nav');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Fermer le menu lors du clic sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });

        // Fermer le menu lors d'un clic à l'extérieur
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !burger.contains(e.target) && navMenu.classList.contains('nav-active')) {
                navMenu.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4. MISE À JOUR DYNAMIQUE DE L'ANNÉE DU COPYRIGHT
    // ----------------------------------------------------------------------
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});