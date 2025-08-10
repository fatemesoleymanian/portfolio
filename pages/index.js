import Head from 'next/head'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiTelegram } from 'react-icons/si'
import Image from 'next/image'
import honeloper from '../public/honeloper3d.png'
import code from '../public/code.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const projects = [
    {
      name: 'Mini ERP System',
      description:
        'Advanced Java Spring Boot application with JWT authentication, role-based access control, and modular design. Deployed and used for business management.',
      github: 'https://github.com/fatemesoleymanian/ERP-System_With_Java',
      demo: null,
      tech: ['Java', 'Spring Boot', 'JWT', 'Docker', 'MySQL'],
    },
    {
      name: 'Audio Transcriber',
      description:
        'Java-based audio transcription service using Vosk for offline speech recognition, replacing cloud solutions.',
      github: 'https://github.com/fatemesoleymanian/AudioTranscriber_With_Java',
      demo: 'https://audiotranscriber-with-java.onrender.com',
      tech: ['Java', 'Vosk', 'Spring Boot'],
    },
    {
      name: 'Ecommerce Product Catalog',
      description:
        'Online product catalog built with Spring Boot and Thymeleaf, including search, image upload, and export to PDF/Excel.',
      github: 'https://github.com/fatemesoleymanian/EcommerceProductCatalog_With_Java',
      demo: 'https://ecommerceproductcatalog-with-java.onrender.com',
      tech: ['Java', 'Spring Boot', 'Thymeleaf', 'H2 Database'],
    },
    {
      name: 'Madein Iran online store',
      description:
        'Production-ready Laravel 9 API backend for an ecommerce platform, with JWT authentication, role-based access, payment gateway integration, blog system, and full admin panel management.',
      github: 'https://github.com/fatemesoleymanian/OnlineStore_madeInIran_Api',
      demo: null,
      tech: ['PHP', 'Laravel', 'Nuxt.js', 'Mysql'],
    },
    {
      name: 'Live Chat',
      description: 'Server-side of a real-time MERN stack chat app – Built with Node.js, Express, MongoDB, and Socket.IO for authentication, message storage, and instant messaging.',
      github: 'https://github.com/fatemesoleymanian/live-chat-server-side',
      demo: 'https://live-chat-server-side.vercel.app/',
      tech: ['Node.js', 'Express.js', 'React','Socket.io', 'MongoDB'],
    }
  ]

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Fateme Soleymanian | Java Developer Portfolio</title>
        <meta
          name="description"
          content="Fateme Soleymanian - Junior Java Developer portfolio showcasing Java Spring Boot projects and full stack development skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className='text-xl font-burtons'>Honeloper</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsSunFill
                    className="cursor-pointer text-2xl"
                    onClick={() => setDarkMode(false)}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl"
                    onClick={() => setDarkMode(true)}
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1LZYOoKPrgMteZbzrpBA8lzc8arqr_1jC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-9">
            <h2 className="text-3xl md:text-4xl lg:text-6xl py-2 text-teal-600 font-medium">
              Fateme Soleymanian
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl py-2 dark:text-gray-100">
              Software Engineer | Backend Developer (Java)
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 lg:text-xl max-w-xl mx-auto dark:text-gray-400">
              Hi, I'm Fateme Soleymanian, a passionate Software Engineer specializing in Backend Development with Java.  
With experience in Laravel and Express.js earlier in my career, I have now fully focused on building robust, scalable, and maintainable backend systems using Java technologies.  
I'm eager to contribute to enterprise-level projects and continuously improve my skills in software engineering.  
Let's connect and build great software together!

            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
            <a
              href="https://www.linkedin.com/in/fateme-soleymanian-b2713a225"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/fatemesoleymanian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a href="https://t.me/Honeloper" target="_blank" rel="noopener noreferrer">
              <SiTelegram />
            </a>
          </div>
          <div
            className="relative bg-gradient-to-b from-teal-500 rounded-full
          mx-auto md:w-80 md:h-80 lg:h-96 lg:w-96 mt-20"
          >
            <Image src={honeloper} alt="Fateme Soleymanian" />
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">What I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I specialize in backend development with Java Spring Boot, creating secure and
              efficient web applications. Additionally, I have experience in frontend
              technologies but prefer focusing on backend development.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I also provide freelance programming services, including project consultation
              and full stack implementation.
            </p>
          </div>
          <div className="md:mx-auto text-center shadow-2xl p-10 rounded-xl my-10 md:w-9/12">
            <Image src={code} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">
              Programming Languages & Frameworks
            </h3>
            <div className="flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-300">
              <div>
                <h4 className="py-4 text-teal-600">Languages</h4>
                <p className="py-1">Java SE</p>
                <p className="py-1">Java EE / Spring Boot</p>
                <p className="py-1">JavaScript / TypeScript</p>
                <p className="py-1">PHP</p>
              </div>
              <div>
                <h4 className="py-4 text-teal-600">Frameworks & Tools</h4>
                <p className="py-1">Spring Boot</p>
                <p className="py-1">Hibernate / JPA</p>
                <p className="py-1">React.js / Next.js</p>
                <p className="py-1">Laravel</p>
                <p className="py-1">Docker</p>
                <p className="py-1">Git & GitHub</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-3xl py-1 dark:text-gray-200 text-center">Highlighted Projects</h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {projects.map(({ name, description, github, demo, tech }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
              >
                <h4 className="text-xl font-semibold mb-2 text-teal-500">{name}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
                <p className="mb-3 text-sm font-medium dark:text-teal-400">
                  Tech Stack: {tech.join(', ')}
                </p>
                <div className="flex gap-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
