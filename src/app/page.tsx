import About from "@/components/About";
import Contact from "@/components/Contact";
import { GridPatternLinearGradient } from "@/components/GridBG";
import Lader from "@/components/Lader";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-fullp-2 bg-background  gap-2">
      <Lader>
        <GridPatternLinearGradient />
        <About />
        <Projects />
        <Contact />
      </Lader>
    </div>
  );
}
