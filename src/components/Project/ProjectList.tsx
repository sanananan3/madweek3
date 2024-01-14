import React from 'react';
import ProjectItem, { Project } from './ProjectItem';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            <h2>Available Projects for Betting</h2>
            <div>
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
