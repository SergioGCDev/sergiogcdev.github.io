<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sergio García Calero - iOS Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        header p {
            font-size: 1.1rem;
            opacity: 0.95;
        }
        
        .header-links {
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
        }
        
        .header-links a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border: 2px solid white;
            border-radius: 5px;
            transition: 0.3s;
            font-size: 0.95rem;
        }
        
        .header-links a:hover {
            background: white;
            color: #667eea;
        }
        
        nav {
            background: white;
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 100;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        nav a {
            text-decoration: none;
            color: #667eea;
            font-weight: 600;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #764ba2;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        section {
            background: white;
            margin-bottom: 2rem;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        section h2 {
            color: #667eea;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid #667eea;
        }
        
        .cv-item {
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #eee;
        }
        
        .cv-item:last-child {
            border-bottom: none;
        }
        
        .cv-item h3 {
            color: #333;
            margin-bottom: 0.3rem;
        }
        
        .cv-item .subtitle {
            color: #764ba2;
            font-weight: 600;
            font-size: 0.95rem;
        }
        
        .cv-item .date {
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
        
        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
        }
        
        .skill-tag {
            background: #f0f0f0;
            padding: 0.7rem 1rem;
            border-radius: 5px;
            text-align: center;
            font-weight: 500;
            color: #667eea;
            border-left: 4px solid #667eea;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        .project-card {
            background: #f9f9f9;
            border: 2px solid #eee;
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.3s;
        }
        
        .project-card:hover {
            border-color: #667eea;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
            transform: translateY(-2px);
        }
        
        .project-card h3 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }
        
        .project-card p {
            color: #666;
            margin-bottom: 1rem;
            font-size: 0.95rem;
        }
        
        .project-tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
        }
        
        .project-tag {
            background: #667eea;
            color: white;
            padding: 0.3rem 0.7rem;
            border-radius: 3px;
            font-size: 0.8rem;
        }
        
        .project-links {
            display: flex;
            gap: 1rem;
        }
        
        .project-links a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: color 0.3s;
        }
        
        .project-links a:hover {
            color: #764ba2;
        }
        
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
        }
        
        footer p {
            margin-bottom: 0.5rem;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-links a {
            color: #667eea;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .social-links a:hover {
            color: #fff;
        }
        
        @media (max-width: 600px) {
            header h1 {
                font-size: 1.8rem;
            }
            
            nav ul {
                gap: 1rem;
            }
            
            .header-links {
                gap: 1rem;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Juan García</h1>
        <p>Desarrollador Full Stack | React | Node.js | Python</p>
        <div class="header-links">
            <a href="mailto:juan@example.com">📧 Email</a>
            <a href="https://github.com" target="_blank">🐙 GitHub</a>
            <a href="https://linkedin.com" target="_blank">💼 LinkedIn</a>
        </div>
    </header>
    
    <nav>
        <ul>
            <li><a href="#cv">Sobre mí</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
        </ul>
    </nav>
    
    <div class="container">
        <!-- SOBRE MÍ -->
        <section id="cv">
            <h2>👋 Sobre mí</h2>
            <p>Soy un desarrollador full stack con 4 años de experiencia creando aplicaciones web modernas. Me apasiona escribir código limpio, resolver problemas complejos y trabajar en equipo. Actualmente especializado en React, Node.js y bases de datos SQL.</p>
        </section>
        
        <!-- EXPERIENCIA -->
        <section id="experiencia">
            <h2>💼 Experiencia</h2>
            
            <div class="cv-item">
                <h3>Desarrollador Senior</h3>
                <div class="subtitle">TechCorp Solutions</div>
                <div class="date">2022 - Presente (2 años)</div>
                <p>Lideré el desarrollo del portal principal de la empresa, mejorando performance un 40%. Mentoricé a 3 desarrolladores junior. Stack: React, Node.js, PostgreSQL.</p>
            </div>
            
            <div class="cv-item">
                <h3>Desarrollador Full Stack</h3>
                <div class="subtitle">Digital Innovations</div>
                <div class="date">2020 - 2022 (2 años)</div>
                <p>Desarrollé múltiples aplicaciones web para clientes del sector fintech. Implementé sistemas de autenticación seguros y optimicé queries de base de datos.</p>
            </div>
            
            <div class="cv-item">
                <h3>Desarrollador Junior</h3>
                <div class="subtitle">StartUp Hub</div>
                <div class="date">2020 - 2020 (6 meses)</div>
                <p>Primer empleo en tech. Trabajé en el frontend de una aplicación de gestión de proyectos con React y Firebase.</p>
            </div>
        </section>
        
        <!-- SKILLS -->
        <section id="skills">
            <h2>🛠️ Habilidades Técnicas</h2>
            <div class="skills">
                <div class="skill-tag">React</div>
                <div class="skill-tag">Node.js</div>
                <div class="skill-tag">JavaScript</div>
                <div class="skill-tag">Python</div>
                <div class="skill-tag">PostgreSQL</div>
                <div class="skill-tag">MongoDB</div>
                <div class="skill-tag">Git</div>
                <div class="skill-tag">Docker</div>
                <div class="skill-tag">REST APIs</div>
                <div class="skill-tag">CSS/Tailwind</div>
            </div>
        </section>
        
        <!-- PORTFOLIO -->
        <section id="portfolio">
            <h2>🚀 Proyectos Destacados</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>TaskFlow Pro</h3>
                    <p>Aplicación de gestión de tareas colaborativa en tiempo real con sincronización instantánea.</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">Socket.io</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com" target="_blank">Ver código →</a>
                        <a href="#" target="_blank">Demo en vivo →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>DataViz Dashboard</h3>
                    <p>Dashboard interactivo para visualización de datos con gráficos en tiempo real y análisis avanzado.</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">D3.js</span>
                        <span class="project-tag">Python</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com" target="_blank">Ver código →</a>
                        <a href="#" target="_blank">Demo en vivo →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>E-Commerce API</h3>
                    <p>API REST robusta para plataforma de e-commerce con autenticación, pagos y gestión de inventario.</p>
                    <div class="project-tags">
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">PostgreSQL</span>
                        <span class="project-tag">Stripe</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com" target="_blank">Ver código →</a>
                        <a href="#" target="_blank">Documentación →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>WeatherApp Mobile</h3>
                    <p>Aplicación móvil con predicción del tiempo, mapas interactivos y notificaciones en tiempo real.</p>
                    <div class="project-tags">
                        <span class="project-tag">React Native</span>
                        <span class="project-tag">Expo</span>
                        <span class="project-tag">APIs</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com" target="_blank">Ver código →</a>
                        <a href="#" target="_blank">App Store →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>Blog CMS</h3>
                    <p>Sistema de gestión de contenidos customizable con editor Markdown y SEO optimizado.</p>
                    <div class="project-tags">
                        <span class="project-tag">Next.js</span>
                        <span class="project-tag">MongoDB</span>
                        <span class="project-tag">Tailwind</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com" target="_blank">Ver código →</a>
                        <a href="#" target="_blank">Demo en vivo →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <h3>AI Chat Assistant</h3>
                    <p>Chatbot inteligente con procesamiento de lenguaje natural e integración con APIs de IA.</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">FastAPI</span>
                        <span class="project-tag">OpenAI</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com" target="_blank">Ver código →</a>
                        <a href="#" target="_blank">Probar →</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <footer>
        <p><strong>Juan García</strong> | Full Stack Developer</p>
        <p>Disponible para oportunidades freelance y trabajo a tiempo completo</p>
        <div class="social-links">
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="mailto:juan@example.com">Email</a>
        </div>
        <p style="margin-top: 1.5rem; font-size: 0.9rem; opacity: 0.8;">© 2024. Hecho con ❤️ y código limpio.</p>
    </footer>
</body>
</html>
