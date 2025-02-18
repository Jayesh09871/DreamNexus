import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { AiOutlineMail } from 'react-icons/ai'; 

export default function Footer() {
  return (
    <footer className='bg-black  py-8 mt-[4rem]'>
      <div className='max-w-7xl mx-auto px-3 ml-[2rem]'>
      <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <img src='https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...6HrhRJnhbEwXs1M3EMoAJtlyMkjvVr...Pk6PExevg9C3ktKMcs8'   width="140px" height="1px" ></img>
          </h1>
        <div className='flex justify-between text-white items-center'>
     
          <div className='flex gap-50'>

            <div>
              <h2 className='font-semibold text-lg'>Office Address</h2>
              <p className='mt-[1rem]'>India-xyz place, <br></br> The Power House</p>
            </div>


            <div>
              <h2 className='font-semibold text-lg'>Say Hello</h2>
              <p className='mt-[1rem]'>info@dreamnexus.com</p>
              <p>0248244 – 0784339</p>
            </div>


            <div>
              <h2 className='font-semibold text-lg'>Socials</h2>
              <div className='flex gap-4'>
                <a
                  href='https://www.instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white mt-[1rem]'
                  
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href='https://www.linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white mt-[1rem]'
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>


            <div>
              <h2 className='font-semibold text-lg '>Newsletter</h2>
              <div className='flex items-center mt-[1rem]'>
                <AiOutlineMail size={24} className='mr-2' />
                <input
                  type='email'
                  placeholder='Your email'
                  className='bg-transparent text-white border-b-2 border-slate-400 focus:outline-none focus:border-white'
                />
              </div>
            </div>
          </div>
        </div>


        <div className='my-8'>
          <div className='relative w-full h-72'>
            <iframe
              src='https://www.google.com/maps/embed?pb=...'
              width='100%'
              height='100%'
              color='pink'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              title='Office Location'
            ></iframe>
          </div>
        </div>

        <div className='text-center text-slate-400'>
          <p>DreamNexus Real Estate © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
