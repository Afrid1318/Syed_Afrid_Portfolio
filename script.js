/* ==========================================================================
   SYED AFRID M PORTFOLIO SCRIPT LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const iconPaths = {
        'fa-bars-staggered': '<path d="M4 7h12"/><path d="M8 12h12"/><path d="M4 17h14"/>',
        'fa-xmark': '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
        'fa-arrow-down-long': '<path d="M12 4v14"/><path d="M6 12l6 6 6-6"/>',
        'fa-paper-plane': '<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4 18-7z"/>',
        'fa-code': '<path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M14 5l-4 14"/>',
        'fa-java': '<path d="M10 18c-3 .7-5 .2-5-.8 0-.7 1-1.3 2.7-1.6"/><path d="M14 18c3-.6 5-.1 5 .9 0 1.4-4.5 2-9.5 1.1"/><path d="M10 13c-1.4-1.1 4.6-2.1 2.2-4.2"/><path d="M13 4c2 2-3.6 3.5-.7 5.5"/>',
        'fa-python': '<path d="M8 9h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4"/><path d="M16 15H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4"/><path d="M9 6h.01"/><path d="M15 18h.01"/>',
        'fa-js': '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9v6c0 1.4-.8 2-2 2"/><path d="M14 16c.5.7 1.3 1 2.2 1 1 0 1.8-.5 1.8-1.4 0-.8-.6-1.1-1.8-1.5-1.2-.4-2-.9-2-2.1 0-1.3 1-2.1 2.4-2.1.8 0 1.5.2 2 .7"/>',
        'fa-js-square': '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9v6c0 1.4-.8 2-2 2"/><path d="M14 16c.5.7 1.3 1 2.2 1 1 0 1.8-.5 1.8-1.4 0-.8-.6-1.1-1.8-1.5-1.2-.4-2-.9-2-2.1 0-1.3 1-2.1 2.4-2.1.8 0 1.5.2 2 .7"/>',
        'fa-database': '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
        'fa-laptop-code': '<path d="M5 6h14v9H5z"/><path d="M3 18h18"/><path d="M10 9l-2 2 2 2"/><path d="M14 9l2 2-2 2"/>',
        'fa-html5': '<path d="M5 3h14l-1.3 15L12 21l-5.7-3L5 3z"/><path d="M9 8h6"/><path d="M9.3 12h5.4l-.3 3-2.4 1.2L9.6 15"/>',
        'fa-css3-alt': '<path d="M5 3h14l-1.3 15L12 21l-5.7-3L5 3z"/><path d="M15 8H9l.2 3H15l-.4 4L12 16.2 9.4 15"/>',
        'fa-mobile-screen-button': '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/>',
        'fa-server': '<rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01"/><path d="M8 17h.01"/>',
        'fa-cloud-arrow-up': '<path d="M16 16h2a4 4 0 0 0 0-8 6 6 0 0 0-11.5-1.8A5 5 0 0 0 6 16h2"/><path d="M12 19V10"/><path d="M8 14l4-4 4 4"/>',
        'fa-cubes': '<path d="M12 2l6 3.5v7L12 16l-6-3.5v-7L12 2z"/><path d="M6 5.5l6 3.5 6-3.5"/><path d="M12 9v7"/><path d="M4 14l4 2.3v4.2L4 18.2V14z"/><path d="M20 14l-4 2.3v4.2l4-2.3V14z"/>',
        'fa-table': '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 10h16"/><path d="M10 5v14"/><path d="M15 5v14"/>',
        'fa-robot': '<rect x="5" y="8" width="14" height="10" rx="3"/><path d="M12 8V4"/><path d="M9 13h.01"/><path d="M15 13h.01"/><path d="M9 17h6"/><path d="M3 12h2"/><path d="M19 12h2"/>',
        'fa-bolt': '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
        'fa-brain': '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 7 18h2V4z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 17 18h-2V4z"/><path d="M9 9H7"/><path d="M15 9h2"/><path d="M9 14H7"/><path d="M15 14h2"/>',
        'fa-wand-magic-sparkles': '<path d="M15 4l5 5"/><path d="M13 6l5 5L7 22l-5-5L13 6z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 15v4"/><path d="M17 17h4"/>',
        'fa-microchip': '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M1 9h3"/><path d="M1 15h3"/><path d="M20 9h3"/><path d="M20 15h3"/>',
        'fa-puzzle-piece': '<path d="M8 3h5v4a2 2 0 1 0 4 0V3h4v6h-4a2 2 0 1 0 0 4h4v8h-6v-4a2 2 0 1 0-4 0v4H3v-6h4a2 2 0 1 0 0-4H3V3h5z"/>',
        'fa-network-wired': '<rect x="3" y="3" width="6" height="5" rx="1"/><rect x="15" y="3" width="6" height="5" rx="1"/><rect x="9" y="16" width="6" height="5" rx="1"/><path d="M6 8v3h12V8"/><path d="M12 11v5"/>',
        'fa-terminal': '<path d="M4 17l6-5-6-5"/><path d="M12 19h8"/>',
        'fa-gears': '<circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M4.9 4.9L7 7"/><path d="M17 17l2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M4.9 19.1L7 17"/><path d="M17 7l2.1-2.1"/>',
        'fa-git-alt': '<path d="M15 6l3 3-3 3"/><path d="M6 6l12 12"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="18" cy="9" r="2"/>',
        'fa-github': '<path d="M9 19c-5 1.5-5-2.5-7-3"/><path d="M15 22v-3.5c0-1 .1-1.4-.5-2 3.1-.3 6.5-1.5 6.5-7A5.4 5.4 0 0 0 19.5 6 5 5 0 0 0 19.4 2S18 1.6 15 3.5a15.4 15.4 0 0 0-8 0C4 1.6 2.6 2 2.6 2a5 5 0 0 0-.1 4A5.4 5.4 0 0 0 1 9.5c0 5.5 3.4 6.7 6.5 7-.6.6-.6 1.2-.5 2V22"/>',
        'fa-graduation-cap': '<path d="M2 8l10-5 10 5-10 5L2 8z"/><path d="M6 10v5c3.5 2 8.5 2 12 0v-5"/><path d="M22 8v6"/>',
        'fa-arrow-right': '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
        'fa-chevron-right': '<path d="M9 18l6-6-6-6"/>',
        'fa-envelope': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/>',
        'fa-copy': '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V6a2 2 0 0 1 2-2h10"/>',
        'fa-check': '<path d="M20 6L9 17l-5-5"/>',
        'fa-phone': '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"/>',
        'fa-whatsapp': '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"/><path d="M9 8.8c.3 3 2.4 5 5.2 5.8l1.3-1.3-2.2-1-1 .7c-1-.5-1.8-1.3-2.3-2.3l.7-1-1-2.2L9 8.8z"/>',
        'fa-map-location-dot': '<path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
        'fa-linkedin-in': '<rect x="3" y="8" width="4" height="12"/><path d="M5 5h.01"/><path d="M11 20v-7a4 4 0 0 1 8 0v7"/><path d="M11 12v8"/>',
        'fa-globe': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
        'fa-arrow-up-long': '<path d="M12 20V6"/><path d="M6 12l6-6 6 6"/>',
        'fa-user-tie': '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/><path d="M10 12l2 3 2-3"/><path d="M12 15v6"/>',
        'fa-circle-check': '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>'
    };

    const buildIconSvg = (name) => {
        const path = iconPaths[name] || iconPaths['fa-code'];
        return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${path}</svg>`;
    };

    const hydrateStaticIcons = (scope = document) => {
        scope.querySelectorAll('i[class*="fa-"]').forEach(icon => {
            const match = Array.from(icon.classList).find(className => iconPaths[className]);
            icon.innerHTML = buildIconSvg(match);
            icon.classList.add('static-icon');
            icon.setAttribute('aria-hidden', 'true');
        });
    };

    const setStaticIcon = (icon, className) => {
        if (!icon) return;
        icon.className = `static-icon ${className}`;
        icon.innerHTML = buildIconSvg(className);
        icon.setAttribute('aria-hidden', 'true');
    };

    hydrateStaticIcons();

    // ==========================================================================
    // 1. CUSTOM CURSOR TRACKER
    // ==========================================================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline && window.innerWidth > 768) {
        document.body.classList.add('custom-cursor-active');
        let mouseX = 0, mouseY = 0; // Actual mouse position
        let outlineX = 0, outlineY = 0; // Lagged outline position

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move the dot instantly
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Frame animation to lerp (interpolate) the outline position
        const animateCursor = () => {
            const ease = 0.15; // Speed of outline following dot
            outlineX += (mouseX - outlineX) * ease;
            outlineY += (mouseY - outlineY) * ease;

            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Hover effect scaling for clickable items
        const hoverables = document.querySelectorAll('a, button, .btn-glow, .bot-question-btn, .copy-badge, .social-btn, .project-card, .edu-card');
        hoverables.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.8)';
                cursorDot.style.backgroundColor = 'var(--accent)';
                cursorDot.style.boxShadow = '0 0 15px var(--accent-glow)';
                
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.borderColor = 'var(--primary)';
                cursorOutline.style.boxShadow = '0 0 15px var(--primary-glow)';
            });

            item.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.backgroundColor = 'var(--primary)';
                cursorDot.style.boxShadow = '0 0 10px var(--primary)';
                
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.borderColor = 'var(--secondary)';
                cursorOutline.style.boxShadow = '0 0 8px var(--secondary-glow)';
            });
        });
    }

    // ==========================================================================
    // 2. MOBILE MENU NAVIGATION
    // ==========================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate toggle icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                setStaticIcon(icon, 'fa-xmark');
            } else {
                setStaticIcon(icon, 'fa-bars-staggered');
            }
        });

        // Close mobile menu on nav link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                setStaticIcon(menuToggle.querySelector('i'), 'fa-bars-staggered');
            });
        });
    }

    // Header scroll background change
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================================================
    // 3. VANILLA CANVAS INTERACTIVE PARTICLE NEBULA
    // ==========================================================================
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const stars = [];
        const clouds = [];
        const ringNodes = [];
        const comets = [];
        const starColors = ['rgba(210, 252, 255, 1)', 'rgba(0, 242, 254, 0.95)', 'rgba(188, 128, 255, 0.9)', 'rgba(255, 115, 190, 0.85)'];
        const cloudColors = ['rgba(0, 242, 254, 0.13)', 'rgba(157, 78, 221, 0.16)', 'rgba(255, 0, 127, 0.11)'];
        let width = 0;
        let height = 0;
        let centerX = 0;
        let centerY = 0;
        let focalLength = 0;
        let mouseXTarget = 0;
        let mouseYTarget = 0;
        let mouseXCurrent = 0;
        let mouseYCurrent = 0;

        canvasContainer.appendChild(canvas);

        const resetStar = (star, randomDepth = true) => {
            star.x = (Math.random() - 0.5) * width * 2.2;
            star.y = (Math.random() - 0.5) * height * 2.1;
            star.z = randomDepth ? Math.random() * width + 80 : width + Math.random() * 120;
            star.radius = Math.random() * 1.45 + 0.25;
            star.speed = Math.random() * 0.85 + 0.35;
            star.twinkle = Math.random() * Math.PI * 2;
            star.color = starColors[Math.floor(Math.random() * starColors.length)];
        };

        const resetCloud = (cloud) => {
            cloud.x = (Math.random() - 0.5) * width * 1.45;
            cloud.y = (Math.random() - 0.5) * height * 1.15;
            cloud.z = Math.random() * width + 260;
            cloud.radius = Math.random() * 170 + 130;
            cloud.speed = Math.random() * 0.12 + 0.035;
            cloud.phase = Math.random() * Math.PI * 2;
            cloud.color = cloudColors[Math.floor(Math.random() * cloudColors.length)];
        };

        const resetComet = (comet) => {
            comet.x = -width * (0.6 + Math.random() * 0.5);
            comet.y = (Math.random() - 0.5) * height * 0.85;
            comet.z = Math.random() * width + 220;
            comet.speed = Math.random() * 1.8 + 1.2;
            comet.size = Math.random() * 1.3 + 0.8;
            comet.delay = Math.random() * 900;
            comet.color = starColors[Math.floor(Math.random() * starColors.length)];
        };

        const projectPoint = (item) => {
            const scale = focalLength / item.z;
            const x = centerX + (item.x + mouseXCurrent * 95) * scale;
            const y = centerY + (item.y + mouseYCurrent * 65) * scale;
            return { x, y, scale };
        };

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            centerX = width / 2;
            centerY = height / 2;
            focalLength = Math.min(width, height) * 0.9;
            canvas.width = Math.floor(width * Math.min(window.devicePixelRatio || 1, 2));
            canvas.height = Math.floor(height * Math.min(window.devicePixelRatio || 1, 2));
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);

            const starCount = Math.min(560, Math.max(230, Math.floor((width * height) / 2900)));
            stars.length = 0;
            for (let i = 0; i < starCount; i++) {
                const star = {};
                resetStar(star);
                stars.push(star);
            }

            const cloudCount = Math.min(14, Math.max(8, Math.floor(width / 160)));
            clouds.length = 0;
            for (let i = 0; i < cloudCount; i++) {
                const cloud = {};
                resetCloud(cloud);
                clouds.push(cloud);
            }

            ringNodes.length = 0;
            const nodeCount = Math.min(120, Math.max(72, Math.floor(width / 12)));
            for (let i = 0; i < nodeCount; i++) {
                ringNodes.push({
                    angle: (Math.PI * 2 * i) / nodeCount,
                    orbit: 0.78 + Math.random() * 0.42,
                    speed: 0.00018 + Math.random() * 0.00018,
                    size: 0.7 + Math.random() * 1.8,
                    layer: i % 3
                });
            }

            comets.length = 0;
            const cometCount = width > 760 ? 5 : 3;
            for (let i = 0; i < cometCount; i++) {
                const comet = {};
                resetComet(comet);
                comet.x += i * width * 0.42;
                comets.push(comet);
            }
        };

        window.addEventListener('mousemove', (e) => {
            mouseXTarget = (e.clientX / width - 0.5) * 2;
            mouseYTarget = (e.clientY / height - 0.5) * 2;
        });

        const drawNebula = (time, scrollRatio) => {
            const backdrop = ctx.createRadialGradient(centerX, centerY * 0.82, 0, centerX, centerY, Math.max(width, height));
            backdrop.addColorStop(0, 'rgba(22, 16, 50, 0.72)');
            backdrop.addColorStop(0.48, 'rgba(5, 10, 24, 0.45)');
            backdrop.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
            ctx.fillStyle = backdrop;
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            clouds.forEach(cloud => {
                cloud.z -= cloud.speed * (1 + scrollRatio * 2.2);
                cloud.phase += 0.002;
                if (cloud.z < 160) resetCloud(cloud);

                const projected = projectPoint(cloud);
                const pulse = 0.9 + Math.sin(time * 0.0007 + cloud.phase) * 0.12;
                const radius = cloud.radius * projected.scale * pulse;
                const x = projected.x + Math.sin(time * 0.00018 + cloud.phase) * 24;
                const y = projected.y + Math.cos(time * 0.00014 + cloud.phase) * 18;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, cloud.color);
                gradient.addColorStop(0.45, cloud.color.replace(/0\.\d+\)/, '0.055)'));
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        };

        const drawGrid = (time, scrollRatio) => {
            ctx.save();
            ctx.translate(centerX + mouseXCurrent * 34, height * 0.86 + mouseYCurrent * 24);
            ctx.strokeStyle = 'rgba(0, 242, 254, 0.065)';
            ctx.lineWidth = 1;
            const spacing = 54;
            const drift = (time * 0.032 + scrollRatio * 260) % spacing;

            for (let x = -width; x <= width; x += spacing) {
                ctx.beginPath();
                ctx.moveTo(x * 0.35 + drift, -height * 0.28);
                ctx.lineTo(x * 1.85 + drift, height * 0.34);
                ctx.stroke();
            }

            for (let y = -height * 0.26; y <= height * 0.34; y += spacing) {
                ctx.beginPath();
                ctx.moveTo(-width, y + drift);
                ctx.lineTo(width, y + drift * 0.35);
                ctx.stroke();
            }

            ctx.restore();
        };

        const drawOrbitalCore = (time, scrollRatio) => {
            const coreX = centerX + mouseXCurrent * 48;
            const coreY = centerY * 0.74 + mouseYCurrent * 34 - scrollRatio * 56;
            const base = Math.min(width, height);
            const coreRadius = Math.max(76, Math.min(150, base * 0.14));
            const spin = time * 0.00028;

            ctx.save();
            ctx.globalCompositeOperation = 'screen';

            const aura = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, coreRadius * 3.8);
            aura.addColorStop(0, 'rgba(0, 242, 254, 0.24)');
            aura.addColorStop(0.32, 'rgba(157, 78, 221, 0.16)');
            aura.addColorStop(0.68, 'rgba(255, 0, 127, 0.06)');
            aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = aura;
            ctx.beginPath();
            ctx.arc(coreX, coreY, coreRadius * 3.8, 0, Math.PI * 2);
            ctx.fill();

            for (let ring = 0; ring < 4; ring++) {
                ctx.save();
                ctx.translate(coreX, coreY);
                ctx.rotate(spin * (ring % 2 === 0 ? 1 : -1) + ring * 0.55);
                ctx.scale(1, 0.28 + ring * 0.085);
                ctx.strokeStyle = ring % 2 === 0 ? 'rgba(0, 242, 254, 0.26)' : 'rgba(157, 78, 221, 0.23)';
                ctx.lineWidth = Math.max(1, 2.4 - ring * 0.32);
                ctx.beginPath();
                ctx.ellipse(0, 0, coreRadius * (1.35 + ring * 0.34), coreRadius * (0.72 + ring * 0.1), 0, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }

            ringNodes.forEach(node => {
                const orbitRadius = coreRadius * (1.45 + node.orbit * 0.85);
                const tilt = 0.28 + node.layer * 0.08;
                const angle = node.angle + time * node.speed * (node.layer === 1 ? -1 : 1);
                const depth = Math.sin(angle) * 0.5 + 0.5;
                const x = coreX + Math.cos(angle) * orbitRadius + mouseXCurrent * node.layer * 8;
                const y = coreY + Math.sin(angle) * orbitRadius * tilt + mouseYCurrent * node.layer * 5;
                const alpha = 0.22 + depth * 0.56;
                const radius = node.size * (0.65 + depth * 1.15);

                ctx.fillStyle = `rgba(0, 242, 254, ${alpha})`;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            const planet = ctx.createRadialGradient(coreX - coreRadius * 0.28, coreY - coreRadius * 0.32, coreRadius * 0.1, coreX, coreY, coreRadius);
            planet.addColorStop(0, 'rgba(255, 255, 255, 0.96)');
            planet.addColorStop(0.18, 'rgba(0, 242, 254, 0.82)');
            planet.addColorStop(0.48, 'rgba(62, 42, 156, 0.72)');
            planet.addColorStop(0.78, 'rgba(10, 12, 42, 0.92)');
            planet.addColorStop(1, 'rgba(0, 0, 0, 0.98)');
            ctx.fillStyle = planet;
            ctx.beginPath();
            ctx.arc(coreX, coreY, coreRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = 1;
            for (let band = -2; band <= 2; band++) {
                ctx.beginPath();
                ctx.ellipse(coreX, coreY + band * coreRadius * 0.18, coreRadius * (0.82 - Math.abs(band) * 0.08), coreRadius * 0.1, spin + band * 0.18, 0, Math.PI * 2);
                ctx.stroke();
            }

            const flare = ctx.createLinearGradient(coreX - coreRadius * 2.4, coreY, coreX + coreRadius * 2.4, coreY);
            flare.addColorStop(0, 'rgba(0, 242, 254, 0)');
            flare.addColorStop(0.48, 'rgba(0, 242, 254, 0.22)');
            flare.addColorStop(0.52, 'rgba(255, 255, 255, 0.42)');
            flare.addColorStop(1, 'rgba(157, 78, 221, 0)');
            ctx.strokeStyle = flare;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(coreX - coreRadius * 2.4, coreY);
            ctx.lineTo(coreX + coreRadius * 2.4, coreY);
            ctx.stroke();

            ctx.restore();
        };

        const drawComets = (time, scrollRatio) => {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            comets.forEach(comet => {
                if (time < comet.delay) return;
                comet.x += comet.speed * (1 + scrollRatio * 2);
                comet.y += comet.speed * 0.28;
                comet.z -= comet.speed * 0.14;

                const projected = projectPoint(comet);
                const size = comet.size * projected.scale * 1.8;
                const tailLength = Math.min(180, 60 * projected.scale);

                if (projected.x > width + 180 || projected.y > height + 120 || comet.z < 80) {
                    resetComet(comet);
                    comet.delay = time + Math.random() * 2400;
                    return;
                }

                const gradient = ctx.createLinearGradient(projected.x - tailLength, projected.y - tailLength * 0.32, projected.x, projected.y);
                gradient.addColorStop(0, 'rgba(0, 242, 254, 0)');
                gradient.addColorStop(0.62, 'rgba(0, 242, 254, 0.12)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.78)');
                ctx.strokeStyle = gradient;
                ctx.lineWidth = Math.max(1, size);
                ctx.beginPath();
                ctx.moveTo(projected.x - tailLength, projected.y - tailLength * 0.32);
                ctx.lineTo(projected.x, projected.y);
                ctx.stroke();

                ctx.fillStyle = comet.color;
                ctx.beginPath();
                ctx.arc(projected.x, projected.y, Math.max(1.2, size), 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        };

        const drawStars = (time, scrollRatio) => {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            stars.forEach(star => {
                star.z -= star.speed * (1 + scrollRatio * 3.4);
                star.twinkle += 0.035;

                if (star.z < 35) {
                    resetStar(star, false);
                }

                const projected = projectPoint(star);
                const size = Math.max(0.25, star.radius * projected.scale * 2.1);
                const alpha = Math.min(1, Math.max(0.12, projected.scale * 0.72)) * (0.72 + Math.sin(star.twinkle + time * 0.002) * 0.22);

                if (projected.x < -60 || projected.x > width + 60 || projected.y < -60 || projected.y > height + 60) {
                    resetStar(star, false);
                    return;
                }

                const tail = Math.min(18, projected.scale * 4.8);
                ctx.strokeStyle = star.color.replace('1)', `${alpha * 0.32})`).replace('0.95)', `${alpha * 0.32})`).replace('0.9)', `${alpha * 0.32})`).replace('0.85)', `${alpha * 0.32})`);
                ctx.lineWidth = Math.max(0.4, size * 0.42);
                ctx.beginPath();
                ctx.moveTo(projected.x, projected.y);
                ctx.lineTo(projected.x - mouseXCurrent * tail, projected.y - (0.9 + mouseYCurrent) * tail);
                ctx.stroke();

                const glowRadius = size * 5.5;
                const glow = ctx.createRadialGradient(projected.x, projected.y, 0, projected.x, projected.y, glowRadius);
                glow.addColorStop(0, star.color.replace('1)', `${alpha})`).replace('0.95)', `${alpha})`).replace('0.9)', `${alpha})`).replace('0.85)', `${alpha})`));
                glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(projected.x, projected.y, glowRadius, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        };

        const animateScene = (time = 0) => {
            mouseXCurrent += (mouseXTarget - mouseXCurrent) * 0.05;
            mouseYCurrent += (mouseYTarget - mouseYCurrent) * 0.05;
            const scrollRatio = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);

            drawNebula(time, scrollRatio);
            drawGrid(time, scrollRatio);
            drawOrbitalCore(time, scrollRatio);
            drawComets(time, scrollRatio);
            drawStars(time, scrollRatio);

            requestAnimationFrame(animateScene);
        };

        resizeCanvas();
        animateScene();
        window.addEventListener('resize', resizeCanvas);
    }

    // ==========================================================================
    // 4. TYPING TEXT HERO ANIMATION
    // ==========================================================================
    const typedTextSpan = document.getElementById('typed');
    if (typedTextSpan) {
        const textArray = ["Full-Stack Web Developer.", "AI Solutions Integrator.", "MCA Postgraduate.", "Problem Solver."];
        const typingSpeed = 100;
        const erasingSpeed = 60;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        const type = () => {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newTextDelay);
            }
        };

        const erase = () => {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingSpeed + 50);
            }
        };

        // Start typing loop
        setTimeout(type, newTextDelay - 1000);
    }

    // ==========================================================================
    // 5. SCROLL & REVEAL ANIMATIONS
    // ==========================================================================
    ['.hero-greeting', '.hero-name', '.hero-title', '.hero-desc', '.hero-actions'].forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (!element) return;
        element.style.opacity = '0';
        element.style.transform = index === 4 ? 'scale(0.96)' : 'translateY(22px)';
        element.style.transition = 'opacity 0.75s ease, transform 0.75s ease';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
        }, 180 + index * 160);
    });

    const revealItems = document.querySelectorAll('.scroll-reveal, .timeline-item, .section-header');
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    revealItems.forEach(item => revealObserver.observe(item));

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');
    const activateLink = (id) => {
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
        });
    };

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateLink(entry.target.id);
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(section => navObserver.observe(section));

    // ==========================================================================
    // 6. INTERACTIVE 3D TILT EFFECT FOR CARDS
    // ==========================================================================
    const tiltCards = document.querySelectorAll('#profile-card, .project-card, .edu-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            
            // Calculate mouse coordinates relative to card center
            const mouseX = e.clientX - cardRect.left - cardWidth / 2;
            const mouseY = e.clientY - cardRect.top - cardHeight / 2;
            
            // Maximum tilt angle (in degrees)
            const maxTilt = 10;
            
            // Calculate rotation angles based on mouse position ratio
            const rotateX = -(mouseY / (cardHeight / 2)) * maxTilt;
            const rotateY = (mouseX / (cardWidth / 2)) * maxTilt;
            
            // Apply 3D transforms
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            // Smoothly reset transformations on mouse leave
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            // Temporarily disable transition during mousemove for high responsive performance
            card.style.transition = 'none';
        });
    });

    // ==========================================================================
    // 7. INTERACTIVE AI CHATBOT TERMINAL MOCKUP
    // ==========================================================================
    const chatViewport = document.getElementById('chat-viewport');
    const questionButtons = document.querySelectorAll('.bot-question-btn');

    // Brain Database for answers
    const chatbotResponses = {
        "What are your core skills?": `I specialize in Full-Stack Web Development. My primary language stack includes **Java, Python, JavaScript, and SQL**. On the frontend, I work with **HTML5, CSS3, and JavaScript**. For backend architectures, I design RESTful APIs integrated with **PostgreSQL** databases. Additionally, I utilize AI tools like **GitHub Copilot, Claude AI, Codex, AntiGravity, Kombai, Zencoder, and Trayser** to optimize performance.`,
        
        "Tell me about SFO Technologies.": `During my time at **SFO Technologies** (Dec 2025 – Mar 2026) as a Full Stack Web Development Intern, I built **"Meeting Suite"**, an end-to-end web application integrating frontend, backend, and database systems. I also gained hands-on experience in **Microsoft Dynamics 365 F&O** and enterprise ERP processes. This system improved operational workflow efficiency by **30%**.`,
        
        "What projects have you completed?": `I have engineered three notable systems:<br><br>
1. **E-Learning Web Application**: A real-time learning platform with role-based access, chatbots, course and assessment managers, performance analytics, and QR certification (improving engagement by 40%).<br>
2. **VCAN3D Website**: A responsive static business site with AI components and WhatsApp client integrations.<br>
3. **Portfolio Website**: An interactive static site built with HTML, CSS, and vanilla JavaScript.`,
        
        "Is Afrid looking for new opportunities?": `Yes! As an MCA graduate with practical industry intern experience, I am actively looking for **Full-Stack Developer, Frontend/Backend Engineer, or Web Development** positions and internships. I am situated in Chennai, India, but open to remote collaborations. You can message me via the contact form or LinkedIn!`
    };

    questionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const questionText = btn.getAttribute('data-question');
            const answerText = chatbotResponses[questionText];

            if (!answerText) return;

            // Disable all buttons during bot response generation
            toggleChatButtons(false);

            // 1. Add User Message
            addChatMessage(questionText, 'user');
            
            // 2. Add Bot typing bubble indicator after small delay
            setTimeout(() => {
                const typingBubble = addChatTypingBubble();
                
                // 3. Simulate bot response print after simulation delay
                setTimeout(() => {
                    // Remove typing bubble
                    typingBubble.remove();
                    
                    // Add actual answer text with typing simulation
                    addChatMessageWithTypingEffect(answerText);
                }, 1200);

            }, 400);
        });
    });

    const toggleChatButtons = (enable) => {
        questionButtons.forEach(btn => {
            btn.disabled = !enable;
            btn.style.opacity = enable ? '1' : '0.6';
        });
    };

    const addChatMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = sender === 'bot' ? 'AI' : 'ME';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = text;

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        chatViewport.appendChild(msgDiv);

        // Scroll to viewport bottom
        chatViewport.scrollTop = chatViewport.scrollHeight;
    };

    const addChatTypingBubble = () => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg bot';
        
        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = 'AI';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';

        bubble.appendChild(indicator);
        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        chatViewport.appendChild(msgDiv);

        chatViewport.scrollTop = chatViewport.scrollHeight;
        return msgDiv;
    };

    const addChatMessageWithTypingEffect = (fullHtml) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg bot';
        
        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = 'AI';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);
        chatViewport.appendChild(msgDiv);

        let currentText = '';
        let i = 0;

        // Simple HTML token typist simulation (handles characters tags)
        const typeWriter = () => {
            if (i < fullHtml.length) {
                if (fullHtml.charAt(i) === '<') {
                    // Fast-forward HTML tags to render them correctly without exposing tags
                    const tagEnd = fullHtml.indexOf('>', i);
                    if (tagEnd !== -1) {
                        currentText += fullHtml.substring(i, tagEnd + 1);
                        i = tagEnd + 1;
                    }
                } else {
                    currentText += fullHtml.charAt(i);
                    i++;
                }
                bubble.innerHTML = currentText;
                chatViewport.scrollTop = chatViewport.scrollHeight;
                setTimeout(typeWriter, 5); // Fast typing pace
            } else {
                // Done writing response
                toggleChatButtons(true);
            }
        };

        typeWriter();
    };

    // ==========================================================================
    // 8. CONTACT FORM SUBMISSION & COPY BADGES
    // ==========================================================================
    // Copy Clipboard
    const copyCards = document.querySelectorAll('[data-copy]');
    copyCards.forEach(card => {
        const copyBadge = card.querySelector('.copy-badge');
        card.addEventListener('click', (e) => {
            // Prevent link trigger if clicking badge
            if (e.target.tagName === 'A') return;

            const textToCopy = card.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                if (copyBadge) {
                    copyBadge.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                    hydrateStaticIcons(copyBadge);
                    copyBadge.style.background = 'var(--primary)';
                    copyBadge.style.color = 'var(--bg-dark)';
                    
                    setTimeout(() => {
                        copyBadge.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
                        hydrateStaticIcons(copyBadge);
                        copyBadge.style.background = 'rgba(255, 255, 255, 0.05)';
                        copyBadge.style.color = 'var(--text-main)';
                    }, 2000);
                }
            });
        });
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formStatusBox = document.getElementById('form-status-box');

    if (contactForm && formStatusBox) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate sending transmission message
            formStatusBox.style.display = 'block';
            formStatusBox.className = 'form-status-msg';
            formStatusBox.textContent = 'Initiating link protocols...';

            setTimeout(() => {
                formStatusBox.className = 'form-status-msg success';
                formStatusBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> Transmission securely delivered! Thank you.';
                hydrateStaticIcons(formStatusBox);
                contactForm.reset();
            }, 1200);
        });
    }

    // Scroll back to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================================================
    // 9. PROJECT DETAIL MODAL LOGIC
    // ==========================================================================
    const projectModal = document.getElementById('project-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    const projectDetails = {
        'project-elearning': {
            title: 'MEASI LMS',
            icon: 'fa-graduation-cap',
            tags: ['React.js', 'Node.js', 'Supabase', 'OAuth 2.0'],
            desc: 'Engineered a comprehensive real-time e-learning management platform (LMS) designed for MEASI Institute. Features include role-based instructor/student workspaces, chatbot integrations, course progression trackers, online assessments, and automatic certification. Built on a modern React frontend and dynamic Express API server secured via JSON Web Tokens (JWT) and OAuth 2.0 protocols.',
            tech: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'REST API', 'JWT', 'OAuth 2.0', 'Supabase (Backend DB)', 'OpenAI / OpenAPI'],
            highlights: [
                'Engineered a scalable React.js and TypeScript single-page dashboard application.',
                'Designed a secure middleware architecture utilizing JSON Web Tokens (JWT) and OAuth 2.0 verification.',
                'Implemented database syncing and user profiles hosting using Supabase and PostgreSQL.',
                'Integrated OpenAI conversational chat modules to serve as virtual course assistants.',
                'Automated grading systems and analytics, improving student completion rates by 40%.'
            ]
        },
        'project-vcan3d': {
            title: 'VCAN3D Website',
            icon: 'fa-cubes',
            tags: ['HTML5/CSS3', 'AI Integration', 'WhatsApp API'],
            desc: 'Developed a high-performance multi-page static portal representing VCAN3D\'s service catalogue. Built with customized interactive AI workflows and a direct-action WhatsApp communication client, this system enables seamless, automated client onboarding and queries routing. Underwent thorough layout optimization, visual asset loading compression, and design refinements, establishing a responsive user flow that significantly elevated page conversion rates.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API', 'AI Client Components'],
            highlights: [
                'Created modular layout flows showcasing 3D modeling and rendering portfolios.',
                'Built instant-communication WhatsApp routing modules to support customer leads.',
                'Optimized asset sizes, achieving a 45% load-time reduction across image galleries.',
                'Achieved 100% responsiveness across all modern browser configurations.'
            ]
        },
        'project-portfolio': {
            title: 'Portfolio Website',
            icon: 'fa-user-tie',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            desc: 'A fully static interactive personal portfolio showcasing Syed Afrid M\'s development career, internships, and skill arrays. Written completely in HTML, CSS, and vanilla JavaScript, the page hosts a native canvas particle background, smooth IntersectionObserver reveal animations, elastic cursor following outlines, and an in-memory mock AI chatbot terminal that queries resume details in real time.',
            tech: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Canvas API', 'IntersectionObserver'],
            highlights: [
                'Developed a dynamic canvas particle nebula reacting in real time to mouse movements and scroll position.',
                'Designed an interactive neural chatbot console typewriting responses from resume databases.',
                'Engineered elastic dual-cursor indicators with custom hover filters and state scaling.',
                'Completely structured to work offline directly from local file-systems without CORS errors.'
            ]
        }
    };

    if (projectModal && modalClose && modalBackdrop) {
        // Function to open modal
        const openProjectModal = (projectId) => {
            const data = projectDetails[projectId];
            if (!data) return;

            // Populate text/icons
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-desc').textContent = data.desc;
            document.getElementById('modal-icon-container').innerHTML = `<i class="${data.icon}"></i>`;
            hydrateStaticIcons(document.getElementById('modal-icon-container'));

            // Populate tags
            const tagsContainer = document.getElementById('modal-tags');
            tagsContainer.innerHTML = '';
            data.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'project-tag';
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });

            // Populate tech badges
            const techContainer = document.getElementById('modal-tech');
            techContainer.innerHTML = '';
            data.tech.forEach(techName => {
                const badge = document.createElement('div');
                badge.className = 'modal-tech-badge';
                badge.textContent = techName;
                techContainer.appendChild(badge);
            });

            // Populate highlights list
            const highlightsContainer = document.getElementById('modal-highlights');
            highlightsContainer.innerHTML = '';
            data.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.textContent = highlight;
                highlightsContainer.appendChild(li);
            });

            // Show modal
            projectModal.classList.add('active');
            document.body.classList.add('modal-open');
        };

        // Close modal function
        const closeProjectModal = () => {
            projectModal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };

        // Attach event listeners to project cards
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // If clicking an actual link (not applicable now as we replaced them, but good safety check)
                if (e.target.tagName === 'A') return;
                
                const cardId = card.id;
                if (cardId && projectDetails[cardId]) {
                    openProjectModal(cardId);
                }
            });
        });

        // Close listeners
        modalClose.addEventListener('click', closeProjectModal);
        modalBackdrop.addEventListener('click', closeProjectModal);

        // Escape key to close modal
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }
});
