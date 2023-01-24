import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const Customers = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Success is not final, failure is not fatal: it is the courage to continue that counts.</h3>
            <h3 className="title">Bar-raiser</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          {/* <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="https://envato.com/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/1.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://frenify.com/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/2.png" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="img/partners/3.png" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://themeforest.net/item/artemiz-blog-podcast-wordpress-theme/28455063"
                  target="_blank"
                  rel="noreferrer"                 
                >
                  <img src="img/partners/4.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/wetland-multi-purpose-react-next-js-template-for-startup/33851796"   rel="noreferrer" target="_blank">
                  <img src="img/partners/5.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/edunet-react-personal-tutor-lms-dashboard-ui-kit/31635576"  rel="noreferrer" target="_blank">
                  <img src="img/partners/6.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/appz-mobile-app-landing-react-nextjs-template/34385390"  rel="noreferrer" target="_blank">
                  <img src="img/partners/7.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425"  rel="noreferrer" target="_blank">
                  <img src="img/partners/3.png" alt="image" />
                </a>
              </li>
            </ul>
          </div> */}
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key='1'>
                <div className="title_holder">
                  <p className="desc">
                    “ Alejandro is extremely driven. His passion for challenging projects is highly contagious and motivates everyone working with him. ”
                  </p>
                  <h3 className="title">Senior Colleague</h3>
                  <h3 className="subtitle">Technical Lead, Pinterest Machine Learning</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key='2'>
                <div className="title_holder">
                  <p className="desc">
                    {`“ He is one of the brightest individuals I've had the privilege of working with. He consistently took on challenging projects, persevered, and found ways to succeed. ”`}
                  </p>
                  <h3 className="title">Senior Colleague</h3>
                  <h3 className="subtitle">Senior Quantitative Research Engineer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key='3'>
                <div className="title_holder">
                  <p className="desc">
                  " We were very grateful to have his unique perspective and acumen on the team. He delivered superb presentations to key stakeholders throughout the firm. The research he and his team produced proved to be valuable insights we continue to use resourcefully. "
                  </p>
                  <h3 className="title">Senior Colleague</h3>
                  <h3 className="subtitle">Head of Marketing</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default Customers;
