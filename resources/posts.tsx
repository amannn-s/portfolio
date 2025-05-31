import { CodeBlock } from "@/components/ui/code-block";
import { BlogPost } from "@/types/BlogPost";
import { ParamValue } from "next/dist/server/request/params";

const post1: BlogPost = {
  id: 1,
  slug: "edtech-app-case-study",
  title: "How I Built a Full-Stack EdTech App",
  date: "May 10, 2025",
  author: {
    name: "Amandeep Singh",
    bio: "Full-stack developer with experience in MERN, React Native, and Java. I build web and mobile apps and am open to jobs and freelance work.",
    role: "Java | MERN Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/201243131",
    social: "https://www.linkedin.com/in/amandeep-singh-it-developer",
  },
  expert:
    "A breakdown of how I designed and developed Datadrix using MERN stack — covering features, structure, and lessons learned.",
  description:
    "Datadrix is a full-stack EdTech platform I built using the MERN stack. In this post, I walk through its architecture, key features, development approach, and the practical takeaways I gained from building it end-to-end.",
  tags: [
    "EdTech",
    "MERN",
    "Case Study",
    "Full Stack",
    "React",
    "MongoDB",
    "Node.js",
  ],
  estimatedReadTime: "4 min",
  coverImage: "",
  featured: false,
  seo: {
    title:
      "Case Study: How I Built Datadrix, a Full-Stack EdTech App with MERN",
    description:
      "Discover how I built Datadrix, a full-stack EdTech application using the MERN stack. From features to architecture, here’s a full breakdown.",
    keywords: [
      "EdTech app case study",
      "MERN stack project",
      "build a full-stack app",
      "MongoDB Express React Node",
      "React case study",
      "EdTech platform development",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <h1>How I Built a Full-Stack EdTech App</h1>
        <p>
          Building <strong>Datadrix</strong>, my own full-stack EdTech platform,
          was both a challenging and rewarding experience. I used the MERN
          stack—MongoDB, Express.js, React, and Node.js—to create a scalable,
          modular, and user-friendly application. This post covers the major
          architectural decisions, features, and lessons learned.
        </p>

        <h2>1. Project Overview</h2>
        <p>
          Datadrix is designed to help learners access curated content, track
          progress, and interact with instructors. It includes user roles
          (students, instructors, admins), a course management system, quizzes,
          dashboards, and payment integration.
        </p>

        <h2>2. Tech Stack</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React + Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js with Express
          </li>
          <li>
            <strong>Database:</strong> MongoDB with Mongoose
          </li>
          <li>
            <strong>Authentication:</strong> JWT + bcrypt
          </li>
          <li>
            <strong>Storage:</strong> Cloudinary for media uploads
          </li>
        </ul>

        <h2>3. Key Features</h2>
        <ul>
          <li>Role-based access (student, instructor, admin)</li>
          <li>Course creation and enrollment</li>
          <li>Progress tracking</li>
          <li>Quiz engine and results dashboard</li>
          <li>Secure login/signup with JWT</li>
          <li>Responsive UI with Tailwind</li>
        </ul>

        <h2>4. Backend Structure</h2>
        <p>
          I followed a modular structure with routes, controllers, models, and
          middlewares separated for clarity and maintainability. Error handling
          is centralized and all async routes use `express-async-errors`.
        </p>

        <h2>5. Challenges Faced</h2>
        <ul>
          <li>Handling relational data (e.g., users enrolled in courses)</li>
          <li>Integrating file uploads securely</li>
          <li>Managing authentication flow across frontend and backend</li>
          <li>Maintaining clean component structure in React</li>
        </ul>

        <h2>6. Lessons Learned</h2>
        <p>
          Building this app solidified my understanding of REST APIs, state
          management, and user flow design. I also learned the importance of
          planning the data model early and keeping code modular for easier
          scaling.
        </p>

        <h2>Conclusion</h2>
        <p>
          Datadrix was a great way to apply my skills in a real-world project.
          Whether you&apos;re a developer looking to build your own EdTech app
          or exploring the MERN stack, I hope this breakdown gives you practical
          insights into full-stack development.
        </p>
      </article>
    );
  },
};

