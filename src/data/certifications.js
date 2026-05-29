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

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    image: awsImg,
    pdf: awsPdf,
    focus: "Cloud fundamentals, architecture, deployment concepts, and AWS services."
  },
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    image: salesforceImg,
    pdf: salesforcePdf,
    focus: "AI fundamentals inside CRM ecosystems and responsible enterprise AI."
  },
  {
    title: "Red Hat Certification",
    issuer: "Red Hat",
    image: redhatImg,
    pdf: redhatPdf,
    focus: "Linux, containers, enterprise platforms, and modern infrastructure foundations."
  },
  {
    title: "RPA Certification",
    issuer: "UiPath",
    image: rpaImg,
    pdf: rpaPdf,
    focus: "Workflow automation, process design, and productivity systems."
  },
  {
    title: "RPA Essentials Pro",
    issuer: "UiPath",
    image: rpaessImg,
    pdf: rpaessPdf,
    focus: "Automation fundamentals for repeatable business processes."
  },
  {
    title: "Azure AI Fundamentals AI-900",
    issuer: "Microsoft",
    image: azureImg,
    pdf: azurePdf,
    focus: "AI workloads, machine learning concepts, and Azure AI services."
  }
];

export default certifications;
