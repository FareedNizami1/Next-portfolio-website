import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className='w-full '>
       
        <div className="grid md:grid-cols-12 xs:grid-cols-4 gap-8 w-full">

            <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-3xl text-left w-full font-bold text-lime-400 capitalize'>
                        hero stats
                    </h2>
                    <p className='font-light'>
                        Engineer by training, innovator by destiny — I blend the power of Mechatronics with the speed of full-stack development.
                        Armed with Python, Node.js, React.js, Next.js, and AI passion, I build solutions worthy of Stark Industries.
                        From automation to web systems, I craft, code, and conquer.
                        Quick to adapt, relentless in problem-solving — ready to assemble for the future.
                    </p>
            </ItemLayout>

            <ItemLayout className={'col-span-4'}>
                <div className="text-center font-semibold w-full xl:text-2xl md:text-lg sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                    Mechatronics Engineer
                </div>
            </ItemLayout>

            <ItemLayout className={'col-span-4'}>
                <div className="text-center font-semibold w-full xl:text-2xl md:text-lg sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                    Web Developer
                </div>
            </ItemLayout>

            <ItemLayout className={'sm:col-span-4 xs:col-span-8 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/??username=fareednizami1&theme=transparent&hide_border=true&title_color=bafc03&text_color=ffffff&icon_color=FEFE58&text_bold=false' 
                alt='FareedNizami' loading='lazy'/> 
            </ItemLayout>

            <ItemLayout className={'col-span-8 !p-2'}>
                <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,ts,html,css,express,nodejs,bootstrap,tailwind,mongodb,react,threejs,nextjs,git,github,arduino,python,opencv,postman,netlify,npm,redux,vercel,vite,vscode,postgres&perline=10' 
                alt='FareedNizami' loading='lazy'/> 
            </ItemLayout>

            <ItemLayout className={'md:col-span-6 xs:col-span-8 !p-2'}>
                <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=FareedNizami1&theme=dark&hide_border=true&short_numbers=true&background=EB545400&ring=E3EB33" alt="GitHub Streak" />
            </ItemLayout>

            <ItemLayout className={'md:col-span-6 xs:col-span-8 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin/?username=FareedNizami1&repo=NextLevel-Food&theme=transparent&hide_border=true&title_color=bafc03&text_color=ffffff&icon_color=FEFE58&text_bold=false&description_lines_count=2' 
                alt='FareedNizami' loading='lazy'/> 
            </ItemLayout>

        </div>
    </section>
  )
}

export default AboutDetails

// not using Image component because of the url. data is dynamic and not static.