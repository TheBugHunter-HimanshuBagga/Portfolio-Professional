export const personalInfo = {
  name: "Himanshu Bagga",
  firstName: "Himanshu",
  brandName: "Himanshu Bagga",
  title: "Java Backend Engineer",
  location: "India",
  phone: "",
  emails: {
    primary: "baggahimanshu311@gmail.com",
    secondary: "",
  },
  summary:
    "Java Backend Engineer focused on building scalable systems with Spring Boot. I design and implement REST APIs, authentication systems, real-time messaging, and database-backed applications. Currently deepening expertise in distributed systems, caching strategies, and AI-integrated backends.",
  resumeUrl: "https://updated-about-me.vercel.app/",
};

export const socials = {
  github: "https://github.com/TheBugHunter-HimanshuBagga",
  linkedin: "https://www.linkedin.com/in/himanshu-bagga-30b747323/",
  leetcode: "https://leetcode.com/u/Himanshu_bagga/",
  portfolio: "https://updated-about-me.vercel.app/",
};

export const heroData = {
  greeting: "Hello, I'm",
  name: "Himanshu",
  nameAccent: "Bagga",
  title: "Java Backend Engineer",
  line1: "Building production-oriented backend systems with Spring Boot,",
  line2: "JWT security, and real-time architectures.",
  ctaPrimary: { text: "View My Experience", href: "#experience" },
  ctaSecondary: { text: "View Repositories", href: "#projects" },
  ctaTertiary: { text: "Download Resume", href: socials.portfolio },
};

export const aboutData = {
  heading: "Hello!",
  bio: 'Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Himanshu Bagga</span>, a Java Backend Engineer who designs and ships production-oriented systems with Spring Boot. I enjoy turning complex requirements into clean, secure, well-tested services — from JWT authentication and real-time messaging to database design and AI-integrated backends.',
  roleLogos: [
    { title: "SPRING BOOT", subtitle: "ENGINEER", image: "spring" },
    { title: "JAVA", subtitle: "DEVELOPER", image: "java" },
    { title: "REST API", subtitle: "ARCHITECT", image: "api" },
    { title: "SPRING SECURITY", subtitle: "SPECIALIST", image: "security" },
    { title: "REAL-TIME", subtitle: "SYSTEMS", image: "realtime" },
    { title: "MICROSERVICES", subtitle: "DESIGNER", image: "microservices" },
    { title: "SPRING AI", subtitle: "INTEGRATION", image: "ai" },
    { title: "PROBLEM", subtitle: "SOLVER", image: "dsa" },
  ],
};

export const processData = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, API-first approach to turn requirements into robust, production-ready backend systems.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding business goals, domain constraints, and non-functional requirements to lay a rock-solid foundation for the system.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean layered architecture, entity relationships, DTO contracts, and API schemas that keep the codebase scalable and testable.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building secure services with Spring Boot and Spring Security — JWT auth, role-based access, caching, and real-time messaging.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Unit and integration testing with JUnit, Mockito and JaCoCo, then containerizing with Docker and shipping to production infrastructure.",
    },
  ],
  endText: "Ready to ship!",
};

const aiMl = {
  title: "BACKEND ENGINEERING",
  overall: 93,
  skills: [
    { name: "Spring Boot", level: 93 },
    { name: "Spring Security", level: 90 },
    { name: "Spring Data JPA", level: 88 },
    { name: "REST APIs", level: 92 },
    { name: "Hibernate", level: 85 },
    { name: "Layered Architecture", level: 90 },
  ],
  tech: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "Maven"],
};

const programming = {
  title: "PROGRAMMING & DSA",
  overall: 89,
  skills: [
    { name: "Java", level: 93 },
    { name: "Python", level: 78 },
    { name: "JavaScript", level: 82 },
    { name: "SQL", level: 86 },
    { name: "Data Structures", level: 85 },
    { name: "Algorithms", level: 84 },
  ],
  tech: ["Java", "Python", "JavaScript", "SQL", "DSA"],
};

const fullStack = {
  title: "FULL STACK DEVELOPMENT",
  overall: 82,
  skills: [
    { name: "React", level: 82 },
    { name: "HTML5", level: 88 },
    { name: "CSS3", level: 84 },
    { name: "Tailwind CSS", level: 84 },
    { name: "JavaScript", level: 82 },
    { name: "Thymeleaf", level: 75 },
  ],
  tech: ["React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Thymeleaf"],
};

