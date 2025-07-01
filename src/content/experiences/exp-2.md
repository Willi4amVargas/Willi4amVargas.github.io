---
title : "Web Inventory System"
description : "A NextJS-based web system integrated with an ERP database, enabling management of clients, products, and inventory operations. Key features include serial number tracking and individual item traceability for enhanced control"
technologies : ["TYPESCRIPT","TAILWINDCSS","NEXTJS","PRISMA-ORM","POSTGRESQL"]
technologies_icons: ['technologies/typescript.png','technologies/tailwindcss.png','technologies/next-js.png','technologies/prisma-orm.png','technologies/postgresql.svg']
---
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    .project-title {
            font-size: 2rem;
            font-weight: 600;
            color: #f8f9fa;
            margin-bottom: 0.5rem;
    }
    .project-container {
        width: 800px;
        margin: 0 auto;
        padding: 20px;
        background: rgba(30, 30, 30, 0.85);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .project-header {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .project-description {
        font-size: 20px;
        color: #adb5bd;
        line-height: 1.7;
    }
    .project-details{
        max-width:100%;
    }
    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        /* margin: 1.5rem 0; */
    }
    .tech-item {
        display: flex;
        align-items: center;
        background: rgba(70, 70, 70, 0.5);
        padding: 10px 15px;
        border-radius: 20px;
        /* font-size: 0.9rem; */
        transition: transform 0.2s, background 0.2s;
    }
    .tech-item:hover {
        background: rgba(90, 90, 90, 0.7);
        transform: translateY(-2px);
    }
    .tech-icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
    .project-date {
        font-size: 0.875rem;
        color: #6c757d;
        margin-top: 1.5rem;
        font-style: italic;
    }
    .section-title {
        font-size: 1.5rem;
        font-weight: 500;
        color: #f8f9fa;
        margin: 1.5rem 0 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 0.5rem;
    }
    .highlight-card {
        background: rgba(40, 40, 40, 0.6);
        border-left: 3px solid #4dabf7;
        padding: 1rem;
        margin: 1.5rem 0;
        border-radius: 0 4px 4px 0;
    }
    .list-style{
        display:flex;
        flex-direction:column;
    }
    .list-style > span {
        width:70%;
        margin:0 auto;
    }
</style>
</head>
<div class="project-container">
        <div class="project-header">
        <h1 class="project-title">ERP-Integrated Web Inventory System</h1>
            <p class="project-description">
                Developed a full-featured inventory management web application connected to an existing ERP database,
                featuring advanced serial number tracking and unit-level product lifecycle management capabilities
            </p>
        </div>
        <div class="highlight-card">
            <strong>Core Innovation:</strong> Implemented granular serial number tracking system enabling 
            individual unit tracing throughout the entire supply chain - from procurement to customer delivery
        </div>
        <div class="project-details">
            <h2 class="section-title">Key Features</h2>
            <div class="list-style">
                <span>Real-time synchronization with legacy ERP database</span>
                <span>Advanced serial number management with custom tracking rules</span>
                <span>Batch operations with individual unit tracking</span>
                <span>Custom reporting dashboard for inventory analytics</span>
                <span>Role-based access control for different inventory workflows</span>
            </div>
            <h2 class="section-title">Technical Implementation</h2>
            <div class="tech-list">
                <div class="tech-item">
                    <img src="/technologies/typescript.png" alt="TypeScript" class="tech-icon">
                    TypeScript
                </div>
                <div class="tech-item">
                    <img src="/technologies/next-js.png" alt="Next.js" class="tech-icon">
                    Next.js
                </div>
                <div class="tech-item">
                    <img src="/technologies/tailwindcss.png" alt="Tailwind CSS" class="tech-icon">
                    Tailwind CSS
                </div>
                <div class="tech-item">
                    <img src="/technologies/prisma-orm.png" alt="Prisma ORM" class="tech-icon">
                    Prisma ORM
                </div>
                <div class="tech-item">
                    <img src="/technologies/postgresql.svg" alt="PostgreSQL" class="tech-icon">
                    PostgreSQL
                </div>
            </div>
            <h2 class="section-title">Technical Highlights</h2>
            <div class="list-style">
                <span>Implemented server-side rendering for critical inventory views</span>
                <span>Developed custom Prisma extensions for ERP data mapping</span>
                <span>Created atomic transaction system for inventory operations</span>
            </div>
        </div>
</div>
</html>