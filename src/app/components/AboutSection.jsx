'use client'


// Import necessary libraries and components
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define TAB_DATA with different tab information
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Express</li>
          <li>MongoDB</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Bootstrap</li>
          <li>Material-UI</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://www.digipodium.com/">Digipodium</a>
        </li>
        <li>
          <a href="https://srmu.ac.in/">Shri Ramswaroop Memorial University</a>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://drive.google.com/file/d/1wFUSn8228Fua44HX_nKgPy9Q02N9LCR4/view?usp=sharing">
            Google My business Certification
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1PeusW4p5fvYVJJLisy63B-09necZ_yzR/view?usp=drive_link">
            Digipodium Certification in Miner Project
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1PeusW4p5fvYVJJLisy63B-09necZ_yzR/view?usp=drive_link">
            Digipodium Certification in Major Project
          </a>
        </li>
        <li>
          <a href="https://devsnest.in/certificate/awexK6Lf4zw">
            Devsnest Certification in Data Structures and Algorithms
          </a>
        </li>
      </ul>
    ),
  },
];

// Define the AboutSection component
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // Function to handle tab changes
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // JSX rendering of the component
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image component with alt prop */}
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="About Me Image"
        />
        {/* Text content section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. As a web developer, I am committed to pushing the boundaries of creativity and innovation, delivering cutting-edge solutions that elevate brands and delight users. With a passion for problem-solving and a relentless pursuit of excellence, I am poised to make a meaningful impact in the ever-evolving digital landscape.
          </p>
          {/* Tab buttons for Skills, Education, and Certifications */}
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          {/* Display content based on selected tab */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      {/* Link to download Curriculum Vitae */}
      <a href="https://drive.google.com/file/d/1oanVugeUR-F0CWoVCsQzBlC7MZfMGwYf/view?usp=sharing">
        <button className="cvbutton mx-auto"> Download My Curriculum Vitae</button>
      </a>
    </section>
  );
};

// Export the AboutSection component as default
export default AboutSection;
