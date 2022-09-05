import ProjectLayout from "../sections/ProjectLayout"
import FilterWork from "../components/FilterWork"
import FilterArticles from "../components/FilterArticles"
import { useState, useEffect, useRef } from "react";

function Resume( ) {

    const scrollToElementRef = useRef(null)
    const [isCollapse, setIsCollapse] = useState([true,true]);
    useEffect(() => {
        setIsCollapse(isCollapse);
    }, []);

    function preSetIsCollapse(idx, collapse) {
        console.log(isCollapse);
        for (let i = 0; i < isCollapse.length; i++) {
            if (i == idx) {
                isCollapse[idx] = collapse;
            }
        }
        return isCollapse;
    }

    function renderExpande(idx) {
        const title = (idx == 0 ? "(Works)" : "(Recognitions)");
        if (isCollapse[idx]) {
            // if (scrollToElementRef.current) {
            //     scrollToElementRef.current.scrollIntoView();
            // }
            return (
                <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(preSetIsCollapse(idx,false))} value={false}>{title} &#8595;</button>
            );
        } else {
            return (
                <section>
                <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(preSetIsCollapse(idx,true))} value={true}>{title} &#8593;</button>
                {idx == 0 ? (<FilterWork/>) : (<FilterArticles/>)}
                <button className="inline-btn no-underline" type="button" onClick={(e) => setIsCollapse(preSetIsCollapse(idx,true))} value={true}>Close &#8593;</button>
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