const post2: BlogPost = {
  id: 2,
  slug: "react-beginner-mistakes",
  title: "Top Mistakes Beginners Make in React",
  date: "April 28, 2025",
  author: {
    name: "Amandeep Singh",
    bio: "Full-stack developer with experience in MERN, React Native, and Java. I build web and mobile apps and am open to jobs and freelance work.",
    role: "Java | MERN Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/201243131",
    social: "https://www.linkedin.com/in/amandeep-singh-it-developer",
  },
  expert:
    "Common pitfalls I've seen while training students and how to avoid them with clean, maintainable React code.",
  description:
    "React is powerful, but beginners often stumble on common issues that slow down their progress. In this post, I break down the most frequent mistakes new React developers make—from poor state management to improper component structure—and share practical tips to write cleaner, more maintainable code.",
  tags: [
    "EdTech",
    "MERN",
    "Case Study",
    "Full Stack",
    "React",
    "MongoDB",
    "Node.js",
  ],
  estimatedReadTime: "4 min",
  coverImage: "",
  featured: false,
  seo: {
    title:
      "Case Study: How I Built Datadrix, a Full-Stack EdTech App with MERN",
    description:
      "Discover how I built Datadrix, a full-stack EdTech application using the MERN stack. From features to architecture, here’s a full breakdown.",
    keywords: [
      "EdTech app case study",
      "MERN stack project",
      "build a full-stack app",
      "MongoDB Express React Node",
      "React case study",
      "EdTech platform development",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <h2>1. Not Understanding Component Re-Renders</h2>
        <p>
          Many beginners don&apos;t realize that React re-renders components
          based on state or props changes. This can lead to inefficient code,
          unexpected UI behavior, or performance issues.
        </p>
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[0]}
        />
        <p>
          <strong>Fix:</strong> Always use the updater function when relying on
          the previous state.
        </p>
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[1]}
        />

        <h2>2. Overusing useState Instead of useReducer</h2>
        <p>
          Beginners tend to overuse <code>useState</code> even for complex state
          logic, which makes the code harder to manage and debug.
        </p>
        <p>
          <strong>
            When to use <code>useReducer</code>:
          </strong>{" "}
          When your state involves multiple sub-values or you have complex state
          transitions.
        </p>

        <h2>3. Incorrectly Using Keys in Lists</h2>
        <p>
          React needs <strong>unique keys</strong> to efficiently re-render list
          items. Using the index as a key can lead to bugs, especially when
          items are reordered or removed.
        </p>
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[2]}
        />
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[3]}
        />

        <h2>4. Mixing Up Controlled and Uncontrolled Inputs</h2>
        <p>
          A common mistake is mixing controlled and uncontrolled form inputs,
          leading to confusing bugs.
        </p>
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[4]}
        />
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[5]}
        />
        <p>Stick with controlled components for predictability.</p>

        <h2>5. Ignoring Component Reusability</h2>
        <p>
          New developers often copy and paste entire blocks of JSX instead of
          creating reusable components. This leads to bloated codebases and poor
          maintainability.
        </p>
        <p>
          <strong>Tip:</strong> If you&apos;re repeating UI or logic, extract it
          into its own component.
        </p>

        <h2>6. Not Handling Side Effects Properly</h2>
        <p>
          Using <code>useEffect</code> incorrectly is one of the biggest
          challenges for beginners. Common issues include infinite loops and
          missing dependencies.
        </p>
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[6]}
        />
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlocks?.[7]}
        />

        <h2>7. Skipping Prop Validation or Type Safety</h2>
        <p>
          Beginners often skip prop validation with PropTypes or don&apos;t use
          TypeScript. This makes bugs harder to catch.
        </p>
        <p>
          Even a simple <code>PropTypes</code> check can prevent unexpected
          behavior in your components.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          React has a learning curve, and making mistakes is part of the
          journey. The key is to recognize these patterns early and build habits
          that lead to clean, maintainable code.
        </p>
        <p>
          If you&apos;re just getting started, focus on understanding the{" "}
          <strong>React component lifecycle</strong>, proper{" "}
          <strong>state management</strong>, and writing{" "}
          <strong>reusable, declarative components</strong>. Over time, these
          skills will help you build more robust applications with confidence.
        </p>
      </article>
    );
  },
  codeBlocks: [
    `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  setCount(count + 1); // This won't increase count by 2!
};`,
    `setCount(prev => prev + 1);
setCount(prev => prev + 1);`,
    `// Bad
{items.map((item, index) => (
  <div key={index}>{item}</div>
))}`,
    `// Better
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`,
    `// Controlled
<input value={inputValue} onChange={e => setInputValue(e.target.value)} />`,
    `// Uncontrolled (avoid unless necessary)
<input defaultValue="Hello" />`,
    `// Bad
useEffect(() => {
  fetchData();
}, []);`,
    `// Good
useEffect(() => {
  fetchData();
}, [userId]);`,
  ],
};

