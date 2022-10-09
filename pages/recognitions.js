import ProjectLayout from "../sections/ProjectLayout"
import FilterArticles, { articlesText } from "../components/FilterArticles";

function Projects( ) {

    return (
        <ProjectLayout>
            <section className="w-full text-lg mt-16">
            <h2 className="h2 mb-10">Recognitions</h2>
            <p className="h2p mb-8">{/*The list below represents a collection I find lovely and valuable, tracking my passion and dedication to Computer Science and Software Engineering: a*/}A {articlesText}</p>
            </section>
            <FilterArticles/>
        </ProjectLayout>
    )
}
export default Projects
