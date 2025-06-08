const courses = [
  {
    id: "mern-stack-development",
    title: "MERN Stack Development",
    image: "/mern.avif",
    description:
      "Master MongoDB, Express.js, React, and Node.js to become a full-stack web developer.",
    type: "Professional Certificate",
    overview:
      "This course provides a complete understanding of MERN stack development, covering both frontend and backend technologies. You will build **dynamic, scalable, and high-performance web applications** using JavaScript frameworks. The course includes hands-on projects, REST API integration, database management, authentication, and deployment strategies.",
    syllabus: [
      "Introduction to MERN Stack and its Architecture",
      "MongoDB: NoSQL Database Fundamentals and Data Modeling",
      "Express.js: Backend Development, Middleware, and API Creation",
      "React.js: Component-Based UI Development, Hooks, and State Management",
      "Node.js: Server-Side Development, File Handling, and API Routes",
      "User Authentication: JWT, OAuth, and Role-Based Access Control",
      "Building Full-Stack Applications with Real-World Use Cases",
      "Hosting & Deployment (AWS, Vercel, Netlify, and Docker)",
    ],
    details:
      "This course is ideal for aspiring web developers who want to specialize in JavaScript-based **full-stack development**. By the end of the program, you'll be proficient in designing, developing, and deploying modern web applications. Career opportunities include **Full-Stack Developer, JavaScript Developer, Backend Engineer, and Frontend Developer**. You'll also work on **capstone projects** that mimic real-world applications used in the industry.",
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    image: "/fullstack (1).jpg",
    description:
      "Master frontend and backend development with modern frameworks, databases, and cloud technologies.",
    type: "Professional Certificate",
    overview:
      "This course is designed to make you a **versatile Full-Stack Developer** by covering both **frontend and backend** development. You will work with industry-standard **frameworks, databases, cloud services, and DevOps** to build scalable applications. The course focuses on **responsive design, performance optimization, security best practices, and real-world deployment strategies**.",
    syllabus: [
      "Frontend Development with HTML, CSS, JavaScript, and Responsive Design",
      "React.js, Next.js, and Vue.js for Modern Frontend Development",
      "Backend with Node.js, Django, and Flask",
      "RESTful APIs & GraphQL for Data Communication",
      "Database Management (MySQL, PostgreSQL, MongoDB, Firebase)",
      "Authentication & Authorization with OAuth, Firebase Auth, JWT",
      "Cloud Deployment (AWS, Firebase, Netlify, Heroku)",
      "DevOps, CI/CD, and Version Control (Git, GitHub, Docker, Jenkins)",
    ],
    details:
      "Perfect for students and professionals looking to **master full-stack development**. This course prepares you for roles such as **Full-Stack Developer, Software Engineer, and Web Developer**. By the end, you'll be able to **build enterprise-level applications** and deploy them on cloud platforms. This program includes **real-world projects, industry-standard best practices, and hands-on coding challenges**.",
  },
  {
    id: "seo-digital-marketing",
    title: "SEO and Digital Marketing",
    image: "/digital3.jpg",
    description:
      "Learn data-driven marketing strategies, SEO, PPC, and social media advertising to grow online businesses.",
    type: "Professional Certificate",
    overview:
      "This course covers **modern digital marketing strategies**, including **SEO (Search Engine Optimization), PPC (Pay-Per-Click Advertising), social media campaigns, and content marketing**. You’ll learn how to **analyze data, optimize websites for search engines, generate traffic, and increase conversions** using cutting-edge marketing tools.",
    syllabus: [
      "Introduction to Digital Marketing and SEO",
      "On-Page and Off-Page SEO Strategies",
      "Google Ads, PPC Campaigns, and Budget Management",
      "Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)",
      "Content Marketing & Copywriting Strategies",
      "Lead Generation and Email Marketing Automation",
      "Website Analytics (Google Analytics, SEMrush, Ahrefs)",
      "Building and Implementing Digital Marketing Strategies",
    ],
    details:
      "Ideal for **entrepreneurs, business owners, digital marketers, and content creators** who want to build a strong online presence. You will **work on real-world campaigns, optimize websites for SEO, and master social media advertising**. Career roles include **SEO Specialist, Digital Marketing Manager, PPC Analyst, and Social Media Strategist**.",
  },
  {
    id: "industrial-training",
    title: "Industrial Training",
    image: "/industrial2.jpg",
    description:
      "Gain hands-on experience working on real-world industry projects and professional tools.",
    type: "Professional Certificate",
    overview:
      "This program is designed to provide practical exposure to **real-world industry projects**. You will work on **live projects, collaborate in teams, and use industry-standard tools** in areas like **software development, cloud computing, cybersecurity, and DevOps**.",
    syllabus: [
      "Introduction to Software Development Life Cycle (SDLC)",
      "Agile Methodologies and Project Management Tools (JIRA, Trello)",
      "Hands-On Training in Web and Mobile App Development",
      "Cybersecurity Essentials & Ethical Hacking",
      "Cloud Computing: AWS, Azure, Google Cloud Fundamentals",
      "Real-World Projects with Industry Experts",
      "Mock Interviews and Resume Preparation",
    ],
    details:
      "Ideal for **students, job seekers, and IT professionals** who want real-world industry exposure. This training enhances your **practical knowledge, teamwork, and problem-solving skills**. By the end, you’ll have **a strong portfolio, industry connections, and increased job readiness**.",
  },
  {
    id: "programming-languages",
    title: "Programming Languages",
    image: "/pl.jpg",
    description:
      "Learn Python, Java, and C++ from scratch and master core programming concepts.",
    type: "Professional Certificate",
    overview:
      "This course is perfect for **beginners and intermediate programmers** looking to master essential programming languages. You will learn the **fundamentals of Python, Java, and C++**, covering data structures, object-oriented programming (OOP), debugging, and software development best practices.",
    syllabus: [
      "Introduction to Programming (Syntax, Data Types, and Variables)",
      "Python Basics: Functions, Loops, and Object-Oriented Programming",
      "Java Fundamentals: Data Structures, Multithreading, and Exception Handling",
      "C++ Advanced Concepts: Pointers, Memory Management, and STL",
      "Database Interaction: SQL and NoSQL Integration",
      "APIs and Web Development with Python & Java",
      "Building and Deploying Real-World Applications",
    ],
    details:
      "Ideal for **students, developers, and coding enthusiasts** who want to build a strong programming foundation. By the end of the course, you’ll be proficient in **Python, Java, and C++**, making you eligible for roles such as **Software Developer, Data Analyst, and Backend Engineer**. This program includes **coding challenges, hands-on projects, and real-world applications**.",
  },
  {
    id: "mean-stack-development",
    title: "MEAN Stack Development",
    image: "/mean.jpg",
    description:
      "Master the MEAN stack: MongoDB, Express.js, Angular, and Node.js to develop full-stack web applications.",
    type: "Professional Certificate",
    overview:
      "This course provides hands-on experience in full-stack development using the MEAN stack. You will learn how to build scalable web applications from scratch using JavaScript for both frontend and backend development.",
    syllabus: [
      "Introduction to MEAN Stack",
      "MongoDB: NoSQL Database Design and CRUD Operations",
      "Express.js: Building RESTful APIs",
      "Angular: Frontend Development and Single Page Applications",
      "Node.js: Backend Development and Authentication",
      "Integrating MEAN Stack Components",
      "Deployment and Best Practices",
    ],
    details:
      "This course is ideal for aspiring full-stack developers looking to build dynamic web applications with a robust JavaScript-based technology stack. By the end of this course, you'll be proficient in setting up databases, creating secure APIs, and developing interactive UI components using Angular. You'll also learn deployment strategies to take your projects live on cloud platforms.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    image: "/graphic.jpg",
    description:
      "Learn essential graphic design principles, UI/UX design, and industry-standard tools like Adobe Photoshop and Illustrator.",
    type: "Professional Certificate",
    overview:
      "This course covers fundamental design principles, color theory, typography, and branding strategies. You will gain hands-on experience with design software and create visually compelling graphics for digital and print media.",
    syllabus: [
      "Introduction to Graphic Design",
      "Color Theory and Typography",
      "Adobe Photoshop: Image Editing and Manipulation",
      "Adobe Illustrator: Vector Graphics and Logo Design",
      "Branding and Visual Identity",
      "UI/UX Principles and Prototyping",
      "Portfolio Development and Freelancing Tips",
    ],
    details:
      "This course is perfect for aspiring designers, marketers, and entrepreneurs looking to enhance their visual communication skills. By the end of the course, you'll be able to create professional designs, build a strong portfolio, and understand how to apply design principles effectively in real-world projects.",
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures and Algorithms",
    image: "/data.jpg",
    description:
      "Master the core concepts of data structures and algorithms to excel in coding interviews and competitive programming.",
    type: "Professional Certificate",
    overview:
      "This course provides an in-depth understanding of essential data structures and algorithms, focusing on efficient problem-solving techniques. Learn how to analyze algorithm complexity, implement optimized solutions, and crack coding interviews at top tech companies.",
    syllabus: [
      "Introduction to Data Structures and Complexity Analysis",
      "Arrays, Linked Lists, and Stacks",
      "Queues, Trees, and Graphs",
      "Sorting and Searching Algorithms",
      "Dynamic Programming and Recursion",
      "Greedy Algorithms and Backtracking",
      "Competitive Programming Strategies",
    ],
    details:
      "This course is designed for aspiring software engineers and competitive programmers who want to improve their coding skills. By the end of this course, you'll have mastered fundamental and advanced data structures, enabling you to solve complex programming problems with confidence and efficiency.",
  },
];

export default courses;
