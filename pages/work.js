import ProjectLayout from "../sections/ProjectLayout"
import FilterWork from "../components/FilterWork";

function Projects( ) {

    return (
        <ProjectLayout>
            <section className="w-full text-lg mt-16 text-center">
            <h2 className="h2 mb-10">Work</h2>
            <p className="h2p mb-8">The list below represents a collection I find lovely and valuable, tracking my passion and dedication to Computer Science and Software Engineering: a list of projects I&apos;ve worked on as an employer, collaborator, self-employed, student or personal</p>
            </section>
            <FilterWork/>
        </ProjectLayout>
    )
}
export default Projects
