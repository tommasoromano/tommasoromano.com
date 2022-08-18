import Layout from "../sections/Layout";
import Project from "../components/Project";
import Article from "../components/Article";
import Pa from "../components/Pa";
import{ArrowDownIcon} from "@heroicons/react/solid";
import Socials from "../components/Socials"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>

      <section className="md:flex md:items-center md:space-x-10 min-h-screen">
        
        <div className="flex justify-center md:flex-none mt-20 mb-10 md:m-0">
          <img
            src="tommaso_romano_photo.jpg"
            className="w-32 md:w-40 rounded-full ring-offset-4 ring-4 ring-sky-400 hover:animate-spin animate-none aspect-[1/1]"
          />
        </div>

        <div className="flex flex-col space-y-5">

          <h2 className="h2">Hi, I&apos;m Tommaso</h2>
          <p className="h2p">
            {/*founder and developer <Pa href={"/"} text={"@RelowDigital"}/>,
            Computer Science student <Pa href={"https://unimi.it"} text={"@UNIMI"}/>,
            currently working on <Pa href={"https://dreambitsstudio.com"} text={"Gladiator Wheels"}/>
            and <Pa href={"https://smart-bear.eu"} text={"Smart-Bear"}/>*/}
            <ul className="list-none">
              <li>Software Engineer <Pa href={"https://dreambitsstudio.com"} text={"@DreamBitsStudio"}/></li>
              <li>Big Data Developer <Pa href={"https://smart-bear.eu"} text={"@SESAR"}/></li>
              <li>Computer Science student <Pa href={"https://unimi.it"} text={"@UNIMI"}/></li>
            </ul>
          </p>
          
          <div className="flex items-center justify-center space-x-5">
            <a className="btn2" href="#work">
              Discover
            </a>
            <a className="btn" href="/tommaso_romano_cv.pdf">
              Resume
            </a>
          </div>
          <Socials/>

        </div>

      </section>

      <div className="absolute bottom-0 left-0 right-0 m-auto w-10 py-4">
        <ArrowDownIcon className="h-10 w-10 animate-bounce"/>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 mt-20" id="work">
        
        <h2 className="h2">Work</h2>
        <p className="h2p">
          A list of featurated projects I&apos;ve worked on as an employer, collaborator, 
          self-employed, student or personal. To show only
          relevant projects, many are hidden. These projects cover many Computer Science fields
          like Data Science &#38; Analysis, Web Development (both back-end and front-end),
          Game Development and Software Development
        </p>

        {/** 
         * 
         *  WORK CONTAINER
         * 
        */}

          <Project
            name="war-of-wheels"
            featurated="FEATURED"
          />

          <Project
            name="smart-bear"
            featurated="FEATURED"
          />

        {/** 
         * 
         *  WORK SMALL CONTAINER
         * 
        */}

        <div className="proj-container-2">
          
            <Project
              name="pystockbot"
              featurated=""
            />
            <Project
              name="untitled-nature-game"
              featurated=""
            />
            <Project
              name="swagvote"
              featurated=""
            />
            <Project
              name="easy-insta-growth"
              featurated=""
            />
            <Project
              name="relow"
              featurated=""
            />
            <Project
              name="polywar"
              featurated=""
            />
        </div>

        <Link href="/projects"><a className="btn2">See all &#8594;</a></Link>

        
      </div>

      <div className="article-container">
        <h2 className="h2">Recognitions</h2>
        <p className="h2p">
          A list of news, articles, interviews, awards, expositions, events, talks and achievements. 
          To show only relevant recognitions, many are hidden
        </p>
          <Project
            name="bologna-game-farm"
            featurated="FEATURATED"
          />
          <Article
            name="top100-2022"
          />
          <Article
            name="frstplybl22"
          />
          <Article
            name="bgf-win"
          />
          <Article
            name="a-80lvl-2"
          />
          <Article
            name="t-social"
          />
          <Article
            name="i-mgwx"
          />

        <Link href="/articles"><a className="btn2">See all &#8594;</a></Link>

      </div>

      <div className="flex flex-col justify-center items-center space-y-10 mt-20">
        <h2 className="h2">Hobbies</h2>
        <p className="h2p">
          A list of not-Computer-Science-related but achievements I&apos;m proud of
        </p>

        <p 
            className="text-2xl font-bold text-center"
        >
        <section>Athletics</section>
        <br></br>
        <section>&#129352; 4x200m - Italian Championship Ancona 2022</section>
          <section>&#129353; 4x100m - Italian Championship Grosseto 2021</section>
          <section>&#129353; 4x100m - Italian Championship Grosseto 2020</section>
          <br></br>
        <section>Drummer</section>
        <br></br>
        <section>Yamaha Music Foundation - Grade 6</section>
        <section>Yamaha Music Foundation - Grade 7</section>
        <section>Yamaha Music Foundation - Grade 8</section>
        <section>Yamaha Music Foundation - Grade 9</section>
        <section>Yamaha Music Foundation - Grade 10</section>
        </p>

      </div>

    </Layout>
  );
}
