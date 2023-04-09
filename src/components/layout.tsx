import React from "react";

// components
import { Header } from "./header";
import { Headline } from "../components/headline";

export const Layout = ({ children }: any) => {
  return (
    <>
    {/* <div className='h-screen absolute'> */}
        <Header />
        {/* <Headline /> */}
    {/* </div> */}
      <main>{children}</main>
    </>
  );
};
