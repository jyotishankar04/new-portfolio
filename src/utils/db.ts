import { HomeIcon, Mail, Linkedin, Instagram, Github } from "lucide-react";

export const Icons = {
  github: Github,
  linkedin: Linkedin,
  x: HomeIcon,
  email: Mail,
  instagram: Instagram,
};

const NavMenuDb = [
  {
    title: "Home",
    path: "/",
    varient: "link",
  },
  {
    title: "About",
    path: "/about",
    varient: "link",
  },
  {
    title: "Projects",
    path: "/projects",
    varient: "link",
  },
  {
    title: "Repos",
    path: "/repos",
    varient: "link",
  },
  {
    title: "Contact",
    path: "/contact",
    varient: "link",
  },
  {
    title: "Resume",
    path: "/resume",
    varient: "default",
  },
];

export const DockData = {
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
        icon: Icons.x,
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
export { NavMenuDb };