const post3: BlogPost = {
  id: 3,
  slug: "java-backend-usage",
  title: "Why I Still Use Java for Backend",
  date: "April 15, 2025",
  author: {
    name: "Amandeep Singh",
    bio: "Full-stack developer with experience in MERN, React Native, and Java. I build web and mobile apps and am open to jobs and freelance work.",
    role: "Java | MERN Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/201243131",
    social: "https://www.linkedin.com/in/amandeep-singh-it-developer",
  },
  expert:
    "Even with Node.js booming, here's why I still choose Java and Spring Boot for certain backend systems.",
  description:
    "Java may seem old-school compared to modern backend frameworks, but it's still my go-to for scalable, enterprise-grade applications. In this post, I share why Java and Spring Boot continue to be a reliable choice for critical systems.",
  tags: [
    "EdTech",
    "MERN",
    "Case Study",
    "Full Stack",
    "React",
    "MongoDB",
    "Node.js",
  ],
  estimatedReadTime: "4 min",
  coverImage: "",
  featured: false,
  seo: {
    title:
      "Case Study: How I Built Datadrix, a Full-Stack EdTech App with MERN",
    description:
      "Discover how I built Datadrix, a full-stack EdTech application using the MERN stack. From features to architecture, here’s a full breakdown.",
    keywords: [
      "EdTech app case study",
      "MERN stack project",
      "build a full-stack app",
      "MongoDB Express React Node",
      "React case study",
      "EdTech platform development",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <h1>Why I Still Use Java for Backend</h1>
        <p>
          In a world dominated by JavaScript and Node.js, using Java might seem
          outdated—but for many use cases, it&apos;s still my top choice. Here’s
          why I often rely on Java and Spring Boot for building backend systems.
        </p>

        <h2>1. Battle-Tested Performance and Reliability</h2>
        <p>
          Java has powered enterprise systems for decades. The JVM is highly
          optimized, and with Spring Boot, you get a mature ecosystem that
          scales effortlessly and runs reliably under heavy loads.
        </p>

        <h2>2. Robust Ecosystem</h2>
        <p>
          From security (Spring Security) to REST APIs (Spring Web) to data
          access (Spring Data JPA), Spring Boot provides production-ready tools
          out of the box—saving hours of manual setup and configuration.
        </p>

        <h2>3. Strong Typing and Tooling</h2>
        <p>
          Java’s type system, along with powerful IDE support (like IntelliJ
          IDEA), helps catch errors at compile time, which reduces bugs in large
          codebases. Autocomplete, refactoring, and debugging are smooth and
          fast.
        </p>

        <h2>4. Long-Term Maintainability</h2>
        <p>
          For projects that will be maintained for years (especially in finance,
          health, or enterprise tech), Java provides long-term readability and
          maintainability—important in teams where developers change over time.
        </p>

        <h2>5. It&apos;s Not Either-Or</h2>
        <p>
          I also love Node.js for quick APIs, lightweight services, and
          frontend-backend synergy. But when it comes to large, complex systems
          that need structure, reliability, and strong typing—Java is still a
          great fit.
        </p>

        <h2>Conclusion</h2>
        <p>
          Java isn’t going anywhere. While trends shift toward newer
          technologies, it&apos;s essential to choose tools based on project
          needs. For many backend systems, Java with Spring Boot is still hard
          to beat.
        </p>
      </article>
    );
  },
};