const databases = {
  title: "DATABASES & CACHING",
  overall: 87,
  skills: [
    { name: "MySQL", level: 90 },
    { name: "Redis", level: 82 },
    { name: "PostgreSQL", level: 78 },
    { name: "SQL", level: 86 },
    { name: "JPA / Hibernate", level: 86 },
    { name: "Schema Design", level: 84 },
  ],
  tech: ["MySQL", "Redis", "PostgreSQL", "SQL", "PostGIS"],
};

const security = {
  title: "SECURITY & REAL-TIME",
  overall: 88,
  skills: [
    { name: "JWT", level: 92 },
    { name: "OAuth2", level: 82 },
    { name: "Role-Based Access", level: 88 },
    { name: "WebSocket / STOMP", level: 85 },
    { name: "ActiveMQ", level: 74 },
    { name: "Spring Security", level: 90 },
  ],
  tech: ["JWT", "OAuth2", "WebSocket", "STOMP", "ActiveMQ", "Spring Security"],
};

const tools = {
  title: "DEVOPS & TOOLS",
  overall: 81,
  skills: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 78 },
    { name: "Maven", level: 85 },
    { name: "Postman", level: 86 },
    { name: "JUnit & Mockito", level: 82 },
    { name: "JaCoCo", level: 76 },
  ],
  tech: ["Git", "GitHub", "Docker", "Maven", "Postman", "JUnit", "Mockito", "JaCoCo"],
};

export const skillFilters = [
  "All",
  "Backend",
  "Programming",
  "Full Stack",
  "Databases",
  "Security",
  "Tools",
];

export const skillsData = {
  categories: [aiMl, programming, fullStack, databases, security, tools],
};

export const skillCardConfig = {
  "BACKEND ENGINEERING": {
    filter: "Backend",
    number: "01",
    color: "#ff8500",
    light: "#ffc15c",
    description: "Building scalable services and APIs end-to-end.",
  },
  "PROGRAMMING & DSA": {
    filter: "Programming",
    number: "02",
    color: "#1598ff",
    light: "#5bd8ff",
    description: "Core programming and problem solving.",
  },
  "FULL STACK DEVELOPMENT": {
    filter: "Full Stack",
    number: "03",
    color: "#18dca4",
    light: "#7af4ce",
    description: "React frontends wired to Spring Boot APIs.",
  },
  "DATABASES & CACHING": {
    filter: "Databases",
    number: "04",
    color: "#914cff",
    light: "#c49aff",
    description: "Relational modelling, indexing and Redis caching.",
  },
  "SECURITY & REAL-TIME": {
    filter: "Security",
    number: "05",
    color: "#ff4b5c",
    light: "#ff8f98",
    description: "Stateless auth, RBAC and live event streams.",
  },
  "DEVOPS & TOOLS": {
    filter: "Tools",
    number: "06",
    color: "#f5a623",
    light: "#ffd08a",
    description: "Testing, containerizing and shipping reliably.",
  },
};

