import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <div className='px-6 md:p-0'>
          <p className='text-xl mt-20 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quia neque quas vel aspernatur iure perspiciatis, dolore doloribus officiis, in tempore fugiat suscipit ut! Cum praesentium mollitia consequuntur amet ipsam quia nam sapiente illo possimus, rem voluptatem vitae, et blanditiis, laborum maxime. Eligendi nobis dolorum corporis, maiores perspiciatis eius commodi.
          </p>

          <br />

          <p className='text-xl text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium provident optio incidunt at, id hic sequi perferendis possimus quis commodi recusandae exercitationem dolores molestiae magnam quam in? Neque eos temporibus quas libero fugit cupiditate quo, quibusdam deserunt non iste consequatur nisi labore quasi laborum est. Repellat excepturi velit quasi.
          </p>
        </div>
      </div>

    </div >
  )
}

export default About;