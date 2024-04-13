import React from "react";
import {
  CertificationBox,
  CertificationsDetails,
  CertificationsHeader,
  CertificationsSectionComp,
} from "./Certifications.styles";

const certificationDetails = [
  {
    name: "Advanced Data Structures in Java",
    cURL: "https://tinyurl.com/yn4etj4j",
  },
  {
    name: "Deep Learning Specialization by Andrew Ng",
    cURL: "https://tinyurl.com/y5pzb2hn",
  },
  {
    name: "Natural Language Processing by National Research University Higher School of Economics",
    cURL: "https://tinyurl.com/yysj49pf",
  },
  {
    name: "Prompt Engineering for ChatGPT",
    cURL: "https://tinyurl.com/47zwk25e",
  },
  {
    name: "Build a Simple App in Android Studio with Java",
    cURL: "https://tinyurl.com/655u3wxs",
  },
  {
    name: "Machine Learning by Stanford University",
    cURL: "https://tinyurl.com/2fu9tukw",
  },
  {
    name: "RESTful API with HTTP and JavaScript",
    cURL: "https://tinyurl.com/yftwcazc",
  },
  {
    name: "JavaScript: Understanding the Weird Parts",
    cURL: "https://tinyurl.com/yvazmb5e",
  },
  {
    name: "JavaScript: Understanding ES6 and Beyond",
    cURL: "https://tinyurl.com/5b4euzff",
  },
  {
    name: "JavaScript Pro: Mastering Advanced Concepts and Techniques",
    cURL: "https://tinyurl.com/2mzfz24r",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ- 900)",
    cURL: "https://tinyurl.com/bdcsy46z",
  },
];

const Certifications = () => {
  return (
    <CertificationsSectionComp>
      <CertificationsHeader>Certifications</CertificationsHeader>
      <CertificationsDetails>
        {certificationDetails.map((ele, idx) => {
          return (
            <CertificationBox key={idx}>
              <h3>{ele.name}</h3>
              <div className="cert-url">
                <span>Certification URL: </span>
                <a
                  href={ele.cURL}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >URL</a>
              </div>
            </CertificationBox>
          );
        })}
      </CertificationsDetails>
    </CertificationsSectionComp>
  );
};

export default Certifications;
