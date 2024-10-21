import Link from "next/link";
import { MagicCard } from "./ui/magic-card";
import Safari from "./ui/safari";
import ShinyButton from "./ui/shiny-button";
import AnimatedGradientText from "./ui/animated-gradient-text";

interface ProjectCardProps {
  title: string;
  desc: string;
  url: string;
  techs: string[];
  img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  url,
  techs,
  img,
}) => {
  return (
    <MagicCard className="w-full flex p-2 z-0">
      <Safari url="magicui.design" className="w-full h-auto" src={img} />
      <div className="w-full p-3 flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xs">{desc}</p>
        <div className="flex flex-wrap w-full gap-2 mt-3">
          <SkillsCardFun skills={techs} />
        </div>
        <div className="mt-3 w-full">
          <ShinyButton className="w-full">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600"
            >
              View Project
            </Link>
          </ShinyButton>
        </div>
      </div>
      <div></div>
    </MagicCard>
  );
};

const SkillsCardFun: React.FC<{
  skills: string[];
}> = ({ skills }) => {
  return (
    <div className="flex flex-wrap w-full justify-start items-center    gap-2  ">
      {skills.map((item) => {
        return (
          <AnimatedGradientText key={item} className=" text-xs m-0">
            <span className="whitespace-nowrap text-xs scale-75">{item}</span>
          </AnimatedGradientText>
        );
      })}
    </div>
  );
};

export default ProjectCard;
