import React from 'react';

function Portfolio({data, key}) {

  return (
    <section className='container col-4' key={key}>
      <h1 data-testid="h1tag">{(data.name)}</h1>
      <p>{data.description}</p>
    <img src= {data.filepath} alt="gallery for projects" className='gallery'/>
    </section>
  );
}

export default Portfolio;