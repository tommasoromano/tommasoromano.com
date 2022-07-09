import Layout from "./Layout"
import Pa from "../components/Pa";
import content from "../content/projects.json"
import ReadContent from "../components/ReadContent";
import{ArrowLeftIcon} from "@heroicons/react/solid";
import Link from 'next/link'
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import {useRouter} from 'next/router';

const ProjectLayout = ({children}) => {
    const router = useRouter()
    const prj = content[router.asPath.replace("/","")];
  return (
    <>
      <Head>
        <title>Tommaso Romano</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <div className="min-h-screen mx-auto md:max-w-3xl max-w-full flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 mt-[-60px]">
            <Link 
                href={`/#${prj.seemore.replace("/","")}`}>
                <a className="absolute z-20 hover:text-gray-800 hover:dark:text-gray-200 mt-1">
                <ArrowLeftIcon className="w-10 h-10"/>
                </a>
            </Link>
            <h2 
                className="text-3xl font-bold pt-16 m-8 text-center"
            >
                {prj.title}
            </h2>
            {/* <section className="mt-16 bg-gray-100 dark:bg-gray-900 w-full rounded-lg drop-shadow-lg relative">
                <img
                    src={prj.img}
                    className="object-cover w-full rounded-t-lg "
                />
                <section className="w-full p-8">
                    
                    <h2 
                        className="text-3xl font-bold mb-4 text-center"
                    >
                        <a className="title-btn" href={prj.link} target="_blank" rel="noreferrer noopener">
                        {prj.title}
                        </a>
                    </h2>
                </section>
                
            </section> */}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjectLayout;
