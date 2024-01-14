import React, { useState } from "react";
import ProjectList from './Project/ProjectList';

const Intro: React.FC = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', description: 'Description of Project A' },
        { id: 2, name: 'Project B', description: 'Description of Project B' },
    ]);

    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">Pick the Gold Pick</h1>
                <ProjectList projects={projects} />
            </div>
        </section>
    );
};



export default Intro;
