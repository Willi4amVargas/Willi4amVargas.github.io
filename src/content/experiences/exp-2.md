---
title: "Web Inventory System"
description: "A NextJS-based web system integrated with an ERP database, enabling management of clients, products, and inventory operations. Key features include serial number tracking and individual item traceability for enhanced control"
technologies:
  ["TYPESCRIPT", "TAILWINDCSS", "NEXTJS", "PRISMA-ORM", "POSTGRESQL"]
technologies_icons:
  [
    "/technologies/typescript.png",
    "/technologies/tailwindcss.png",
    "/technologies/next-js.png",
    "/technologies/prisma-orm.png",
    "/technologies/postgresql.svg",
  ]
---

## Overview
Developed a full-featured inventory management web application connected to an existing ERP database, featuring advanced serial number tracking and unit-level product lifecycle management capabilities.

**Core Innovation:** Implemented granular serial number tracking system enabling individual unit tracing throughout the entire supply chain - from procurement to customer delivery.

## Key Features
- Real-time synchronization with legacy ERP database
- Advanced serial number management with custom tracking rules
- Batch operations with individual unit tracking
- Custom reporting dashboard for inventory analytics
- Role-based access control for different inventory workflows

## Technical Implementation
- TypeScript
- Next.js
- Tailwind CSS
- Prisma ORM
- PostgreSQL

## Technical Highlights
- Implemented server-side rendering for critical inventory views
- Developed custom Prisma extensions for ERP data mapping
- Created atomic transaction system for inventory operations
