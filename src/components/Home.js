import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import userexperience from "../assests/user-experience.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse  items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold  text-white '>
            I'm a Frontend Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora debitis ab illum? Porro sunt iste autem magni quisquam omnis, fugit exercitationem deleniti, quam vitae iusto nemo distinctio in possimus?
          </p>

          <div>
            <Link to="portfolio"
              smooth duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div className='mt-24 md:m-0 '>
          <img src={userexperience} alt="frontend developer" className='rounded-2xl mx-auto w-full md:w-[40rem]' />
        </div>
      </div>
    </div>
  )
}

export default Home;