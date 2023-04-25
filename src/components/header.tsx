import React, { useEffect, useRef } from "react";
import {
  siGithub,
  siEyeem,
  siInstagram,
  siFacebook,
  siDribbble,
  siBehance,
  siUpwork,
} from "simple-icons";
import { TweenMax, Power3, gsap } from "gsap";
import { SunIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
// import ProfileDiri from "../assets/images/profil.jpeg";
import Image from "next/image";
import { text } from "stream/consumers";

type TextType = {
  name: "string";
};

export const Header = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const logo = [
    {
      index: 0,
      icon: siGithub,
      link: "https://github.com/albaehaki",
    },
    {
      index: 1,
      icon: siInstagram,
      link: "https://www.instagram.com/zacky_alz/",
    },
    {
      index: 2,
      icon: siEyeem,
      link: "https://www.eyeem.com/u/31234167",
    },
    {
      index: 3,
      icon: siUpwork,
      link: "https://www.upwork.com/freelancers/~016ec45c6537eb19df",
    },
    // ,
    // siDribbble,
    // siBehance,
    // siEyeem,
  ];

  useEffect(() => {
    // const textElement = textRef.current!;
    // if (textElement) {
    //   const text = "I'm Zacky Al-Baehaki";
    //   // const textValue = textElement.textContent!;
    //   // const textLength = textValue.length;
    //   // console.log(textElement, textValue, textLength);
    //   textElement.textContent = "";
    //   let index = 0;

    //   // function animateText() {
    //   //   textElement.textContent! += text[index];
    //   //   index++;
    //   //   if (index >= text.length) {
    //   //     index = 0;
    //   //     console.log(text[index]);
    //   //   }
    //   // }

    //   gsap.to(textElement, {
    //       duration: 2,
    //       delay: 1,
    //       opacity: 1,
    //       onComplete: () => {
    //         setInterval(() => {
    //           textElement.textContent! += text[index];
    //           index++;
    //           if (index >= text.length) {
    //             index = 0;
    //             console.log(text[index]);
    //           }
    //         }, 100);
    //       },
          
    //     });

    // }

    const textElement = textRef.current;
    if (textElement) {
      textElement.textContent = "";
      const text = "I'm Zacky Al-Baehaki";
      let index = 0;
      let interval: any;
  
      const animateText = ()  => {
        textElement.textContent = text.slice(0, index + 1);
        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }
  
      gsap.to(textElement, {
        duration: 2,
        delay: 1,
        opacity: 1,
        onComplete: () => {
          interval = setInterval(animateText, 100);
        },
      });
    }
  }, []);

  // console.log(textRef.current.textContent);

  return (
    <div className="bg-primary   grid h-screen relative">
      <SunIcon className="absolute top-0 right-0 w-8 text-secondary m-5 hover:bg-pelengkap rounded-full delay-100" />
      <Bars3BottomLeftIcon className="absolute top-0 left-0 w-8 text-secondary m-5 hover:bg-pelengkap rounded-full delay-100" />
      <div></div>
      <div className="mx-auto mt-50 text-secondary flex flex-col sm:flex-row w-2/3 lg:w-[800px]">
        {/* <h1 className="text-4xl font-extrabold text-secondary">I'm</h1> */}
        <div className="relative mb-5">
          <Image
            width={300}
            height={300}
            className="absolute z-10"
            src="/images/profil.jpeg"
            alt="profile"
          />
          <div className="relative">
            <Image
              width={300}
              height={300}
              src="/images/profil.jpeg"
              alt="gambar"
              className=""
            />
            <div className="absolute top-2 left-2 w-full h-full  bg-secondary opacity-100"></div>
          </div>
        </div>
        <div className="relative sm:mx-5">
          <h1
            ref={textRef}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-secondary font-sans"
          >
            I'm Z<span className="bg-pelengkap rounded-full">a</span>cky <br />
            Al-Baehaki
          </h1>
          <p className="font-thin md:text-2xl font-mono">A Web Developer</p>
        </div>
      </div>
      {/* test */}

      {/* test akhir */}
      <div className="absolute bottom-0 ">
        <div className="flex">
          {logo.map((m: any, i: number) => {
            return (
              <a key={i} target="_blank" className="" href={m.link}>
                <div className="m-2 p-1 hover:bg-pelengkap rounded-full delay-100">
                  <svg
                    className="h-5 xl:h-5 md:h-8 md:w-8 xl:w-5 w-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={m.icon.path} />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
