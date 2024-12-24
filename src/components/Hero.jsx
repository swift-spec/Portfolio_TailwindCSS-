import heroImg from '../assets/hero1.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-violet-200 py-24'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Mradul</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-end developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/swift-spec'>
              <FaGithubSquare className='h-8 w-8 text-slate-600 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/mradul-tripathi-76746526b/'>
              <FaLinkedin className='h-8 w-8 text-slate-600 hover:text-black duration-300' />
            </a>
            <a href='https://x.com/mradul62982'>
              <FaTwitterSquare className='h-8 w-8 text-slate-600 hover:text-black duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block '>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
        </div>
    </div>
  )
}

export default Hero