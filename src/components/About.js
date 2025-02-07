import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">There is nothing impossible for those who will try.</h3>
            <h3 className="title">Engineer, Scientist, Entrepreneur, Inventor</h3>
            <p>
            I am an AI full-stack developer and researcher. I'm a TechBio accelerationist developing
             ML methods and software systems in the biomedical and life sciences. My mission is to 
             drive humanity forward by increasing our population, extending lifespans tenfold, and 
             expanding human consciousness across the universe. I firmly believe that machine 
             learning will accelerate scientific discovery at a pace previously seen only in software, 
             unlocking the pinnacle of human progress.
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/cv.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                          <div className="item_top">
                            <h5><a href="https://hms.harvard.edu/">Harvard Medical School</a></h5>
                            <span>( 2024 — present )</span>
                          </div>
                          <h3>Research Associate</h3>
                          <h6>
                            My research focuses on the development and evaluation of biological foundation models 
                            at therapeutics tasks.
                            </h6>
                            <h6>
                              I built PyTDC: A multimodal machine learning 
                            training, evaluation, and inference platform for biomedical 
                            foundation models.
                            </h6>
                            <p>
                              I did this by overhauling the Therapeutic Data Commons (tdcommons.ai), 
                            and more information will be available soon. You can checkout our huggingface model hub,
                            where we've deployed exciting biological foundation models like Geneformer (Theodoris et al.) 
                            and scGPT (Cui et al.) - https://huggingface.co/tdc . They system already has many thousands of 
                            downloads.
                            </p>
                            <p>
                              As a whole, including the legacy TDC platform which I also own, we have approximately
                              30K MAU and a booming open-source community.
                            </p>
                            <h6>
                              Other areas of research have included LLM agents and graph representation learning.
                            </h6>
                        </div>
                      </li>
                      <li>
                      <div className="item">
                        <div className="item_top">
                          <h5><a href="https://getcruise.com">Cruise Automation LLC</a></h5>
                          <span>( 2022 — 2022 )</span>
                        </div>
                        <h3>Senior Machine Learning Software Engineer</h3>
                        <p>
                          Developed uncertainty quantification pipeline for computer vision models and 
                          machine learning infrastructure for data labeling platform. Decided to leave to 
                          pursue entrepreneurship and more generally a career break.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5><a href="https://pinterest.com">Prime Video @ Amazon</a></h5>
                          <span>( 2018 - 2021 )</span>
                        </div>
                        <h3>SDE II</h3>
                        <p>
                          Onboarded Prime Video Carrousel team but left for Cruise.
                        </p>
                      </div>
                      
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5><a href="https://pinterest.com">Pinterest Inc</a></h5>
                          <span>( 2018 - 2021 )</span>
                        </div>
                        <h3>Software Engineer II, Data and Machine Learning</h3>
                        <p>
                          I worked on a variety of exciting projects, starting with large scale distributed systems for data analyics, 
                          the online a/b experimentation platform, a gpu frameowork for streamlining AI inferencing and deployment, and 
                          optimizations on the Pinterest Ads ranking model.
                        </p>
                      </div>
                      
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h2>Massachusetts Institute of Technology</h2>
                        </div>
                        <h3>B.S. Computer Science</h3>
                        <h5>Minor in Management, Concentration in Economics</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                <div className="progress_item open" data-value={88}>
                    <div className="item_in">
                      <h3 className="progress_title">LLM Agents</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "12%" }}
                      >
                        88%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "88%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">AI apps</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={98}>
                    <div className="item_in">
                      <h3 className="progress_title">ML platforms (inference, training, benchmarking, data)</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        98%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "98%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Model development (design, training)</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">Model benchmarking and deployment (inference, metrics, benchmark design, model APIs)</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={75}>
                    <div className="item_in">
                      <h3 className="progress_title">PyTorch</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "25%" }}
                      >
                        75%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Huggingface Transformers</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Python</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Pandas, Scipy, Scikit, Numpy</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">C++</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">TensorRT, Tensorflow Serving, Torchserve</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">OpenAI APIs</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">Javascript, Reactjs, Nextjs</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={98}>
                    <div className="item_in">
                      <h3 className="progress_title">Flask, GUnicorn</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        98%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "98%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">MySQL, PostgreSQL</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                  An AI full-stack developer with 4+ years of experience in
                  building AI applications and platforms. Additional experience in 
                  developing, training, benchmarking, and deploying large-scale models 
                  (LLMs, ranking models, etc.). Have also built LLM agent systems. 
                  Most recent experience has been in biomedical domain, but I have 
                  worked on a variety of domains.
                  </p>
                </div>
              </div>
              </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
    </section>
  );
};

export default About;
