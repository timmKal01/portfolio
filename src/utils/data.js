import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaLightbulb,
    FaCode,
    FaUsers,
    FaLaravel,
    FaGithub,
} from 'react-icons/fa';

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { FaGitAlt, FaXTwitter } from 'react-icons/fa6';

import portfolioWebsiteImg from "../assets/images/portfolio_website.png";
import northgateImg from "../assets/images/northgate-cover.svg";
import ecommerceAdminImg from "../assets/images/task_management_app.png";
import timsActorsImg from "../assets/images/tims-actors-cover.svg";
import mkahawaImg from "../assets/images/mkahawa-cover.svg";

export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
    { id: "01", count: "4", label: 'Years of \nExperience' },
    { id: "02", count: "2", label: 'Certifications \nEarned' },
    { id: "03", count: "2", label: 'Projects \nCompleted' },
    { id: "04", count: "10", label: 'Happy \nClients' },

];

export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Skills", value: "soft-skill" },
];

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        type: "frontend",
        progress: 92,
        description:
            "Experienced front-end developer experienced in building fast, responsive, and interactive web applications using React.js.",
    },

    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        type: "frontend",
        progress: 95,
        description:
            "Proficient in writing clean, semantic HTML to build well-structured and accessible web pages.",
    },

    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        type: "frontend",
        progress: 93,
        description:
            "Experienced in using modern CSS techniques to create adaptive and visually appealing interfaces.",
    },

    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "Javascript",
        type: "frontend",
        progress: 90,
        description:
            "Experienced in using JavaScript to create responsive user interactions, handle APIs, and enhance front-end performance.",
    },

    {
        id: "05",
        icon: FaNodeJs,
        skill: "Node.js",
        type: "backend",
        progress: 85,
        description:
            "Proficient in using Node.js to create fast, secure, and scalable backend solutions.",
    },

    {
        id: "06",
        icon: SiExpress,
        skill: "Express.js",
        type: "backend",
        progress: 82,
        description:
            "Experienced in developing efficient server-side routes, middleware, and API integrations with Express.js.",
    },

    {
        id: "07",
        icon: SiMongodb,
        skill: "MongoDB",
        type: "backend",
        progress: 80,
        description:
            "Experienced in building and integrating MongoDB databases for scalable applications with optimized performance.",
    },

    {
        id: "08",
        icon: SiMysql,
        skill: "SQL",
        type: "backend",
        progress: 85,
        description:
            "Skilled in writing efficient SQL queries, designing normalized database schemas, and managing data with MySQL.",
    },

    {
        id: "09",
        icon: FaGitAlt,
        skill: "Git & GitHub",
        type: "tools",
        progress: 90,
        description:
            "Proficient in using Git for version control, collaborating on projects, and managing code efficiently across teams.",
    },

    {
  id: "10",
  icon: FaLightbulb, // you can import this from "react-icons/fa"
  skill: "Problem Solving",
  type: "soft-skill",
  progress: 95,
  description:
    "Strong analytical thinker with the ability to identify issues, design creative solutions, and implement strategies that enhance application performance and user experience.",
},

{
  id: "11",
  icon: FaCode, // import from "react-icons/fa"
  skill: "Visual Studio Code",
  type: "tools",
  progress: 97,
  description:
    "Highly proficient in using Visual Studio Code for efficient coding, debugging, and extension management to streamline development workflows.",
},

{
  id: "12",
  icon: FaUsers, // import from "react-icons/fa"
  skill: "Collaboration",
  type: "soft-skill",
  progress: 95,
  description:
    "Strong team player skilled in effective communication, version control coordination, and agile collaboration to achieve shared development goals efficiently.",
},

{
    id: "13",
    icon: FaLaravel,
    skill: "Laravel",
    type: "backend",
    progress: 90,
    description: "Ability to create a digital business with fully functional elements",
}





];

export const ABOUT_ME = {
    content: "Experienced full-stack developer who loves creating interactive and user-friendly web applications. With experience in React.js, Node.js, and database management, I focus on building efficient, modern, and scalable solutions.",
    contentTwo: "I am passionate about coding and continuously learning new technologies to enhance my skills. I enjoy collaborating with teams to deliver high-quality projects that meet client needs and exceed expectations.",
    sociallinks: [
        { id: "01", label: "GitHub", icon: FaGithub, link: "https://github.com/timmKal01" },
        { id: "02", label: "X", icon: FaXTwitter, link: "https://x.com/TechTimmydcz" },
    ],

    email: "timothykelvinkalungu@gmail.com",
    phone: "+(254) 704321761",
    website: "",

};

export const PROJECTS = [
    {
        id: "01",
        title: "Tim's Actors — Data Tool Portfolio",
        description:
            "A portfolio of Apify actors turning public data into clean JSON, with a live build-log and storefront site.",
        image: timsActorsImg,
        tags: ["Next.js", "Postgres", "Apify"],
        demoUrl: "https://builder-site-lovat.vercel.app",
        repoUrl: "https://github.com/timmKal01/builder-site",
    },
    {
        id: "02",
        title: "Mkahawa — Nairobi Steakhouse",
        description:
            "A restaurant landing page for a Nairobi charcoal-grill steakhouse — tabbed menu, hours, and a full reservation form.",
        image: mkahawaImg,
        tags: ["Next.js", "TailwindCSS"],
        demoUrl: "https://mkaa-nairobi.vercel.app",
        repoUrl: null,
    },
    {
        id: "03",
        title: "Responsive Portfolio Website",
        description:
            "This site — a responsive personal portfolio built with React and TailwindCSS.",
        image: portfolioWebsiteImg,
        tags: ["React.js", "TailwindCSS", "JavaScript"],
        demoUrl: null,
        repoUrl: null,
    },
    {
        id: "04",
        title: "Northgate & Co. — E-Commerce Platform",
        description:
            "A full-stack Laravel storefront with vendor and admin dashboards, dark/light theming, and social login — deployed live on Azure App Service.",
        image: northgateImg,
        tags: ["Laravel", "Blade", "Alpine.js", "MySQL", "Azure"],
        demoUrl: "https://myecom-abhrbhcwc0fwhzf9.westus3-01.azurewebsites.net",
        repoUrl: "https://github.com/timmKal01/myecom",
    },
    {
        id: "05",
        title: "E-Commerce Admin Panel",
        description:
            "A full Laravel + Livewire admin panel for category, product, cart, and order management.",
        image: ecommerceAdminImg,
        tags: ["Livewire", "Laravel", "PHP", "MySQL"],
        demoUrl: null,
        repoUrl: null,
    },
];
