import React from "react";
import { siGithub, siEyeem, siInstagram, siFacebook, siDribbble, siBehance } from "simple-icons";
import { SunIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid"

export const Header = () => {
  const logo = [siGithub, siInstagram, siFacebook, siDribbble, siBehance, siEyeem];

  // console.log(siGithub)
  return (
    <div className="bg-primary  text-center grid h-screen">
        <SunIcon  className="absolute top-0 right-0 w-8 text-secondary m-5 hover:bg-pelengkap rounded-full delay-100"/>
        <Bars3BottomLeftIcon  className="absolute top-0 left-0 w-8 text-secondary m-5 hover:bg-pelengkap rounded-full delay-100"/>
        <h1 className="text-4xl my-auto font-extrabold text-secondary">
         Zacky Al-Baehaki
        </h1>
        {/* test */}
        

        
        {/* test akhir */}
      <div className="absolute bottom-0 ">
        <div className="flex">
          {logo.map((m: any, i: number) => {
            return (
              <div className="m-2 p-1 hover:bg-pelengkap rounded-full delay-100" key={i}>
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
