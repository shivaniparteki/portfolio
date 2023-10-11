import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import {resume} from "/public/Shivani-frontend-resume.pdf";


import reactSmooth from "../assests/portfolio/reactSmooth.jpg";
import arrayDestruct from "../assests/portfolio/arrayDestruct.jpg";
import navbar from "../assests/portfolio/navbar.jpg";
import reactParallax from "../assests/portfolio/reactParallax.jpg";
import reactweather from "../assests/portfolio/reactWeather.jpg";


import css from '../assests/css.png';
import bootstrap from '../assests/bootstrap (1).png';
import github from '../assests/github.png';
import html from '../assests/html.png';
import javascript from '../assests/javascript.png';
import nextjs from '../assests/nextjs.png';
import reactImage from '../assests/react.png';
import tailwind from '../assests/tailwind.png';


export const links = [
  {
    id: 1,
    link: 'home',
  },
  {
    id: 2,
    link: 'about',
  },
  {
    id: 3,
    link: 'portfolio',
  },
  {
    id: 4,
    link: 'experience',
  },
  {
    id: 5,
    link: 'contact',
  },

]

export const SocialLinks = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://Linkedin.com',
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/shivaniparteki',

  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:shivaniparteki39@gmail.com',

  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '/Shivani-frontend-resume.pdf',
    style: 'rounded-br-md',
    download: true,
  }

]

export const projects = [
  {
    projectImg: reactSmooth,
    demo: "Demo",
    code: "Code",
  },
  {
    projectImg: arrayDestruct,
    demo: "Demo",
    code: "Code",
  },
  {
    projectImg: navbar,
    demo: "Demo",
    code: "Code",
  },
  {
    projectImg: reactParallax,
    demo: "Demo",
    code: "Code",
  },
  {
    projectImg: reactweather,
    demo: "Demo",
    code: "Code",
  },
]

export const techs = [
  {
     id: 1,
     src: html,
     title: 'HTML',
     style: 'shadow-orange-500'

  },
  {
     id: 2,
     src: css,
     title: 'CSS',
     style: 'shadow-blue-500'

  },
  {
     id: 3,
     src: javascript,
     title: 'JavaScript',
     style: 'shadow-yellow-500'

  },
  {
     id: 4,
     src: reactImage,
     title: 'React',
     style: 'shadow-blue-600'

  },
  {
     id: 5,
     src: bootstrap,
     title: 'BootStrap',
     style: 'shadow-purple-500'

  },
  {
     id: 6,
     src: tailwind,
     title: 'TailWind',
     style: 'shadow-sky-400'

  },
  {
     id: 7,
     src: nextjs,
     title: 'Next Js',
     style: 'shadow-white'

  },
  {
     id: 8,
     src: github,
     title: 'GitHub',
     style: 'shadow-gray-400'

  },
]