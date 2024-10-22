import { MagicCard } from "./ui/magic-card";
import SparklesText from "./ui/sparkles-text";
import { socialData } from "@/utils/db";

const Contact = () => {
  return (
    <div className="w-full mt-10" id="contact">
      <div className="w-full h-full flex flex-col justify-start p-4 xl:px-20  items-center">
        <SparklesText
          text=" Contact me"
          sparklesCount={4}
          className="text-4xl "
        />

        <p className="text-center mt-3 text-purple-600 px-5 xl:px-10">
          Get in touch with me
        </p>
        <div className="flex justify-center  mt-10 items-center w-full ">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 ">
            <a href={socialData.GitHub.url} target="_blank">
              <MagicCard className="w-full p-5 z-0 hover:ring-purple-600 hover:scale-110 duration-200 hover:ring-1 aspect-square ">
                <div className="flex  z-0 justify-center flex-col items-center gap-2">
                  <socialData.GitHub.icon className="lg:w-10 w-4 h-4 lg:h-10 group-hover:text-purple-600" />
                </div>
              </MagicCard>
            </a>

            <a href={socialData.Instagram.url} target="_blank">
              <MagicCard className="w-full p-5 z-0 hover:ring-purple-600 hover:ring-1 aspect-square hover:scale-110 duration-200">
                <div className="flex  z-0 justify-center flex-col items-center gap-2">
                  <socialData.Instagram.icon className="lg:w-10 w-4 h-4 lg:h-10 group-hover:text-purple-600" />
                </div>
              </MagicCard>
            </a>

            <a href={socialData.LinkedIn.url} target="_blank">
              <MagicCard className="w-full p-5 z-0 hover:scale-110 duration-200 hover:ring-purple-600 group hover:ring-1 aspect-square ">
                <div className="flex  z-0 justify-center  flex-col items-center gap-2">
                  <socialData.LinkedIn.icon className="lg:w-10 w-4 h-4 lg:h-10 group-hover:text-purple-600" />
                </div>
              </MagicCard>
            </a>

            <a href={socialData.Reddit.url} target="_blank">
              <MagicCard className="w-full p-5 z-0 hover:ring-purple-600 hover:scale-110 duration-200 hover:ring-1 aspect-square ">
                <div className="flex  z-0 justify-center flex-col items-center gap-2">
                  <socialData.Reddit.icon className="lg:w-10 w-4 h-4 lg:h-10 group-hover:text-purple-600" />
                </div>
              </MagicCard>
            </a>

            <a href={socialData.X.url} target="_blank">
              <MagicCard className="w-full p-5 z-0 aspect-square hover:scale-110 duration-200 hover:ring-purple-600 hover:ring-1">
                <div className="flex  z-0 justify-center flex-col items-center gap-2">
                  <socialData.X.icon className="lg:w-10 w-4 h-4 lg:h-10 group-hover:text-purple-600" />
                </div>
              </MagicCard>
            </a>
            <a href={socialData.email.url} target="_blank">
              <MagicCard className="w-full p-5 z-0 aspect-square hover:scale-110 duration-200 hover:ring-purple-600 hover:ring-1">
                <div className="flex  z-0 justify-center  flex-col items-center gap-2">
                  <socialData.email.icon className="lg:w-10 w-4 h-4 lg:h-10 group-hover:text-purple-600" />
                </div>
              </MagicCard>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
