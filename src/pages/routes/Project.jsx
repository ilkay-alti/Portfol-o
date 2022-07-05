import React from "react";
import ProjectContainer from "../../components/ProjectContainer";
import BtnSlide from "../../components/BtnSlide";

const Project = () => {
  const projectList = [
    {
      id: 1,
      name: "Remotely",
      description:
        "Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      h_link: "https://remotely.io/",
    },
    {
      id: 2,
      name: "Remotely2",
      description:
        "Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      h_link: "https://remotely.io/",
    },
    {
      id: 3,
      name: "Remotely3",
      description:
        "Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      h_link: "https://remotely.io/",
    },
    {
      id: 4,
      name: "Remotely4",
      description:
        "Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      h_link: "https://remotely.io/",
    },
  ];

  const [slideIndex, setSlideIndex] = React.useState(1);

  const nextSlide = () => {
    if (slideIndex === projectList.length) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(projectList.length);
    }
  };

  return (
    <div className="dark:text-white title ">
      <div>
        <div>Projects 💡</div>
      </div>
      <div className="dark:text-white  pt-6 pb-16 subtitles">
        Some things i’ve been working on in the past few years:
      </div>
      {/* //project */}

      {projectList
        .filter((proje) => proje.id === slideIndex)
        .map((filteredProje) => (
          <div key={filteredProje.id} className="flex flex-row">
            <BtnSlide direction="prev" moveSlide={prevSlide} />
            <ProjectContainer {...filteredProje} />
            <BtnSlide direction="next" moveSlide={nextSlide} />
          </div>
        ))}
    </div>
  );
};

export default Project;
