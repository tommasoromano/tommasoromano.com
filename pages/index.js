import Layout from "../sections/Layout";
import Project from "../components/Project";
import{ArrowDownIcon} from "@heroicons/react/solid";

export default function Home() {
  return (
    <Layout>

      <section className="flex items-center space-x-10 my-72">
        
        <img
          src="tommaso_romano_photo.jpg"
          className="w-40 rounded-full outline outline-offset-4 outline-4"
        />

        <div className="flex flex-col space-y-5">

          <h2 className="text-6xl text-center font-bold">Hi, I&apos;m Tommaso</h2>
          <p className="text-xl text-center">a software engineer and CS student @UNIMI</p>
          
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

      <div className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        <div className="w-full m-2">
          <Project
            img={"/GW_1.jpg"}
            title="Gladiator Wheels"
            externalLink={"https://dreambitsstudio.com"}
            featurated={"Current Position"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            tags={["Unity","C#"]}
          />
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 w-full md:m-2">
          <Project
            img={"/GW_1.jpg"}
            title="Gladiator Wheels"
            externalLink={"/"}
            featurated={""}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            tags={["Unity","C#"]}
          />
        </div>
        <div className="md:w-1/2 w-full md:m-2">
          <Project
            img={"/GW_1.jpg"}
            title="Gladiator Wheels"
            externalLink={"/"}
            featurated={""}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            tags={["Unity","C#"]}
          />
        </div>
      </div>
    </Layout>
  );
}
