import React from 'react';

function Portfolio({data, key}) {

  return (
    <section className='container col-4' key={key}>
      <h1 data-testid="h1tag">{(data.name)}</h1>
      <p>{data.description}</p>
      <p>category {data.category}</p>
    <img src= {data.filepath} alt="project image" className='images'/>
    </section>
  );
}

export default Portfolio;