const post4: BlogPost = {
  id: 4,
  slug: "frontend-roadmap",
  title: "Recommended Road Map to Learn Frontend",
  date: "May 23, 2025",
  author: {
    name: "Amandeep Singh",
    bio: "Full-stack developer with experience in MERN, React Native, and Java. I build web and mobile apps and am open to jobs and freelance work.",
    role: "Java | MERN Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/201243131",
    social: "https://www.linkedin.com/in/amandeep-singh-it-developer",
  },
  expert:
    "A step-by-step frontend roadmap for beginners to become job-ready — from HTML to frameworks and advanced tooling.",
  description:
    "If you're just starting your frontend journey, this guide lays out a practical, structured path to follow. From the basics of HTML and CSS to React and modern build tools, here's what you need to focus on to grow from zero to confident frontend developer.",
  tags: [
    "EdTech",
    "MERN",
    "Case Study",
    "Full Stack",
    "React",
    "MongoDB",
    "Node.js",
  ],
  estimatedReadTime: "4 min",
  coverImage: "",
  featured: false,
  seo: {
    title:
      "Case Study: How I Built Datadrix, a Full-Stack EdTech App with MERN",
    description:
      "Discover how I built Datadrix, a full-stack EdTech application using the MERN stack. From features to architecture, here’s a full breakdown.",
    keywords: [
      "EdTech app case study",
      "MERN stack project",
      "build a full-stack app",
      "MongoDB Express React Node",
      "React case study",
      "EdTech platform development",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <p>
          Whether you&apos;re switching careers or just starting out, frontend
          development can seem overwhelming. Here&apos;s a step-by-step roadmap
          to guide you through what to learn — in the right order — so you stay
          focused and avoid burnout.
        </p>

        <h2>1. Learn the Fundamentals</h2>
        <ul>
          <li>
            <strong>HTML:</strong> Understand basic tags (h1, h2, h3, h4, h5,
            h6, p, span, a, ul, ol), semantic elements, forms, tables.
          </li>
          <li>
            <strong>CSS:</strong> Selectors, units, colors, box model, flexbox,
            grid, positioning, transitions, responsive design.
          </li>
          <li>
            <strong>Basic JavaScript:</strong> Variables, conditional
            statements, functions, arrays, objects, loops, DOM manipulation.
          </li>
        </ul>

        <h2>2. Dive into Modern JavaScript (ES6+)</h2>
        <ul>
          <li>Arrow functions, destructuring, template literals</li>
          <li>Async/await, promises, fetch API</li>
          <li>Modules and import/export</li>
        </ul>

        <h2>3. Version Control</h2>
        <p>
          Learn how to use <strong>Git</strong> and <strong>GitHub</strong>.
          It&apos;s essential for collaboration and managing your codebase.
        </p>

        <h2>4. Master a Frontend Framework</h2>
        <p>
          Start with <strong>React</strong> — the most popular library for
          building user interfaces. Learn about components, props, state, and
          lifecycle.
        </p>

        <h2>5. Style Your Projects</h2>
        <ul>
          <li>CSS-in-JS (e.g., styled-components)</li>
          <li>
            Utility-first frameworks like <strong>Tailwind CSS</strong>
          </li>
          <li>Component libraries like ShadCN or Material UI</li>
        </ul>

        <h2>6. Go Deeper with React</h2>
        <ul>
          <li>React Router</li>
          <li>Context API, hooks like useEffect, useReducer</li>
          <li>State management with contextApi, Redux</li>
        </ul>

        <h2>7. Tooling & Ecosystem</h2>
        <ul>
          <li>Package managers: npm, pnpm, yarn</li>
          <li>Build tools: Vite, Webpack (basic concepts)</li>
          <li>Code formatting: Prettier, ESLint</li>
        </ul>

        <h2>8. Build Projects</h2>
        <p>
          Nothing beats hands-on experience. Build a portfolio: a personal site,
          a weather app, a blog, or clone popular UIs.
        </p>

        <h2>9. Learn Testing Basics</h2>
        <ul>
          <li>Jest for unit testing</li>
          <li>React Testing Library for UI behavior</li>
        </ul>

        <h2>10. Explore Advanced Topics</h2>
        <p>
          Once you&apos;re confident, explore Next.js (React framework for
          full-stack apps), performance optimization, accessibility (a11y), and
          deploying apps with Vercel or Netlify.
        </p>

        <h2>Conclusion</h2>
        <p>
          The frontend ecosystem is vast, but with a focused roadmap, you can
          progress efficiently. Stick to the fundamentals, build consistently,
          and refine your learning as you go. Good luck!
        </p>
      </article>
    );
  },
};

//Amisha's Blog...⬇️

