/**
 * Terminal DevOps Portfolio — Interactive CLI & animations
 */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const PROFILE = {
    name: "Aditya Jaishi",
    role: "DevOps / Cloud Engineer",
    location: "Bhaktapur, Nepal",
    email: "jaishiaditya2000@gmail.com",
    phone: "+977 9861150868",
    github: "https://github.com/Adityakafle",
    linkedin: "https://www.linkedin.com/in/aditya-jaishi-4440bb253/",
    cv: "https://drive.google.com/file/d/1Fa0fn-1BqExtJpvelVLqxTYr5C9QQinO/view?usp=drive_link",
    education: "Bachelor's in Computer Engineering — Khwopa College of Engineering",
    bio:
      "DevOps engineer passionate about automating infrastructure, building CI/CD pipelines, and bridging development and operations. Experienced with containerization, cloud platforms, and Linux systems.",
  };

  const COMMANDS = {
    help: () =>
      [
        "<span class='info'>Available commands:</span>",
        "  <span class='cmd'>help</span>      — Show this help message",
        "  <span class='cmd'>about</span>     — About me",
        "  <span class='cmd'>skills</span>    — Technical skills",
        "  <span class='cmd'>projects</span>  — Portfolio projects",
        "  <span class='cmd'>experience</span>— Education & experience",
        "  <span class='cmd'>contact</span>   — Contact information",
        "  <span class='cmd'>social</span>    — Social media links",
        "  <span class='cmd'>whoami</span>    — Quick identity check",
        "  <span class='cmd'>clear</span>     — Clear terminal",
        "  <span class='cmd'>neofetch</span>  — System info card",
        "  <span class='cmd'>kubectl get pods</span> — Running workloads",
        "  <span class='cmd'>docker ps</span> — Container status",
      ].join("\n"),

    about: () =>
      [
        `<span class='success'>${PROFILE.name}</span> — ${PROFILE.role}`,
        "",
        PROFILE.bio,
        "",
        `<span class='muted'>Education:</span> ${PROFILE.education}`,
        `<span class='muted'>Location:</span>  ${PROFILE.location}`,
      ].join("\n"),

    skills: () =>
      [
        "<span class='info'>═══ DevOps & Cloud ═══</span>",
        "  Docker · Kubernetes · Jenkins · GitHub Actions · Terraform · Ansible",
        "",
        "<span class='info'>═══ Cloud Platforms ═══</span>",
        "  AWS · GCP · Linux Administration · Nginx · MySQL",
        "",
        "<span class='info'>═══ Languages & Tools ═══</span>",
        "  Python · Bash · Shell Scripting · FastAPI · Git · CI/CD",
        "",
        "<span class='info'>═══ Security & Monitoring ═══</span>",
        "  Container Security · Vulnerability Scanning · Secrets Management",
      ].join("\n"),

    projects: () =>
      [
        "<span class='value'>[1]</span> CI/CD Pipeline — Three-Tier App (Jenkins, Docker, K8s)",
        "    <span class='muted'>→ github.com/Adityakafle/CI-CD-Pipeline-for-Containerized-Three-Tier-Applications-Using-Jenkins</span>",
        "",
        "<span class='value'>[2]</span> WordPress on Ubuntu 24.04 — Server provisioning & deployment",
        "    <span class='muted'>→ github.com/Adityakafle/Wordpress_installation_in_ubuntu24.04</span>",
        "",
        "<span class='value'>[3]</span> Pokemon FastAPI — REST API with Python & containerization",
        "    <span class='muted'>→ github.com/Adityakafle/Pokemon_FastAPI</span>",
        "",
        "<span class='value'>[4]</span> DVNA — Damn Vulnerable Node App (Security/DevOps lab)",
        "    <span class='muted'>→ github.com/Adityakafle/dvna</span>",
        "",
        "<span class='value'>[5]</span> GitHub Secrets Scanner — Security automation tool",
        "    <span class='muted'>→ github.com/Adityakafle/github-secrets-finding-public</span>",
        "",
        "<span class='info'>Type 'open github' or scroll to Projects section ↓</span>",
      ].join("\n"),

    experience: () =>
      [
        "<span class='orange'>2020 – 2024</span>  Bachelor's in Computer Engineering",
        "              Khwopa College of Engineering",
        "              <span class='muted'>Software Development & Deployment focus</span>",
        "",
        "<span class='orange'>Ongoing</span>       DevOps / Cloud Engineering",
        "              <span class='muted'>CI/CD pipelines, containerization, cloud infra</span>",
        "",
        "<span class='orange'>Projects</span>      Hands-on labs in Jenkins, Docker, K8s, Linux",
        "              <span class='muted'>Infrastructure automation & security tooling</span>",
      ].join("\n"),

    contact: () =>
      [
        `<span class='cyan'>Email:</span>   ${PROFILE.email}`,
        `<span class='cyan'>Phone:</span>   ${PROFILE.phone}`,
        `<span class='cyan'>Location:</span> ${PROFILE.location}`,
        `<span class='cyan'>CV:</span>      ${PROFILE.cv}`,
        "",
        "<span class='info'>Or scroll to the Contact section below ↓</span>",
      ].join("\n"),

    social: () =>
      [
        `<span class='cyan'>GitHub:</span>   ${PROFILE.github}`,
        `<span class='cyan'>LinkedIn:</span> ${PROFILE.linkedin}`,
        `<span class='cyan'>Hashnode:</span> https://hashnode.com/@adityajaishi`,
        `<span class='cyan'>Facebook:</span> https://www.facebook.com/aditya.jaishi.3/`,
        `<span class='cyan'>Instagram:</span> https://www.instagram.com/aditya.jaishi.3/`,
      ].join("\n"),

    whoami: () => `<span class='success'>${PROFILE.name}</span> — ${PROFILE.role} @ ${PROFILE.location}`,

    neofetch: () =>
      [
        "       <span class='green'>╭─────────────╮</span>",
        "       <span class='green'>│</span> <span class='cyan'>aditya@devops</span> <span class='green'>│</span>",
        "       <span class='green'>╰─────────────╯</span>",
        "",
        "  <span class='green'>OS:</span>       Linux (Ubuntu) x86_64",
        "  <span class='green'>Host:</span>      portfolio-terminal",
        "  <span class='green'>Kernel:</span>    6.17.0-generic",
        "  <span class='green'>Uptime:</span>    building pipelines 24/7",
        "  <span class='green'>Shell:</span>    bash 5.2",
        `  <span class='green'>Role:</span>     ${PROFILE.role}`,
        `  <span class='green'>Location:</span> ${PROFILE.location}`,
        "",
        "  <span class='green'>██</span><span class='cyan'>██</span><span class='blue'>██</span><span class='purple'>██</span><span class='orange'>██</span><span class='red'>██</span>",
      ].join("\n"),

    "kubectl get pods": () =>
      [
        "NAME                          READY   STATUS    RESTARTS   AGE",
        "<span class='success'>portfolio-web-7d4f8b</span>         1/1     Running   0          42d",
        "<span class='success'>jenkins-master-0</span>             1/1     Running   0          15d",
        "<span class='success'>nginx-ingress-5c9d7</span>          1/1     Running   0          30d",
        "<span class='success'>api-fastapi-8a2b1</span>            1/1     Running   0          7d",
        "<span class='orange'>mysql-db-0</span>                   1/1     Running   1          60d",
      ].join("\n"),

    "docker ps": () =>
      [
        "CONTAINER ID   IMAGE              STATUS         PORTS                    NAMES",
        "a1b2c3d4e5f6   jenkins/jenkins    Up 2 weeks     0.0.0.0:8080->8080/tcp   jenkins",
        "f6e5d4c3b2a1   nginx:alpine       Up 3 weeks     0.0.0.0:80->80/tcp       nginx-proxy",
        "123456789abc   python:3.11-slim   Up 5 days      0.0.0.0:8000->8000/tcp   fastapi-app",
        "abcdef123456   mysql:8            Up 1 month     3306/tcp                 mysql-db",
      ].join("\n"),

    "open github": () => {
      window.open(PROFILE.github, "_blank");
      return "<span class='success'>Opened GitHub profile in new tab.</span>";
    },

    "download cv": () => {
      window.open(PROFILE.cv, "_blank");
      return "<span class='success'>Opening CV download...</span>";
    },
  };

  /* Quick splash — overlay removed from HTML */
  function hideSplash() {}

  /* Terminal */
  function initTerminal() {
    const output = document.getElementById("terminal-output");
    const input = document.getElementById("terminal-input");
    const form = document.getElementById("terminal-form");
    if (!output || !input || !form) return;

    const history = [];
    let historyIndex = -1;

    function print(html, className = "terminal-output") {
      const line = document.createElement("div");
      line.className = className;
      line.innerHTML = html;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    }

    function executeCommand(raw) {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      print(
        `<span class='path'>aditya@devops</span>:<span class='value'>~</span>$ <span class='cmd'>${raw}</span>`
      );

      if (cmd === "clear") {
        output.innerHTML = "";
        return;
      }

      const handler = COMMANDS[cmd];
      if (handler) {
        const result = handler();
        if (result) print(result);
      } else {
        print(
          `<span class='error'>Command not found: ${raw}</span>\n<span class='muted'>Type 'help' for available commands.</span>`
        );
      }
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = input.value;
      history.push(value);
      historyIndex = history.length;
      executeCommand(value);
      input.value = "";
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          input.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const partial = input.value.toLowerCase();
        const matches = Object.keys(COMMANDS).filter((c) => c.startsWith(partial));
        if (matches.length === 1) input.value = matches[0];
      }
    });

    /* Welcome messages */
    setTimeout(() => {
      print(
        `<span class='success'>Portfolio Terminal v2.0</span> — DevOps Edition`
      );
      print(`<span class='muted'>Connected as ${PROFILE.name}</span>`);
      print(`<span class='info'>Try: help · neofetch · kubectl get pods · docker ps</span>`);
    }, 1200);
  }

  /* Navbar */
  function initNav() {
    const nav = document.getElementById("nav-bar");
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    const navAnchors = links?.querySelectorAll("a") || [];

    window.addEventListener("scroll", () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    });

    toggle?.addEventListener("click", () => links?.classList.toggle("open"));

    navAnchors.forEach((a) => {
      a.addEventListener("click", () => links?.classList.remove("open"));
    });

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* Scroll reveal — hero always visible immediately */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => {
      if (el.closest("#home")) el.classList.add("visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
  }

  /* Skill bars animation */
  function initSkillBars() {
    const bars = document.querySelectorAll(".skill-bar-fill");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    bars.forEach((bar) => observer.observe(bar));
  }

  /* Contact form */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    const success = document.getElementById("form-success");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      success?.classList.add("show");
      form.reset();
      setTimeout(() => success?.classList.remove("show"), 5000);
    });
  }

  /* Typing effect for hero role */
  function initTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;

    const roles = [
      "DevOps Engineer",
      "Cloud Engineer",
      "CI/CD Specialist",
      "Kubernetes Admin",
      "Infrastructure Automator",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];
      if (!deleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 2000);
          return;
        }
        setTimeout(tick, 80);
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 40);
      }
    }
    tick();
  }

  document.addEventListener("DOMContentLoaded", () => {
    hideSplash();
    initTerminal();
    initNav();
    initReveal();
    initSkillBars();
    initContactForm();
    initTypewriter();
  });

  /* Fallback if DOMContentLoaded already fired */
  if (document.readyState !== "loading") hideSplash();
})();
