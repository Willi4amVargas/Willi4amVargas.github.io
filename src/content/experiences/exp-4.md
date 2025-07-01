---
title : "Parking Management System"
description : "Web-based parking management system for tracking entries, exits, currencies, and daily reports. Enables efficient vehicle (car/motorcycle) monitoring and streamlined ingress/egress control"
technologies : ["JAVASCRIPT","NODEJS","REACTJS","EXPRESSJS","POSTGRESQL"]
technologies_icons: ['technologies/javascript.png','technologies/node.png','technologies/react.png','technologies/express.svg','technologies/postgresql.svg']
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        .project-card {
            max-width: 900px;
            margin: 2rem auto;
            padding: 2.5rem;
            background: rgba(30, 30, 30, 0.85);
            border-radius: 10px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .project-header {
            text-align: center;
            margin-bottom: 2.5rem;
        }
        .project-title {
            font-size: 2.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #f8f9fa;
            position: relative;
            display: inline-block;
        }
        .project-title::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -10px;
            width: 80px;
            height: 3px;
            background: #4dabf7;
        }
        .project-description {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #adb5bd;
            max-width: 700px;
            margin: 0 auto;
        }
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.2rem;
            margin: 3rem 0;
        }
        .tech-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100px;
        }
        .tech-icon {
            width: 50px;
            height: 50px;
            object-fit: contain;
            margin-bottom: 0.8rem;
            transition: transform 0.3s ease;
        }
        .tech-icon:hover {
            transform: scale(1.1);
        }
        .tech-label {
            font-size: 0.9rem;
            font-weight: 500;
            text-align: center;
            color: #e9ecef;
        }
        .features-section {
            margin: 3rem 0;
        }
        .section-title {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1.8rem;
            color: #f8f9fa;
            text-align: center;
            position: relative;
        }
        .section-title::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -8px;
            width: 50px;
            height: 2px;
            background: #4dabf7;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .feature-card {
            background: rgba(50, 50, 50, 0.6);
            border-radius: 8px;
            padding: 1.5rem;
            border-left: 3px solid #4dabf7;
            transition: transform 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-icon {
            color: #4dabf7;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .feature-title {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 0.8rem;
            color: #f8f9fa;
        }
        .feature-desc {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #adb5bd;
            margin: 0;
        }
        .impact-stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 3rem 0;
            gap: 1.5rem;
        }
        .stat-item {
            text-align: center;
            min-width: 150px;
        }
        .stat-value {
            font-size: 2rem;
            font-weight: 600;
            color: #4dabf7;
            margin-bottom: 0.5rem;
        }
        .stat-label {
            font-size: 0.9rem;
            color: #adb5bd;
        }
        @media (max-width: 768px) {
            .project-card {
                padding: 1.5rem;
            }   
            .tech-stack {
                gap: 1rem;
            }
            .tech-item {
                width: 80px;
            }
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="project-card">
        <header class="project-header">
            <h1 class="project-title">Parking Management System</h1>
            <p class="project-description">
                A comprehensive web solution for efficient parking lot operations management, 
                including vehicle tracking, payment processing, and real-time reporting
            </p>
        </header>
        <div class="tech-stack">
            <div class="tech-item">
                <img src="/technologies/javascript.png" alt="JavaScript" class="tech-icon">
                <span class="tech-label">JavaScript</span>
            </div>
            <div class="tech-item">
                <img src="/technologies/node.png" alt="Node.js" class="tech-icon">
                <span class="tech-label">Node.js</span>
            </div>
            <div class="tech-item">
                <img src="/technologies/react.png" alt="React" class="tech-icon">
                <span class="tech-label">React</span>
            </div>
            <div class="tech-item">
                <img src="/technologies/express.svg" alt="Express" class="tech-icon">
                <span class="tech-label">Express</span>
            </div>
            <div class="tech-item">
                <img src="/technologies/postgresql.svg" alt="PostgreSQL" class="tech-icon">
                <span class="tech-label">PostgreSQL</span>
            </div>
        </div>
        <div class="impact-stats">
            <div class="stat-item">
                <div class="stat-value">75%</div>
                <div class="stat-label">Faster checkouts</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">24/7</div>
                <div class="stat-label">Operation tracking</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">100%</div>
                <div class="stat-label">Digital records</div>
            </div>
        </div>
        <section class="features-section">
            <h2 class="section-title">System Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚗</div>
                    <h3 class="feature-title">Vehicle Tracking</h3>
                    <p class="feature-desc">
                        Real-time monitoring of all vehicles entering and exiting the parking facility
                    </p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3 class="feature-title">Daily Reports</h3>
                    <p class="feature-desc">
                        Comprehensive reports on occupancy, revenue, and vehicle statistics
                    </p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⏱️</div>
                    <h3 class="feature-title">Efficient Operations</h3>
                    <p class="feature-desc">
                        Streamlined entry/exit processes reducing wait times and congestion
                    </p>
                </div>
            </div>
        </section>
        <section class="features-section">
            <h2 class="section-title">Technical Highlights</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3 class="feature-title">Responsive Design</h3>
                    <p class="feature-desc">
                        Mobile-friendly interface for on-the-go parking management
                    </p>
                </div>
            </div>
        </section>
    </div>
</body>
</html>