const post5: BlogPost = {
  id: 5,
  slug: "things-i-wish-i-knew-before-mern",
  title: "Things I Wish I Knew Before Starting the MERN Stack",
  date: "May 24, 2025",
  author: {
    name: "Amisha Chaubey",
    role: "MERN Stack Developer",
    bio: "A curious developer sharing real-world lessons from the MERN journey.",
    avatar: "https://avatars.githubusercontent.com/u/208958322?v=4",
    social: "https://www.linkedin.com/in/aameesaa-aryani-4b49b225b",
  },
  expert: "Lessons from a real MERN learner (Amisha)",
  description:
    "This post captures honest reflections and funny truths I discovered while learning MongoDB, Express, React, and Node. If you're just starting with MERN, read this before you dive in!",
  tags: [
    "MERN",
    "JavaScript",
    "MongoDB",
    "React",
    "Node.js",
    "Express",
    "Beginner Tips",
  ],
  estimatedReadTime: "4 min",
  coverImage: "",
  featured: true,
  seo: {
    title: "Things I Wish I Knew Before Starting the MERN Stack",
    description:
      "Honest lessons and developer insights about the MERN stack. Learn what to expect before starting with MongoDB, Express, React, and Node.",
    keywords: [
      "MERN stack",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Beginner developer tips",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <p>
          Learning the MERN stack is exciting, but here are a few things I wish
          someone had told me earlier:
        </p>

        <h2>1. MongoDB isn&apos;t just a database…</h2>
        <p>
          It&apos;s schema-less and super flexible — but not always
          beginner-friendly. Think of it like a magical diary that doesn&apos;t
          follow any rules.
        </p>

        <h2>2. Express feels easy — until middlewares come in.</h2>
        <p>
          “req, res, next” sounds simple, until you forget the
          &lsquo;next()&rsquo;; and your server just hangs in silence.
        </p>

        <h2>3. React will make you feel smart and dumb… on the same day.</h2>
        <p>
          It&apos;s amazing when it works. But when useEffect breaks or states
          loop — good luck!
        </p>

        <h2>4. Node.js is powerful — and unforgiving.</h2>
        <p>
          One uncaught error and boom, your whole server crashes. Error handling
          is a must.
        </p>

        <h2>5. Build before you&apos;re ready.</h2>
        <p>
          You&apos;ll never “know enough.” The best way to learn is to build
          real projects and mess things up.
        </p>

        <h2>Conclusion</h2>
        <p>
          Don&apos;t be scared. MERN is a powerful combo — just take it one bug
          at a time. And remember, every confusion is part of your learning
          badge!
        </p>

        <h2> Build Projects & Keep Learning </h2>
        <p>Don&apos;t stop after one project. Keep experimenting...</p>
        <p>
          <em>Written by Amisha Chaubey — a curious MERN stack learner. ✨</em>
        </p>
      </article>
    );
  },
};

