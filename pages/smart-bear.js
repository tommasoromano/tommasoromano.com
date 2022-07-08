import Layout from "../sections/Layout"
import Pa from "../components/Pa";
import content from "../content/projects.json"
import ReadContent from "../components/ReadContent";
import{ArrowLeftIcon} from "@heroicons/react/solid";

function SmartBear( ) {
    const name = "smartbear"
    const prj = content[name];
    const listTags = prj.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    return (
        <Layout>
            <a className="absolute z-20 hover:text-gray-800 hover:dark:text-gray-200 mt-1" href="/"><ArrowLeftIcon className="w-10 h-10"/></a>
            <section className="mt-16 bg-gray-100 dark:bg-gray-900 w-full rounded-lg drop-shadow-lg relative">
                <img
                    src={prj.img}
                    className="object-cover w-full rounded-t-lg "
                />
                {/** 
                 * 
                 *  CONTENT
                 * 
                */}
                <section className="w-full p-8">
                    
                    <h2 
                        className="text-3xl font-bold mb-4 text-center"
                    >
                        <a className="title-btn" href={prj.link} target="_blank" rel="noreferrer noopener">
                        {prj.title}
                        </a>
                    </h2>
                </section>
                
            </section>

            <section className="w-full text-lg mt-16">
                
                <p>{prj.description}</p>
                <p>{prj.description}</p>
                <img
                    src={prj.img}
                    className="inline-img"
                />
                <p>{prj.description}</p>
                <p>{prj.description}</p>

            </section>
        </Layout>
    )
}
export default SmartBear