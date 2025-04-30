import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpg"
import RenderModel from "@/components/RenderModel";
import AvengersLogo from "@/components/models/AvengersLogo";
import AboutDetails from "@/components/about";


export default function Home() {
  return (
    <>
      <Image src={bg} alt="Background-image" className="-z-10 fixed top-0 left-0 w-full h-full object-cover opacity-60 "/>
      
      <div className="w-full h-screen absolute top-1/3 -translate-y-1/2 left-0">
        <RenderModel>
          <AvengersLogo/>
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center w-full text-center top-[60%] left-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-accent lg:text-8xl sm:text-4xl md:text-5xl xs:text-2xl">Syed Fareed Nizami Alam</h1>
          <p className="pt-2 font-light text-foreground text-sm">Meet the Avenger behind this portfolio</p>
        </div>
      </div>

      

      <AboutDetails/>
      
    </>
  );
}
