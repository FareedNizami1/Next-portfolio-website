import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpg"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Storm from "@/components/models/Storm";

export default function Projects() {
  return (
    <>
      <Image src={bg} alt="Background-image" className="-z-10 fixed top-0 left-0 w-full h-full object-cover opacity-60 "/>
    <div className="">

      <div className="flex items-center justify-center fixed top-20 left-0 sm:left-10 h-screen ">
        <RenderModel>
          <Storm/>
        </RenderModel>
      </div>

      <div className="">
        <ProjectList projects={projectsData} />
      </div>

    </div>
    </>
  );
}
