import { HomeIcon, Mail, Linkedin, Instagram, Github } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiHono,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaCloudflare, FaGit, FaGithub, FaHtml5 } from "react-icons/fa";

import {
  TbBrandCpp,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandVscode,
  TbBrandReddit,
  TbBrandX,
} from "react-icons/tb";
import { FaCss3 } from "react-icons/fa";

export const Icons = {
  github: Github,
  linkedin: Linkedin,
  x: HomeIcon,
  email: Mail,
  instagram: Instagram,
};

const FaviconData = {
  url: "https://res.cloudinary.com/djby1yfko/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1721314997/user-profile-images/dlplchlej5ts9cegrmt7.jpg",
};

const NavMenuDb = [
  {
    title: "Home",
    path: "/",
    varient: "link",
  },
  {
    title: "About",
    path: "/#about",
    varient: "link",
  },
  {
    title: "Projects",
    path: "/#projects",
    varient: "link",
  },
  {
    title: "Stats",
    path: "/stats",
    varient: "link",
  },
  {
    title: "Contact",
    path: "/#contact",
    varient: "link",
  },
];

const DockData = {
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jyotishankar04",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jyotishankar-patra/",
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/@JYOTISHANKARP04",
        icon: TbBrandX,
      },
      email: {
        name: "Send Email",
        url: "mailto:jyotipatra.subham@gmail.com",
        icon: Icons.email,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/dev.suvam",
        icon: Icons.instagram,
      },
    },
  },
};
const SkilsDb = {
  fronted: [
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3,
    },
    {
      name: "JavaScript",
      icon: TbBrandJavascript,
    },
    {
      name: "React",
      icon: TbBrandReact,
    },
    {
      name: "Next.js",
      icon: TbBrandNextjs,
    },
    {
      name: "Tailwind",
      icon: TbBrandTailwind,
    },
    {
      name: "Redux",
      icon: TbBrandRedux,
    },
    {
      name: "Shadcn",
      icon: SiShadcnui,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: TbBrandNodejs,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
    {
      name: "Hono",
      icon: SiHono,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
  ],
  languages: [
    {
      name: "C++",
      icon: TbBrandCpp,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Javascript",
      icon: TbBrandJavascript,
    },
  ],
  tools: [
    {
      name: "Git",
      icon: FaGit,
    },
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "GitHub",
      icon: FaGithub,
    },
    {
      name: "Cloudflare",
      icon: FaCloudflare,
    },
    { name: "VS code", icon: TbBrandVscode },
  ],
};

const ProjectsDb = [
  {
    id: "nexgpt",
    title: "Nex GPT",
    description: "A chat bot project using google gemini",
    source: {
      frontend: "https://github.com/jyotishankar04/s-gpt/",
      backend: "https://github.com/jyotishankar04/s-gpt/",
    },
    live: "https://devsuvam.xyz",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1730103189/Screenshot_from_2024-10-28_13-40-00_uvycvz.png",
    stacks: [
      "Next js",
      "Postgres",
      "Gemini",
      "Tailwind",
      "Prisma",
      "Typescript",
      "Hono",
      "Cloudflare",
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Mate",
    description: " A simple expense tracker app using nextjs and postgres",
    sourse: {
      fronted: "https://github.com/jyotishankar04/expense-tracker",
      backend: "https://github.com/jyotishankar04/expense-tracker",
    },
    live: "https://expensemate.devsuvam.xyz",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1724754338/Portfolio/qfzlgq9kjgyoomchhr5e.jpg",
    stacks: [
      "Next.js",
      "Postgres",
      "Tailwind",
      "Prisma",
      "Typescript",
      "Vercel",
    ],
  },
  {
    id: "date-request",
    title: "Date Request",
    description:
      "A request sending application using react , nodejs and express useing serverless architecture",
    source: {
      frontend: "https://github.com/jyotishankar04/date-request",
      backend: "https://github.com/jyotishankar04/date-request",
    },
    live: "https://daterequest.devsuvam.xyz",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1725855904/sea-sunset-beach-couple_g6dmti.jpg",
    stacks: [
      "React",
      "Node.js",
      "Hono",
      "Tailwind",
      "Prisma",
      "Typescript",
      "Cloudflare",
    ],
  },
  {
    id: "codersbook",
    title: "CodersBook",
    description: "A online library for coders",
    source: {
      frontend: "https://github.com/jyotishankar04/date-request",
      backend: "https://github.com/jyotishankar04/date-request",
    },
    live: "https://codersbook.devsuvam.xyz",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1724754303/Portfolio/s4rjpxelefkcbpvp33qm.jpg",
    stacks: [
      "React",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Typescript",
      "AWS",
      "Nginx",
      "Cloudinary",
    ],
  },
  {
    id: "bolggy",
    title: "Bolgging Website",
    description: "A simple bloging website",
    source: {
      frontend: "https://github.com/jyotishankar04/date-request",
      backend: "https://github.com/jyotishankar04/date-request",
    },
    live: "https://bloogy.devsuvam.xyz/",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1724754382/Portfolio/u40gsai5zo0o3mn18qu9.jpg",
    stacks: ["React", "Tailwind", "Prisma", "Typescript", "Vercel"],
  },
  {
    id: "github-profile-viewer",
    title: "Github profile viewer",
    description:
      "A profile viewer project where you can view github profile by putting username",
    source: {
      frontend: "https://github.com/jyotishankar04/date-request",
      backend: "https://github.com/jyotishankar04/date-request",
    },
    live: "https://githubprofileviewerapp.netlify.app/",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1724754486/Portfolio/t23dljycwfiynadtt706.jpg",
    stacks: ["React", "Typescript", "Tailwind", "Github API"],
  },
  {
    id: "spotify",
    title: "Spotify clone",
    description: "Spotify like music website which play local songs",
    source: {
      frontend: "https://github.com/jyotishankar04/date-request",
      backend: "https://github.com/jyotishankar04/date-request",
    },
    live: "https://github.com/jyotishankar04/Spotify-Colne",
    image:
      "https://res.cloudinary.com/djby1yfko/image/upload/v1724754521/Portfolio/l1zeaa4bzxvv3kjphtzr.jpg",

    stacks: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
];

const socialData = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/jyotishankar04",
    icon: Icons.github,
  },

  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jyotishankar-patra/",
    icon: Icons.linkedin,
  },
  X: {
    name: "X",
    url: "https://x.com/@JYOTISHANKARP04",
    icon: TbBrandX,
  },
  email: {
    name: "Send Email",
    url: "mailto:jyotipatra.subham@gmail.com",
    icon: Icons.email,
  },
  Instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/dev.suvam",
    icon: Icons.instagram,
  },
  Reddit: {
    name: "Reddit",
    url: "https://www.reddit.com/user/devsuvam",
    icon: TbBrandReddit,
  },
};

export { NavMenuDb, DockData, SkilsDb, ProjectsDb, socialData, FaviconData };
