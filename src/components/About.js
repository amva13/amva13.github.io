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
            <h3 className="subtitle">There is nothing impossible to they who will try.</h3>
            <h3 className="title">Pioneer</h3>
            <p className="desc">
              {'Work in progress: bio. Have a look at my LinkedIn and Github for career trajectory and projects. Snippets available on this website as well'}
            </p>
            {/* <p className="desc">
              {`Alejandro Velez Arce was born and raised in Puerto Rico, born to a culture and friends at school from all over the world, all kinds of ethnicities, and socioeconomic circumstances, which taught him the value of a diverse group of people to provide insights and culture to one's life and perspective. This is an outlook he's carried to multiple aspects of my life and career`}
              </p>
              <p className="desc">
              {`His interest in the sciences, especially in physics and mathematics, as well as a budding passion for entrepreneurship led him to apply to and choose MIT for his undergraduate degree. In high school, he'd shown strength in math and science, built great relationships with his teachers in those fields, and had great success in scientific research pursuits, which led him to believe the communities and intellectual pursuits of science and engineering would be things he'd enjoy. This ended up very much being the case, as his choice of MIT was driven quite strongly by the people he met throughout the pre-decision process. In addition, he'd lived in a commonwealth whose potential, at the time, was inhibited by a bloated and sluggish government, and massive bureaucratic private sector institutions unable to provide the innovation and prosperity the great people of Puerto Rico needed to unleash their full potential. This drove his interest in entrepreneurship, and he looked to many lovely people he met in Puerto Rico who had started their own business for inspiration. However, he was also driven by academia, having a very accomplished academic as a Father, who also happened to go to MIT, and he looked to how he could connect entrepreneurial passion with academic greatness and scientific achievement beyond what was exhibited by the entrepreneurs he'd been exposed to in my day-to-day life.`}
              </p>
              <p className="desc">
              {`His professional life has been marked by a passion for computer science. As a young student, he was amazed by the sheer power of the field's problem-solving philosophy and the degree of impact one could have in so many fields, being amazed by the computational modeling of human cognition he learned about through his coursework and his ability to have impact across gerrymandering cases all over the nation through code he developed during research at MIT’s Computer Science and Artificial Intelligence Laboratory. The latter experience was his first practical exposure to high performance scientific computing. The ability to use different aspects of computation, from geometric algorithm optimization to distributed systems for data processing and Python/C++ programming considerations to advance the practice of science on a high impact problem in social justice was exciting to him and researching and leveraging applied mathematical techniques for modeling political redistricting systems allowed him to take on challenges in political science in a way better suiting his interests. He would carry this interest in high performance scientific computation further in his career.`}
              </p>
              <p className="desc">
              {`At Pinterest, he developed systems advancing online a/b experimentation, simulation pipelines and statistical frameworks for assessing systemic risk of the experimentation platform, and high performance computing systems for machine learning online advertising ranking models and data storage and processing. Despite his success at Pinterest, having been promoted within my first year at the company and published in the Pinterest Engineering Blog, he went on to face tremendous mental health challenges after his first two years in the company, exacerbated by the most significant global event in my lifetime, the global shutdowns associated with the COVID pandemic. It was during this time that, after also evaluating previous episodes of struggles with mental health, he was diagnosed with bipolar manic disorder. He worked through distinct medical and behavioral treatments between 2020 and 2022 to reach where he is now, having turned the corner and developed stronger mental health resilience and positivity than ever before. However, this experience, along with misdiagnoses and battles with the side effects of some of the medications, ignited an interest in his researching the use of AI and scientific computing to advance the production and discovery of new, cheaper, and better medications, which led to his launching Alphunt, a generative artificial intelligence platform for drug discovery. In particular, his interest is in developing AI and computing systems leveraging the converging advances in science and modeling technology for molecular simulation and its promise in the areas of energy, sustainability, and health.`}
              </p>
              <p className="desc">
              {`Outside of this he has great interest in using AI and web3 technologies to help people unleash their creative potential and monetize their passions. Taking on challenges in the creator economy was a problem of deep interest in previous entrepreneurial ventures (Apliko) and at Pinterest. He's also interested in the potential Generative AI has for helping more people create beautiful art and have great impact in music, digital artwork and more.`}
              </p>
              <p className="desc">
              {`He also freelances and loves taking on new challenges, developing innovative solutions, and building products and systems making people's lives optimal.`}
              </p>
              <p className="desc">
              {`Outside of work and entrepreneurial pursuits, he enjoys practicing brazilian jiujitsu and mixed martial arts, health and wellness, challenging himself to different athletic challenges (ie. spartan races and marathons), exploring artwork digital, via NFTs and more, and non-digital, and watching Ultimate Fighting Championship (UFC) and the English Premier League.`}
              </p> */}
            {/* <p className="desc">
              {`I most recently worked on launching my own company, during which I led entire product development for a consumer-fintech product which obtained 200+ signups. We are a Microsoft for Startups Founders Hub member company. I was further recognized by YCombinator as being in the top 10% of their "startup school" founders.`}
            </p> */}
            {/* <p className="desc">
              {`Prior to that I worked at a social media company, boasting 450M+ MAU, where I worked on machine learning for ads ranking and data engineering in growth experimentation, large scale distributed systems, and led cross-functional projects of up to 15+ people improving KPIs 20-50% across projects.`}
              </p>
            <p className="desc">
              {`I'm an MIT Computer Science alum. While there I was a Research Assistant at the MIT Computer Science and Artificial Intelligence Laboratory, where I worked with the Geometric Data Processing Group and advanced Gerrymandering Analytics Capabilities by producing a python geometric computing library still used in legal cases and by the Metric Geometry and Gerrymandering Group at Tufts University.`}
              </p>
              <p className="desc">
                {`Outside of work I enjoy many latin dances, international traveling, love the outdoors, exploring new cuisines, obstacle racing, athletics, and podcasts through spotify and youtube.`}
                </p> */}
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  {/* <tr>
                    <th>Name</th>
                    <th>Alejandro Velez</th>
                  </tr> */}
                  {/* <tr>
                    <th>Birthday</th>
                    <th>4th April 1990</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>31 years</th>
                  </tr> */}
                  {/* <tr>
                    <th>Based in</th>
                    <th>San Francisco</th>
                  </tr> */}
                  {/* <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">(+38) 469 2344 2364</a>
                    </th>
                  </tr> */}
                  {/* <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:trendycoder.com@gmail.com">
                        trendycoder.com@gmail.com
                      </a>
                    </th>
                  </tr> */}
                  {/* <tr>
                    <th>Skype</th>
                    <th>
                      <a href="skype:brucewilson.90">brucewilson.90</a>
                    </th>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              {/* <div className="resumo_fn_cv_btn">
                <a href="img/cv.jpg" download>
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
              </div> */}
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
                {/* <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li> */}
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
                          <h5><a href="https://getcruise.com">Cruise Automation LLC</a></h5>
                          <span>( 2022 — 2022 )</span>
                        </div>
                        <h3>Senior Software Engineer</h3>
                        <p>
                          First company to bring fully autonomous vehicles to San Francisco. 
                          Cruise is building the world’s most advanced self-driving vehicles 
                          to safely connect people with the places, things, and experiences they care about.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5><a href="https://pinterest.com">Pinterest Inc</a></h5>
                          <span>( 2018 - 2021 )</span>
                        </div>
                        <h3>Software Engineer II</h3>
                        <p>
                          The world's foremost visual inspiration search engine. Pinterest is helping pinners live the life they love.
                        </p>
                      </div>
                      
                    </li>
                    {/* <li>
                      <div className="item">
                        <div className="item_top">
                          <h5><a href="https://mit.edu">M.I.T. Computer Science and Artificial Intelligence Lab</a></h5>
                          <span>( 2017 - 2018 )</span>
                        </div>
                        <h3>Researcher</h3>
                        <p>
                        </p>
                      </div>
                    </li> */}
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
                        {/* <p>
                          Built out a geometric computing system at MIT CSAIL
                          which was used to evaluate Gerrymandering cases in
                          Virginia.
                        </p>
                        <p>
                          Selected for MIT's Washington DC Summer Internship Program and
                          interned at the World Bank where he collaborated on producing a report
                          studying youth employment initiatives around the world.
                        </p> */}
                      </div>
                    </li>
                    {/* <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Edu University</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Master Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Clolumbia College</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li> */}
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Photoshop</h3>
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
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">HTML5 &amp; CSS3</h3>
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
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">WordPress</h3>
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
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Illustrator</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, clean typography and well-written code, located in
                    San Francisco. Provide high quality and cost effective
                    offshore web and software development services. Wide range
                    of web and software development services across the world.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
