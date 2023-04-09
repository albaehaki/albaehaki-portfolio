import Image from "next/image";
import { Inter } from "next/font/google";

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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div className="h-[1000px]">test</div>
      </Layout>
    </>
  );
}
