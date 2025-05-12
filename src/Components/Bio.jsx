import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">About Me</h2>
        <div className="card shadow-sm border-0 p-4">
          <div className="card-body">
            <p className="lead">
              I’m a <strong>Systems Administration Engineer</strong> with 5 years of total experience,
              specializing in:
            </p>
            <ul className="mb-3">
              <li>CCNA, MCSA, MCSE</li>
              <li>Troubleshooting, Monitoring, Firewall Administration, DBMS Administration</li>
              <li>Veeam Backup, Virtualization, Windows, and Network Administration</li>
              <li>Firewall Security (Sophos, FortiGate), and System Automation</li>
            </ul>
            <p>
              Currently holding the designation of <strong>IT System and Network Administrator</strong>, I focus on delivering secure and scalable infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

