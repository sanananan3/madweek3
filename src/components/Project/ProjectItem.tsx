import React, { useState } from 'react';

export interface Project {
    id: number;
    name: string;
    description: string;
}

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    const [betAmount, setBetAmount] = useState('');

    const handleBet = () => {
        console.log(`Betting ${betAmount} on project ${project.name}`);
        // 여기에 베팅 로직을 추가하세요.
    };

    return (
        <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                placeholder="Bet Amount"
            />
            <button onClick={handleBet}>Bet</button>
        </div>
    );
};

export default ProjectItem;
