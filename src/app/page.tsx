import About from "@/components/About";
import Contact from "@/components/Contact";
import { GridPatternLinearGradient } from "@/components/GridBG";
import Lader from "@/components/Lader";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full  p-2  gap-2">
      <Lader />
      <GridPatternLinearGradient />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
