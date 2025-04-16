// src/pages/Home.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/home.css'; // Custom styles if needed
// import avatar from '../assets/images/avatar.png'; // Placeholder avatar image

const sections = ['home', 'about', 'work', 'contact'];

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let sec of sections) {
        const el = sectionRefs.current[sec];
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-secondary font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-primary font-bold text-xl">Nirmaan</div>

          <nav className="space-x-6 hidden md:flex">
            {sections.map(sec => (
              <ScrollLink
                key={sec}
                to={sec}
                smooth={true}
                duration={500}
                className={`cursor-pointer capitalize font-medium hover:text-primary transition ${
                  activeSection === sec ? 'text-primary underline' : ''
                }`}
              >
                {sec}
              </ScrollLink>
            ))}
          </nav>

          <div>
            {/* Placeholder profile image */}
            {/* <img
              src={avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            /> */}
          </div>
        </div>
      </header>

      {/* Page Sections */}
      <main className="pt-24 space-y-32">
        {sections.map(sec => (
          <section
            id={sec}
            key={sec}
            ref={(el) => (sectionRefs.current[sec] = el)}
            className={`min-h-screen px-6 py-20 max-w-6xl mx-auto`}
          >
            <h2 className="text-4xl font-bold mb-4 text-navy capitalize">{sec}</h2>
            {sec === 'work' ? (
              <div>
                <p className="mb-8 text-lg">
                  This is the Work section. Explore the projects!
                </p>
                <ScrollLink
                  to="/create-project"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-600 transition cursor-pointer"
                >
                  <span className="text-xl">＋</span> Create Project
                </ScrollLink>
              </div>
            ) : (
              <p className="text-lg text-gray-700">
                Content for {sec} section goes here.
              </p>
            )}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {['Alice', 'Bob', 'Charlie'].map((name, i) => (
            <div key={i}>
              <p className="font-bold">{name.toLowerCase()}@nirmaan.ai</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 fill-white hover:fill-primary transition" viewBox="0 0 24 24">
                    <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 ... Z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 fill-white hover:fill-primary transition" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 ... Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-sm">
          © {new Date().getFullYear()} Nirmaan. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;