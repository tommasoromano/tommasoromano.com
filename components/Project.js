import Link from "next/link";
import{ExternalLinkIcon} from "@heroicons/react/outline";

const Project = ({img, title, externalLink, featurated, description, tags, color}) => {
    
    const listTags = tags.map((t) =>  
        <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 p-2 m-1 rounded-lg drop-shadow-lg">{t}</span> 
    );

    const renderFeatured = () => {
        if (featurated === "") {
            return null;
        } else {
            return ( <span className="bg-gray-200 text-gray-800 font-bold p-2 m-1 rounded-lg drop-shadow-lg absolute top-3 left-3">{featurated}</span> );
        }
    };

    return (
        <section className="bg-gray-200 dark:bg-gray-800 w-full rounded-lg drop-shadow-lg relative">
            <a href={externalLink} target="_blank" rel="noreferrer noopener">
                <ExternalLinkIcon className="text-gray-200 absolute top-3 right-3 w-6 h-6 drop-shadow-lg"/>
            </a>
            {renderFeatured()}
            <img
                src={img}
                className="object-cover w-full rounded-t-lg"
            />
            <h1 className="text-3xl p-8">{title}</h1>
            <p className="px-8">{description}</p>
            <section className="p-8">
                {listTags}
            </section>
        </section>
    );
}

export default Project;
