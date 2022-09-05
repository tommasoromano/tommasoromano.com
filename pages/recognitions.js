import ProjectLayout from "../sections/ProjectLayout"
import FilterArticles from "../components/FilterArticles";

function Projects( ) {

    return (
        <ProjectLayout>
            <section className="w-full text-lg mt-16">
            <h2 className="h2 mb-10">Recognitions</h2>
            <p className="h2p mb-8">The list below represents a collection I find lovely and valuable, tracking my passion and dedication to Computer Science and Software Engineering: a list of news, articles, interviews, awards, expositions, events, talks and achievements</p>
            </section>
            <FilterArticles/>
        </ProjectLayout>
    )
}
export default Projects
