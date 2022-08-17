import ProjectLayout from "../sections/ProjectLayout"
import Project from "../components/Project";
import content from "../content/projects.json"
import Link from 'next/link'

function Projects( ) {

    return (
        <ProjectLayout>
            <section className="w-full text-lg mt-16">
            
            <section className="mb-8 text-center space-x-4 space-y-4">
                <button className="btn2" type="button" onClick={null} >
                    All
                </button>
                <button className="btn2" type="button" onClick={null} >
                    Software
                </button>
                <button className="btn2" type="button" onClick={null} >
                    Frontend
                </button>
                <button className="btn2" type="button" onClick={null} >
                    Data
                </button>
                <button className="btn2" type="button" onClick={null} >
                    Game
                </button>
            </section>
                
            <div className="proj-container-2">
                <Project
                    name="war-of-wheels"
                />
                <Project
                    name="smart-bear"
                />
                <Project
                name="pystockbot"
                />
                <Project
                name="untitled-nature-game"
                />
                <Project
                name="swagvote"
                />
                <Project
                name="easy-insta-growth"
                />
                <Project
                name="relow"
                />
                <Project
                name="polywar"
                />
            </div>

            </section>
        </ProjectLayout>
    )
}
export default Projects
