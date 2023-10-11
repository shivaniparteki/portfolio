/* eslint-disable no-useless-concat */
import React from 'react'
import { SocialLinks } from '../utils/Constant';


const SocialLink = () => {
  return (
    <div className=' hidden lg:flex  flex-col top-[35%] left-0 fixed'>
      <ul >
        {SocialLinks?.map(({ id, child, href, style, download }) => {
          return (
            <>
              <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500" + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                 download={download} 
                 target='_blank' rel="noreferrer" >
                  {child}

                </a>
              </li>
            </>
          );
        })}

      </ul>
    </div>
  )
}

export default SocialLink;