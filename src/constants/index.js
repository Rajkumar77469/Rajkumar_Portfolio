import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import {TbBrandVscode } from "react-icons/tb";
import { ImNpm } from "react-icons/im";
import { SiCss3, SiMongodb, SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import CarouselSlider from "../carousel/project-img-carousel";

export const accpalProjectImages = [
  { img: "m1.png" },
  { img: "m2.png" },
  { img: "m4.png" },
  { img: "m5.png" },
  { img: "m6.png" },
  { img: "m7.png" },
  { img: "m7.png" },
  { img: "m8.png" },
  { img: "m9.png" },
  { img: "m10.png" },
  { img: "m11.png" },

];

export const bitgertProjectImages = [
  { img: "e1.png" },
  { img: "e2.png" },
  { img: "e3.png" },
  { img: "e4.png" },
  { img: "e5.png" },
];
export const portfoliyoImages = [
  { img: "p1.png" },
  { img: "p2.png" },
  { img: "p3.png" },
  { img: "p4.png" },
  { img: "p5.png" },
  { img: "p6.png" },
];





export const ProjectItems = [

  {
    id: 0,
    title: "Expenses Mangment System",
    carousel: <CarouselSlider projectImgArr={[...bitgertProjectImages]} />,
    desc: " Designed and implemented an Expense Management System for seamless real-life expense management, developing key features to enhance financial transparency and streamline processes. Tools & technologies used: React.JS, Mongo DB, Node.js, Express",
    teck_stacks: [
      {
        icon: <SiCss3 style={{ color: "#669ffa" }} />,
        name: "CSS",
      },
      {
        icon: <FaReact style={{ color: "#0776f5" }} />,
        name: "React.js",
      },
      {
        icon: <RiJavascriptFill style={{ color: "#a38b02" }} />,
        name: "JavaScript",
      },
      {
        icon: <SiMongodb style={{ color: "#106b00" }} />,
        name: "Mongo DB",
      },
      {
        icon: <ImNpm style={{ color: "#c40246" }} />,
        name: "NPM",
      },

      {
        icon: <FaNodeJs style={{ color: "#c40246" }} />,
        name: "Node.js",
      },
      {
        icon: <SiExpress style={{ color: "#c40246" }} />,
        name: "Express.js",
      },

      {
        icon: <SiMongodb style={{ color: "#106b00" }} />,
        name: "Mongo DB",
      },
      {
        icon: <ImNpm style={{ color: "#c40246" }} />,
        name: "NPM",
      },
      {
        icon: <TbBrandVscode style={{ color: "#0776f5" }} />,
        name: "VS-Code",
      },
      {
        icon: <FaGithub />,
        name: "GitHub",
      },
    ],
    githubRepo: "https://github.com/Rajkumar77469/Expsanse-Managment-System",
  },
  {
    id: 1,
    title: "NITC PLACEMENT WEBSITE",
    carousel: <CarouselSlider projectImgArr={[...accpalProjectImages]} />,
    desc: " Development of an end-to-end NITC placement portal using the MERN stack.Implemented admin functionalities for user verification, company addition, and interview scheduling.Integrated real-time notifications for users and provided dynamic placement statistics visualization. Tools & technologies used:React.JS, Mongo DB, Node.js, Express",
    teck_stacks: [
      {
        icon: <SiCss3 style={{ color: "#669ffa" }} />,
        name: "CSS",
      },
      {
        icon: <FaReact style={{ color: "#0776f5" }} />,
        name: "React.js",
      },
      {
        icon: <RiJavascriptFill style={{ color: "#a38b02" }} />,
        name: "JavaScript",
      },
      {
        icon: <SiMongodb style={{ color: "#106b00" }} />,
        name: "Mongo DB",
      },
      {
        icon: <ImNpm style={{ color: "#c40246" }} />,
        name: "NPM",
      },

      {
        icon: <FaNodeJs style={{ color: "#c40246" }} />,
        name: "Node.js",
      },
      {
        icon: <SiExpress style={{ color: "#c40246" }} />,
        name: "Express.js",
      },

      {
        icon: <SiMongodb style={{ color: "#106b00" }} />,
        name: "Mongo DB",
      },
      {
        icon: <ImNpm style={{ color: "#c40246" }} />,
        name: "NPM",
      },
      {
        icon: <TbBrandVscode style={{ color: "#0776f5" }} />,
        name: "VS-Code",
      },
      {
        icon: <FaGithub />,
        name: "GitHub",
      },
    ],
    githubRepo: "https://github.com/Rajkumar77469/NITC-PLACEMENT-WEBSITE/tree/tenp12",
  },
{
  id: 1,
  title: "Personal portfolio",
  carousel: <CarouselSlider projectImgArr={[...portfoliyoImages]} />,
  desc: " I have created a comprehensive portfolio that showcases all my details, skills, and projects. It provides an in-depth look at my professional journey and accomplishments, highlighting my expertise and the work I've done.",
  teck_stacks: [
    {
      icon: <SiCss3 style={{ color: "#669ffa" }} />,
      name: "CSS",
    },
    {
      icon: <FaReact style={{ color: "#0776f5" }} />,
      name: "React.js",
    },
    {
      icon: <RiJavascriptFill style={{ color: "#a38b02" }} />,
      name: "JavaScript",
    },
    {
      icon: <ImNpm style={{ color: "#c40246" }} />,
      name: "NPM",
    },

    {
      icon: <FaNodeJs style={{ color: "#c40246" }} />,
      name: "Node.js",
    },
    {
      icon: <SiExpress style={{ color: "#c40246" }} />,
      name: "Express.js",
    },
    {
      icon: <TbBrandVscode style={{ color: "#0776f5" }} />,
      name: "VS-Code",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
  ],
  githubRepo: "https://github.com/Rajkumar77469/Rajkumar_Portfolio",
},
];

export const SkillItems = [
    {
    img: "assets/cp.jpg",
    name: "C",
  },
    {
    img: "assets/c++.png",
    name: "C++",
  },
  {
    img: "assets/html.png",
    name: "HTML",
  },
  {
    img: "assets/css.png",
    name: "CSS",
  },
  {
    img: "assets/javascript.png",
    name: "Javascript",
  },
  {
    img: "assets/react.png",
    name: "React.js",
  },
  {
    img: "assets/redux.png",
    name: "Redux",
  },
  {
    img: "assets/nodejs.png",
    name: "Node.js",
  },
  {
    img: "assets/expressjs.png",
    name: "Express.js",
  },
  {
    img: "assets/mongodb.png",
    name: "MongoDB",
  },
  {
    img: "assets/typescript.png",
    name: "Typescript",
  },
  {
    img: "assets/tailwindcss.png",
    name: "Tailwind",
  },
  {
    img: "assets/next-js.svg",
    name: "Next.js",
  },
  {
    img: "assets/axios.png",
    name: "Axios",
  },
  {
    img: "assets/json.png",
    name: "JSON Server",
  },
  {
    img: "assets/restapi.png",
    name: "Rest API",
  },

  {
    img: "assets/postman.png",
    name: "Postman",
  },
  {
    img: "assets/git.png",
    name: "Git",
  },
  {
    img: "assets/github.png",
    name: "GitHub",
  },
  {
    img: "assets/npm.png",
    name: "NPM",
  },

  {
    img: "assets/vscode.png",
    name: "VS-Code",
  },
];

