import { ProjectsDb } from "@/utils/db";
import SparklesText from "./ui/sparkles-text";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <div className="w-full mt-10" id="projects">
      <div className="w-full h-full flex flex-col justify-start p-4 xl:px-20 mt-20 items-center">
        <SparklesText text="Projects" sparklesCount={4} className="text-4xl " />

        <p className="text-center mt-3 text-purple-600 px-5 xl:px-10">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 mt-10">
          {ProjectsDb.map((item,index) => {
            if(index <= 5) {

              return (
                  <ProjectCard
                      key={item.title}
                      desc={item.description}
                      img={item.image}
                      techs={item.stacks}
                      title={item.title}
                      url={item.id}
                  />
              );
            }
          })
          }
        </div>

        <div className="w-full  m-10">
          <Link href="/projects">
            <Button
              variant={"outline"}
              className="w-full hover:shadow-sm  hover:shadow-purple-600/20"
            >
              <p className="text-sm text-purple-600">View All Projects</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
