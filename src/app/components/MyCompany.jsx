"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const MyCompany = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();
  const [animate, setAnimate] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleAnimation = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <a href="https://luxabord.com/">
              <div className="block md:hidden">
                <Image
                  src="/images/company2.png"
                  width={700}
                  height={700}
                  alt="Luxabord"
                  className="w-full h-auto transition-transform duration-500 transform hover:scale-105"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/company.png"
                  width={700}
                  height={700}
                  alt="Luxabord"
                  className="w-full h-auto transition-transform duration-500 transform hover:scale-105"
                />
              </div>
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <a href="https://luxabord.com/">
              <h1
                className={`text-4xl font-bold text-white mb-4 cursor-pointer transition-transform duration-500 ${animate ? 'transform scale-110' : ''}`}
                onClick={handleAnimation}
              >
                Luxabord
              </h1>
            </a>
            <p className="text-base lg:text-lg">
              Luxabord is an innovative clothing brand dedicated to redefining luxury fashion with a modern twist. We focus on providing high-quality, stylish, and comfortable clothing options that cater to the discerning tastes of our clientele. Our mission is to blend elegance with contemporary fashion trends, ensuring our customers look and feel their best.
            </p>
            <p className="text-base lg:text-lg mt-4">
              As a key member of Luxabord's management team, I am responsible for the design and management of our company’s website. My primary focus is to ensure a seamless and engaging online shopping experience for our customers. This includes integrating anime-inspired designs to add a unique flair to our collection, merging the world of fashion with popular anime culture to create standout pieces.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("about")}
                active={tab === "about"}
              >
                About
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("contact")}
                active={tab === "contact"}
              >
                Contact
              </TabButton>
            </div>

            <div className="mt-8 transition-opacity duration-500 ease-in-out" style={{ opacity: isPending ? 0.5 : 1 }}>
              {tab === "about" && (
                <div>
                  <h6 className="text-2xl text-white mb-2">My Role</h6>
                  <p className="text-base lg:text-lg">
                    I managed and designed Luxabord’s e-commerce platform using modern technologies like WordPress. I focused on creating an intuitive user interface and ensuring a seamless user experience. Additionally, I integrated anime-inspired fashion, collaborating with designers to create unique anime-themed prints and patterns.
                  </p>
                </div>
              )}

              {tab === "contact" && (
                <div>
                  <h6 className="text-2xl text-white mb-2">Contact</h6>
                  <p className="text-base lg:text-lg">
                    For inquiries, please contact me at: <a href="https://luxabord.com/" className="text-blue-400">luxabord.com</a>
                  </p>
                  <p className="text-base lg:text-lg">
                    Follow Luxabord on social media: <a href="https://www.instagram.com/luxabord/" className="text-blue-400">Instagram</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCompany;
