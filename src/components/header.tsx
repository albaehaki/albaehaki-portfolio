import React from "react";
import {
  siGithub,
  siEyeem,
  siInstagram,
  siFacebook,
  siDribbble,
  siBehance,
} from "simple-icons";
import { SunIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
// import ProfileDiri from "../assets/images/profil.jpeg";
import Image from "next/image";

export const Header = () => {
  const logo = [
    siGithub,
    siInstagram,
    siFacebook,
    siDribbble,
    siBehance,
    siEyeem,
  ];

  // console.log(siGithub)
  return (
    <div className="bg-primary   grid h-screen">
      <SunIcon className="absolute top-0 right-0 w-8 text-secondary m-5 hover:bg-pelengkap rounded-full delay-100" />
      <Bars3BottomLeftIcon className="absolute top-0 left-0 w-8 text-secondary m-5 hover:bg-pelengkap rounded-full delay-100" />
      <div></div>
      <div className="absolute top-[200px] left-[100px] text-secondary flex w-[800px]">
        {/* <h1 className="text-4xl font-extrabold text-secondary">I'm</h1> */}
        <div className="relative">
          <Image width={300} height={300} className="relative z-10" src="/images/profil.jpeg" alt="profile" />
          <Image width={300} height={300} className="bg-secondary absolute top-2 left-2" src="/images/profil.jpeg" alt="profile"/>
        </div>
        <div className="mx-10">
          <h1 className="text-4xl font-extrabold text-secondary font-mono">
            I'm  <span className="bg-pelengkap rounded-full">Z</span>acky Al-Baehaki
          </h1>
          <p className="font-bold font-mono">
            Web Developer
          </p>
        </div>
      </div>
      {/* test */}

      {/* test akhir */}
      <div className="absolute bottom-0 ">
        <div className="flex">
          {logo.map((m: any, i: number) => {
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
  );
};