export const projectsData = [
  {
    id: "linkup",
    number: "01",
    badge: "Flagship · Backend",
    category: "Professional Networking · Real-Time Systems",
    title: "LinkUP — Professional Networking Backend",
    description:
      "Scalable LinkedIn-clone backend built across 6 development phases. Features JWT authentication, user discovery, connection management, posts, likes, comments, direct messaging, real-time notifications via WebSocket, Redis caching, and Docker containerization.",
    techTags: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "WebSocket/STOMP",
      "Redis",
      "MySQL",
      "Docker",
      "Unit Tests",
    ],
    links: { github: "https://github.com/TheBugHunter-HimanshuBagga/LinkUP-" },
    isFlagship: true,
  },
  {
    id: "food-waste",
    number: "02",
    badge: "Full-Stack",
    category: "Social Impact · Spring Boot + React",
    title: "Food Waste Management System",
    description:
      "Full-stack platform connecting food donors (restaurants, events, households) with NGOs and individuals in need. Features JWT authentication, role-based dashboards, donation tracking, order processing, and analytics. Independently designed, developed, and deployed.",
    techTags: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "React 19",
      "Vite",
      "Tailwind CSS",
    ],
    links: {
      github:
        "https://github.com/TheBugHunter-HimanshuBagga/Food-Waste-Management-System",
    },
    isFlagship: false,
  },
  {
    id: "disaster-portal",
    number: "03",
    badge: "Enterprise",
    category: "Government · Role-Based Workflow",
    title: "Disaster Damage Assessment Portal",
    description:
      "Enterprise-grade government platform for digital disaster reporting, field inspections, damage assessment, and compensation management. Implements role-based access across 4 user types (Citizen, Field Officer, District Administrator, Super Admin) with a complete workflow lifecycle.",
    techTags: [
      "Java 21",
      "Spring Boot 3",
      "Spring Data JPA",
      "MySQL",
      "Maven",
      "Lombok",
    ],
    links: {
      github:
        "https://github.com/TheBugHunter-HimanshuBagga/disaster-damage-assessment-portal",
    },
    isFlagship: false,
  },
  {
    id: "airbnb-pricing",
    number: "04",
    badge: "Design Pattern",
    category: "Backend · Strategy Pattern",
    title: "Airbnb Dynamic Pricing Backend",
    description:
      "Spring Boot backend implementing a dynamic pricing engine using the Strategy Design Pattern. Supports multiple pricing strategies (base, holiday, occupancy, surge, urgency) with clean layered architecture and JWT-secured endpoints.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "MySQL",
      "Strategy Pattern",
    ],
    links: {
      github:
        "https://github.com/TheBugHunter-HimanshuBagga/airbnb-dynamic-pricing-backend",
    },
    isFlagship: false,
  },
  {
    id: "lovable-clone",
    number: "05",
    badge: "Generative AI",
    category: "Spring AI · Local LLM",
    title: "Lovable Clone — AI-Powered Website Builder",
    description:
      "Backend for an AI-powered website builder (inspired by Lovable.dev). Generates project structures from natural language prompts using Spring AI with local LLM integration via Ollama. Includes user management, conversation history, and chat system.",
    techTags: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "MySQL",
      "JWT",
      "Spring AI",
      "Ollama",
    ],
    links: {
      github: "https://github.com/TheBugHunter-HimanshuBagga/lovable-clone-springboot",
    },
    isFlagship: false,
  },
  {
    id: "stateless-auth",
    number: "06",
    badge: "Security",
    category: "Authentication · Spring Security",
    title: "Enterprise Stateless Auth System",
    description:
      "Enterprise-grade stateless authentication built with JWT and Spring Security. Covers access and refresh token flows, role-based authorization, session management, and hardened password policies with a clean service layer.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "Refresh Tokens",
      "RBAC",
    ],
    links: {
      github: "https://github.com/TheBugHunter-HimanshuBagga/stateless-auth-system",
    },
    isFlagship: false,
  },
  {
    id: "notification-system",
    number: "07",
    badge: "Real-Time",
    category: "WebSocket · Event Delivery",
    title: "Real-Time Notification System",
    description:
      "Real-time notification system built using Java, Spring Boot, WebSocket, STOMP, Thymeleaf and SockJS for instant event delivery across connected clients with topic-based subscription handling.",
    techTags: [
      "Java",
      "Spring Boot",
      "WebSocket",
      "STOMP",
      "Thymeleaf",
      "SockJS",
    ],
    links: {
      github:
        "https://github.com/TheBugHunter-HimanshuBagga/springboot-notification-system",
    },
    isFlagship: false,
  },
  {
    id: "microservices-inventory",
    number: "08",
    badge: "Microservices",
    category: "Distributed Systems · Inventory",
    title: "Microservices Inventory Management",
    description:
      "Microservices-based Inventory Management System built using Spring Boot, REST APIs, and MySQL. Follows distributed architecture principles with independent services for product, order, and inventory management.",
    techTags: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Microservices",
      "Service Discovery",
    ],
    links: {
      github:
        "https://github.com/TheBugHunter-HimanshuBagga/MicroServices-Architecture-Implementation-with-Inventory-Management-System",
    },
    isFlagship: false,
  },
  {
    id: "spring-ai-lab",
    number: "09",
    badge: "AI Engineering",
    category: "RAG · Agents · Vector Search",
    title: "Spring AI Lab",
    description:
      "A comprehensive Spring AI repository featuring enterprise-grade Generative AI applications built with Spring Boot — LLMs, Retrieval-Augmented Generation (RAG), vector databases, MCP, and AI agents.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "RAG",
      "Vector DB",
      "MCP",
      "LLMs",
    ],
    links: { github: "https://github.com/TheBugHunter-HimanshuBagga/spring-ai-lab" },
    isFlagship: false,
  },
  {
    id: "weather-integration",
    number: "10",
    badge: "API Integration",
    category: "Backend · Third-Party APIs",
    title: "Spring Boot Weather Integration",
    description:
      "Spring Boot project demonstrating third-party API integration using RestClient, DTO mapping, centralized exception handling, and clean RESTful service design with typed error responses.",
    techTags: [
      "Java",
      "Spring Boot",
      "RestClient",
      "DTO Mapping",
      "Exception Handling",
      "REST",
    ],
    links: {
      github:
        "https://github.com/TheBugHunter-HimanshuBagga/springboot-weather-integration",
    },
    isFlagship: false,
  },
];

