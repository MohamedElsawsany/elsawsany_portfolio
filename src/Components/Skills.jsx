const Skills = () => {
  const skills1 = [
    { name: 'CCNA R&S', level: '90%' },
    { name: 'MCSA', level: '80%' },
    { name: 'MCSE', level: '75%' },
    { name: 'Linux', level: '60%' },
    { name: 'VMware vSphere', level: '60%' },
    { name: 'Sophos XG Firewall', level: '70%' },
    { name: 'FortiGate Firewall', level: '60%' },
    { name: 'Veeam Backup', level: '80%' },
    { name: 'MS SQLServer', level: '75%' }
  ];

  const skills2 = [
    { name: 'C#', level: '75%' },
    { name: 'LinQ', level: '75%' },
    { name: 'Entity Framework', level: '75%' },
    { name: 'ASP.NET', level: '75%' },
    { name: 'Git & GitHub', level: '55%' },
    { name: 'RestAPI', level: '70%' },
    { name: 'Python', level: '75%' },
    { name: 'PHP', level: '75%' }
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="mb-3">
        <div className="d-flex justify-content-between">
          <strong>{skill.name}</strong>
          <span>{skill.level}</span>
        </div>
        <div className="progress" role="progressbar" aria-valuenow={parseInt(skill.level)} aria-valuemin="0" aria-valuemax="100">
          <div
            className="progress-bar progress-bar bg-primary"
            style={{ width: skill.level }}
          ></div>
        </div>
      </div>
    ));

  return (
    <section className="p-4 bg-light">
      <h2 className="mb-4 text-center">Skills</h2>
      <div className="row">
        <div className="col-md-6">{renderSkills(skills1)}</div>
        <div className="col-md-6">{renderSkills(skills2)}</div>
      </div>
    </section>
  );
};

export default Skills;
