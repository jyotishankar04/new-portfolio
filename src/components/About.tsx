import React from "react";
import ShinyButton from "./ui/shiny-button";
import SparklesText from "./ui/sparkles-text";
import { SkilsDb } from "@/utils/db";
import BoxReveal from "./ui/box-reveal";
import PulsatingButton from "./ui/pulsating-button";
const About = () => {
  return (
    <div className="w-full mt-52" id="about">
      <div className="w-full h-full flex flex-col justify-start mt-20 items-center">
        <SparklesText text="About me" sparklesCount={4} className="text-4xl " />

        <p className="text-center mt-3 text-purple-600 px-5 xl:px-10">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-5 mt-14">
          <div className="w-full flex justify-end h-full  p-5 xl:p-10">
            <div className="2xl:w-8/12 w-full flex justify-center flex-col items-center">
              <h1 className="text-2xl font-bold">Skills</h1>
              {<SkillsCardFun title="Frontend" skills={SkilsDb.fronted} />}
              {<SkillsCardFun title="Backend" skills={SkilsDb.backend} />}
              {<SkillsCardFun title="Database" skills={SkilsDb.databases} />}
              {<SkillsCardFun title="Languages" skills={SkilsDb.languages} />}
              {<SkillsCardFun title="Tools" skills={SkilsDb.tools} />}
            </div>
          </div>
          <div className="w-full h-full  px-10">
            <div className="">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-5xl font-semibold">
                  Suvam<span className="text-[#5046e6]">.</span>
                </p>
              </BoxReveal>
              <div className="mt-6 w-full">
                <h1 className="text-2xl font-bold text-purple-600 my-4">
                  {" "}
                  Get to know me!
                </h1>
                <p className="text-lg 2xl:w-8/12 w-full">
                  I&apos;m Jyotishankar Patra, a Web Developer skilled in both
                  Frontend and Backend development. I build and manage complete
                  Websites and Web Applications to ensure product success. Check
                  out my work in the Projects section.
                  <br />
                  <br />I love sharing what I&apos;ve learned in Web Development
                  to help the Dev Community. Connect or follow me on LinkedIn
                  and Instagram for useful content on Web Development and
                  Programming.
                  <br />
                  <br />
                  I&apos;m passionate about creating efficient, scalable, and
                  user-friendly web solutions. I&apos;m open to job
                  opportunities where I can contribute, learn, and grow. If you
                  have a suitable opportunity, please contact me.
                </p>
              </div>

              <div className="mt-10 z-0">
                <PulsatingButton pulseColor="#7C3AED">
                  <p className="text-lg text-white -z-0">Lets Connect</p>
                </PulsatingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface sillsType {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
const SkillsCardFun: React.FC<{
  title: string;
  skills: sillsType[];
}> = ({ title, skills }) => {
  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <h1 className="text-lg font-bold text-purple-600 lg:text-start text-center">
        {title}
      </h1>
      <div className="lg:flex flex-wrap gap-2 grid grid-cols-2 md:grid-cols-4">
        {skills.map((item) => {
          return (
            <ShinyButton key={item.name}>
              <div className="flex text-xs xl:text-sm items-center justify-center gap-3">
                {item.name}
                <item.icon className="xl:w-6 xl:h-6 w-4 h-4" />
              </div>
            </ShinyButton>
          );
        })}
      </div>
    </div>
  );
};

export default About;
