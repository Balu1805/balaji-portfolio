import awsPdf from "../assets/certificates/aws.pdf";
import salesforcePdf from "../assets/certificates/salesforce.pdf";
import redhatPdf from "../assets/certificates/redhat.pdf";
import rpaPdf from "../assets/certificates/rpa.pdf";
import rpaessPdf from "../assets/certificates/rpaess.pdf";
import azurePdf from "../assets/certificates/azure.pdf";

import awsImg from "../assets/certificates/aws.webp";
import salesforceImg from "../assets/certificates/salesforce.webp";
import redhatImg from "../assets/certificates/redhat.webp";
import rpaImg from "../assets/certificates/rpa.webp";
import rpaessImg from "../assets/certificates/rpaess.webp";
import azureImg from "../assets/certificates/azure.webp";

function Certifications() {

  const certs = [

    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      image: awsImg,
      pdf: awsPdf
    },

    {
      title: "SalesForce Certification",
      issuer: "SalesForce",
      image: salesforceImg,
      pdf: salesforcePdf
    },

    {
      title: "RED HAT Certification",
      issuer: "RED HAT",
      image: redhatImg,
      pdf: redhatPdf
    },

    {
      title: "RPA Certification",
      issuer: "UiPath",
      image: rpaImg,
      pdf: rpaPdf
    },

    {
      title: "RPA ESS PRO",
      issuer: "UiPath",
      image: rpaessImg,
      pdf: rpaessPdf
    },

    {
      title: "Azure AI Fundamentals AI-900",
      issuer: "Microsoft",
      image: azureImg,
      pdf: azurePdf
    }

  ];

  return (

    <section id="certifications">

      <div className="section-header">

        <span className="section-jp">
          認定
        </span>

        <h2 className="section-title">
          Certifications
        </h2>

      </div>

      <div className="certs-grid">

        {certs.map((cert, index) => (

          <div className="cert-card" key={index}>

            <div className="cert-img-wrap">

              <img
                src={cert.image}
                alt={cert.title}
              />

            </div>

            <div className="cert-body">

              <div className="cert-issuer">
                {cert.issuer}
              </div>

              <div className="cert-title">
                {cert.title}
              </div>

              <a
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                View Certificate
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Certifications;