"use client";

import Button from "@/components/common/Button";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import TrianglesImage from "@/assets/hero-shapes/triangles.svg";
import EducationBox from "@/components/EducationBox/EducationBox";

export default function page() {
  return (
    <main className="bg-black text-white w-screen max-w-full overflow-x-clip pt-48">
      <Navbar />
      <div className="flex flex-col mx-auto max-w-md">
        <Image
          className="max-w-12 xs:max-w-16"
          src={TrianglesImage}
          alt="Shape"
        />
        <h1 className=" text-4xl font-extrabold">
          <span className=" text-[#EC74ED]">Education</span> Resources
        </h1>
        <p>
          Here is a list of resources that our team has created for everyone to
          use!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto py-16 px-4">
        <EducationBox
          href="https://turquoise-exoplanet-f92.notion.site/VicHack-Mobile-Development-8dd8cbffa89a4e53a2aebc12265de40c"
          title="Mobile Development"
          body="Official Vichack Notion Guide for the Mobile Development stream"
          borderStyle="border-purple-light bg-purple-light"
          buttonStyle=" bg-purple-dark "
        ></EducationBox>
        <EducationBox
          href="https://ds-cubed.notion.site/VicHack-Machine-Learning-Resource-Pack-d7a22adff4304fd49a245b1575cd62d3"
          title="Data Science"
          body="Official Vichack Notion Guide for the AI stream"
          borderStyle="border-green-light bg-green-light"
          buttonStyle=" bg-green-dark "
        ></EducationBox>
        <EducationBox
          href="https://www.notion.so/VicHack-Blockchain-ff3665ecaa214d879ec80cc046e7cb8f"
          title="Blockchain"
          body="Official Vichack Notion Guide for Blockchain stream"
          borderStyle="border-yellow-light bg-yellow-light"
          buttonStyle=" bg-yellow-dark "
        ></EducationBox>
        <EducationBox
          href="https://www.notion.so/AI-Resource-Pack-c69bdc6b0b8f4cdfa0a0be0c3f66d3e2?pvs=4"
          title="Artificial Intelligence"
          body="Official Vichack Notion Guide for Artificial Intelligence Stream"
          borderStyle="border-pink-light bg-pink-light"
          buttonStyle=" bg-pink-dark "
        ></EducationBox>
      </div>
      <Footer />
    </main>
  );
}
