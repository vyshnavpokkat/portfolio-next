export const portfolio = {
  name: "Vyshnav P",
  role: "Software Engineer · Frontend Development",
  location: "Kerala, India",
  email: "vyshnav@example.com", // Demo only: replace before publishing.
  socials: [] as { label: string; url: string }[],
  description:
    "Frontend-focused software engineer in Kerala, India. Building thoughtful web applications with React, Next.js and TypeScript, from real-time mining dashboards to consumer products.",
  about:
    "I’m a frontend-focused software engineer with 3+ years of experience turning complex requirements into clear, responsive web applications. My work spans customer-facing products, operational dashboards and the systems that connect them.",
  aboutDetail:
    "Currently at AdPumb / Segments Cloud Computing LLC, I work on crypto mining platforms and real-time ASIC monitoring. Alongside the frontend, I bring hands-on experience with Java, Spring Boot and Next.js server-side development.",
  projects: [
    {
      id: "segments",
      name: "Segments",
      category: "Commerce & infrastructure",
      subtitle: "A frontend for the mining ecosystem.",
      description:
        "A customer-facing platform bringing ASIC hardware, hosting, cloud mining and crypto-related services together.",
      contributions: [
        "Develop and maintain hardware, hosting, wallet, top-up, debit and payment flows.",
        "Connect mining, hardware and payment data to responsive production interfaces through backend APIs.",
      ],
      tech: ["React", "Next.js", "TypeScript", "REST APIs", "Docker"],
      diagram: "ecosystem",
      note: "Connecting the moving parts",
      url: "",
    },
    {
      id: "segpool",
      name: "SegPool",
      category: "Data & visualization",
      subtitle: "Making mining performance readable.",
      description:
        "A mining pool platform for understanding hashrate, miners, workers and pool performance across supported networks.",
      contributions: [
        "Build dashboards, tables and filters for hashrate, miner, worker and pool data.",
        "Integrate backend APIs and maintain production mining features.",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Ant Design", "REST APIs"],
      diagram: "pool",
      note: "Many workers. One clear view.",
      url: "",
    },
    {
      id: "cminer",
      name: "CMiner",
      category: "Real-time operations",
      subtitle: "Complex infrastructure. Clear signals.",
      description:
        "An internal operations platform for monitoring and managing ASIC mining infrastructure in real time.",
      contributions: [
        "Built dashboards for miner status, hashrate, power, revenue and online/offline monitoring.",
        "Developed miner inventory, pool configuration, hosting-cost, hash-billing and machine settings interfaces.",
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
        "Develop and maintain React, Next.js and TypeScript applications across Segments, SegPool and CMiner. Build customer and internal dashboards for mining operations, hosting, billing and revenue.",
      detail:
        "Integrate REST APIs and live data with MQTT, EMQX and WebSockets; collaborate with Java and Spring Boot services and resolve production issues.",
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
        "REST APIs, Axios, Fetch API, JSON, Java, Spring Boot, Next.js server-side development",
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
        "Recharts, Chart.js, ExcelJS, XLSX, Git, GitHub / GitLab, npm, Yarn, Gradle, VS Code",
    },
  ],
  education: {
    degree: "Bachelor of Technology",
    subject: "Electrical & Electronics Engineering",
    year: "2022",
  },
};
