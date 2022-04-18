import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/projects.json"

const Project = ({name}) => {
    const prj = content[name];
    const listTags = prj.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    const renderFeatured = () => {
        if (prj.featurated === "") {
            return null;
        } else {
            return ( <span className="bg-gray-200 text-gray-800 font-bold p-2 m-1 rounded-lg drop-shadow-lg absolute top-3 left-3">{featurated}</span> );
        }
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-900 w-full rounded-lg drop-shadow-lg relative">
            <a href={prj.link} target="_blank" rel="noreferrer noopener">
                <ExternalLinkIcon className="text-gray-200 absolute top-3 right-3 w-6 h-6 drop-shadow-lg"/>
            </a>
            {renderFeatured()}
            <img
                src={prj.img}
                className="object-cover w-full rounded-t-lg "
            />

            <section className="w-full p-8">
                
                <h2 
                    className="text-3xl font-bold mb-4"
                >
                    <a className="title-btn" href={prj.link} target="_blank" rel="noreferrer noopener">
                    {prj.title}
                    </a>
                </h2>
                <p className="space-x-3 my-4">
                    <span className="font-bold">{prj.role}</span>
                    <span className="italic">{prj.time}</span>
                    <Pa href={prj.atlink} text={prj.at}/>
                </p>
                <span className="space-x-3 my-4">{listTags}</span>
                <p className="mt-4">{prj.description}</p>
            </section>
        </section>
    );
}

export default Project;