export const experienceData = [
  {
    organization: "JudgeIndia Solutions (Judge Group)",
    role: "Java Developer Intern",
    duration: "June — July 2026",
    status: "Completed",
    type: "Internship",
    description:
      "Built a GIS-enabled real-time enterprise platform using Spring Boot, PostgreSQL/PostGIS, JWT, Redis, ActiveMQ, and WebSockets. Implemented scalable backend services for authentication, event-driven messaging, spatial analytics, live operational dashboards, record & replay, audit logging, and document management in a production-oriented architecture.",
    skills: [
      "Spring Boot",
      "PostgreSQL / PostGIS",
      "JWT",
      "Redis",
      "ActiveMQ",
      "WebSockets",
    ],
    tech: ["Java", "Spring Boot", "PostGIS", "Redis", "ActiveMQ"],
  },
  {
    organization: "Sentinel Layer Pvt Ltd",
    role: "Backend Developer Intern — SaaS Based Startup",
    duration: "June — August 2026",
    status: "Completed",
    type: "Internship",
    description:
      "Completed a 2-month backend internship at an SRM-founded SaaS startup. Developed and maintained core platform services, APIs, and infrastructure, working across the full service lifecycle to support production workloads.",
    skills: [
      "Backend Development",
      "API Design",
      "System Architecture",
      "Production Operations",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "MySQL"],
  },
  {
    organization: "GeeksforGeeks — SRMIST Campus Body",
    role: "Associate Technical (promoted from Tech Team Member)",
    duration: "2026 — Present",
    status: "Ongoing",
    type: "Campus Body",
    description:
      "Started as a Tech Team Member on the GeeksforGeeks SRMIST campus body and was promoted to Associate Technical. Organizing technical sessions, building event infrastructure, and driving engineering-focused content for the campus community.",
    skills: [
      "Technical Leadership",
      "Event Organization",
      "Public Speaking",
      "Team Collaboration",
    ],
    tech: ["Technical Team", "Campus Events", "Mentoring"],
  },
  {
    organization: "Stackxs",
    role: "Open Source Contributor",
    duration: "2026 — Present",
    status: "Ongoing",
    type: "Organization",
    description:
      "Active member of the Stackxs developer organization, contributing across repositories and collaborating on shared engineering initiatives and code reviews.",
    skills: ["Open Source", "Code Review", "Collaboration", "Git Workflows"],
    tech: ["Git", "GitHub", "Java", "Code Review"],
  },
  {
    organization: "Independent Projects",
    role: "Full Stack Developer",
    duration: "2025 — Present",
    status: "Ongoing",
    type: "Self-Driven",
    description:
      "Designed, built and deployed production-facing platforms independently — LinkUP, Food Waste Management System, Disaster Damage Assessment Portal and more — each shipped end-to-end from schema to deployment.",
    skills: ["System Design", "Full Stack Delivery", "Deployment", "Testing"],
    tech: ["Spring Boot", "React", "Docker", "MySQL"],
  },
];

