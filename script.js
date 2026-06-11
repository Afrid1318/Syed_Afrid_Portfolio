/* ==========================================================================
   SYED AFRID M PORTFOLIO SCRIPT LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

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
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars-staggered';
            }
        });

        // Close mobile menu on nav link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
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
    // 3. THREE.JS INTERACTIVE 3D PARTICLE NEBULA
    // ==========================================================================
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        
        // Camera configuration
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasContainer.appendChild(renderer.domElement);

        // Generate custom glowing round particle texture using HTML canvas
        const createParticleTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            const ctx = canvas.getContext('2d');
            
            const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(0, 242, 254, 0.8)');
            gradient.addColorStop(0.5, 'rgba(157, 78, 221, 0.35)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 16, 16);
            return new THREE.CanvasTexture(canvas);
        };

        const particleTexture = createParticleTexture();

        // Particles geometry
        const particleCount = 1800;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const colorCyan = new THREE.Color('#00f2fe');
        const colorPurple = new THREE.Color('#9d4edd');
        const colorAccent = new THREE.Color('#ff007f');

        for (let i = 0; i < particleCount * 3; i += 3) {
            // Distribute points in a spherical/ellipsoid cloud
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = 4.0 + Math.random() * 4.0; // Radius range

            positions[i] = r * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = r * Math.cos(phi);

            // Assign color distributions
            const randomColor = Math.random();
            let chosenColor = colorCyan;
            if (randomColor > 0.6) {
                chosenColor = colorPurple;
            } else if (randomColor > 0.9) {
                chosenColor = colorAccent;
            }

            colors[i] = chosenColor.r;
            colors[i + 1] = chosenColor.g;
            colors[i + 2] = chosenColor.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Material settings
        const material = new THREE.PointsMaterial({
            size: 0.15,
            sizeAttenuation: true,
            transparent: true,
            alphaMap: particleTexture,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Grid helper mesh for 3D depth feeling
        const gridGeometry = new THREE.PlaneGeometry(30, 30, 20, 20);
        const gridMaterial = new THREE.MeshBasicMaterial({
            color: 0x9d4edd,
            wireframe: true,
            transparent: true,
            opacity: 0.05
        });
        const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
        gridMesh.rotation.x = Math.PI / 2;
        gridMesh.position.y = -5;
        scene.add(gridMesh);

        // Parallax Interaction & Animation loop variables
        let mouseXTarget = 0;
        let mouseYTarget = 0;
        let mouseXCurrent = 0;
        let mouseYCurrent = 0;

        window.addEventListener('mousemove', (e) => {
            // Normalized coordinates (-1 to 1)
            mouseXTarget = (e.clientX / window.innerWidth) * 2 - 1;
            mouseYTarget = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Render Loop
        const clock = new THREE.Clock();

        const animateScene = () => {
            const elapsedTime = clock.getElapsedTime();

            // Rotate point cloud slowly
            particles.rotation.y = elapsedTime * 0.05;
            particles.rotation.x = elapsedTime * 0.02;

            // Animate grid floating
            gridMesh.position.y = -5 + Math.sin(elapsedTime * 0.5) * 0.2;

            // Interpolate mouse movements (lerp) for smooth parallax
            mouseXCurrent += (mouseXTarget - mouseXCurrent) * 0.05;
            mouseYCurrent += (mouseYTarget - mouseYCurrent) * 0.05;

            // Rotate points slightly based on mouse
            particles.rotation.y += mouseXCurrent * 0.25;
            particles.rotation.x += mouseYCurrent * 0.15;

            // Interactive scroll displacement
            const scrollRatio = window.scrollY / document.body.scrollHeight;
            particles.position.z = scrollRatio * 5;
            particles.position.y = -scrollRatio * 2;

            renderer.render(scene, camera);
            requestAnimationFrame(animateScene);
        };
        animateScene();

        // Handle window resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
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
    // 5. GSAP SCROLL & REVEAL ANIMATIONS
    // ==========================================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero fade-in entry animation
        gsap.from('.hero-greeting', { opacity: 0, y: -20, duration: 0.8, delay: 0.2, ease: 'power2.out' });
        gsap.from('.hero-name', { opacity: 0, y: 30, duration: 1, delay: 0.4, ease: 'power3.out' });
        gsap.from('.hero-title', { opacity: 0, duration: 1, delay: 0.7 });
        gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.8, delay: 0.9, ease: 'power2.out' });
        gsap.from('.hero-actions', { opacity: 0, scale: 0.95, duration: 0.8, delay: 1.1, ease: 'back.out(1.7)' });

        // Scroll reveals for cards and timeline
        const scrollReveals = document.querySelectorAll('.scroll-reveal');
        scrollReveals.forEach(element => {
            gsap.fromTo(element, 
                { opacity: 0, y: 40 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.85, 
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Timeline items progressive reveal
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const direction = index % 2 === 0 ? -40 : 40;
            gsap.fromTo(item,
                { opacity: 0, x: direction, y: 20 },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                    }
                }
            );
        });

        // Section header lines/glowing animations
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            gsap.from(header, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                }
            });
        });

        // Navigation active link swapping based on scroll trigger
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li a');

        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 30%',
                end: 'bottom 30%',
                onEnter: () => activateLink(section.id),
                onEnterBack: () => activateLink(section.id)
            });
        });

        const activateLink = (id) => {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${id}`) {
                    item.classList.add('active');
                }
            });
        };
    }

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
3. **Portfolio Website**: An interactive 3D site built with HTML, CSS, JS, Three.js, and GSAP.`,
        
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
                    copyBadge.style.background = 'var(--primary)';
                    copyBadge.style.color = 'var(--bg-dark)';
                    
                    setTimeout(() => {
                        copyBadge.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
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
                contactForm.reset();

                // Trigger confetti splash animation for success
                if (typeof confetti !== 'undefined') {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#00f2fe', '#9d4edd', '#ff007f']
                    });
                }
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
            icon: 'fa-solid fa-graduation-cap',
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
            icon: 'fa-solid fa-cubes',
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
            icon: 'fa-solid fa-user-tie',
            tags: ['Three.js', 'GSAP', 'HTML5/CSS/JS'],
            desc: 'A state-of-the-art interactive personal portfolio showcasing Syed Afrid M\'s development career, internships, and skill arrays. Written completely in pure HTML, CSS, and JS (loaded locally without CORS script blocks for high compatibility), the page hosts a 3D coordinates particle nebula utilizing Three.js, smooth GSAP ScrollTrigger timeline reveals, elastic cursor following outlines, and an in-memory mock AI chatbot terminal that queries resume details in real-time.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'GSAP Animations', 'Canvas-Confetti'],
            highlights: [
                'Developed a dynamic 3D particle nebula reacting in real-time to mouse movements and scroll ratios.',
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
