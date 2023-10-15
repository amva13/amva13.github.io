import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "NFT Search Engine and Masonry",
      tag: "React.js, Javascript, Python, Full-stack developmen",
      desc: [
        { p: "I've found the webpage design for most nft marketplaces to be inadequate. They do a good job of showing the popularity and trading activity of NFTs. However, I don't believe they showcase the content of digital artwork well. So, I decided to build a search engine and masonry layout for NFTs. I hope it can help you find an NFT you like." }
      ]

    },
    {
      name: "Generative AI for Drug Discovery",
      tag: "Generative AI, Python, Flask, PyTorch, Diffusion Generative Models",
      desc: [
        { p: "DiffDock is a diffusion generative model built by MIT CSAIL for protein-ligand binding (molecular docking). I've reproduced it and productionized it via a web server. " },
      ]

    },
    {
      name: "Cryptocurrency ticker data infrastructure",
      tag: "hedge funds, trading, Python, big data", 
      desc: [
        { p: "Developed system design and prototype implementation of data infrastructure serving quantitative research for a cryptocurrency hedge fund client."}
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