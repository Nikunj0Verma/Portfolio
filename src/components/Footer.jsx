import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="px-[12vw] md:px-[7vw] lg:px-[15vw] py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                <span className="text-xl font-black tracking-tight">
                  <span className="text-white">N</span>
                  <span className="text-violet-400">V</span>
                </span>
              </div>
              <span className="text-white font-bold text-lg">Nikunj Verma</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about building modern web applications with React, Node.js, and cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex gap-3">
              <a href="#about" className="text-gray-400 hover:text-purple-400  transition-transform text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-purple-400 transition text-sm">
                Skills
              </a>
              <a href="#work" className="text-gray-400 hover:text-purple-400 transition text-sm">
                Projects
              </a>
              <a href="#education" className="text-gray-400 hover:text-purple-400 transition text-sm">
                Education
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              <span className="text-purple-400">Email:</span> verma0025nikunj@gmail.com
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Nikunj0Verma"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/nikunjverma000/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://x.com/NVerma7115"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="mailto:verma0025nikunj@gmail.com"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nikunj Verma. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Designed & Built by Nikunj Verma
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 group"
          >
            Back to Top
            <FaArrowUp size={16} className="group-hover:translate-y-[-3px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer