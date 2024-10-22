import Link from "next/link";
import { MagicCard } from "./ui/magic-card";
import Safari from "./ui/safari";
import { Button } from "./ui/button";

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
          <Button
            className="w-full hover:ring-1 hover:ring-purple-600 hover:text-purple-600"
            variant={"secondary"}
          >
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600"
            >
              View Project
            </Link>
          </Button>
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
          <Button
            key={item}
            variant={"outline"}
            className="rounded-2xl p-1 py-0 text-xs m-0"
          >
            <span className="whitespace-nowrap text-xs scale-75">{item}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default ProjectCard;
