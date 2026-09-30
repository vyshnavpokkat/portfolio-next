export const portfolio = {
  name: "Vyshnav P",
  role: "Full-Stack Developer · Frontend Focus",
  location: "Kerala, India",
  email: "vyshnavpkt22@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vyshnav-pokkat-0a9525246/",
    },
    { label: "GitHub", url: "https://github.com/vyshnavpokkat" },
  ],
  description:
    "Full-stack developer with a strong frontend focus, building modern web applications with React, Next.js, TypeScript, Java and Spring Boot.",
  about:
    "I’m a full-stack developer with 3+ years of experience and a strong focus on frontend engineering. I build modern, responsive applications with JavaScript, TypeScript, React and Next.js, while also contributing to backend APIs, business logic and data flows.",
  aboutDetail:
    "My current work is in the crypto and blockchain domain, covering mining platforms, real-time ASIC monitoring, PSP integrations and payment-related workflows. On the backend, I work with Java, Spring Boot, REST APIs, SQL, Redis and Docker.",
  focusAreas: [
    {
      title: "Blockchain & payments",
      text: "Professional experience with crypto-mining systems, blockchain-related concepts, PSP integrations, wallets, top-ups, debits and payment business logic.",
    },
    {
      title: "AI-assisted engineering",
      text: "I use modern AI development tools for coding, debugging, refactoring, understanding unfamiliar code, research and faster technical iteration.",
    },
  ],
  projects: [
    {
      id: "segments",
      name: "Segments",
      category: "Customer mining platform",
      subtitle: "One place for customers to follow daily mining operations.",
      description:
        "The company’s public website and customer platform, combining product and service information with a secure dashboard for tracking day-to-day mining operations, reports and payments.",
      contributions: [
        "Build and maintain responsive company pages and customer dashboard experiences for mining activity, operational reporting and payments.",
        "Support backend development by creating and integrating APIs and contributing to PSP integrations and payment-related business logic.",
      ],
      features: [
        "Daily mining operations dashboard",
        "Operational and financial reports",
        "Payments, wallet and top-up workflows",
        "ASIC hardware and hosting information",
      ],
      tech: ["React", "Next.js", "TypeScript", "REST APIs", "Docker"],
      diagram: "ecosystem",
      note: "Connecting the moving parts",
      url: "https://www.segments.ae/",
    },
    {
      id: "segpool",
      name: "SegPool",
      category: "Mining pool & live data",
      subtitle: "Live pool performance, made readable.",
      description:
        "A mining-pool platform that gives users live visibility into mining activity, including hashrate, miners, workers and pool performance across supported networks.",
      contributions: [
        "Build real-time frontend dashboards, tables and filters that turn continuously changing mining data into clear, usable views.",
        "Create and integrate REST APIs while supporting backend logic, data handling and production mining features.",
      ],
      features: [
        "Live hashrate and worker monitoring",
        "Miner and pool performance data",
        "Data-rich filtering and tables",
        "Network-aware mining dashboards",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Ant Design", "REST APIs"],
      diagram: "pool",
      note: "Many workers. One clear view.",
      url: "https://www.segpool.com/",
    },
    {
      id: "cminer",
      name: "CMiner",
      category: "Internal mining operations",
      subtitle: "The company’s operational view of its mining fleet.",
      description:
        "An internal company tool used to track active mining machines, daily operational reports, mining-hardware health, customer information and the infrastructure behind hosted mining operations.",
      contributions: [
        "Build operations dashboards for active machine status, hardware health, hashrate, power, revenue and daily reporting.",
        "Develop frontend workflows and support APIs for customer records, miner inventory, pool configuration, hosting costs, hash billing and machine settings.",
      ],
      features: [
        "Active-machine and hardware-health monitoring",
        "Daily operational and performance reports",
        "Customer, inventory and machine management",
        "Pool configuration, hosting and hash billing",
      ],
      tech: ["Next.js", "TypeScript", "MQTT", "EMQX", "WebSockets", "Recharts"],
      diagram: "monitor",
      note: "From live signals to useful insight",
      url: "",
    },
    {
      id: "winds",
      name: "WindsApp & Winds Travel",
      category: "Rewards & travel",
      subtitle: "Small details. Everyday journeys.",
      description:
        "Consumer rewards and travel products spanning vouchers, wallet history, flights and hotels.",
      contributions: [
        "Developed voucher, wallet-history and transaction interfaces with filtering and infinite scrolling.",
        "Built responsive flight and hotel flows integrated with backend APIs.",
      ],
      features: [
        "Voucher and rewards journeys",
        "Wallet and transaction history",
        "Flight and hotel booking flows",
        "Filtering, pagination and infinite scroll",
      ],
      tech: ["React", "JavaScript", "Redux", "REST APIs", "Axios"],
      diagram: "journey",
      note: "A smoother path from A to B",
      url: "",
    },
  ],
  experience: [
    {
      date: "Sep 2024 — Present",
      company: "AdPumb / Segments Cloud Computing LLC",
      role: "Software Engineer / Frontend Developer",
      location: "Kerala, India · Full-time",
      description:
        "Develop and maintain React, Next.js and TypeScript applications across the Segments customer platform, the SegPool live mining-pool product and the internal CMiner operations system.",
      detail:
        "Build dashboards for daily operations, reports, payments, live mining data, active-machine status, hardware health and customer records. Integrate REST APIs and live data with MQTT, EMQX and WebSockets; support Java and Spring Boot APIs, PSP integrations and payment business logic.",
    },
    {
      date: "Apr 2023 — Feb 2024",
      company: "Winds e Pvt Ltd",
      role: "Junior Frontend Developer",
      location: "Bengaluru, India",
      description:
        "Worked in a two-member frontend team on WindsApp rewards and Winds Travel. Developed transaction interfaces, reusable components and dynamic flight and hotel flows.",
      detail:
        "Contributed to REST API integration, SEO, frontend maintenance and production issue resolution.",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items:
        "React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, responsive UI, reusable components",
    },
    {
      title: "State & interface",
      items:
        "Redux, Recoil, Context API, React Router, Tailwind CSS, Ant Design, Material UI, Bootstrap, SCSS",
    },
    {
      title: "APIs & backend",
      items:
        "Java, Spring Boot, REST APIs, Axios, Fetch API, JSON, Next.js server-side development",
    },
    {
      title: "Data & infrastructure",
      items: "SQL, Redis, Firebase, Firestore, Docker, Nginx, Linux",
    },
    {
      title: "Real-time systems",
      items:
        "MQTT, EMQX, WebSockets, ASIC miners, mining pools, workers, hashrate, power and revenue monitoring",
    },
    {
      title: "Visualization & tools",
      items:
        "Recharts, Chart.js, ExcelJS, XLSX, Git, GitHub / GitLab, npm, Yarn and Gradle",
    },
    {
      title: "Development workflow",
      items:
        "IntelliJ IDEA, Visual Studio Code and AI-assisted tools for coding, debugging, refactoring, code comprehension, research and development",
    },
  ],
  education: {
    degree: "Bachelor of Technology",
    subject: "Electrical & Electronics Engineering",
    year: "2022",
  },
};
