import ProjectLayout from "../sections/ProjectLayout"
import Project from "../components/Project";
import content from "../content/projects.json"
import { useState, useEffect } from "react";
import Link from 'next/link'

function Projects( ) {

    const content_filtered = Object.entries(content).filter((item) => item[1].show === true);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        setItems(content_filtered)
    }, []);

    const data = Object.values(items);
    const filter_items = ["All","Software","Web","Data","Game"];

    function search(items) {
        return items.filter(
            (item) => item[1].field.includes((filter === filter_items[0] ? "" : filter))
        );
    }

    function getNumbers(item_filter) {
        return (
            item_filter === filter_items[0] ? (item_filter+" ("+content_filtered.length+")") : (item_filter+" ("+(data.filter((item) => item[1].field.includes(item_filter))).length+")")
        );
    }

    return (
        <ProjectLayout>
            <section className="w-full text-lg mt-16 text-center">
            <h2 className="h2 mb-10">Work</h2>
            <p className="text-base mb-8"><span className="inline-btn">Disclamer:</span><br></br> the list below has no intention to be an ego showcase, but rather, it&apos;s a list I find nice and useful for myself, tracking my passion and dedication for Computer Science and Software Engineering</p>
            <section className="mb-8 text-center space-x-4 space-y-4">
                {filter_items.map((item) => (
                    <button className={(item === filter ? "btn" : "btn2")} type="button" onClick={(e) => setFilter(item)} value={item} key={item}>{getNumbers(item)}</button>
                ))}
            </section>
                
            <div className="proj-container-2">
                {search(data).map((item) => (
                    <Project
                    name={item[1].name}
                    featurated=""
                    key={item[1].name}
                    />
                ))}
            </div>

            </section>
        </ProjectLayout>
    )
}
export default Projects
