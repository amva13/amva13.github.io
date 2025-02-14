import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Neat, unmantained, projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/nfts.png" />
              </div>
              <div className="title_holder">
                <p>React.js, Javascript, Python, Full-stack development</p>
                <h3>
                  <a href="https://black-hill-0e2bc0010.2.azurestaticapps.net/">NFT Search Engine and Masonry</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React.js, Javascript, Python, Full-stack development</p>
                <h3 className="fn__title">NFT Search Engine and Masonry</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/nfts.png" />
                </div>
                <p className="fn__desc">
                I've found the webpage design for most nft marketplaces to be inadequate. 
                They do a good job of showing the popularity and trading activity of NFTs. However, 
                I don't believe they showcase the content of digital artwork well. 
                So, I decided to build a search engine and masonry layout for NFTs. 
                I hope it can help you find an NFT you like.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/aplikonft.png" />
              </div>
              <div className="title_holder">
                <p>entrepreneurship, web3</p>
                <h3>
                  <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/23963367906679302864893822046671067385534276026416763800497373768214537830410">Apliko: Web3 startup</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">entrepreneurship, web3</p>
                <h3 className="fn__title">Apliko</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/aplikonft.png" />
                </div>
                <p className="fn__desc">
                I worked on launching a web3 startup and built a webapp with some thousand users. I wrote a whitepaper for a token
                and gave an interview about the concept here: https://nftcalendar.io/news/apliko-emblem-interview/. 
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/news/llmagents.png" />
              </div>
              <div className="title_holder">
                <p>LLM Agents, Computational Biology, BMI</p>
                <h3>
                  <a href="https://youtu.be/18pdSrL21Bo">Therapeutic LLM</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">LLM Agents, Computational Biology, BMI</p>
                <h3 className="fn__title">Therapeutic LLM</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/news/llmagents.png" />
                </div>
                <p className="fn__desc">
                  AGI House Hackathon: Therapeutic LLM using function calling for disease association and single-cell analysis. Code: https://github.com/amva13/therapeutics-llm.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/news/llmgrowth.png" />
              </div>
              <div className="title_holder">
                <p>LLM Agents, Medical Informatics, RAG</p>
                <h3>
                  <a href="https://github.com/amva13/growth-llm">Pediatrics LLM</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">LLM Agents, Medical Informatics, RAG</p>
                <h3 className="fn__title">Pediatrics LLM</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/news/llmgrowth.png" />
                </div>
                <p className="fn__desc">
                *Awaiting peer review*: Monitoring a child’s growth is vital for early detection of disorders. This study explores integrating a large language model (LLM) agent into the SMART on FHIR Growth Chart App to assist pediatricians in identifying growth abnormalities. Using a User-Centered Design (UCD) approach, we gathered pediatrician feedback to refine an AI tab analyzing synthetic patient data. The system was implemented using the OpenAI Assistants API with Retrieval Augmented Generation (RAG) and tested for usability and functionality with three pediatricians in an evaluation of model responses for growth abnormality detection, patient history analysis, recommended specialist referral, differential diagnosis and executive summary. Results showed that the agent can achieve high levels of usability when integrated into a clinical setting. However, while the agent accurately analyzed three of five synthetic patients, its responses to differential diagnoses and specialist referrals were insufficient. This proof of concept highlights the potential of AI tools in pediatrics but also underscores the need for improved accuracy in future developments. We have open-sourced the agentic app.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(5);
              }}
              data-index={5}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/ticker.png" />
              </div>
              <div className="title_holder">
                <p>hedge funds, trading, Python, big data</p>
                <h3>
                  <a href="https://github.com/amva13/monofeed">Cryptocurrency ticker data infrastructure</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">hedge funds, trading, Python, big data</p>
                <h3 className="fn__title">Cryptocurrency ticker data infrastructure</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/ticker.png" />
                </div>
                <p className="fn__desc">
                  Developed system design and prototype implementation of data infrastructure 
                  serving quantitative research for a cryptocurrency hedge fund client.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(6);
              }}
              data-index={6}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/news/gdp.jpg" />
              </div>
              <div className="title_holder">
                <p>data science, python, data engineering, quantitative research</p>
                <h3>
                  <a href="https://github.com/amva13/mit-csail-tufts-mggg-gerrymandering-geometric-data-processing">Geometric Compactness in Gerrymandering: Research Assistantship MIT CSAIL</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">data science, python, data engineering, quantitative research</p>
                <h3 className="fn__title">Geometric Compactness in Gerrymandering: Research Assistantship MIT CSAIL</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/news/gdp.jpg" />
                </div>
                <p className="fn__desc">
                Developed a high-performance geometric data processing library for scientific computing over GIS data (shapefiles) in Python.
                </p>
                <p className="fn__desc">
                Researched and implemented high performance geometric data processing algorithms for political redistricting. 
                Scaled polygon adjacency algorithms for big data geospatial analysis. 
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
