import{ExternalLinkIcon} from "@heroicons/react/outline";
import Pa from "../components/Pa";
import content from "../content/projects.json"
import ReadContent from "./ReadContent";
import ReactHtmlParser from 'react-html-parser'; 

const Project = ({name}) => {
    const prj = content[name];
    const listTags = prj.tags.map((t) => 
        <span key={t} className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg">{t}</span> 
    );

    const renderFeatured = () => {
        if (prj.featurated === "") {
            return null;
        } else {
            return ( <span className="bg-gray-200 text-gray-800 font-bold p-2 m-1 rounded-lg drop-shadow-lg absolute top-3 left-3">{featurated}</span> );
        }
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-900 w-full rounded-lg drop-shadow-lg relative">
            {/*<a href={prj.link} target="_blank" rel="noreferrer noopener">
                <ExternalLinkIcon className="text-gray-100 absolute top-3 right-3 w-6 h-6 invert"/>
            </a>*/}
            {renderFeatured()}
            <img
                src={prj.img}
                className="object-cover w-full rounded-t-lg "
            />
            {/* <div id="indicators-carousel" class="relative" data-carousel="slide">

                <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

                    <div class="duration-700 ease-in-out" data-carousel-item="active">
                        <img src={prj.img} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>

                    <div class="duration-700 ease-in-out" data-carousel-item>
                        <img src={prj.img} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>

                    <div class="duration-700 ease-in-out" data-carousel-item>
                        <img src={prj.img} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>

                    <div class="duration-700 ease-in-out" data-carousel-item>
                        <img src={prj.img} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>

                    <div class="duration-700 ease-in-out" data-carousel-item>
                        <img src={prj.img} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>
                </div>

                <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

                <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 dark:bg-gray-800/30 group-hover:bg-gray-200/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-gray-800 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-5 h-5 text-gray-200 sm:w-6 sm:h-6 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="hidden">Next</span>
                    </span>
                </button>
            </div>        */}
            {/** 
             * 
             *  CONTENT
             * 
            */}
            <section className="w-full p-8">
                
                <h2 
                    className="text-2xl font-bold mb-4"
                >
                    <a className="title-btn" href={prj.link} target="_blank" rel="noreferrer noopener">
                    {prj.title}
                    </a>
                </h2>
                <p className="space-x-3 my-4">
                    <span className="font-bold">{prj.role}</span>
                    <span className="italic">{prj.time}</span>
                    <Pa href={prj.atlink} text={prj.at}/>
                </p>
                <span className="space-x-3 my-4">{listTags}</span>
                <div className="collapse mt-4 max-h-24 overflow-y-auto">
                    <ReadContent content={prj.description}/>
                    {/* ReactHtmlParser (prj.description) */}
                </div>
            </section>
        </section>
    );
}

export default Project;
