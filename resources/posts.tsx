import { CodeBlock } from "@/components/ui/code-block";
import { ParamValue } from "next/dist/server/request/params";

const post1 = {
  id: 1,
  slug: "edtech-app-case-study",
  title: "How I Built a Full-Stack EdTech App",
  date: "May 10, 2025",
  excerpt:
    "A breakdown of how I designed and developed Datadrix using MERN stack — covering features, structure, and lessons learned.",
  description:
    "Datadrix is a full-stack EdTech platform I built using the MERN stack. In this post, I walk through its architecture, key features, development approach, and the practical takeaways I gained from building it end-to-end.",
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

const post2 = {
  id: 2,
  slug: "react-beginner-mistakes",
  title: "Top Mistakes Beginners Make in React",
  date: "April 28, 2025",
  excerpt:
    "Common pitfalls I've seen while training students and how to avoid them with clean, maintainable React code.",
  description:
    "React is powerful, but beginners often stumble on common issues that slow down their progress. In this post, I break down the most frequent mistakes new React developers make—from poor state management to improper component structure—and share practical tips to write cleaner, more maintainable code.",
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
          code={this.codeBlock1}
        />
        <p>
          <strong>Fix:</strong> Always use the updater function when relying on
          the previous state.
        </p>
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlock2}
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
          code={this.codeBlock3}
        />
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlock4}
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
          code={this.codeBlock5}
        />
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlock6}
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
          code={this.codeBlock7}
        />
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={this.codeBlock8}
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
  codeBlock1: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  setCount(count + 1); // This won't increase count by 2!
};`,
  codeBlock2: `setCount(prev => prev + 1);
setCount(prev => prev + 1);`,
  codeBlock3: `// Bad
{items.map((item, index) => (
  <div key={index}>{item}</div>
))}`,
  codeBlock4: `// Better
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`,
  codeBlock5: `// Controlled
<input value={inputValue} onChange={e => setInputValue(e.target.value)} />`,
  codeBlock6: `// Uncontrolled (avoid unless necessary)
<input defaultValue="Hello" />`,
  codeBlock7: `// Bad
useEffect(() => {
  fetchData();
}, []);`,
  codeBlock8: `// Good
useEffect(() => {
  fetchData();
}, [userId]);`,
};

const post3 = {
  id: 3,
  slug: "java-backend-usage",
  title: "Why I Still Use Java for Backend",
  date: "April 15, 2025",
  excerpt:
    "Even with Node.js booming, here's why I still choose Java and Spring Boot for certain backend systems.",
  description:
    "Java may seem old-school compared to modern backend frameworks, but it's still my go-to for scalable, enterprise-grade applications. In this post, I share why Java and Spring Boot continue to be a reliable choice for critical systems.",
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

const posts = [post1, post2, post3];

export const getAllPost = () => {
  return posts;
};

export const getLatestPost = () => {
  return posts.slice(posts.length - 3);
};

export const getPostBySlug = (postSlug: ParamValue) => {
  return posts.find((post) => post.slug === postSlug);
};
