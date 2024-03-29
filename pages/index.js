import Head from 'next/head'
import { BsFillMoonStarsFill ,BsSunFill} from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub , } from 'react-icons/ai'
import {SiTelegram} from 'react-icons/si'
import Image from 'next/image'
import honeloper from '../public/honeloper3d.png'
import code from '../public/code.png'
import { useState } from 'react'
export default function Home() {
  const [darkMode , setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons'>Honeloper</h1>
            <ul className='flex items-center'>
              <li>
             {
              darkMode !== true &&    <BsFillMoonStarsFill className='cursor-pointer text-2xl' 
              onClick={() => setDarkMode(true)}/>
             }
             {
              darkMode === true   && <BsSunFill className='cursor-pointer text-2xl' 
              onClick={() => setDarkMode(false)}/>
             }
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://jobvision.ir/cv/97158940-111758">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-9'>
            <h2 className='text-3xl md:text-4xl lg:text-6xl py-2 text-teal-600 font-medium'>
              Fateme Soleymanian</h2>
            <h3 className='text-2xl md:text-3xl lg:text-4xl py-2 dark:text-gray-100'>Full stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 lg:text-xl
            max-w-xl mx-auto dark:text-gray-400'>
              Junior developer creating websites and web applications. Join me down below.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
            <a href="https://www.linkedin.com/in/fateme-soleymanian-b2713a225">
              <AiFillLinkedin />  </a>
            <a href="https://github.com/fatemesoleymanian">
              <AiFillGithub />
            </a>
            <a href="https://t.me/Honeloper">
              <SiTelegram />
            </a>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full
          mx-auto md:w-80 md:h-80 lg:h-96 lg:w-96 mt-20'>
            <Image src={honeloper} alt="honeloper" />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-200'>
              Services i offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              Since the beginning of my journey as a developer , i've done remote work for
              <span className='text-teal-500'><a href="https://madein-iran.com"> made in iran </a></span> company to create online shop.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              I offer from a wide range of services , including programming and teaching.
            </p>
          </div>
          <div>
            <div className='md:mx-auto text-center shadow-2xl p-10 rounded-xl my-10 md:w-9/12'>
              <Image src={code} width={100} height={100} className="mx-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-100'>
                I code your project.
              </h3>
              <p className='py-2 dark:text-gray-200'>Do you have an idea for your next website?
                Let's make it reality.</p>
             <div className='flex justify-center gap-16 py-3'>
             <div className='dark:text-gray-300 text-gray-800'>
                <h4 className='py-4 text-teal-600'>Programming languages i know</h4>
                <p className='py-1'>PHP</p>
                <p className='py-1'>Java SE</p>
                <p className='py-1'>JavaScript</p>
                <p className='py-1'>NodeJs</p>
              </div>
              <div className='dark:text-gray-300 text-gray-800'>
                <h4 className='py-4 text-teal-600'>Frameworks i know</h4>
                <p className='py-1'>Laravel</p>
                <p className='py-1'>ReactJs</p>
                <p className='py-1'>VueJs</p>
                <p className='py-1'>NextJs</p>
                <p className='py-1'>NuxtJs</p>
                <p className='py-1'>Bootstrap</p>
                <p className='py-1'>TailwindCss</p>
              </div>
             </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
