# Docker Cheat Sheet

## Table of contents

- [Why Docker](#why-docker)
- [Installation](#installation)
- [Basic Commands](#basic-commands)
- [Containers](#containers)
- [Images](#images)
- [Networks](#networks)
- [Registry and Repository](#registery)
- [Dockerfile](#dockerfile)
- [Layers](#layers)
- [Links](#links)
- [Volumes](#volumes)
- [Exposing Ports](#exposing-ports)
- [Docker Compose](#docker-compose)
- [Security](#security)
- [Tips](#tips)
- [Contribute](#contribute)

## Why Docker?

Docker simplifies application development by packaging your code and dependencies into portable containers. These containers run consistently across different environments from your local machine to production.

### ✅ Key Benefits

- **Consistency:** "It works on my machine" becomes reality everywhere.
- **Isolation:** Each container runs in its own environment.
- **Portability:** Build once, run anywhere.
- **Speed:** Fast startup and efficient resource usage.
- **Scalability:** Easily scale containers up or down with orchestration tools.

> 🐳 Docker helps developers ship faster, safer, and with confidence.

## Installation

To set up Docker on your machine, follow these steps:

1. Download and install **Docker Desktop** from the official website:
   👉 [Get Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. Follow the installer instructions for your operating system (Windows, macOS, or Linux).

3. After installation, verify Docker is working by running:

   ```bash
   docker --version
   ```

## Basic Commands

These are some essential Docker CLI commands to get you started:

---

### 🔄 Docker Version & Info

```bash
docker --version        # Show installed Docker version
docker info             # Show system-wide Docker information
docker help             # Show general help for Docker commands
```

### 📥 Pulling Images

```bash
docker pull ubuntu              # Download the latest Ubuntu image
docker pull nginx:alpine        # Pull a specific version/tag of an image
```

### 📦 Viewing Images

```bash
docker images                   # List all downloaded images
docker rmi <image_id>           # Remove an image
docker image prune              # Remove unused images
```

## Containers
