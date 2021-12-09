import React from "react";
import { Link } from "react-scroll";
import { ArrowRightIcon } from "@heroicons/react/solid";



const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-40">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
          >
            Reed Barger
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="mr-5 hover:text-white hover:cursor-pointer"
          >
            Past Work
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="mr-5 hover:text-white"
          >
            Skills
          </Link>
          <Link
            to="testimonials"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="mr-5 hover:text-white"
          >
            Testimonials
          </Link>
        </nav>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
