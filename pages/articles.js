import ProjectLayout from "../sections/ProjectLayout"
import Article from "../components/Article";
import content from "../content/articles.json"
import { useState, useEffect } from "react";
import Link from 'next/link'

function Projects( ) {

    // const content_filter = ["top100-2022","frstplybl22","svpty2022-ntw","bgf-win","t-social","a-80lvl","i-mgwx","e-svpty21","e-mgwx"]
    // const content_filtered = Object.entries(content).filter((item) => content_filter.includes(item[0]));
    const content_filtered = Object.entries(content).filter((item) => item[1].show === true);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        setItems(content_filtered)
    }, []);

    const data = Object.values(items);
    // const filter_items = [...new Set(data.map((item) => item.field))];
    const filter_items = ["All","Article","Talk","Award","Event","Interview","Exposition"];

    function search(items) {
        return items.filter(
            (item) => item[1].tags[0].includes((filter === filter_items[0] ? "" : filter))
        );
    }

    function getNumbers(item_filter) {
        return (
            item_filter === filter_items[0] ? (item_filter+" ("+content_filtered.length+")") : (item_filter+" ("+(data.filter((item) => item[1].tags[0].includes(item_filter))).length+")")
        );
    }

    return (
        <ProjectLayout>
            <section className="w-full text-lg mt-16">
            <p className="text-base mb-8 text-center"><span className="inline-btn">Disclamer:</span><br></br> the list below has no intention to be an ego showcase, but rather, it&apos;s a list I find nice and useful for myself, tracking my passion and dedication for Computer Science and Software Engineering</p>
            <section className="mb-8 text-center space-x-4 space-y-4">
                {filter_items.map((item) => (
                    <button className="btn2" type="button" onClick={(e) => setFilter(item)} value={item} key={item}>{getNumbers(item)}</button>
                ))}
            </section>
                
            <div className="article-container">
                {search(data).map((item) => (
                    <Article
                    name={item[1].name} key={item[1].name}
                    />
                ))}
            </div>

            </section>
        </ProjectLayout>
    )
}
export default Projects
