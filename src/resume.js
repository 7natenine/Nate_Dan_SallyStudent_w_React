import React from 'react';
import './resume.css';

export default function Resume() {
  return (
    <div>
      <section>
        <header>
          <h2>
            <span>About Me</span>
          </h2>
        </header>
        <p>I love cats, coding, and crocheting. </p>
      </section>
      <section>
        <h2>
          <span>Skills</span>
        </h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
        </ul>
      </section>

      <section>
        <header>
          <h2>
            <span>Education</span>
          </h2>
        </header>
        <ul>
          <li> University of Notre Dame (Class of 2016) </li>
        </ul>
      </section>

      <section>
        <header>
          <h2>
            <span>Employment History</span>{' '}
          </h2>
        </header>

        <p className="role">Apple - Software Engineer </p>

        <ul>
          <li>September 2016 - April 2018 </li>
          <li>
            {' '}
            <i>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{' '}
            </i>
          </li>
        </ul>
        <p className="role">Amazon - Software Engineer </p>
        <ul>
          <li>June 2018 - Present</li>
          <li>
            {' '}
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{' '}
            </i>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <span>Contact Info</span>
        </h2>
        <address>
          <p>Sally Brown</p>
          <p>
            Email: <a href="https://mail.google.com/mail/u/0/#inbox"> sarahBrown@gmail.com </a>{' '}
          </p>
          <p> Phone Number: (858) 374-3845</p>
          <p>
            Twitter: <a href="https://twitter.com/sallyStudent">@sallyStudent</a>
          </p>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
            alt="A photo of myself"
            width="128"
            height="128"
          />
        </address>
      </section>
    </div>
  );
}
