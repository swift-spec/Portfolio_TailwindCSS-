import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://swift-spec.github.io/Tip_Calculator/tip_calculator.html',
    github: 'https://github.com/swift-spec/Tip_Calculator',
    title: 'Tip Calculator',
    text: 'A sleek, user-friendly tip calculator designed with HTML, CSS, and JavaScript. This project enables users to effortlessly calculate tips and split bills, featuring dynamic inputs and real-time updates for enhanced convenience and accuracy in financial planning.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://swift-spec.github.io/Weather_App/',
    github: 'https://github.com/swift-spec/Weather_App',
    title: 'Weather App using ReactJS',
    text: 'A weather app built with React.js that provides real-time weather updates and forecasts. It features a clean, responsive design and integrates APIs to deliver accurate location-based weather data, ensuring seamless user experience and reliability.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://swift-spec.github.io/Interactive_Portfolio/',
    github: 'https://github.com/swift-spec/Interactive_Portfolio',
    title: 'Interactive Portfolio',
    text: 'An interactive portfolio application developed using React.js, showcasing a seamless user experience with dynamic content rendering, responsive design, and modern UI/UX principles. This project highlights personal achievements, skills, and projects, offering a professional platform for engagement and self-promotion.',
  },
];