import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/articles.json"

const Article = ({name}) => {
    const artcl = content[name];
    const listTags = artcl.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    return (
        <div className="w-full">
        <section className="w-full px-8">
            
            <h2 
                className="text-2xl font-bold pace-x-3"
            >
                <span className="float-left p-1">
                    <a href={artcl.link} target="_blank" rel="noreferrer noopener">
                        <ExternalLinkIcon className="w-6 h-6 hover:text-gray-800 hover:dark:text-gray-200"/>
                    </a>
                </span>
                <Pa href={artcl.link} text={artcl.title}/>
            </h2>
            <p className="space-x-3 my-4">
                <span className="space-x-3 my-4">{listTags}</span>
                <span className="italic">{artcl.date}</span>
                <span>-</span>
                <span>{artcl.description}</span>
            </p>
        </section>

        </div>
    );
}

export default Article;
