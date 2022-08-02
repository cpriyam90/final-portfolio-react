import React from 'react';

function Nav () {

  return (
    <header className="flex-row px-1 justify-content-end">
      <h2>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact-form">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;