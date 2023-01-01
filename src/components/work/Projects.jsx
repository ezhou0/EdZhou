import React, {useState, useEffect} from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems.jsx'

const Projects = () => {

    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all"){
            setProjects(projectsData)
        }
    })

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return(
                        <span className="work__item" key={index}>{item.name}</span>
                    )
                })};
            </div>

            <div className="work__container container grid">
                {projectsData.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Projects;