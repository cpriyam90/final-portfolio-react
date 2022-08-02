import React from 'react';
import Projects from '../Projects';
import Portfolio from '../Portfolio';

function Container() {

    return (
    <div id="#portfolio">
        {
            Projects.map ((project, index) => (
                <Portfolio data={project} key={index} />
        
            ))
        }
    </div>
    )
}

export default Container;