import React from 'react';

function Nav () {

  return (
    <header className="flex-row px-1">
      <h2 className='justify-content-start'>PC</h2>
      <nav className="justify-content-end">
        <ul className="nav">
          <li className="mx-2 nav-item">
            <a data-testid="about" href="#about" className='nav-link active text-secondary'>
              About
            </a>
          </li>
          <li className="mx-2 nav-item">
            <a data-testid="contact" href="#contact-form" className='nav-link text-secondary'>
              Contact
            </a>
          </li>
          <li className="mx-2 nav-item">
            <a data-testid="portfolio" href="#challenges" className='nav-link text-secondary'>
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;