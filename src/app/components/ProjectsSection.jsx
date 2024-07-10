"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  
  {
    id: 1,
    title: "E-Doctor Connect",
    description: "E-Doctor Connect is a comprehensive healthcare platform designed to bridge the gap between patients and healthcare providers through innovative digital solutions. With its user-friendly interface and advanced features, eDoctor Connect enables seamless communication, appointment scheduling, and remote consultations between patients and healthcare professionals.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/shriyashshukla/E-Doc-Connect.git",
    previewUrl: "",
  },
  {
    id: 2,
    title: "AnimeZen",
    description: "AnimeZen is your ultimate destination for all things anime-inspired fashion. Dive into a world where your favorite anime characters come to life through stylish clothing and accessories. Whether you're a die-hard fan or just starting your journey into the anime universe, AnimeZen offers a diverse range of apparel that captures the essence of your favorite shows and characters.",
    image: "/images/projects/3.png",
    tag: ["All", "Working On","Live"],
    gitUrl: "https://github.com/shriyashshukla/AnimeZen.git",
    previewUrl: "https://anime-zen.vercel.app/",
  },
  {
    id: 3,
    title: "Food Ordering Application",
    description: "Browse through our carefully curated selection of cuisines, from traditional favorites to innovative fusion dishes, all available for deWorking Onry or pickup. Whether you're in the mood for hearty comfort food, exotic international fare, or healthy options to nourish your body and soul, Paapi Paet has you covered.",
    image: "/images/projects/4.png",
    tag: ["All", "Live"],
    gitUrl: "https://github.com/shriyashshukla/food_deliverey.git",
    previewUrl: "https://food-deliverey.vercel.app/",
  },
  {
    id: 4,
    title: "Trip-book.com",
    description: "Trip-Book.com is a travel booking platform that offers a wide range of travel services, including flights, hotels, car rentals, and vacation packages. With its user-friendly interface and advanced search features, Trip-Book.com makes it easy to plan your next adventure and book all your travel needs in one place.",
    image: "/images/projects/5.png",
    tag: ["All","Live"],
    gitUrl: "https://github.com/shriyashshukla/tripBook.com.git",
    previewUrl: "https://trip-book-com.vercel.app/",
  },
  {
    id: 5,
    title: "Code Pen",
    description: "this is code text editor on web dev",
    image: "/images/projects/6.png",
    tag: ["All","Live"],
    gitUrl: "https://github.com/shriyashshukla/Code-pen",
    previewUrl: "code-pen-eosin.vercel.app",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Working On"
          isSelected={tag === "Working On"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Live"
          isSelected={tag === "Live"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      
    </section>
    
    </>
  );
};

export default ProjectsSection;
