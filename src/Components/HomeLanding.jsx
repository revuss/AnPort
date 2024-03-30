import Pdf from "/resume.pdf";
import React, { useState } from "react";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const HomeLanding = ({ scrollToSection }) => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className="h-screen ">
      <nav className="mt-4 ">
        <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-10 my-auto py-4 ">
          <a href="/" className="flex items-start ">
            <span className="montserrat-custom">REVUS</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto "
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("about-section")}
                  href="#"
                  className="block py-2 px-3 text-white md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={Pdf}
                  target="_blank"
                  className="block py-2 px-3 text-white md:p-0 "
                >
                  Resume
                </a>
              </li>

              <li>
                <a
                  onClick={() => scrollToSection("contact-section")}
                  href="#"
                  className="block py-2 px-3 text-white md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* cover */}
      <section className="h-4/5 head-box ">
        <div className="head-control-box  mx-10">
          <div className="mr-auto  lg:col-span-10 ">
            <h1 className=" mb-2  font-bold tracking-tight leading-none text-xl  text-plight ">
              Hi! I'm Sarath, a software developer.
            </h1>
            <p className=" mb-6 font-light text-white text-descrption home-text ">
              As a Full Stack Developer,
              <br />I specialize in crafting innovative <br />
              web solutions with a focus on <br />
              delivering high-quality code.
            </p>
            <div>
              <button className="w-80 mx-2 text-white bg-transparent font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
                HIRE ME
              </button>
              <button
                onClick={() => scrollToSection("about-section")}
                className="w-80 mx-2 bg-transparent  text-white font-semibold  py-2 px-4  hover:border-transparent rounded"
              >
                ABOUT
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="home-content__line"></div>
    </div>
  );
};

export default HomeLanding;
