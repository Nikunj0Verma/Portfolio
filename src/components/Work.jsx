import React, { useEffect, useRef, useState } from "react";
import { projects } from "../images";
import { Navigate, useNavigate } from "react-router-dom";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredTagId, setHoveredTagId] = useState(null);
  const modalRef = useRef(null);
  
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };
  
  const handleCloseModal = () => {
  setSelectedProject(null);
};

useEffect(() => {
  if (!selectedProject) return;

  const body = document.body;
  const html = document.documentElement;
  const previousBodyOverflow = body.style.overflow;
  const previousHtmlOverflow = html.style.overflow;

  const navbarElements = document.querySelectorAll(
    "header, nav, [role='navigation'], .navbar, #navbar"
  );
  const previousNavbarStyles = Array.from(navbarElements, (element) => ({
    element,
    display: element.style.getPropertyValue("display"),
    priority: element.style.getPropertyPriority("display"),
  }));

  body.style.overflow = "hidden";
  html.style.overflow = "hidden";

  navbarElements.forEach((element) => {
    element.style.setProperty("display", "none", "important");
  });

  const handleKeyDown = (event) => {
    if (event.key === "Escape") handleCloseModal();
  };

  window.addEventListener("keydown", handleKeyDown);
  modalRef.current?.focus();

  return () => {
    window.removeEventListener("keydown", handleKeyDown);

    body.style.overflow = previousBodyOverflow;
    html.style.overflow = previousHtmlOverflow;

    previousNavbarStyles.forEach(({ element, display, priority }) => {
      if (display) {
        element.style.setProperty("display", display, priority);
      } else {
        element.style.removeProperty("display");
      }
    });
  };
}, [selectedProject]);
  return (
    <section
      id="work"
      className="relative px-[12vw] py-24 pb-24 font-sans md:px-[7vw] lg:px-[15vw]"
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        <div className="mx-auto mb-8 mt-4 h-1 w-80 bg-purple-500" />
        <p className="mt-4 text-lg font-semibold text-gray-400">
          A collection of full-stack and front-end applications built with
          React, Next.js, Node.js, Express.js, MongoDB, and modern web
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="cursor-pointer overflow-hidden rounded-2xl border border-gray-400 bg-gray-900 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/50"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video h-48 w-full rounded-xl object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mb-4 line-clamp-3 pt-4 text-gray-500">
                {project.description}
              </p>

              <div
                className="relative mb-4"
                onMouseEnter={() => setHoveredTagId(project.id)}
                onMouseLeave={() => setHoveredTagId(null)}
              >
                {hoveredTagId === project.id ? (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full bg-[#251f38] px-2 py-1 text-xs font-semibold text-purple-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div>
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="mr-2 mb-2 inline-block rounded-full bg-[#251f38] px-2 py-1 text-xs font-semibold text-purple-500"
                      >
                        {tag}
                      </span>
                    ))}

                    {project.tags.length > 4 && (
                      <span className="mr-2 mb-2 inline-block rounded-full bg-[#251f38] px-2 py-1 text-xs font-semibold text-white">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-15 flex justify-center">
        <a
          href="https://github.com/Nikunj0Verma"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-purple-600 px-5 py-2 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-purple-800 lg:text-lg"
        >
          More Projects →
        </a>
      </div>

      {selectedProject && (
        <div
  className="fixed inset-0 z-50 flex items-center justify-center"
  onClick={handleCloseModal}
>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />

          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            className="relative h-[80%] w-[90%] max-w-[630px] overflow-auto rounded-xl bg-gray-900 shadow-2xl outline-none lg:w-full h-[500px] md:h-[700px] lg:h-[740px]"
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close project details"
                className="cursor-pointer text-3xl font-bold text-white hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex w-full justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] rounded-xl object-contain shadow-2xl lg:w-full"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3
                  id="project-modal-title"
                  className="mb-4 text-md font-bold text-white lg:text-3xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mb-6 text-xs text-gray-400 lg:text-base">
                  {selectedProject.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#251f38] px-2 py-1 text-xs font-semibold text-purple-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.webpage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gray-800 px-2 py-1 text-center text-sm font-semibold text-gray-400 hover:bg-green-800 lg:px-6 lg:py-2 lg:text-xl"
                  >
                    Watch Live
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-gray-800 px-2 py-1 text-center text-sm font-semibold text-gray-400 hover:bg-purple-800 lg:px-6 lg:py-2 lg:text-xl"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;