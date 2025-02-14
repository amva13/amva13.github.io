import { useState } from "react";
import NewsModalbox from "./NewsModalbox";

const News = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  const [load, setLoad] = useState(false);
  const [hiddenItem, setHiddenItem] = useState(true);
  const [focusValue, setFocusValue] = useState("");
  const modalValueSet = (value) => {
    setModal(true);
    setModalValue(value);
  };
  const loadValueSet = (e) => {
    e.preventDefault();
    if (hiddenItem) {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setHiddenItem(false);
      }, 2000);
    }
  };
  const focusValueChange = () => {
    if (!hiddenItem) {
      setFocusValue("No more articles found");
    }
  };

  return (
    <section id="news">
      {modal && <NewsModalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">You define your own life. Don’t let other people write your script.</h3>
            <h3 className="title">Featured articles and projects</h3>
          </div>
          {/* /Main Title */}
          {/* Blog List */}
          <div className="resumo_fn_blog_list">
            <ul className="modal_items" data-from="blog" data-count={5}>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(1)}
                  data-index={1}
                >
                  <div className="img_holder">
                    <img src="img/news/pytdc_model_server.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/pytdc_model_server.png" />
                  </div>
                  <div className="title_holder">
                    <p>Jan 29, 2025</p>
                    <h3>
                      <a href="https://tdcommons.ai/pytdc">
                      PyTDC: A multimodal machine learning training, evaluation, and inference platform 
                      for biomedical foundation models (more details to be released).
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(2)}
                  data-index={1}
                >
                  <div className="img_holder">
                    <img src="img/news/signals_in_the_cells.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/signals_in_the_cells.png" />
                  </div>
                  <div className="title_holder">
                    <p>Oct 13th, 2024</p>
                    <h3>
                      <a href="https://openreview.net/pdf?id=kL8dlYp6IM">
                      (NeurIPS'24 AIDrugX Spotlight) Signals in the Cells: Multimodal and Contextualized Machine Learning Foundations for Therapeutics.
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(3)}
                  data-index={3}
                >
                  <div className="img_holder">
                    <img src="img/news/AClearning.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/AClearning.png" />
                  </div>
                  <div className="title_holder">
                    <p>November 7, 2024</p>
                    <h3>
                      <a href="https://chemrxiv.org/engage/chemrxiv/article-details/6703d9c351558a15ef5b9e06">
                      Activity Cliff-Informed Contrastive Learning for Molecular Property Prediction
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(4)}
                  data-index={3}
                >
                  <div className="img_holder">
                    <img src="img/news/llmagents.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/llmagents.png" />
                  </div>
                  <div className="title_holder">
                    <p>2024-2025</p>
                    <h3>
                      <a href="https://github.com/amva13/growth-llm">
                      Exciting LLM projects at HMS! Click image for more.
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(5)}
                  data-index={3}
                >
                  <div className="img_holder">
                    <a href="https://medium.com/pinterest-engineering/pinalyticsdb-a-time-series-database-on-top-of-hbase-946f236bb29a"><img src="img/news/pinalytics-2.png" alt="image" /></a>
                    <div className="abs_img" data-bg-img="img/news/pinalytics.png" />
                  </div>
                  <div className="title_holder">
                    <p>April 26, 2019</p>
                    <h3>
                      <a href="https://medium.com/pinterest-engineering/pinalyticsdb-a-time-series-database-on-top-of-hbase-946f236bb29a">
                      My article featured in the Pinterest Engineering Blog
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(6)}
                  data-index={6}
                >
                  <div className="img_holder">
                    <img src="img/news/acadium.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/gdp.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>September, 2017</p>
                    <h3>
                      <a href="https://github.com/amva13/mit-csail-tufts-mggg-gerrymandering-geometric-data-processing">
                        Research Assistantship - CSAIL Geometric Data Processing Group 2017
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
            <div className="clearfix" />
            <div className="load_more">
              <a
                href="#"
                data-done="Done"
                className={load ? "loading" : ""}
                data-no="No more articles found"
                onClick={(e) => loadValueSet(e)}
                onFocus={(e) => focusValueChange()}
              >
                <span className="text">
                  {hiddenItem
                    ? "Load More Articles"
                    : focusValue
                    ? focusValue
                    : "Done"}
                </span>
                <span className="fn__pulse">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
            </div>
          </div>
          {/* /Blog List */}
        </div>
      </div>
    </section>
  );
};

export default News;
