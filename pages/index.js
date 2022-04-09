import Layout from "../sections/Layout";
import Project from "../components/Project";
import Pa from "../components/Pa";
import{ArrowDownIcon} from "@heroicons/react/solid";

export default function Home() {
  return (
    <Layout>

      <section className="flex items-center space-x-10 min-h-screen">
        
        <img
          src="tommaso_romano_photo.jpg"
          className="w-40 rounded-full outline outline-offset-4 outline-4 animate-spin"
        />

        <div className="flex flex-col space-y-5">

          <h2 className="h2">Hi, I&apos;m Tommaso</h2>
          <p className="h2p">
            founder and developer <Pa href={"/"} text={"@RelowDigital"}/>,
            CS student <Pa href={"/"} text={"@UNIMI"}/>,
            currently working on Gladiator Wheels <Pa href={"/"} text={"@DreamBitsStudio"}/>
          </p>
          
          <div className="flex items-center justify-center space-x-5">
            <button className="btn2" type="button" onClick={null}>
              Discover
            </button>
            <button className="btn" type="button" onClick={null}>
              ( CV ) Resume
            </button>
          </div>

        </div>

      </section>

      <div className="absolute bottom-0 left-0 right-0 m-auto w-10 py-4">
        <ArrowDownIcon className="h-10 w-10 animate-bounce"/>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10">
        
        <h2 className="h2">Work</h2>
        <p className="h2p">
          a list of featurated projects I've worked on as an employer, collaborator, 
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

        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="w-full">
            <Project
              name="pystockbot"
            />
          </div>
          <div className="w-full">
            <Project
              name="gladiatorwheels"
            />
          </div>
          <div className="w-full">
            <Project
              name="gladiatorwheels"
            />
          </div>
          <div className="w-full">
            <Project
              name="gladiatorwheels"
            />
          </div>
        </div>

        
      </div>

    </Layout>
  );
}
