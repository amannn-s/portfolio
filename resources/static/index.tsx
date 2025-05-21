export const navLinks = [
  { id: 1, title: "My Work", path: "#" },
  { id: 3, title: "Experience", path: "#experience" },
  { id: 2, title: "Projects", path: "#projects" },
  { id: 4, title: "Posts", path: "#posts" },
  { id: 5, title: "Contact me", path: "#contact-me" },
];

export const experience = [
  {
    id: 1,
    company: "Datadrix",
    path: "https://datadrix.com/",
    designation: "Full-Stack Web Developer",
    duration: "November, 2024 - present",
    description:
      "Working on building scalable web applications using MERN stack and React Native. Responsible for both frontend and backend development, API integration, and deployment.",
  },
  {
    id: 2,
    company: "i3infosoft",
    path: "https://www.i3infosoft.com/",
    designation: "MERN/Java Full Stack Trainer/Developer",
    duration: "December, 2022 - May, 2024",
    description:
      "Trained students and interns in MERN and Java Full Stack technologies. Also contributed to internal projects, focusing on building full-stack features and guiding junior developers.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML, CSS, JavaScript",
      "Tailwind CSS",
      "Redux / Context API",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Expo"],
  },
  {
    category: "Full Stack (Java)",
    items: ["Java", "Spring Boot", "MySQL"],
  },
  {
    category: "Tools & Others",
    items: ["Git & GitHub", "Postman", "VS Code", "Figma (basic)"],
  },
  {
    category: "Deployment",
    items: ["Vercel", "Render", "Netlify", "MongoDB Atlas"],
  },
];

export const projectsList = [
  {
    title: "Datadrix - EdTech Website",
    description: (
      <>
        <p>
          A full-stack education platform built for an EdTech company. It offers
          course listings, user dashboards, admin control, and secure
          authentication. I worked on both frontend and backend, focusing on
          seamless UX and clean API integration using the MERN stack.
        </p>
      </>
    ),
    badge: "Project #1",
    image: "/images/datadrix-ss.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
  },
  {
    title: "PehlaPanna - Mass Media Web App",
    description: (
      <>
        <p>
          A media content platform that delivers news, articles, and multimedia
          stories. Built with React, Node.js, and MongoDB, this project supports
          real-time updates, media uploads, and user engagement features. I
          handled API development and responsive frontend design.
        </p>
      </>
    ),
    badge: "Project #2",
    image: "/images/pehlapanna-ss.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
  },
  {
    title: "Connect - Social Media App",
    description: (
      <>
        <p>
          A social networking app where users can create profiles, share posts,
          like, comment, and follow others. Built with MERN and React Native, it
          includes real-time notifications and image uploads. I led the frontend
          work and contributed to backend routes and database design.
        </p>
      </>
    ),
    badge: "Project #3",
    image: "/images/datadrix-ss.png",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Multer",
    ],
  },
];

export const posts = [
  {
    title: "How I Built a Full-Stack EdTech App",
    date: "May 10, 2025",
    slug: "edtech-app-case-study",
    excerpt:
      "A breakdown of how I designed and developed Datadrix using MERN stack — covering features, structure, and lessons learned.",
  },
  {
    title: "Top Mistakes Beginners Make in React",
    date: "April 28, 2025",
    slug: "react-beginner-mistakes",
    excerpt:
      "Common pitfalls I’ve seen while training students and how to avoid them with clean, maintainable React code.",
  },
  {
    title: "Why I Still Use Java for Backend",
    date: "April 15, 2025",
    slug: "java-backend-usage",
    excerpt:
      "Even with Node.js booming, here’s why I still choose Java and Spring Boot for certain backend systems.",
  },
];
