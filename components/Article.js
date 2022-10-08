import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/articles.json"
import contentUniversity from "../content/university.json"
import { useState, useEffect, useRef } from "react";

const Article = ({name}) => {
    var artcl = content[name];
    if (artcl) {}
    else { artcl = contentUniversity[name] }
    const listTags = artcl.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    const hasExpande = !(artcl.expande[0] === "");
    const scrollToElementRef = useRef(null)
    const [isCollapse, setIsCollapse] = useState(true);
    useEffect(() => {
        setIsCollapse(isCollapse);
    }, []);

    function renderExternalLink() {
        if (artcl.link === "" || artcl.link === "/") {
            return null;
        } else {
            return (<ExternalLinkIcon className="w-6 h-6 hover:text-gray-800 hover:dark:text-gray-200"/>);
        }
    }

    function renderImage() {
        const img = artcl.image;
        if (!img || img === "") {
            return null;
        } else {
            return (<div className="w-20 h-20 md:w-28 md:h-28 m-4 float-left">
                <img
                    src={img}
                    className="object-cover w-20 h-20 md:w-28 md:h-28 rounded-lg"
                />
            </div>);
        }
    }

    function renderExpande() {
        if (!hasExpande) {
            return null;
        } else {
            if (isCollapse) {
                if (scrollToElementRef.current) {
                    // scrollToElementRef.current.scrollIntoView({behavior: "smooth"});
                    scrollToElementRef.current.scrollIntoView();
                }
                return (
                    <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(false)} value={false}>{artcl.expandeText} &#8595;</button>
                );
            } else {
                return (
                    <section className="space-y-8">
                        {artcl.expande.map((item) => (
                            <Article name={item} key={item}/>
                    ))}
                        <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(true)} value={true}>Close &#8593;</button>
                    </section>
                );
            }
        }
    }

    return (
        <div className="w-full" ref={scrollToElementRef}>
            {/* <div className="gird grid-cols-1 md:grid-cols-2">
                <div className="flex-none">
                    <img
                        src={"./bgf_1.jpg"}
                        className="object-cover w-20 rounded-t-lg aspect-[16/9]"
                    />
                </div> */}
                <div className={"w-full text-left px-4 md:px-8"+(hasExpande ? " border-4 border-sky-500/0 border-l-sky-500" : "")}>
                    
                    <h2 
                        className="text-2xl font-bold pace-x-3"
                    >
                        {renderImage()}
                        <span className="float-left p-1">
                            <a href={artcl.link} target="_blank" rel="noreferrer noopener">
                                {renderExternalLink()}
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
                </div>
            {/* </div> */}

        </div>
    );
}

export default Article;
