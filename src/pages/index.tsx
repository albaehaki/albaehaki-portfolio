import Image from "next/image";
import { Inter } from "next/font/google";
import Cafetariaapp from "../assets/images/cafetaria-app.png";
import { siNextdotjs, siTailwindcss, siFirebase } from "simple-icons";

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
  return (
    <>
      <Layout>
        <div className="py-10 bg-primary grid pt-10">
          <h1 className="m-auto text-secondary text-5xl font-bold mb-10">
            Pr<span className="bg-pelengkap rounded-full">o</span>jects
          </h1>
          <div className="relative w-[1200px] m-auto mb-10">
            <div className="border-2  border-secondary w-full h-[200px] bg-primary relative z-10 flex">
              <div className="m-auto">
                <Image
                  src={Cafetariaapp}
                  alt="project1"
                  className="w-11/12 m-2"
                />
              </div>
              <div>
                <h2 className="mx-2 my-5 font-bold text-xl text-secondary ">
                  {" "}
                  <span className="hover:bg-pelengkap rounded-full">
                    {" "}
                    Cafetaria App
                  </span>
                </h2>
                <p className="mx-2 text-secondary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pellentesque, ligula finibus vulputate scelerisque, turpis
                  magna dignissim leo, sed gravida risus diam id ex. Aliquam
                  varius ante et ligula condimentum, sit amet imperdiet erat
                  congue. Aliquam felis risus, cursus sed nisl eget, tristique
                  feugiat eros. Sed mattis justo ac volutpat cursus. Curabitur
                  facilisis ut ipsum et aliquet. Integer vulputate blandit erat
                  ac venenatis.{" "}
                </p>
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
            <div className="border-2  border-secondary w-full h-[200px] bg-secondary absolute top-2 left-2 ">
              test
            </div>
          </div>
          {/* awal */}
          <div className="relative w-[1200px] m-auto mb-10">
            <div className="border-2  border-secondary w-full h-[200px] bg-primary relative z-10">
              test
            </div>
            <div className="border-2  border-secondary w-full h-[200px] bg-secondary absolute top-2 left-2">
              test
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
