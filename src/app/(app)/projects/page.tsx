import SparklesText from "@/components/ui/sparkles-text";
import  {ProjectsDb} from  "@/utils/db"
import {MagicCard} from "@/components/ui/magic-card";
import ProjectCard from "@/components/ProjectCard";
const page = ()=>{
    return <div className={"w-full h-full flex justify-start   pt-24 items-center"}>
        <div className={"container flex m-auto px-10 justify-start flex-col h-full "}>
            <div>
                <SparklesText text={"Projects"} className={"text-2xl"} sparklesCount={5}/>
                <p className={"text-purple-600"}>Here is my all projects</p>
            </div>
            <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 mt-2 pb-5">
                {ProjectsDb.map((item) => {

                        return (
                            <ProjectCard
                                key={item.title}
                                desc={item.description}
                                img={item.image}
                                techs={item.stacks}
                                title={item.title}
                                url={"/"+item.id}
                            />
                        );
                    })
                }
            </div>
        </div>
    </div>;
}


// const ProjectsPageCard :React.FC= ({project})=>{
// return <MagicCard  className={"w-full flex justify-start items-center p-4 "}>
//     <h1 className={"text-lg"}>{project.title}</h1>
// </MagicCard>
// }


export default page;