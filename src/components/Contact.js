import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800 '>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/5308af2b-8627-4a55-a7e2-79880bb0cbcd" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name ' className='
            p-2 bg-transparent border border-[#eeeeee5e] border-1 rounded-md
            text-white focus:outline-none' />
            <input type="text" name='email' placeholder='Enter your email' className='
            p-2 my-4 bg-transparent border border-[#eeeeee5e] border-1 rounded-md
            text-white focus:outline-none' />
            <textarea name="message" placeholder='Enter your message...' rows="7" className='p-2 bg-transparent border border-[#eeeeee5e] border-1 rounded-md
            text-white focus:outline-none resize-none'></textarea>

            <button className='text-white text-center bg-gradient-to-r from-cyan-500 to to-blue-500 px-6 py-3
            my-8 w-32 rounded-md hover:scale-110 duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact