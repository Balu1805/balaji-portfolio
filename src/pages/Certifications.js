import certifications from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications">
      <div className="section-header">
        <div className="section-label">認定 ・ CERTIFICATIONS</div>
        <h2 className="section-title">Certifications</h2>
        <div className="section-line"></div>
      </div>

      <div className="certs-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <div className="cert-img-wrap">
              <img src={cert.image} alt={`${cert.title} certificate`} />
            </div>

            <div className="cert-body">
              <div className="cert-provider">{cert.issuer}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.focus}</p>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="cert-btn"
              >
                View Certificate
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
