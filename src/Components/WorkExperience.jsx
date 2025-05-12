import React from "react";

const WorkExperience = () => {
  return (
    <section id="experience" className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Work Experience</h2>

        {/* Experience Card 1 */}
        <div className="card mb-4 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title fw-bold">
              IT System & Network Administrator
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              EgyptGold – Alexandria, Egypt{" "}
              <span className="float-end">2021 - Present</span>
            </h6>
            <ul className="mt-3 mb-0">
              <li>
                Manage and maintain Windows servers, ensuring optimal
                performance and security.
              </li>
              <li>
                Deploy and maintain virtual machines (VMs) for various
                applications and services.
              </li>
              <li>
                Troubleshoot and resolve issues related to virtualization
                infrastructure.
              </li>
              <li>
                Create and manage user accounts, permissions, and access
                controls.
              </li>
              <li>
                Implement and maintain system backups and disaster recovery
                plans using Veeam Backup.
              </li>

              <li>
                Configure, manage, and troubleshoot network devices including
                routers, switches, and firewalls.
              </li>

              <li>
                Manage firewall configurations and policies, with a focus on
                Sophos firewall administration.
              </li>
              <li>
                Monitor network performance and optimize for efficiency and
                security.
              </li>
              <li>
                Implement and manage VPNs, ensuring secure remote access for
                users.
              </li>
              <li>
                Install, configure, and update software and hardware components.
              </li>
              <li>
                Monitor system performance and troubleshoot issues to ensure
                high availability and reliability.
              </li>
              <li>
                Work closely with other IT staff and departments to identify and
                address system and network needs.
              </li>

              <li>
                Participate in planning and implementing IT projects and
                upgrades.
              </li>

              <li>
                Generate regular reports on system and network performance,
                security incidents, and maintenance activities.
              </li>
              <li>
                Provide technical support and troubleshooting assistance to
                end-users.
              </li>
              <li>
                Resolve hardware and software issues promptly to minimize
                downtime.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="card mb-4 shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title fw-bold">
              IT System & Network Administrator
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              City Hospital – Alexandria, Egypt{" "}
              <span className="float-end">2020 - 2021</span>
            </h6>
            <ul className="mt-3 mb-0">
              <li>
                Manage and maintain hospital’s IT infrastructure, including
                servers, workstations, and network devices.
              </li>
              <li>
                Install, configure, and update software and hardware components
                to ensure optimal performance and security.
              </li>
              <li>
                Monitor system performance and troubleshoot issues to ensure
                high availability and reliability of critical healthcare
                applications.
              </li>
              <li>
                Create and manage user accounts, permissions, and access
                controls for hospital staff.
              </li>
              <li>
                Implement and maintain system backups and disaster recovery
                plans to protect patient data and ensure business continuity.
              </li>
              <li>
                Configure, manage, and troubleshoot network devices including
                routers, switches, and firewalls.
              </li>
              <li>
                Monitor network performance and optimize for efficiency and
                security, ensuring seamless connectivity for medical devices and
                hospital systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
