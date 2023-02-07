import Article from "../components/Article";
import content from "../content/articles.json"
import { useState, useEffect } from "react";
import Link from 'next/link'

export const selectedArticles = ["gcparis-2022","gmscm-2022","top100-2022","frstplybl22","svpty2022-ntw","bgf-acc","a-80lvl-2"]
export const articlesText = "list of news, articles, interviews, awards, expositions, events, talks, courses and achievements"

function FilterArticles( ) {

    const content_filtered = Object.entries(content).filter((item) => item[1].show === true);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("Selected");

    useEffect(() => {
        setItems(content_filtered)
    }, []);

    const data = Object.values(items);
    const filter_items = ["All","Selected","Accelerator","Article","Award","Event","Exposition","Interview","Speaker","Talk"];

    function search(items, filter) {
        if (filter === filter_items[1]) {
            return items.filter((item) => selectedArticles.includes(item[1].name))
        } else {
            return items.filter(
                (item) => item[1].tags[0].includes((filter === filter_items[0] ? "" : filter))
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
                
            <div className="article-container">
                {search(data,filter).map((item) => (
                    <Article name={item[1].name} key={item[1].name}/>
                ))}
            </div>
        </section>
    )
}
export default FilterArticles
