import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin , AiFillGithub} from 'react-icons/ai'
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
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>Fateme Soleymanian</h2>
            <h3>Developer</h3>
            <p>Junior developer creating websites and web applications. Join me down below.</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/fateme-soleymanian-b2713a225">
            <AiFillLinkedin />  </a>
           <a href="https://github.com/fatemesoleymanian">
           <AiFillGithub />
           </a>
          </div>
        </section>  
      </main>
    </>
  )
}
