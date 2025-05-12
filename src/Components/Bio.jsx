const Bio = () => (
  <section className="p-4">
    <h2 style={{ textAlign: "center" }}>About Me</h2>
    <p>
      System Administration Engineer with 5 years of total experience. Skilled
      in SQL Server, MCSA, MCSE, CCNA, Troubleshooting, Monitoring, Veeam
      Backup, Firewall Configuration, Firewall Administration, Firewall
      Management, Firewall Security, Sophos, System Administration, Windows,
      Network Administration, Network Engineering, and Virtualization. Currently
      holds the designation of IT System and Network Administrator in the field
      of System Administration / Network Administration / Security.
    </p>
    <a
      href="/Mohamed-Hassan-Resume.pdf"
      style={{
        display: "block",
        width: "fit-content",
        margin: "0 auto",
        textAlign: "center",
      }}
      className="btn btn-outline-primary"
      download
    >
      Download Resume
    </a>
  </section>
);

export default Bio;
