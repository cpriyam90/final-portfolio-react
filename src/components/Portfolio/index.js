import React from 'react';

function Portfolio({data, key}) {

  return (
    <div className='gallery-container row' id="#project-challenges">
      <section className='container col-6 project-container' key={key}>
        <h2 data-testid="h1tag">{(data.name)}</h2>
        <p>{data.description}</p>
      <img src= {data.filepath} alt="gallery for projects" className='gallery'/>
      <button className='btn btn-secondary btn-sm'>
        <a href={data.link} target="_blank" rel="noreferrer">Link</a>
      </button>
      <button className='btn btn-warning btn-sm'>
        <a href={data.repo} target="_blank" rel="noreferrer">Github</a>
      </button>  
      </section>
    </div>
  );
}

export default Portfolio;