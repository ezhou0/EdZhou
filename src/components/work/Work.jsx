import React from 'react';
import "./work.css";
import Projects from "./Projects"

const Work = () => {
    return(
        <section className="work section" id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most Recent Works</span>
            <span className="section__subtitle error">Website links under maintancence due to change in Heroku hosting services </span>

            <Projects />
        </section>
    )
}

export default Work;