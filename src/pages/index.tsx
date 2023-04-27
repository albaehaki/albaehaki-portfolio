import React, {useState, useRef, useEffect} from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Cafetariaapp from "../assets/images/cafetaria-app.png";
import Wfhapp from "../assets/images/wfhapp.png";
import Alumniapp from "../assets/images/alumniapp.jpg";
import Akdalrt from "../assets/images/akdalrt.jpeg";
import { siNextdotjs, siTailwindcss, siFirebase, siMui, siReact, siFigma } from "simple-icons";
import { dataProjects } from "../data/project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// components
import { Layout } from "../components/layout";

// import SEO from '../components/seo'

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <Inter>
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image src="/images/gatsby-astronaut.png" width={300} />
//       </div>
//       <Link to="/page-2/">Go to page 2</Link>
//     </Inter>
//   </Layout>
// )

const logo : any = [ siNextdotjs, siTailwindcss, siFirebase ]

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const listRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    tl.to(listRef, { y: 50, duration: 1 });
    tl.to(listRef, { x: 100, duration: 1 });
    tl.to(listRef, { opacity: 0, duration: 1 });

    // then we can control the whole thing easily...
    tl.pause();
    tl.resume();
    tl.seek(1.5);
    tl.reverse();
  }, [])
  
  console.log(listRef)
  return (
    <>
      <Layout>
        <div className="py-10 bg-primary grid pt-10">
          <h1 className="m-auto text-secondary text-5xl font-bold mb-10">
            Pr<span className="bg-pelengkap rounded-full">o</span>jects
          </h1>
          {dataProjects.sort((c : any, d : any) => d.id - c.id).map((a: any,i : number) => (
            <div ref={listRef} key={a.id} className="relative w-[300px] sm:w-[600px] md:w-[700px] xl:w-[1200px] m-auto mb-10 ">
            <div className="border-2  border-secondary w-full h-[150px] sm:h-[200px] bg-primary relative z-10 flex flex-col sm:flex-row">
              <div className=" max-w-[200px] my-auto  hidden sm:block">
                <Image
                  src={a.image}
                  alt="project1"
                  className="max-h-[150px] w-auto m-2"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-5">
                <h2 className="mx-2 mt-5 font-bold text-xl text-secondary ">
                  {" "}
                  <span className="hover:bg-pelengkap rounded-full">
                    {" "}
                    {a.nama}
                  </span>
                </h2>
                <p className="mx-2 text-secondary text-sm hidden sm:visible">
                  {a.deskripsi}
                </p>
                <div className="flex">
                  {a.icon.map((m: any, i: number) => {
                    return (
                      <div
                        className="m-2 p-1 hover:bg-pelengkap rounded-full delay-100"
                        key={i}
                      >
                        <svg
                          className="h-5 xl:h-5 md:h-8 md:w-8 xl:w-5 w-5 text-secondary"
                          //   fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={m.path} />
                        </svg>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border-2  border-secondary w-full h-[150px] sm:h-[200px] bg-secondary absolute top-2 left-2 ">
              test
            </div>
          </div>
          ))}
          
          {/* awal */}
          
        </div>
      </Layout>
    </>
  );
}
