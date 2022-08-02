import React from 'react';

function Portfolio({data, key}) {

  return (
    <section className='container col-4' key={key}>
      <h1 data-testid="h1tag">{(data.name)}</h1>
      <p>{data.description}</p>
    <img src= {data.filepath} alt="gallery for projects" className='gallery'/>
    <button className='btn btn-outline-warning btn-sm'>
      <a href={data.link} target="_blank" rel="noreferrer">Link</a>
    </button> 
    </section>
  );
}

export default Portfolio;