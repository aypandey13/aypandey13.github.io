/* ==========================================================
   EDIT ONLY THIS FILE to update your portfolio content.
   index.html reads everything from the CONFIG object below.
   ========================================================== */
const CONFIG = {
  name: "Ayush Pandey",
  role: "Backend Software Engineer",
  tagline:
    "I build secure, well-structured backend systems with .NET Core and Spring Boot, and I enjoy adding practical AI features to them.",

  contact: {
    email: "aypandey13@gmail.com",
    phone: "+91-7415982583",
    location: "India",
    address: "", // optional: leave empty to hide
    linkedin: "https://linkedin.com/in/ayush-pandey13",
    github: "", // e.g. "https://github.com/your-username"
    resumeUrl: "Ayush-resume.pdf", // put the PDF next to index.html, or leave "" to hide
  },

  // Visitor analytics. Fill in ONE of these, leave the other empty.
  analytics: {
    goatcounter: "", // your GoatCounter code, e.g. "ayush" (from ayush.goatcounter.com)
    googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
  },

  about: [
    "I'm a software engineer focused on backend development. Day to day I design REST APIs, model data in PostgreSQL and MySQL, and ship services to production on Linux servers.",
    "I hold a Master of Computer Application and enjoy projects where clean architecture meets real-world automation, such as document parsing, background jobs and role-based access.",
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "AveryBit Solutions Pvt. Ltd.",
      period: "Dec 2025 – Present",
      points: [
        "Develop and maintain backend services with .NET Core, PostgreSQL and MySQL.",
        "Implemented JWT-based authentication and authorization to manage multiple user roles securely.",
        "Designed a 3-tier architecture (Controller, Service, Repository) with scalable RESTful APIs.",
        "Integrated AI APIs (OpenAI, Gemini) to power intelligent features inside applications.",
        "Deploy applications to VPS and self-hosted servers using Nginx.",
      ],
    },
    {
      title: "Intern",
      company: "Badkul Technology Pvt Ltd",
      period: "Sep 2025",
      points: [
        "Built REST APIs for trip management with enum-based status states (Planned, Ongoing, Completed).",
        "Used Spring Data JPA repositories to work with the database and improve query performance.",
      ],
    },
    {
      title: "VCS Associate",
      company: "Amazon",
      period: "Jul 2022 – Apr 2023",
      points: [
        "Supported primary and specialty teams for India, France and the UK over call and chat.",
      ],
    },
  ],

  projects: [
    {
      name: "Amplica",
      summary: "A project and employee management tool.",
      stack: ["ASP.NET Core", "PostgreSQL", "Firebase", "MailKit"],
      points: [
        "Scalable REST API with caching and logging.",
        "JWT authentication with claims-based role access control.",
        "Scheduling and task automation through .NET background services.",
        "Notifications and reporting via Firebase, MailKit and Excel exports.",
      ],
      link: "",
    },
    {
      name: "Tigerstop",
      summary: "An AI-powered parser for wood cut sheets.",
      stack: ["ASP.NET Core", "OpenAI Vision", "PostgreSQL", "Docker"],
      points: [
        "Document pipeline using OCR and the OpenAI Vision API to extract data automatically.",
        "Custom parsing engine that handles fractional dimensions and outputs CNC-ready JSON.",
        "Background job processing with PostgreSQL and webhook integrations.",
        "Production REST API on Linux with Docker, secure configuration, logging and job tracking.",
      ],
      link: "",
    },
  ],

  skills: [
    { group: "Languages", items: ["Java", "C#"] },
    { group: "Frameworks", items: ["ASP.NET Core", "Spring Boot"] },
    { group: "Data", items: ["PostgreSQL", "MySQL"] },
    { group: "Tools", items: ["Postman", "Git", "GitHub", "Docker", "Nginx"] },
  ],

  education: [
    {
      degree: "Master of Computer Application",
      school: "Jabalpur Engineering College, Jabalpur, MP",
      period: "Aug 2023 – May 2025",
    },
    {
      degree: "Bachelor of Computer Application",
      school: "Rabindranath Tagore University, Bhopal, MP",
      period: "Aug 2019 – May 2022",
    },
  ],
};
