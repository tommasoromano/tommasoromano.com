import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/articles.json"
import { useState, useEffect } from "react";

const Article = ({name}) => {
    const artcl = content[name];
    const listTags = artcl.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    const hasExpande = !(artcl.expande[0] === "");
    const [isCollapse, setIsCollapse] = useState(true);

    useEffect(() => {
        setIsCollapse(isCollapse);
    }, []);

    function renderExpande() {
        if (!hasExpande) {
            return null;
        } else {
            if (isCollapse) {
                return (
                    <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(false)} value={false}>{artcl.expandeText} &#8595;</button>
                );
            } else {
                return (
                    <section>
                       {artcl.expande.map((item) => (
                            <Article
                            name={item} key={item}
                            />
                    ))}
                        <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(true)} value={true}>Close &#8593;</button>
                    </section>
                );
            }
        }
    }

    return (
        <div className="w-full">
            
        <section className={"w-full px-8 text-left"+(hasExpande ? " border-4 border-sky-500/0 border-l-sky-500" : "")}>
            
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
            {renderExpande()}
        </section>

        </div>
    );
}

export default Article;
