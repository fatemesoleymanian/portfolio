import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import honeloper from '../public/honeloper3d.png'
export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Honeloper</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://jobvision.ir/cv/97158940-111758">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-9'>
            <h2 className='text-4xl py-2 text-teal-600 font-medium'>
              Fateme Soleymanian</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Junior developer creating websites and web applications. Join me down below.</p>
          </div>
          <div className='text-5xl flex  justify-center gap-16 py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/fateme-soleymanian-b2713a225">
              <AiFillLinkedin />  </a>
            <a href="https://github.com/fatemesoleymanian">
              <AiFillGithub />
            </a>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full
          mx-auto md:w-80 md:h-80 mt-20'>
            <Image src={honeloper} alt="honeloper"  />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>
              Services i offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
                Since the beginning of my journey as a developer , i've done remote work for 
                <span className='text-teal-500'><a href="https://madein-iran.com"> made in iran </a></span> company to create online shop. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services , including programming and teaching.
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image />
              <h3 className='text-lg font-medium pt-8 pb-2'>

              </h3>
              <p className='py-2'></p>
              <h4 className='py-4 text-teal-600'>Programming tools i use</h4>
              <p className='text-gray-800 py-1'>idono</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
