import Layout from "../sections/Layout";
import Project from "../components/Project";
import Article from "../components/Article";
import Pa from "../components/Pa";
import{ArrowDownIcon} from "@heroicons/react/solid";
import Socials from "../components/Socials"

export default function Home() {
  return (
    <Layout>

      <section className="md:flex md:items-center md:space-x-10 min-h-screen">
        
        <div className="flex justify-center md:flex-none mt-20 mb-10 md:m-0">
          <img
            src="tommaso_romano_photo.jpg"
            className="w-40 rounded-full outline outline-offset-4 outline-4 outline-sky-400 hover:animate-spin animate-none"
          />
        </div>

        <div className="flex flex-col space-y-5">

          <h2 className="h2">Hi, I&apos;m Tommaso</h2>
          <p className="h2p">
            founder and developer <Pa href={"/"} text={"@RelowDigital"}/>,
            Computer Science student <Pa href={"https://unimi.it"} text={"@UNIMI"}/>,
            currently working on <Pa href={"https://dreambitsstudio.com"} text={"Gladiator Wheels"}/>
            and <Pa href={"https://smart-bear.eu"} text={"Smart-Bear"}/>
          </p>
          
          <div className="flex items-center justify-center space-x-5">
            <button className="btn2" type="button" onClick={null}>
              Discover
            </button>
            <button className="btn" type="button" onClick={null}>
              Resume
            </button>
          </div>
          <Socials/>

        </div>

      </section>

      <div className="absolute bottom-0 left-0 right-0 m-auto w-10 py-4">
        <ArrowDownIcon className="h-10 w-10 animate-bounce"/>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10">
        
        <h2 className="h2">Work</h2>
        <p className="h2p">
          a list of featurated projects I&apos;ve worked on as an employer, collaborator, 
          self-employed, student or personal. Many are hidden, in order to show only
          relevant ones. These projects cover many Computer Science fields
          like Data Science &#38; Analysis, Web Development (both back-end and front-end),
          Game Development and Software Development.
        </p>

        {/** 
         * 
         *  WORK CONTAINER
         * 
        */}

        <div className="w-full">
          <Project
            name="gladiatorwheels"
          />
        </div>

        <div className="w-full">
          <Project
            name="smartbear"
          />
        </div>

        {/** 
         * 
         *  WORK SMALL CONTAINER
         * 
        */}

        <div className="md:grid md:grid-cols-2 md:gap-4 my-4 md:m-0">
          {/*<div className="w-full">
            <Project
              name="pystockbot"
            />
          </div>
          <div className="w-full">
            <Project
              name="swang"
            />
          </div>*/}
          <div className="w-full">
            <Project
              name="ung"
            />
      </div>
          <div className="w-full">
            <Project
              name="eig"
            />
          </div>
          <div className="w-full">
            <Project
              name="relow"
            />
          </div>
          <div className="w-full">
            <Project
              name="polywar"
            />
          </div>
        </div>

        
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 mt-20">
        <h2 className="h2">Recognitions</h2>
        <p className="h2p">
          a list of news, articles, interviews, awards, expositions, talks and achievements. Many are hidden, in order to show only
          relevant ones.
        </p>

        <div className="w-full">
          <Article
            name="bgf-win"
          />
        </div>
        <div className="w-full">
          <Article
            name="a-80lvl"
          />
        </div>
        <div className="w-full">
          <Article
            name="t-social"
          />
        </div>
        <div className="w-full">
          <Article
            name="i-mgwx"
          />
        </div>

      </div>

      <div className="flex flex-col justify-center items-center space-y-10 mt-20">
        <h2 className="h2">Athletics</h2>
        <p className="h2p">
          a list of news, articles, interviews, awards, expositions, talks and achievements. Many are hidden, in order to show only
          relevant ones.
        </p>

        <p 
            className="text-2xl font-bold"
        >
        <section>&#129352; 4x200m - Italian Championship Ancona 2022</section>
          <section>&#129353; 4x100m - Italian Championship Grosseto 2021</section>
          <section>&#129353; 4x100m - Italian Championship Grosseto 2020</section>
        </p>

      </div>

    </Layout>
  );
}
