import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className='contact w-full flex flex-col md:flex-row h-auto md:h-[70vh] gap-5 place-content-center p-5'>
        <h1 className='absolute mt-[.1vh] text-lg md:text-xl lg:text-2xl'>For Contact</h1>

        <div className='aboutme w-full md:w-[80vh] h-auto'>
          <div className='w-full h-full'>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Mohammad Alif</h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Let’s Build Something Amazing!</h1>
            <p className="text-sm md:text-lg xl:text-xl">
              If you’re looking for a skilled Front-End Website Developer to bring your design to life with clean, responsive, and high-performance code, you’re in the right place. Whether it’s a sleek landing page or a fully responsive website, I’m here to deliver exactly what you need.
            </p>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Ready to get started? Let’s connect!</h3>
            <a className='text-lg md:text-2xl lg:text-3xl no-underline text-[#BF2227] hover:text-gray-400' href='mailto:hashtagalif@gmail.com'>Email: hashtagalif@gmail.com</a>
          </div>
        </div>

        <div className='w-full md:w-[80vh] h-auto flex justify-center md:justify-start'>
          <div className='mt-5 md:ml-[5vh] md:mt-[12vh]'>
            <h1 className='text-lg md:text-xl lg:text-2xl'>Follow me</h1>

            {/* Social Links Section */}
            <div className="flex gap-5 mt-3">
              <a href="https://github.com/alif-07" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl md:text-3xl hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com/alif_alpha/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl md:text-3xl hover:text-pink-400" />
              </a>
              <a href="https://www.linkedin.com/in/mohammad-alif-749082359/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl md:text-3xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;