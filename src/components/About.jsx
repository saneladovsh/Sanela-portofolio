import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
           py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className={`${styles.sectionHeadText} ml-20`}>Introduction</p>
      </motion.div>
      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[22px] max-w-7xl leading-[30px] "
      >
        Hello! I am a law graduate turned tech enthusiast who loves to travel
        and share my experiences through social media. My passion for the tech
        industry and design led me to switch career paths, and I quickly fell in
        love with coding.
        {/* <br />{" "} */}
      </motion.p>
      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[22px] max-w-7xl leading-[30px] "
      >
        {/* {" "} */}I began with HTML and CSS, and as I continued to learn, I
        became proficient in JavaScript and React. My creative coding journey
        also led me to explore Three.js, which has been an incredible adventure.
      </motion.p>
      {/* <br />{" "} */}
      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[22px] max-w-7xl leading-[30px] "
      >
        I have a strong foundation in UX and UI design and use Figma to bring my
        ideas to life.My passion for photography has allowed me to develop
        skills in image and video editing, which I believe add value to my tech
        skill set. In addition to my coding skills, I am also passionate about
        marketing and enjoy creating content that engages and inspires others.
        Through my experiences in social media and marketing, I have developed a
        keen understanding of how to reach and connect with audiences in
        meaningful ways.
      </motion.p>
      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[22px] max-w-7xl leading-[30px] "
      >
        I am constantly seeking ways to improve my skills and knowledge in other
        areas of tech and marketing, and I am excited to see where this journey
        takes me. Whether I am coding, designing, or creating engaging content
        for social media, I am always passionate about what I do and strive to
        make a positive impact in the tech industry.
        {/* <br />{" "} */}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ml-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export default About;
export default SectionWrapper(About, "about");
