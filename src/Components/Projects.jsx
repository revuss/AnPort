import React from "react";
import { projectDetails } from "./AboutmeFiles/ProjectsDetails";

const Projects = () => {
  return (
    <section className="h-auto Skills-page text-white">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold   tracking-tight font-extrabold text-pdark">
              Projects
            </h2>
            <p className="font-light text-pdark font-medium lg:mb-16 sm:text-xl ">
              Dynamic portfolio exemplifying my prowess and adaptability,
              showcasing a range of projects that underscore my ability to
              deliver exceptional results across various domains."{" "}
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {projectDetails.map((project) => (
              <div href={project.link} target="new" key={project.id}>
                <div className="btn items-center bg-pdark hover:bg-plight rounded-lg shadow sm:flex text-white hover:text-pdark">
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight ">
                      <a href={project.link}>{project.name}</a>
                    </h3>
                    <p className="mt-3 mb-4  ">{project.descrpition}</p>
                    <p className="mt-3 mb-4  ">
                      Technologies Used: {project.tech.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
