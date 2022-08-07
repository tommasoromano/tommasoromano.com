import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/projects.json"
import ReadContent from "./ReadContent";
// import ReactHtmlParser from 'react-html-parser'; 
import Link from 'next/link'

const Project = ({name}) => {
    const prj = content[name];
    const listTags = prj.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    const renderFeatured = () => {
        if (prj.featurated === "") {
            return null;
        } else {
            return ( <span className="bg-gray-200 text-gray-800 font-bold p-2 m-1 rounded-lg drop-shadow-lg absolute top-3 left-3">{prj.featurated}</span> );
        }
    };

    return (
        <section id={prj.seemore.replace("/","")} className="bg-gray-100 dark:bg-gray-900 w-full rounded-lg drop-shadow-lg relative">
            {/*<a href={prj.link} target="_blank" rel="noreferrer noopener">
                <ExternalLinkIcon className="text-gray-100 absolute top-3 right-3 w-6 h-6 invert"/>
            </a>*/}
            {renderFeatured()}
            <img
                src={prj.img}
                className="object-cover w-full rounded-t-lg aspect-[16/9]"
            />
            {/** 
             * 
             *  CONTENT
             * 
            */}
            <section className="w-full p-8">
                
                <h2 
                    className="text-2xl font-bold mb-4"
                >
                    {/* <a className="title-btn" href={prj.link} target="_blank" rel="noreferrer noopener">
                    {prj.title}
                    </a> */}
                    {prj.title}
                </h2>
                <p className="space-x-3 my-4">
                    <span className="font-bold">{prj.role}</span>
                    <span className="italic">{prj.time}</span>
                    <Pa href={prj.atlink} text={prj.at}/>
                </p>
                <div className="space-x-3 my-4 max-h-8 break-normal">{listTags}</div>
                <div className="collapse mt-4 min-h-[8rem] max-h-[8rem] overflow-y-auto">
                    <ReadContent content={prj.description}/>
                    {/* ReactHtmlParser (prj.description) */}
                </div>
                <br></br>
                <br></br>
                {/* <p><Link href={prj.seemore}><Pa text="SEE MORE &#8594;"/></Link></p> */}
                {/* <p><Link href={prj.seemore}><a className="inline-btn">SEE MORE &#8594;</a></Link></p> */}
                <p><a className="inline-btn">SEE MORE &#8594;</a></p>
            </section>
            
        </section>

    );
}

export default Project;
