import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const form = useRef();

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

     emailjs
      .sendForm(
        "service_lnfrc8s",
        "template_cct6pjl", 
        form.current,
        "4HYx_VFz9ioucyIUE" 
      ).then(
        () => {
          setSubmitted(true);
          form.current.reset(); 
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
              setLoading(false)
      },
     (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
              setLoading(false)
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-[12vw] md:px-[7vw] lg:px-[15vw] relative overflow-hidden bg-[#020617] font-sans relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.35),transparent_45%)]"></div>
      <ToastContainer />

  {/* Optional Secondary Blue Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.15),transparent_50%)]"></div>
  
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-55 h-1 bg-purple-500 mx-auto"></div>
        <p className="text-gray-400 mt-6 text-lg">
          Feel free to reach out to me for any opportunities or just a friendly hello
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 transition-shadow">
          <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

          {submitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 font-semibold">✓ Message sent successfully!</p>
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Don't hesitate to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-purple-400 text-xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                <a href="mailto:verma0025nikunj@gmail.com" className="text-gray-400 hover:text-purple-400 transition">
                  verma0025nikunj@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Nikunj0Verma"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nikunjverma000/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/NVerma7115"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
            <p className="text-gray-300">
              <span className="text-purple-400 font-bold">⚡ Response Time:</span> I typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact