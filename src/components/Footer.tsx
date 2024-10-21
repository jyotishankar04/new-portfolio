import { MagicCard } from "./ui/magic-card";

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center p-4 items-center mt-16">
      <MagicCard className="w-full p-5 z-0 rounded-sm flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          Thank you for visiting my portfolio.
        </div>
        <div>
          {/* {/ copywrite section} */}

          <p className="text-center mt-3 text-purple-600">
            © 2022 Jyotishankar Patra
          </p>
        </div>
      </MagicCard>
    </div>
  );
};

export default Footer;
