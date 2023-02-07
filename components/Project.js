import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/projects.json"
import ReadContent from "./ReadContent";
import { CalculateDuration } from "./Dates";
// import ReactHtmlParser from 'react-html-parser'; 
import Link from 'next/link'
import { useState, useEffect, useRef } from "react";

const Project = ({name,featurated}) => {
    const prj = content[name];
    const listTags = prj.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    const scrollToElementRef = useRef(null)
    const [isCollapse, setIsCollapse] = useState(true);
    useEffect(() => {
        setIsCollapse(isCollapse);
    }, []);
    const [slider, setSlider] = useState(0);
    function renderImage() {
        const sliders = prj.slides;
        if (!sliders || sliders.length == 0 || sliders[0] === "") {
            return (
                <img
                    src={prj.img}
                    className="object-cover w-full rounded-t-lg aspect-[16/9]"
                />
                );
        } else {
            return (
                <div className="relative object-cover w-full rounded-t-lg aspect-[16/9]">
                    <img
                        src={sliders[slider]}
                        className="w-full rounded-t-lg aspect-[16/9]"
                    />
                    <div className="absolute bottom-0 left-0 bg-gray-100 dark:bg-gray-900">
                    <button className="inline-btn no-underline px-2 py-1" type="button" onClick={(e) => setSlider(0)} value={0}>&#8592;</button>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-gray-100 dark:bg-gray-900">
                    <button className="inline-btn no-underline px-2 py-1" type="button" onClick={(e) => setSlider(1)} value={0}>&#8594;</button>
                    </div>
                </div>
                );
        }
    }
    function renderExpande() {
        if (isCollapse) {
            if (scrollToElementRef.current) {
                // scrollToElementRef.current.scrollIntoView({behavior: "smooth"});
                scrollToElementRef.current.scrollIntoView();
            }
            return (
                <button className="inline-btn2 no-underline" type="button" onClick={(e) => setIsCollapse(false)} value={false}>See more &#8595;</button>
            );
        } else {
            return (
                <section className="w-full h-auto flex flex-col flex-wrap space-y-8">
                    {/* {renderField()} */}
                    {/* <div className="collapse mt-4 min-h-[16rem] max-h-[16rem] md:min-h-[16rem] md:max-h-[16rem] overflow-y-auto"> */}
                    <div className="">
                        <ReadContent content={prj.description}/>
                    </div>
                    {renderTech()}
                    {/* <br></br>
                    <p><Link href={prj.seemore}><Pa text="SEE MORE &#8594;"/></Link></p>
                    <p><Link href={prj.seemore}><a className="inline-btn">SEE MORE &#8594;</a></Link></p>
                    <p><a className="inline-btn">SEE MORE &#8594;</a></p> */}
                    <button className="inline-btn2 no-underline " type="button" onClick={(e) => setIsCollapse(true)} value={true}>Close &#8593;</button>
                </section>
            );
        }
    }

    const renderFeatured = () => {
        if (featurated === "") {
            return null;
        } else {
            return ( <span className="bg-gray-200 text-gray-800 font-bold p-2 m-1 rounded-lg drop-shadow-lg absolute top-3 left-3">{featurated}</span> );
        }
    };

    const renderField = () => {
        if (prj.field === "") {
            return null;
        } else {
            return ( <p className=""><span className="inline-btn">Fields:</span> {prj.field}</p> );
        }
    };
    const renderTech = () => {
        if (prj.tech === "") {
            return null;
        } else {
            return ( <p className=""><span className="inline-btn">Tech:</span> {prj.tech}</p> );
        }
    };

    return (
        <div className="w-full">
            <section id={prj.seemore.replace("/","")} className="bg-gray-100 dark:bg-gray-900 w-full h-full rounded-lg drop-shadow-lg relative text-left">
                {renderFeatured()}
                {renderImage()}
                {/** 
                 * 
                 *  CONTENT
                 * 
                */}
                {/* <section className="w-full h-full p-8 space-y-4"> */}
                <section className="w-full h-auto p-8 flex flex-col flex-wrap space-y-8">
                    
                    <h2 
                        className="text-2xl font-bold"
                        // className="text-2xl font-bold mb-4"
                    >
                        {prj.title}
                    </h2>
                    <p className="space-x-3">
                    {/* <p className="space-x-3 my-4"> */}
                        <span className="font-bold">{prj.role}</span>
                        <span className="italic">{CalculateDuration(prj.time)}</span>
                        <Pa href={prj.atlink} text={prj.at}/>
                    </p>
                    {renderExpande()}
                </section>
                
            </section>
        </div>

    );
}

export default Project;
