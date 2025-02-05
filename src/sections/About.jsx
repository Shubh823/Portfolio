import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../componenets/Button'

const About = () => {
     const [hasCopied, setHasCopied] = useState(false);
    const handleCopy=()=>{
        navigator.clipboard.writeText('shubham82p@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        },1000)

    }
  return (
    <section className='c-space my-20' id={"about"}>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="\assets\photo.jpg" alt="gird-1" className='w-full  h-fit object-contain rounded-md' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Shubham</p>
                        <p className='grid-subtext'> A passionate developer and designer, I blend creativity and code to craft engaging digital experiences. </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container  '>
                    <img src="\assets\techstack.png"  alt="grid2" className='w-full   h-full  object-fit' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I harness a modern suite of tools—from React and Node.js to Tailwind CSS and beyond—to build scalable, efficient, and engaging digital experiences.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={9}
                        showAtmosphere={true}
                        showGraticules={true}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        atmosphereColor='rgba(10, 10, 50, 0.8)'
                        labelsData={[{ lat:18.51957000, lng: 73.85535000, label: 'pune India', color: 'red',text:"I'm here!",size:40 }]}
                        light={{
                            intensity: 0.7, // Increase light intensity for a brighter globe
                            position: [1, 1, 1],
                          }}
                          />
                    </div>
                    <div>
                        <p className='grid-headtext'>Connecting the World</p>
                        <p className='grid-subtext'>Technology knows no boundaries. I strive to build applications that bridge gaps, connect people, and create seamless digital experiences worldwide.</p>
                        <a href="#contact"><Button name="Let's Connect" isBeam containerClass="w-full mt-10" /></a>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid3" className='w-full sm:h-[266px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Code. Create. Innovate.</p>
                        <p className='grid-subtext'>Every keystroke brings ideas to life. Coding isn't just a skill—it's my passion, a creative outlet where logic meets innovation.</p>
                        <p className='grid-subtext mt-4'> From cracking LeetCode challenges to architecting scalable solutions, coding is more than just a skill—it's a mindset.  
                        I thrive on solving complex problems, optimizing algorithms, and constantly learning new technologies to push my limits.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2 '>
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-xl md:text-xl text-gray_gradient text-white'>shubham82p@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