export const experienceLogos = {
  "JudgeIndia Solutions (Judge Group)": {
    logo: "https://cdn.simpleicons.org/openjdk",
    className: "w-[54px] h-[54px] object-contain",
  },
  "Sentinel Layer Pvt Ltd": {
    logo: "https://cdn.simpleicons.org/springboot/68A063",
    className: "w-[54px] h-[54px] object-contain",
  },
  "GeeksforGeeks — SRMIST Campus Body": {
    logo: "https://cdn.simpleicons.org/geeksforgeeks/2f8d30",
    className: "w-[46px] h-[46px] object-contain",
  },
  Stackxs: {
    logo: "https://cdn.simpleicons.org/github/ffffff",
    className: "w-[46px] h-[46px] object-contain",
  },
  "Independent Projects": {
    logo: "https://cdn.simpleicons.org/vercel/ffffff",
    className: "w-[54px] h-[36px] object-contain",
  },
};

export const highlightsData = [
  {
    title: "GitHub Pull Shark ×2",
    description:
      "Earned the Pull Shark achievement twice for sustained pull request contributions across repositories.",
    role: "Open Source",
    badge: "Achievement",
  },
  {
    title: "GitHub YOLO Achievement",
    description:
      "Recognized for shipping changes with confidence across personal and collaborative projects.",
    role: "Contribution",
    badge: "Highlight",
  },
  {
    title: "50-Day LeetCode Streak (2026)",
    description:
      "Consistent daily problem solving with a 50-day streak badge and 168 problems solved across multiple topics.",
    role: "Problem Solving",
    badge: "Consistency",
  },
  {
    title: "36 Public Repositories",
    description:
      "A public body of work spanning Spring Boot backends, security systems, AI integrations, and DSA practice.",
    role: "Portfolio",
    badge: "Open Source",
  },
  {
    title: "Stackxs Organization Member",
    description:
      "Contributing as part of the Stackxs developer organization on shared engineering initiatives.",
    role: "Collaboration",
    badge: "Community",
  },
  {
    title: "Backend Specialist — Spring Ecosystem",
    description:
      "Deep, hands-on coverage of Spring Boot, Spring Security, Spring Data JPA, Spring AI and testing tooling.",
    role: "Specialization",
    badge: "Expertise",
  },
];

export const softSkillsData = [
  {
    name: "Problem Solving",
    icon: "puzzle",
    desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces.",
  },
  {
    name: "System Design",
    icon: "layers",
    desc: "Designing layered, scalable architectures with clear service and data boundaries.",
  },
  {
    name: "Communication",
    icon: "chat",
    desc: "Clear, concise, and structured interactions in both business and technical contexts.",
  },
  {
    name: "Team Collaboration",
    icon: "team",
    desc: "Working across disciplines, reviewing code, and shipping features in sync with a team.",
  },
  {
    name: "Adaptability",
    icon: "refresh",
    desc: "Quick to pick up new stacks — Spring AI, WebSockets, Docker, or message brokers.",
  },
  {
    name: "Attention to Detail",
    icon: "target",
    desc: "Writing precise, tested code with JUnit, Mockito and JaCoCo coverage reports.",
  },
  {
    name: "Time Management",
    icon: "clock",
    desc: "Balancing internships, startup work, open source, and daily DSA practice.",
  },
  {
    name: "Continuous Learning",
    icon: "book",
    desc: "Staying current on distributed systems, caching strategies, and AI-integrated backends.",
  },
];

