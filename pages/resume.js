import ProjectLayout from "../sections/ProjectLayout"
import FilterWork from "../components/FilterWork"
import FilterArticles from "../components/FilterArticles"
import { useState, useEffect, useRef } from "react";

function Resume( ) {

    const scrollToElementRef = useRef(null)
    const [isCollapse, setIsCollapse] = useState([true,true,true]);
    // useEffect(() => {
    //     setIsCollapse(isCollapse);
    // }, []);

    // function preSetIsCollapse(idx, collapse, isCollapse) {
    //     console.log(isCollapse);
    //     for (let i = 0; i < isCollapse.length; i++) {
    //         if (i == idx) {
    //             isCollapse[idx] = collapse;
    //         }
    //     }
    //     console.log(isCollapse);
    //     return isCollapse;
    // }

    const titles = ["Works", "Recognitions", "Education"]

    function renderExpande(idx) {
        const title = titles[idx];
        if (isCollapse[idx]) {
            // if (scrollToElementRef.current) {
            //     scrollToElementRef.current.scrollIntoView();
            // }
            return (
                // <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(preSetIsCollapse(idx,false,isCollapse))} value={false}>{title} &#8595;</button>
                <section className="w-full grid gap-8 grid-cols-1">
                    <button className="inline-btn no-underline h2 mb-8" type="button" onClick={(e) => setIsCollapse([false,false,false])} value={false}>{title} &#8595;</button>
                </section>
            );
        } else {
            return (
                <section className="w-full grid grid-cols-1 mb-8">
                {/* <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(preSetIsCollapse(idx,true,isCollapse))} value={true}>{title} &#8593;</button> */}
                <h2 className="h2 mb-8">{title}</h2>
                {idx == 0 ? (<FilterWork/>) : (<FilterArticles/>)}
                <button className="inline-btn no-underline text-xl p-8" type="button" onClick={(e) => setIsCollapse([true,true,true])} value={true}>Close &#8593;</button>
                </section>
            );
        }
    }

    return (
        <ProjectLayout>
            {renderExpande(0)}
            {renderExpande(1)}
        </ProjectLayout>
    )
}
export default Resume
