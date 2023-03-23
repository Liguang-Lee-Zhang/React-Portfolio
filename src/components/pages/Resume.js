import React from 'react';

export default function Home() {
  return (
    <div className="p-5 bg-dark-subtle text-emphasis-dark">
      <h1 className="pb-5">Resume</h1>
      <p>
      Download my <a href="./assets/files/Liguang_Zhang.pdf" download>Resume</a>
      </p>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>bootstrap</li>
      </ul>
      <h3>
        Back-end Proficiencies
      </h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li> 
        <li>MySQL, Sequelize</li> 
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li> 
      </ul>
    </div>
  );
}
