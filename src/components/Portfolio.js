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
            <h3 className="title">Other Cool Projects</h3>
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
                <div className="abs_img" data-bg-img="img/portfolio/diffdock.png" />
              </div>
              <div className="title_holder">
                <p>Generative AI, Python, Flask, PyTorch, Diffusion Generative Models</p>
                <h3>
                  <a href="https://github.com/amva13/DiffDock">Generative AI for Drug Discovery</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Generative AI, Python, Flask, PyTorch, Diffusion Generative Models</p>
                <h3 className="fn__title">Generative AI for Drug Discovery</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/diffdock.png" />
                </div>
                <p className="fn__desc">
                 DiffDock is a diffusion generative model built by MIT CSAIL for protein-ligand binding 
                 (molecular docking). I've reproduced it and productionized it via a web server. 
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
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/news/gdp.jpg" />
              </div>
              <div className="title_holder">
                <p>data science, python, data engineering, quantitative research</p>
                <h3>
                  <a href="https://github.com/amva13/mit-csail-tufts-mggg-gerrymandering-geometric-data-processing">Research Assistantship MIT CSAIL</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">data science, python, data engineering, quantitative research</p>
                <h3 className="fn__title">Research Assistantship MIT CSAIL</h3>
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
