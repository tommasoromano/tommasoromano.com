import Layout from "../sections/Layout";
import Project from "../components/Project";
import Article from "../components/Article";
import Pa from "../components/Pa";
import{ArrowDownIcon} from "@heroicons/react/solid";
import Socials from "../components/Socials"
import Link from 'next/link'
import contentWork from '../content/projects.json'
import contentArticles from '../content/articles.json'
import contentUniversity from '../content/university.json'
import { selectedWorks, worksText } from "../components/FilterWork";
import { selectedArticles, articlesText } from "../components/FilterArticles";
import { useState, useEffect } from "react";
import Balancer from 'react-wrap-balancer'

export default function Home() {

  const articles_filtered = Object.entries(contentArticles).filter((item) => item[1].show === true);
  const works_filtered = Object.entries(contentWork).filter((item) => item[1].show === true);

  const [rotating, setRotatin] = useState(false);

  return (
    <Layout>

      <section className="md:flex md:items-center md:space-x-10 min-h-screen">
        
        <div className="flex justify-center md:flex-none mt-20 mb-10 md:m-0"
        >
          <img
            src={!rotating ? "me/me_2023_05_final_square.jpg" : "/me/tommaso_romano_rotating.jpg"}
            className="w-32 md:w-40 rounded-full ring-offset-4 ring-4 ring-sky-400 hover:animate-spin animate-none aspect-[1/1]"
          />
        </div>

        <div className="flex flex-col space-y-5">

          {/* <h2 className="h2">Hi, I&apos;m Tommaso</h2> */}
          <p className="h2p">
          {/* <Balancer ratio={0.5}>
            Hi, I&apos;m <span className="inline-btn">Tommaso Romanò</span>, 
            a {new Date().getFullYear()-2001}-year old 
            MSc Computer Science student <Pa href={"https://unimi.it"} text={"@ University of Milan"}/>
            (incoming) Software Engineer <Pa href={"https://aws.amazon.com/"} text={"@ AWS"}/>
          </Balancer> */}
            <ul className="list-none">
              <li>Hi, I&apos;m <span className="inline-btn">Tommaso Romanò</span>,</li>
              <li>a {new Date().getFullYear()-2001}-year old MSc Computer Science</li>
              <li>student <Pa href={"https://unimi.it"} text={"@ University of Milan"}/></li>
              <li>(incoming) Software Engineer <Pa href={"https://aws.amazon.com/"} text={"@ AWS"}/></li>
              {/* <li>Game Engineer <Pa href={"https://dreambitsstudio.com"} text={"@ Dreambits Studio"}/></li> */}
              {/* <li>Big Data Developer <Pa href={"https://smart-bear.eu"} text={"@SESAR"}/></li> */}
              {/* <li>MSc Computer Science student<Pa href={"https://unimi.it"} text={"@ UNIMI"}/></li> */}
            </ul>
          </p>
          
          {/* <div className="flex items-center justify-center space-x-5">
            <a className="btn2" href="#work">Discover</a>
            <a className="btn" href="/tommaso_romano_cv.pdf">Resume</a>
            <a className="btn" href="#work">Resume</a>
          </div> */}
          <Socials/>

        </div>

      </section>

      <div className="absolute bottom-0 left-0 right-0 m-auto w-10 py-4">
        <ArrowDownIcon className="h-10 w-10 animate-bounce"/>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 mt-20" id="work">
        
        <h2 className="h2">Work</h2>
        <p className="h2p">
          A selected {worksText}
        </p>

        {/** 
         * 
         *  WORK CONTAINER
         * 
        */}

          <Project name="famalabs" featurated="FEATURED"/>
          {/* <Project name="war-of-wheels" featurated="FEATURED"/>
          <Project name="smart-bear" featurated="FEATURED"/> */}

        {/** 
         * 
         *  WORK SMALL CONTAINER
         * 
        */}

        <div className="proj-container-2">
          {works_filtered.filter((item,i) => selectedWorks.includes(i==0 ? "!£$%&/()=" : item[1].name)).map((item) => (
            <Project name={item[1].name} featurated="" key={item[1].name}/>
          ))}
            {/* <Project name="war-of-wheels" featurated=""/>
            <Project name="smart-bear" featurated=""/>
            <Project name="pystockbot" featurated=""/>
            <Project name="untitled-nature-game" featurated=""/>
            <Project name="swagvote" featurated=""/>
            <Project name="easy-insta-growth" featurated=""/> */}
        </div>

        <Link href="/work"><a className="btn2">See all &#8594;</a></Link>

        
      </div>

      <div className="article-container">
        <h2 className="h2">Recognitions</h2>
        <p className="h2p">
          A selected {articlesText}.
        </p>
          {articles_filtered.filter((item) => selectedArticles.includes(item[1].name)).map((item) => (
            <Article name={item[1].name} key={item[1].name}/>
          ))}

        <Link href="/recognitions"><a className="btn2">See all &#8594;</a></Link>
      </div>

      <div className="article-container">
        <h2 className="h2">Education</h2>
        <p className="h2p">
          .
        </p>
          <Article name={"unimi5"}/>
          <Article name={"unimi3"}/>
          <Article name={"lssvv"}/>
          <Article name={"fce"}/>
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
        <div
        className="p-8"
        >
        <img
          // src="/me/IMG_0440.PNG"
          src="/me/IMG_4378.JPG"
          className="w-full md:w-3/4 rounded-t-lg aspect-[7/5] m-auto object-center"
        />
        </div>
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
