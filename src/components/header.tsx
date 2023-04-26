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
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ProfileDiri from "../assets/images/profil.jpeg";
import Image from "next/image";
import { text } from "stream/consumers";

type TextType = {
  name: "string";
};

export const Header = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
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
    const textElement = textRef.current;
    const textElement1 = textRef1.current;

    if (textElement) {
      textElement.textContent = "";
      textElement1!.textContent = "";
      const text = "I'm Zacky Al-Baehaki";
      const text1 = "A Web Developer";
      let index = 0;
      let i = 0;
      let interval: any;
      let interval1: any;

      const animateText = () => {
        textElement.textContent = text.slice(0, index + 1);
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          gsap.to(textElement1, {
            duration: 0.5,
            delay: 0.5,
            opacity: 1,
            onComplete: () => {
              interval1 = setInterval(animateText1, 100);
            },
          });
        }
      };
      const animateText1 = () => {
        textElement1!.textContent = text1.slice(0, i + 1);
        i++;
        if (i >= text1.length) {
          clearInterval(interval1);
        }
      };
      gsap.from(imgRef, {
        opacity: 0,
        delay: 2,
        duration: 1,
      });
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
        <div ref={imgRef} className="relative mb-5">
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
          <p ref={textRef1} className="font-thin md:text-2xl font-mono">
            A Web Developer
          </p>
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
