import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/projects.json"
import ReadContent from "./ReadContent";
// import ReactHtmlParser from 'react-html-parser'; 
import Link from 'next/link'

const Project = ({name,featurated}) => {
    const prj = content[name];
    const listTags = prj.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

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
                <img
                    src={prj.img}
                    className="object-cover w-full rounded-t-lg aspect-[16/9]"
                />
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
                        <span className="italic">{prj.time}</span>
                        <Pa href={prj.atlink} text={prj.at}/>
                    </p>
                    {renderField()}
                    {/* <div className="collapse mt-4 min-h-[16rem] max-h-[16rem] md:min-h-[16rem] md:max-h-[16rem] overflow-y-auto"> */}
                    <div className="">
                        <ReadContent content={prj.description}/>
                    </div>
                    
                    {renderTech()}
                    {/* <br></br>
                    <p><Link href={prj.seemore}><Pa text="SEE MORE &#8594;"/></Link></p>
                    <p><Link href={prj.seemore}><a className="inline-btn">SEE MORE &#8594;</a></Link></p>
                    <p><a className="inline-btn">SEE MORE &#8594;</a></p> */}
                </section>
                
            </section>
        </div>

    );
}

export default Project;