export const repositoriesData = {
  stats: { repositories: 36, languages: 4, followers: 10 },
  viewAllUrl: "https://github.com/TheBugHunter-HimanshuBagga?tab=repositories",
  categories: [
    {
      id: "featured",
      number: "01",
      title: "Featured Projects",
      description:
        "Flagship repositories covering networking, social impact, enterprise workflows, and AI.",
      accent: "professional",
      repositories: [
        {
          name: "LinkUP — Professional Networking Backend",
          issuer: "Spring Boot",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/LinkUP-",
        },
        {
          name: "Food Waste Management System",
          issuer: "React + Spring Boot",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/Food-Waste-Management-System",
        },
        {
          name: "Disaster Damage Assessment Portal",
          issuer: "Spring Boot 3",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/disaster-damage-assessment-portal",
        },
        {
          name: "Airbnb Dynamic Pricing Backend",
          issuer: "Strategy Pattern",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/airbnb-dynamic-pricing-backend",
        },
        {
          name: "Lovable Clone — AI Website Builder",
          issuer: "Spring AI",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/lovable-clone-springboot",
        },
        {
          name: "Enterprise Stateless Auth System",
          issuer: "Spring Security",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/stateless-auth-system",
        },
      ],
    },
    {
      id: "backend",
      number: "02",
      title: "Spring Boot & Security",
      description:
        "Core backend engineering — security, persistence, testing, and production-ready features.",
      accent: "ml",
      repositories: [
        {
          name: "Spring Security Implementation",
          issuer: "Java",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/SpringSecurity",
        },
        {
          name: "Spring Boot Production-Ready Features",
          issuer: "Java",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/SpringBoot-ProductionReadyFeatures",
        },
        {
          name: "Spring Boot JPA & REST API",
          issuer: "Java",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/Springboot-JPA-",
        },
        {
          name: "Spring Testing — JUnit, Mockito, JaCoCo",
          issuer: "Java",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/SpringTesting",
        },
        {
          name: "Cache Implementation in Spring Boot",
          issuer: "Java",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/Cache-Implementation-In-SpringBoot",
        },
        {
          name: "Aspect-Oriented Programming",
          issuer: "Java",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/Aspect-Oriented-Programming",
        },
      ],
    },
    {
      id: "realtime",
      number: "03",
      title: "Real-Time & Distributed Systems",
      description:
        "Event-driven services, message brokers, and microservice architecture patterns.",
      accent: "cloud",
      repositories: [
        {
          name: "Real-Time Notification System",
          issuer: "WebSocket / STOMP",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/springboot-notification-system",
        },
        {
          name: "Microservices Inventory Management",
          issuer: "Spring Boot",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/MicroServices-Architecture-Implementation-with-Inventory-Management-System",
        },
        {
          name: "Spring Boot Weather Integration",
          issuer: "RestClient",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/springboot-weather-integration",
        },
      ],
    },
    {
      id: "ai",
      number: "04",
      title: "AI & Integrations",
      description:
        "Generative AI backends with Spring AI, local LLMs, RAG and vector search.",
      accent: "ai",
      repositories: [
        {
          name: "Spring AI Lab",
          issuer: "Spring AI",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/spring-ai-lab",
        },
        {
          name: "Ollama-Powered Spring AI Backend",
          issuer: "Ollama",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/-Built-an-AI-powered-backend-using-Spring-AI-with-a-locally-hosted-LLM-via-Ollama-no-cloud-dependen",
        },
        {
          name: "Hospital Management System",
          issuer: "Java",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/Hospital-Management-System",
        },
      ],
    },
    {
      id: "learning",
      number: "05",
      title: "Learning & DSA",
      description:
        "Daily problem solving and language practice across Java, JavaScript and React.",
      accent: "development",
      repositories: [
        {
          name: "DSA_JAVA",
          issuer: "Java",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/DSA_JAVA",
        },
        {
          name: "PROBLEM-SOLVING-LEETCODE",
          issuer: "LeetCode",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/PROBLEM-SOLVING-LEETCODE",
        },
        {
          name: "JavaScript Practice",
          issuer: "JavaScript",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/JavaScript",
        },
        {
          name: "React.js Practice",
          issuer: "React",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/React.js",
        },
      ],
    },
    {
      id: "frontend",
      number: "06",
      title: "Frontend & Web",
      description:
        "Hand-coded web experiments, layouts and the personal site that started it all.",
      accent: "security",
      repositories: [
        {
          name: "Updated About Me",
          issuer: "Vercel",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/Updated-About_me",
        },
        {
          name: "Indian Art Form",
          issuer: "HTML / CSS",
          year: "2026",
          verifyUrl: "https://github.com/TheBugHunter-HimanshuBagga/Indian-Art-Form-",
        },
        {
          name: "Palindrome Checker App",
          issuer: "Java",
          year: "2026",
          verifyUrl:
            "https://github.com/TheBugHunter-HimanshuBagga/Palindrome-Checker-App",
        },
      ],
    },
  ],
};

export const leetCodeData = {
  username: "Himanshu_bagga",
  url: "https://leetcode.com/u/Himanshu_bagga/",
  problemsSolved: 168,
  streak: 50,
  ranking: "Arrays · Strings · Linked Lists · Trees · DP · Backtracking",
};

export const footerData = {
  taglines: ["Java Backend Engineer", "Spring Boot & Real-Time Systems", "Problem Solver"],
  credential: "B.Tech CSE · SRMIST · 168 DSA Problems · 36 Repositories",
  copyright: `© ${new Date().getFullYear()} Himanshu Bagga | Built with React`,
};

export const emailJsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};

export const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
