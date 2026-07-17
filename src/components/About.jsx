// ...existing code...
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profile from "../assets/profile3.png";
import { useRef } from "react";

const About = () => {
  const [showScroll, setShowScroll] = useState(true);
   const aboutRef = useRef(null);

  const handleScroll = () => {
    const target = document.getElementById("skills");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowScroll(false);
  };

  useEffect(() => {
    const aboutEl = aboutRef.current;
    if (!aboutEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScroll(entry.intersectionRatio >= 0.25);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    observer.observe(aboutEl);

    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      ref={aboutRef}
      className="px-5 md:px-[7vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            Hi, i am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400">
            Nikunj Verma
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-200/90 leading-tight">
            <span className="text-gray-200">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                3000,
                "Java Programmer",
                2000,
                "React Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-indigo-300 font-semibold"
            />
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed text-shadow: 0 0 30px rgba(168,85,247,.4)">
            Full-Stack Developer and Computer Science student building modern,
            scalable web applications with React, Next.js, Node.js, Express,
            MongoDB, Java, and Tailwind CSS. Passionate about clean code,
            performance, and great user experiences.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1CJffmG1tXJ2pY5laWOICDmPuzOAApWxb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/30 mb-9"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
              }}
              aria-label="Download resume"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-block py-3 px-6 rounded-full text-indigo-200 bg-indigo-900/20 border border-indigo-700 hover:bg-indigo-900/30 transition mb-9"
              aria-label="Contact"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profile}
              alt="Nikunj Verma"
              className="w-full h-full-rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] "
            />
          </Tilt>
        </div>
      </div>
         <button
        type="button"
        onClick={handleScroll}
        className={`absolute left-1/2 md:bottom-2 lg:bottom-2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 ring-white/10 transition-all duration-500 ease-out ${
          showScroll
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        } hover:scale-105 cursor-pointer`}
      >
        <span className="text-[10px] sm:text-xs uppercase text-center tracking-[0.35em] text-indigo-100/90">
          Scroll
        </span>
        <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
          <svg
            className="h-5 w-5 animate-bounce text-indigo-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </button>
    </section>
  );
};

export default About;
// ...existing code...