const post6: BlogPost = {
  id: 3,
  slug: "ai-fullstack-job-2025-roadmap",
  title:
    "Fast-Track Your AI Full Stack Developer Job in 2025: A 12-Month Roadmap",
  date: "May 27, 2025",
  author: {
    name: "Amandeep Singh",
    bio: "Full-stack developer with experience in MERN, React Native, and Java. I build web and mobile apps and am open to jobs and freelance work.",
    role: "Java | MERN Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/201243131",
    social: "https://www.linkedin.com/in/amandeep-singh-it-developer",
  },
  expert:
    "A month-by-month action plan to help you become a job-ready AI-powered full stack web developer in 2025.",
  description:
    "Want a job as a full stack developer in 2025? This roadmap covers frontend, backend, AI integration, and monetization — all in 12 months. Whether you're starting from scratch or switching careers, this is your ultimate game plan.",
  tags: [
    "AI Developer",
    "Full Stack",
    "Job Roadmap",
    "MERN",
    "Next.js",
    "React",
    "FastAPI",
    "OpenAI",
    "Prompt Engineering",
    "Python",
    "Machine Learning",
    "Career",
    "Freelancing",
  ],
  estimatedReadTime: "5 min",
  coverImage: "/blog/ai-fullstack-roadmap.jpg",
  featured: true,
  seo: {
    title: "2025 Roadmap to Get an AI Full Stack Developer Job Fast",
    description:
      "Step-by-step 12-month guide to become an AI-powered full stack web developer. Learn frontend, backend, ML, cloud, and land a job in 2025.",
    keywords: [
      "AI full stack job roadmap 2025",
      "How to get web developer job 2025",
      "AI in full stack development",
      "Learn full stack with AI tools",
      "Prompt engineering roadmap",
      "Fastest way to get developer job",
      "Next.js AI job strategy",
      "Freelancing with AI tools",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <p>
          Want to land a job as a full stack developer in 2025 — one who knows
          both the web and AI? This guide breaks down a 12-month strategy that
          blends web development, AI integration, and career growth. It&apos;s
          not just about building projects, but building the right ones — fast.
        </p>

        <h2>🚀 Phase 1 (Months 1-3): Frontend + AI Basics</h2>
        <p>
          Your goal here is to become confident with core frontend skills and
          start using AI tools that make you 2x more productive.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>HTML/CSS/JavaScript:</strong> Build 5+ real projects — like
            landing pages, product clones, DOM games, and your personal
            portfolio.
          </li>
          <li>
            <strong>React/Next.js:</strong> Learn company-loved frameworks.
            React is a must-have, and Next.js will prep you for building
            ChatGPT-style plugins.
          </li>
          <li>
            <strong>AI Tools:</strong> Use ChatGPT, Claude, and GitHub Copilot
            to speed up learning. Learn prompt engineering (start with a free
            crash course).
          </li>
          <li>
            <strong>Deploy with AI:</strong> Integrate OpenAI&apos;s API into
            one of your projects — a chatbot, content generator, or filter. Cost
            is minimal (~$5).
          </li>
        </ul>

        <h2>🧠 Phase 2 (Months 4-7): Backend + AI Integration</h2>
        <p>
          Now that you&apos;ve built UI muscle, it&apos;s time to connect the
          backend and learn how AI is powered behind the scenes.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Python + Node.js:</strong> Build REST APIs using Express
            (Node.js) and FastAPI (Python). These are backend weapons of choice.
          </li>
          <li>
            <strong>Vector Databases:</strong> Explore Pinecone or ChromaDB —
            these store AI embeddings and enable things like personalized
            recommendations.
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> Get hands-on with Docker, AWS, or
            Azure. These skills are essential for scaling AI products and stand
            out to recruiters.
          </li>
          <li>
            <strong>Project Ideas:</strong> Sentiment analysis APIs, AI-powered
            SaaS, resume analyzer — pick something useful and launch it.
          </li>
        </ul>

        <h2>🤖 Phase 3 (Months 8-10): AI/ML Specialization</h2>
        <p>
          This is where you separate yourself from the average web dev by going
          deep into AI/ML.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Machine Learning:</strong> Start with TensorFlow or
            scikit-learn. Build simple models like spam detectors,
            recommendation engines, or text summarizers.
          </li>
          <li>
            <strong>AI Ethics:</strong> Learn the basics of bias detection and
            responsible AI. This will be huge for 2025 roles.
          </li>
          <li>
            <strong>Freelancing:</strong> Build mini custom GPTs or AI
            dashboards for small businesses. It counts as real-world experience!
          </li>
          <li>
            <strong>Certifications:</strong> Aim for an AWS Machine Learning or
            Google Cloud AI certification.
          </li>
        </ul>

        <h2>💼 Phase 4 (Months 11-12): Monetize & Get Hired</h2>
        <p>
          You&apos;ve now built skills, projects, and credibility. Time to
          showcase it and turn it into income.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Build a SaaS:</strong> Launch an AI-powered product — an
            analytics dashboard, writing tool, or GPT app. Even a small MVP
            counts.
          </li>
          <li>
            <strong>Job Strategy:</strong> Target AI-focused startups — 2025 is
            booming with AI seed funding. If you&apos;ve freelanced, apply for
            mid/senior roles.
          </li>
          <li>
            <strong>Networking:</strong> Join Kaggle competitions, post your
            projects on LinkedIn, and engage in AI Discord groups or forums.
            Visibility matters.
          </li>
        </ul>

        <h2>🎯 Final Thoughts</h2>
        <p>
          You don&apos;t need a CS degree to break into AI-powered web
          development. All you need is focus, consistency, and a little bit of
          AI to boost your speed.
        </p>
        <p>
          Stick to this roadmap, document your journey, and keep building. By
          the end of 12 months, you won&apos;t just be job-ready — you&apos;ll
          be in demand.
        </p>

        <p>
          <em>Written by Amandeep Singh — Full Stack Developer</em>
        </p>
      </article>
    );
  },

  codeBlocks: [],
};

//Amisha's blog... ⬇️

