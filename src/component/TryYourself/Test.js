import React from 'react'
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
const Test = () => {
    const projects = [
  {
    title: "AMSTEL Draft Beer",
    image: "amstel.jpg",
    description: "Crescimento 25% AMSTEL DRAFT BEER",
  },
  {
    title: "MilAGRO Agro Brasil",
    image: "milagro.jpg",
    description: "MilAGRO AGRO BRASIL",
  },
  {
    title: "Machado de Assis",
    image: "machado.jpg",
    description: "MACHADO DE ASSIS",
  },
  {
    title: "Peixe Voador",
    image: "peixe.jpg",
    description: "PEIXE VOADOR",
  },
  {
    title: "Café Mundo",
    image: "cafe.jpg",
    description: "CAFÉ MUNDO",
  },
  {
    title: "Bruna Florinda",
    image: "florinda.jpg",
    description: "Bruna Florinda",
  },
  {
    title: "Monty Python's Spamalot",
    image: "spamalot.jpg",
    description: "Monty Python's SPAMALOT",
  },
];
  return (
      <div className="bg-[#0f0f12] min-h-screen text-white flex flex-col items-center mx-auto  relative overflow-hidden">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">
          frontend<span className="bg-purple-600 px-2 py-1 rounded-lg">joe</span>
        </h1>
        <div className="flex gap-6 text-2xl">
          <FaInstagram className="cursor-pointer hover:text-purple-400" />
          <FaGithub className="cursor-pointer hover:text-purple-400" />
          <FaYoutube className="cursor-pointer hover:text-purple-400" />
          <FiSettings className="cursor-pointer hover:text-purple-400" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-10/12 mt-20">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold">Hi, I'm Joe</h2>
          <p className="text-gray-400 text-lg mt-2">Frontend Developer</p>
          <p className="text-gray-300 mt-4">
            Through constant practice & learning, I produce aesthetic software
            to an extremely high standard.
          </p>
          <div className="flex items-center mt-10 space-x-2">
            <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
            <span className="text-gray-400">Scroll down ↓</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 md:mt-0">
          <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-[#0f0f12]"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-10/12 mt-32">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Project Card */}
          <div className="bg-[#1a1a1e] p-4 rounded-xl shadow-lg w-80">
            <div className="bg-[#0f0f12] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-purple-400">React Sensei</h4>
              <p className="text-gray-400 text-sm mt-2">
                UI component library used to build beautiful responsive
                dashboards super fast. All code is open-source and currently
                only partially complete.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Test
