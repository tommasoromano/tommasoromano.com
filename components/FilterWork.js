import Project from "./Project";
import content from "../content/projects.json"
import { useState, useEffect } from "react";
import Link from 'next/link'

export const selectedWorks = ["famalabs","war-of-wheels","smart-bear","pystockbot","swagvote","untitled-nature-game","easy-insta-growth"]

export const worksText = "list of projects I\'ve worked on as an employer, collaborator, self-employed, student or personal"

function FilterWork( ) {

    const content_filtered = Object.entries(content).filter((item) => item[1].show === true);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        setItems(content_filtered)
    }, []);

    const data = Object.values(items);
    const filter_items = ["All","Selected","Software","Web","Data","Game"];

    function search(items, filter) {
        if (filter === filter_items[1]) {
            return items.filter((item) => selectedWorks.includes(item[1].name))
        } else {
            return items.filter(
                (item) => item[1].field.includes((filter === filter_items[0] ? "" : filter))
            );
        }
    }

    function getNumbers(item_filter) {
        return (item_filter+" ("+search(data,item_filter).length+")");
    }

    return (
        <section className="w-full">
            <section className="mb-8 text-center space-x-4 space-y-4">
                {filter_items.map((item) => (
                    <button className={(item === filter ? "btn" : "btn2")} type="button" onClick={(e) => setFilter(item)} value={item} key={item}>{getNumbers(item)}</button>
                ))}
            </section>
                
            <div className="proj-container-2">
                {search(data,filter).map((item) => (
                    <Project
                    name={item[1].name}
                    featurated=""
                    key={item[1].name}
                    />
                ))}
            </div>
        </section>
    )
}
export default FilterWork
