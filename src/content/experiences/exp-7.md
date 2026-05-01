---
title: "Private VPN & Reverse Proxy Infrastructure"
description: "Deployment of a secure private network infrastructure using OpenVPN and a reverse proxy to manage and expose local services safely to the internet"
technologies: ["OPENVPN", "NGINX", "DOCKER", "LINUX"]
technologies_icons: ["/technologies/docker.png", "/technologies/linux.png"]
---

## Infrastructure Overview

I designed and implemented a secure remote access solution to manage multiple local services hosted on different servers within a private network. This setup allows for secure administration and public access to specific services through a controlled gateway.

### Key Components

- **Private VPN Server**: Built with OpenVPN to provide a secure tunnel into the local network.
- **Reverse Proxy Gateway**: Configured a reverse proxy (Nginx) to handle incoming public requests and redirect them to the appropriate local service based on domain names.
- **Service Orchestration**: Utilized Docker for consistent deployment of local services across multiple nodes.
- **Security Hardening**: Implemented SSL/TLS termination at the proxy level and firewall rules to restrict access.

### Technical Achievements

- Successfully bridged multiple local subnets for unified management.
- Achieved seamless public access to internal dashboards and APIs without exposing sensitive ports.
- Automated service discovery and proxy configuration updates.
- Ensured 99.9% uptime for critical local infrastructure services.
