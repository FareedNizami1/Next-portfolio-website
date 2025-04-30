/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "NextLevel Food",
    description: "Simple NextJS Food Blog website",
    date: "2025-04-02",
    demoLink: "https://next-level-food-is82wu8q8-fareednizami1s-projects.vercel.app/",
  },
  {
    id: 2,
    name: "E-commerce Store",
    description: "E-Commerce Store with Admin Dashboard using React.js, Stripe, Node.js, Redis",
    date: "2024-10-20",
    demoLink: "https://github.com/FareedNizami1/E-Commerce-Store",
  },
  {
    id: 3,
    name: "AI Resume Builder",
    description: "Build AI Resume using React, Vite Strapi, Postgre, Gemini, Clerk",
    date: "2022-10-10",
    demoLink: "https://github.com/FareedNizami1/ai-resume-builder",
  },
  {
    id: 4,
    name: "BookStore",
    description: "Simple ReactJs Book Store",
    date: "2022-08-30",
    demoLink: "https://github.com/FareedNizami1/bookstore-MERN-project",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2024-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2024-10-01",
    demoLink: "https://journeylogger.example.com",
  },

];

export const BtnList = [
  // { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Backstory", link: "/backstory", icon: "backstory", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/FareedNizami1",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/syed-fareed-alam-nizami/",
    icon: "linkedin",
    newTab: true,
  },
  
];

// data.js

export const resumeData = {
  education: [
    {
      title: 'B.Eng Mechatronics Engineering',
      institution: 'SZABIST University',
      country: 'Pakistan',
      logo: '/logo/szabist-logo.png',
      year: '2020 - 2024',
    },
    {
      title: "A-Levels",
      institution: 'Alpha College',
      country: 'Pakistan',
      logo: '/logo/alpha-logo.png',
      year: '2017 - 2019',
    },
    {
      title: "O-Levels",
      institution: 'The City School',
      country: 'Pakistan',
      logo: '/logo/city-logo.png',
      year: '2009 - 2017',
    },
  ],
  experience: [
    {
      title: 'Trainee Engineer - Production',
      company: 'Master Changan Motors Limited',
      country: 'Pakistan',
      logo: '/logo/changan-logo.png',
      year: 'Nov 2024 - Mar 2025',
    },
    {
      title: 'Intern',
      company: 'Atlas Honda',
      country: 'Pakistan',
      logo: '/logo/honda-logo.png',
      year: 'Oct 2024 - Nov 2024',
    },
    {
      title: 'Intern',
      company: 'Sui Southern Gas Company',
      country: 'Pakistan',
      logo: '/logo/sui-logo.png',
      year: 'June 2022 - July 2022',
    },
  ],
};