const post7: BlogPost = {
  id: 7,
  slug: "why-frontend-feels-like-home",
  title: "Why Frontend Development Feels Like Home: My Creative Escape in Code",
  date: "June 1, 2025",
  author: {
    name: "Amisha Chaubey",
    bio: "MERN stack learner sharing my journey, projects, and design experiments. I enjoy turning ideas into smooth UI and clean code.",
    role: "MERN Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/208958322?v=4",
    social: "https://www.linkedin.com/in/aameesaa-aryani-4b49b225b",
  },
  expert:
    "A beginner-friendly, personal journey into frontend development — how it became my favorite part of MERN, and why designing UI feels like digital creativity.",
  description:
    "For anyone starting MERN or struggling with frontend, this post is a friendly story about how frontend development became my comfort zone. I compare it to painting, talk about my first messy layout, and share tips for enjoying the process.",
  tags: [
    "Frontend Development",
    "MERN Stack",
    "UI Design",
    "Beginner Journey",
    "React",
    "Tailwind",
    "Creative Coding",
    "Motivation",
  ],
  estimatedReadTime: "4 min",
  coverImage: "/blog/frontend-feels-like-home.jpg",
  featured: false,
  seo: {
    title: "Why Frontend Development Feels Like Home: A Beginner’s Perspective",
    description:
      "Frontend isn't just code — it's a creative space. Here's why I enjoy designing UI as a MERN learner, and what makes it feel like home.",
    keywords: [
      "Frontend development beginner story",
      "Learning frontend with React",
      "UI design for new developers",
      "Creative frontend journey",
      "MERN stack frontend experience",
    ],
  },
  content() {
    return (
      <article className="post-content max-w-none">
        <p>
          There’s something oddly satisfying about turning a blank screen into a
          clean, clickable, scrollable UI. As someone learning the MERN stack,
          I’ve realized one thing: <strong>frontend development feels like home</strong>.
        </p>

        <h2>🎨 Like Painting With Code</h2>
        <p>
          When I first started coding, I didn’t expect to enjoy styling so much.
          But soon, adjusting margins, choosing colors, and arranging components
          became my favorite part. It felt like painting — only instead of brushes, I
          had CSS and Tailwind.
        </p>
        <p>
          Every div was a new stroke. Every layout challenge? A puzzle I wanted
          to solve. I wasn't just building a website — I was designing an experience.
        </p>

        <h2>😅 My First Frontend Project Was... a Mess</h2>
        <p>
          My first webpage looked like a patchwork quilt — uneven fonts,
          stretched images, weird spacing. But still, I felt proud. That “ugly
          but functional” project gave me the confidence to keep going.
        </p>
        <p>
          I think we all start that way. And that’s okay — messy beginnings are
          part of creative growth.
        </p>

        <h2>🧩 What I Enjoy the Most</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Layout design:</strong> Flexbox, Grid — these are tools that
            turn ideas into structure.
          </li>
          <li>
            <strong>Animations:</strong> A little motion using Framer Motion or
            CSS transitions makes everything feel alive.
          </li>
          <li>
            <strong>Responsive UI:</strong> Making sure it looks good on both a
            laptop and a phone is a fun challenge.
          </li>
        </ul>

        <h2>🛠️ Tools I’ve Been Using</h2>
        <ul className="list-disc ml-6">
          <li><strong>React:</strong> For component-based architecture</li>
          <li><strong>Tailwind CSS:</strong> For fast and clean styling</li>
          <li><strong>Figma:</strong> For planning layout and inspiration</li>
        </ul>

        <h2>✨ A Quick Tip for New Frontend Learners</h2>
        <p>
          Don’t wait to become a design “expert.” Just start building. Clone a
          website you like. Recreate a product page. Experiment with colors.
          Slowly, your eye for design will improve.
        </p>

        <h2>🎯 Final Thoughts</h2>
        <p>
          Backend has its own power — but frontend gives me that instant
          feedback, that feeling of <em>“I made this”</em>. Whether it's a login form or a
          full dashboard, I enjoy making things look neat, usable, and a little
          beautiful.
        </p>
        <p>
          So if you're learning MERN like me and feel drawn to frontend, explore
          it fully. Maybe — just like me — you’ll find that coding UI isn’t just
          technical... it’s personal.
        </p>

        <p>
          <em>Written by Amisha Chaubey — a curious MERN stack learner. ✨</em>
        </p>
      </article>
    );
  },
};


const posts = [post7,post6, post5, post4, post3, post2, post1];

export const getAllPost = () => {
  return posts;
};

export const getLatestPost = () => {
  return posts.slice(0, 3);
};

export const getPostBySlug = (postSlug: ParamValue) => {
  return posts.find((post) => post.slug === postSlug);
};
