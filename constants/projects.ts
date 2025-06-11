const projects: Project[] = [
  {
    id: "1",
    title: "Fendch",
    image: "/projects/fendch/frame_fench.png",
    description: `Fendch is a learning platform for web developers.
     It is a full stack application built with React, Nodejs, Express and MongoDB.
     It has features like 
     github authentication, posts, comments, likes, profile, follow, unfollow, search, cron jobs, notifications, and much more.`,
    tags: ["React", "Nodejs", "MongoDB"],
    github: "https://github.com/keremaydemir123/fendch-mern",
    live: "https://fendch-client.vercel.app/",
  },
  {
    id: "2",
    title: "cofixgpt",
    image: "/projects/cofixgpt/frame_cofixgpt.png",
    description:
      "Nextjs 13 application to format uploaded html, css and javascipt files with Openai API",
    tags: ["Nextjs", "OpenAI", "Firebase"],
    github: "https://github.com/keremaydemir123/cofixgpt",
    live: "https://cofixgpt.vercel.app/",
  },
  {
    id: "4",
    title: "rubigtech",
    image: "/projects/rubig/frame_rubig.png",
    description:
      "Freelance website for a client. It is a Nextjs 13 application with Tailwindcss.",
    tags: ["Nextjs", "Tailwind"],
    github: undefined,
    live: "https://rubigtech.com/",
  },
  {
    id: "5",
    title: "Portfolio",
    image: "/projects/portfolio/portfolio.png",
    description: `The portfolio website you're exploring`,
    tags: ["Nextjs", "Framer Motion", "DaisyUI"],
    github: "https://github.com/keremaydemir123/portfolio",
    live: "https://keremaydemir.vercel.app/",
  },
  {
    id: "3",
    title: "starhips",
    image: "/projects/starships/frame_starships.png",
    description:
      "This project was created as part of the FMSS React Practicum. The goal of this project is to use React, axios, and react-router to create an application that lists Star Wars starships and allows users to search and view details about each ship.",
    tags: ["React", "Tailwind", "ContextAPI"],
    github: "https://github.com/keremaydemir123/fmss-practicum-final",
    live: "https://fmss-practicum-final.vercel.app/",
  },
];

export const currentProject: Project = {
  id: "99",
  title: "Gopost",
  image: "/projects/current/gopost.jpg",
  description:
    "Aiming to share posts with Go, Htmx and Postgres. I also want to use View Transitions API for page transitions.",
  tags: ["Go", "Htmx", "Postgres", "View Transitions API"],
  github: undefined,
  live: undefined,
};

export default projects;

export const smallProjects: Project[] = [
  {
    id: "1",
    title: "JavaScript First Projects",
    image: "/blog/blog-placeholder-1.jpg",
    description:
      "These are my first projects with JavaScript. I created them while learning JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/keremaydemir123/small_projects",
    live: undefined,
  },
  {
    id: "2",
    title: "Patika.dev Projects",
    image: "/blog/blog-placeholder-1.jpg",
    description:
      "These are my projects that I created while learning at Patika.dev.",
    tags: ["JavaScript", "HTML", "CSS", "React", "Algorithms"],
    github: "https://github.com/keremaydemir123/Patika",
    live: undefined,
  },
  {
    id: "3",
    title: "Yazılımcı Fabrikası Bootcamp Projects",
    image: "/blog/blog-placeholder-1.jpg",
    description:
      "These are my projects that I created while learning at Yazılımcı Fabrikası Bootcamp.",
    tags: ["JavaScript", "HTML", "CSS", "React", "Redux", "Bootstrap"],
    github: "https://github.com/keremaydemir123/YazilimciFabrikasiBootcamp",
    live: undefined,
  },
];
