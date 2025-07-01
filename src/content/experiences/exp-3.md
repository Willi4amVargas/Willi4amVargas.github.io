---
title : "ERP Reporting API"
description : "API for managing diverse reports—from quarterly or bimonthly sales reports to fully customizable product listings—connected to a PostgreSQL database within an ERP system"
technologies : ["PYTHON","FASTAPI","POSTGRESQL"]
technologies_icons: ['technologies/python.png','technologies/fastapi.svg','technologies/postgresql.svg']
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- I am going to refactor this code later :p for now works -->
    <style>
        .project-article {
            max-width: 900px;
            margin: 2rem auto;
            padding: 2rem;
            background: rgba(30, 30, 30, 0.85);
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .project-header {
            text-align: center;
            margin-bottom: 2.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1.5rem;
        }
        .project-title {
            font-size: 2.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, #4dabf7, #9775fa);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .project-description {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #adb5bd;
            max-width: 700px;
            margin: 0 auto;
        }
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        .tech-card {
            background: rgba(50, 50, 50, 0.6);
            border-radius: 8px;
            padding: 1rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .tech-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            background: rgba(60, 60, 60, 0.7);
        }
        .tech-icon {
            width: 40px;
            height: 40px;
            margin: 0 auto 0.5rem;
            object-fit: contain;
        }
        .tech-name {
            font-weight: 500;
            font-size: 0.95rem;
        }
        .feature-section {
            margin: 3rem 0;
        }
        .section-title {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 0.5rem;
            color: #f8f9fa;
        }
        .section-title::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 2px;
            background: linear-gradient(90deg, #4dabf7, transparent);
        }
        .feature-list {
            list-style: none;
            padding: 0;
        }
        .feature-item {
            padding: 1rem 0;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: flex-start;
        }
        .feature-item:last-child {
            border-bottom: none;
        }
        .feature-icon {
            margin-right: 1rem;
            color: #4dabf7;
            font-size: 1.2rem;
        }
        .feature-content h4 {
            margin: 0 0 0.5rem 0;
            font-size: 1.1rem;
            color: #f8f9fa;
        }
        .feature-content p {
            margin: 0;
            color: #adb5bd;
            line-height: 1.7;
        }
        .metrics-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        .metric-card {
            background: rgba(40, 40, 40, 0.6);
            border-radius: 8px;
            padding: 1.5rem;
            text-align: center;
            border-left: 3px solid #4dabf7;
        }
        .metric-value {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            background: linear-gradient(90deg, #4dabf7, #9775fa);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .metric-label {
            font-size: 0.9rem;
            color: #adb5bd;
        }
        @media (max-width: 768px) {
            .project-article {
                padding: 1.5rem;
            }
            .tech-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .metrics-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <article class="project-article">
        <header class="project-header">
            <h1 class="project-title">ERP Reporting API</h1>
            <p class="project-description">
                A high-performance reporting solution integrated with enterprise ERP systems,
                enabling dynamic generation of business intelligence reports with custom timeframes,
                granular filtering, and automated data exports
            </p>
        </header>
        <div class="tech-grid">
            <div class="tech-card">
                <img src="/technologies/python.png" alt="Python" class="tech-icon">
                <div class="tech-name">Python 3.10</div>
            </div>
            <div class="tech-card">
                <img src="/technologies/fastapi.svg" alt="FastAPI" class="tech-icon">
                <div class="tech-name">FastAPI</div>
            </div>
            <div class="tech-card">
                <img src="/technologies/postgresql.svg" alt="PostgreSQL" class="tech-icon">
                <div class="tech-name">PostgreSQL</div>
            </div>
        </div>
        <section class="feature-section">
            <h2 class="section-title">Key Features</h2>
            <ul class="feature-list">
                <li class="feature-item">
                    <div class="feature-icon">✓</div>
                    <div class="feature-content">
                        <h4>Custom Timeframe Reporting</h4>
                        <p>Generate reports for any date range (daily, weekly, quarterly) with real-time ERP data synchronization</p>
                    </div>
                </li>
                <li class="feature-item">
                    <div class="feature-icon">✓</div>
                    <div class="feature-content">
                        <h4>Product Analytics</h4>
                        <p>Comprehensive product reports with inventory levels, sales performance, and movement tracking</p>
                    </div>
                </li>
                <li class="feature-item">
                    <div class="feature-icon">✓</div>
                    <div class="feature-content">
                        <h4>Automated Exports</h4>
                        <p>Schedule and automatically deliver reports in multiple formats (PDF, Excel, CSV) to stakeholders</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="feature-section">
            <h2 class="section-title">Technical Highlights</h2>
            <ul class="feature-list">
                <li class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-content">
                        <h4>Optimized Queries</h4>
                        <p>Implemented materialized views and query caching to reduce report generation time by 65%</p>
                    </div>
                </li>
                <li class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-content">
                        <h4>Async Processing</h4>
                        <p>Designed asynchronous report generation for large datasets without blocking API responses</p>
                    </div>
                </li>
                <li class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-content">
                        <h4>Data Validation</h4>
                        <p>Built comprehensive input validation and error handling for all report parameters</p>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</body>
</html>