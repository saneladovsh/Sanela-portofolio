import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  jobit,
  tripguide,
  threejs,
  // house,
  // skincare,
  house,
  skincare,
  design,
  spa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML&CSS",
    icon: web,
  },
  {
    title: "JavaScript",
    icon: mobile,
  },

  {
    title: "React.js",
    icon: creator,
  },
  {
    title: "Three.js",
    icon: creator,
  },
  {
    title: "Git/GitHub",
    icon: mobile,
  },
  {
    title: "Figma",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Riverstone Wellness",
    description:
      "Riverstone Wellness Lodge is a luxurious wellness spa that offers a wide range of services. Their website serves as a presentation platform that showcases the various packages they offer. Visitors can easily book their spa experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],

    image: spa,
    source_code_link:
      "https://saneladovsh.github.io/Riverstone-Wellness-Lodge/",
  },
  {
    name: "The White Lotus",
    description:
      "The White Lotus, a skincare company that is dedicated to providing our customers with natural and effective solutions for their skincare needs. The website is a prototype that showcases our upcoming product line.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: skincare,
    source_code_link: "https://saneladovsh.github.io/The-White-Lotus/",
  },
  {
    name: "Enchant3D",
    description:
      "Enchant3D is an upcoming website dedicated to showcasing captivating and immersive digital experiences powered by Three.js. Step into a world where imagination meets technology, and explore interactive environments.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: design,
    source_code_link: "https://github.com/saneladovsh/Three.js-project",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, projects };
