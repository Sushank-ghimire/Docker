# Docker Cheat Sheet

## Table of contents

- [Why Docker](#why-docker)
- [Installation](#installation)
- [Basic Commands](#basic-commands)
- [Containers](#containers)
- [Images](#images)
- [Layers](#layers)
- [Networks](#networks)
- [Registry and Repository](#registery)
- [Dockerfile](#dockerfile)
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

---

## Containers

A **Docker container** is a lightweight, isolated environment that runs your applications. Containers are created from **images**, which include everything your app needs (code, dependencies, environment).

---

### 🚀 What Happens Behind the Scenes When You Run a Container?

When you run a command like:

```bash
docker run ubuntu
```

Here's what Docker does step by step:

1. **Check for the image** (`ubuntu`) locally.
2. If the image isn’t found, Docker **downloads it** from Docker Hub.
3. Docker then **creates a container** from that image.
4. It **starts** the container and runs the default command (e.g., bash or shell).
5. The container runs in an **isolated environment** but can interact with your system via mapped ports, volumes, etc.

> 🧠 Think of an image as a _blueprint_ and a container as the _real running instance_ built from it.

---

### 🔧 Common Container Commands

#### ✅ Run a Container Interactively

```bash
docker run -it ubuntu
```

```bash
docker run  -d --name ubuntu_container ubuntu #naming the container as ubuntu_container
```

- `-i` = interactive mode
- `-t` = gives you a terminal
- `-d` = detached mode
- Drops you into the shell of an Ubuntu container

#### ✅ Run a Container in the Background (Detached Mode)

```bash
docker run -d nginx
```

- Runs the Nginx container in the background

#### ✅ Run a Container With Port Mapping

```bash
docker run -d -p 8080:80 nginx
```

- Maps port 8080 on your machine to port 80 in the container (access via `localhost:8080`)

#### ✅ Name Your Container

```bash
docker run -it --name myubuntu ubuntu
```

- Easier to manage than using container IDs

---

### 📋 View Running and Stopped Containers

```bash
docker ps            # Shows running containers
docker ps -a         # Shows all containers (including stopped)
```

---

### 🔄 Start, Stop, Restart Containers

```bash
docker stop myubuntu      # Stop the container
docker start myubuntu     # Start a stopped container
docker restart myubuntu   # Restart it
```

---

### 🧹 Remove Containers

```bash
docker rm myubuntu        # Delete a container (must be stopped first)
docker rm -f myubuntu     # Force delete even if it's running
```

---

### 🕵️ Inspect and Logs

```bash
docker logs myubuntu         # View container output logs
docker inspect myubuntu      # Get detailed info (IP, config, etc.)
```

---

> 📦 Containers are temporary by default. When you exit or stop them, they don’t run again unless restarted — unless you use volumes or Docker Compose to persist data.

Absolutely! Here's a beginner-friendly and well-structured explanation for both the **Images** and **Layers** sections in your Docker Cheat Sheet (`README.md`):

---

# Images

A **Docker image** is a lightweight, read-only template used to create containers. It includes everything needed to run an application — code, runtime, libraries, environment variables, and config files.

You can think of images like **blueprints** for containers.

---

### 🔧 Common Image Commands

```bash
docker pull nginx            # Download image from Docker Hub
docker images                # List all images on your system
docker rmi nginx             # Remove an image
docker build -t myapp .      # Build a custom image using a Dockerfile
docker tag myapp myrepo/myapp:v1  # Tag an image with a repository and version
docker push myrepo/myapp:v1       # Push image to a remote registry (e.g. Docker Hub)
```

> 🔹 Images are built in layers and can be reused, making them fast and efficient.

---

# Layers

Docker images are made up of **layers**. Each layer represents a change (instruction) in the Dockerfile.

For example:

```Dockerfile
FROM node:18         # Layer 1
WORKDIR /app         # Layer 2
COPY . .             # Layer 3
RUN npm install      # Layer 4
CMD ["npm", "start"] # Layer 5
```

### ✅ Why Layers Matter

- **Caching:** Docker caches each layer. If nothing changes in a layer, it reuses the cache to build faster.
- **Efficiency:** Layers are shared across images, saving space.
- **Layered FS:** Containers are made by stacking these layers and adding a writable layer on top.

> 📌 Tip: The order of Dockerfile instructions affects caching. Put the most frequently changed instructions (like `COPY . .`) at the bottom.

---

### 📦 View Image Layers

To inspect layers of an image, use:

```bash
docker history <image_name>
```

Or for detailed layer info (requires installing Dive):

```bash
dive <image_name>
```

## Troubleshoot Commands

```bash
docker log container_id
docker exec -it container_id /bin/bash # Only works with the running container
docker exec -it container_id /bin/sh
```
