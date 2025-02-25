import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "EEGPT - Brain Waves LLM. Non-invasive BCI",
      tag: "OpenAI, Javascript, Full-stack development",
      desc: [
        { p: "Generative AI meets at-home neurodegenerative disease monitoring and care. A non-invasive BCI app integrated with Neurosity EEG for monitoring and alerting of vital brain activity from the comfort of their homes." }
      ]

    },
    {
      name: "NFT Search Engine and Masonry",
      tag: "React.js, Javascript, Python, Full-stack development",
      desc: [
        { p: "I've found the webpage design for most nft marketplaces to be inadequate. They do a good job of showing the popularity and trading activity of NFTs. However, I don't believe they showcase the content of digital artwork well. So, I decided to build a search engine and masonry layout for NFTs. I hope it can help you find an NFT you like." }
      ]

    },
    {
      name: "Apliko: Web3 startup",
      tag: "entrepreneurship, web3",
      desc: [
        { p: "I worked on launching a web3 startup and built a webapp with some thousand users. I wrote a whitepaper for a token and gave an interview about the concept here: https://nftcalendar.io/news/apliko-emblem-interview/." },
      ]

    },
    {
      name: "Therapeutic LLM",
      tag: "LLM Agents, Computational Biology, BMI",
      desc: [
        { p: "AGIHouse Hackathon: Therapeutic LLM using function calling for disease association and single-cell analysis. Code: https://github.com/amva13/therapeutics-llm." },
      ]

    },
    {
      name: "RAG-enabled LLM Agent for Pediatrics",
      tag: "LLM Agents, Medical Informatics, RAG",
      desc: [
        { p: "*Awaiting peer review*: Monitoring a child’s growth is vital for early detection of disorders. This study explores integrating a large language model (LLM) agent into the SMART on FHIR Growth Chart App to assist pediatricians in identifying growth abnormalities. Using a User-Centered Design (UCD) approach, we gathered pediatrician feedback to refine an AI tab analyzing synthetic patient data. The system was implemented using the OpenAI Assistants API with Retrieval Augmented Generation (RAG) and tested for usability and functionality with three pediatricians in an evaluation of model responses for growth abnormality detection, patient history analysis, recommended specialist referral, differential diagnosis and executive summary. Results showed that the agent can achieve high levels of usability when integrated into a clinical setting. However, while the agent accurately analyzed three of five synthetic patients, its responses to differential diagnoses and specialist referrals were insufficient. This proof of concept highlights the potential of AI tools in pediatrics but also underscores the need for improved accuracy in future developments. We have open-sourced the agentic app." },
      ]

    },
    {
      name: "Cryptocurrency ticker data infrastructure",
      tag: "hedge funds, trading, Python, big data", 
      desc: [
        { p: "Developed system design and prototype implementation of data infrastructure serving quantitative research for a cryptocurrency hedge fund client."}
      ]

    },
    {
      name: "Geometric Compactness in Gerrymandering: Research Assistantship MIT CSAIL",
      tag: "data science, python, data engineering, quantitative research", 
      desc: [
        { p: "Developed a high-performance geometric data processing library for scientific computing over GIS data (shapefiles) in Python."}
      ]

    }
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.png`}
                      />
                    </div>
                    {d.desc.map((des,i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;