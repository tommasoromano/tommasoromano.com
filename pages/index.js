import Layout from "../sections/Layout";
import Project from "../components/Project";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section  */}

      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
        {/* Headlines */}
        
        <h2 className="text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">Hello World!</h2>
         <p className="text-xl sm:text-md text-center text-gray-500 dark:text-gray-200">I&apos;m a super interesting description</p>
        {/* CTA */}
        <button className="btn" type="button" onClick={null}>
          {" "}
          Click me
        </button>
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
      <div className="flex">
        <div className="w-1/2 md:w-full m-2">
          <Project
            img={"/GW_1.jpg"}
            title="Gladiator Wheels"
            externalLink={"/"}
            featurated={""}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            tags={["Unity","C#"]}
          />
        </div>
        <div className="w-1/2 md:w-full m-2">
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
