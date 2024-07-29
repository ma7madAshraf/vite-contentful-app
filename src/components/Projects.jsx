import React from "react";
import useFetchProjects from "../fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  if (isLoading)
    <section className="projects">
      <h2>loading....</h2>
    </section>;
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((ele) => {
          const { imageUrl, url, id, title } = ele;

          return (
            <a href={url} target="_blank" key={id} className="project">
              <img src={imageUrl} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
