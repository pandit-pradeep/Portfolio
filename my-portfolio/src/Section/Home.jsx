import React, { useMemo } from "react"
import ParticleBackground from "../components/ParticlesBackground"
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { hover, motion, scale } from "framer-motion"
import avator from "../assets/avator.png"

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/PradeepPan66526" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/feed/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/pandit-pradeep" }

]

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow (0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0  0 18px rgba(16,185,129,0.8))",
  },
  top: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
}

export default function Home() {

  const roles = useMemo(() => ["Web Developer", "Software Developer", "Graphic Designer", "Video Editer"], [])

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
      else if (deleting && subIndex === 0) { setDeleting(false); setIndex(p => (p + 1) % roles.length); }
    }, deleting ? 40 : 60)

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles])

  return (
    <section
      id="home" className="w-full min-h-screen relative bg-black overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0">


        <div
          className="absolute -top-32 -left-32
         w-[70vw] sm:w-[z-500vw] md:w-[40vw]
         h-[70vw] sm:h-[50vw] md:h-[40vw]
         max-w-[500px] max-h-[500px]
         rounded-full
         bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
         opacity-30 sm:opacity-20 md:opacity-10
         blur-[100px] sm:blur-[130px] md:blur-[150px]
         animate-pulse"
        >

        </div>

        <div
          className="absolute bottom-0 right-0
         w-[70vw] sm:w-[z-500vw] md:w-[40vw]
         h-[70vw] sm:h-[50vw] md:h-[40vw]
         max-w-[500px] max-h-[500px]
         rounded-full
         bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
         opacity-30 sm:opacity-20 md:opacity-10
         blur-[100px] sm:blur-[130px] md:blur-[150px]
         animate-pulse delay-500"
        >
        </div>
      </div>


      <div className="relative pt-24  z-10 h-full w-full max-w-7xl md:ml-25 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">

        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>
                {roles[index].substring(0, subIndex)}
              </span>
              <span className="inline-block w-[2px]  ml-1 bg-white animate-pulse align-middle">

              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:-mt-5 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />
              <span className="text-white  font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">
                Pradeep Pandit
              </span>
            </motion.h1>

            <motion.p className="mt-1 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I build modern, scalable, and user-focused web applications with clean code, intuitive design, and optimized performance.
            </motion.p>

            <motion.div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
              shadow-lg hover:scale-105 transition-all"
              >View My Work</a>
              <a href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >My Resume</a>
            </motion.div>

            <div className="md:mt-5 mt-8 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="top"
                  className="text-gray-300 mb-10"
                >


                  <Icon />
                </motion.a>
              ))}

            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div 
          className="absolute top-1/2 -translate-1/2 pointer-events-none"
          style={{
            right: "10px" ,width: "min(22vw,410px)",height: "min(40vw , 760px)" , borderRadius:"50%",
            filter: "blur(38px)" , opacity:0.32,
            background: "conic-gradient(from 0deg, #1cd8d2 ,#00bf8f,#302b63,#1cd8d2"
          }}
          />
          <motion.img src={avator} alt="Pradeep Pandit"
            className="absolute top-1/2 -translate-y-1/2 lg:-mt-10 object-contain select-none pointer-events-none"
            style={{
              right: "30px", width: "min(65vw , 780px)", maxHeight: "95vh"
            }}
            initial={{ opacity: 0 ,y:40, scale:0.98 }}
            animate={{ opacity: 1, y:0,scale:1 }}
            transition={{ delay: 0.2, duration: 0.8 }}

          />
        </div>

      </div>

    </section>
  )
}