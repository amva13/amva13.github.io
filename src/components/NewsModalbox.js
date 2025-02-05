import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const NewsModalbox = ({ close, value }) => {
  const data = [
    {
      title:
        "PyTDC: A multimodal machine learning training, evaluation, and inference platform "/
        "for biomedical foundation models (more details to be released)",
      date: "January 28th, 2025",
      desc: [
        { p: "Existing biomedical benchmarks do not provide end-to-end infrastructure for training, evaluation, and inference of models that integrate multimodal biological data and a broad range of machine learning tasks in therapeutics. We present PyTDC, an open-source machine-learning platform providing streamlined training, evaluation, and inference software for multimodal biological AI models. PyTDC unifies distributed, heterogeneous, continuously updated data sources and model weights and standardizes benchmarking and inference endpoints. This paper discusses the components of PyTDC's architecture and, to our knowledge, the first-of-its-kind case study on the introduced single-cell drug-target nomination ML task. We find state-of-the-art methods in graph representation learning and domain-specific methods from graph theory perform poorly on this task. Though we find a context-aware geometric deep learning method that outperforms the evaluated SoTA and domain-specific baseline methods, the model is unable to generalize to unseen cell types or incorporate additional modalities, highlighting PyTDC's capacity to facilitate an exciting avenue of research developing multimodal, context-aware, foundation models for open problems in biomedical AI." }
      ],
      img: "img/news/TDCneurips.png"
    },
    {
      title:
        "Signals in the Cells: Multimodal and Contextualized Machine Learning Foundations for Therapeutics",
      date: "October 13th, 2024",
      desc: [
        { p: "Drug discovery AI datasets and benchmarks have not traditionally included single-cell analysis biomarkers. While benchmarking efforts in single-cell analysis have recently released collections of single-cell tasks, they have yet to comprehensively release datasets, models, and benchmarks that integrate a broad range of therapeutic discovery tasks with cell-type-specific biomarkers. Therapeutics Commons (TDC-2) presents datasets, tools, models, and benchmarks integrating cell-type-specific contextual features with ML tasks across therapeutics. We present four tasks for contextual learning at single-cell resolution: drug-target nomination, genetic perturbation response prediction, chemical perturbation response prediction, and protein-peptide interaction prediction. We introduce datasets, models, and benchmarks for these four tasks. Finally, we detail the advancements and challenges in machine learning and biology that drove the implementation of TDC-2 and how they are reflected in its architecture, datasets and benchmarks, and foundation model tooling." }
      ],
      img: "img/news/tdc2vision.png"
    },
    {
      title:
        "Activity Cliff-Informed Contrastive Learning for Molecular Property Prediction",
      date: "November 7th, 2024",
      desc: [
        { p: "Modeling molecular activity and quantitative structure-activity relationships of chemical compounds is critical in drug design. Graph neural networks, which utilize molecular structures as frames, have shown success in assessing the biological activity of chemical compounds, guiding the selection and optimization of candidates for further development. However, current models often overlook activity cliffs (ACs)—cases where structurally similar molecules exhibit different bioactivities—due to latent spaces primarily optimized for structural features. Here, we introduce AC-awareness (ACA), an inductive bias designed to enhance molecular representation learning for activity modeling. The ACA jointly optimizes metric learning in the latent space and task performance in the target space, making models more sensitive to ACs. We develop \name, an AC-informed contrastive learning approach that can be integrated with any graph neural network. Experiments on 39 benchmark datasets demonstrate that AC-informed representations of chemical compounds consistently outperform standard models in bioactivity prediction across both regression and classification tasks. AC-informed models show strong performance in predicting pharmacokinetic and safety-relevant molecular properties. ACA paves the way toward activity-informed molecular representations, providing a valuable tool for the early stages of lead compound identification, refinement, and virtual screening." }
      ],
      img: "img/news/AClearning.png"
    },
    {
      title:
        "LLM agent projects",
      date: "2024-2025",
      desc: [
        { p: "Have worked on exciting llm agent projects at HMS and hackathons. Not yet published, but you can find an ack with folks at Zitnik Lab for https://www.cell.com/cell/fulltext/S0092-8674(24)01070-5. Here's a video for an agent I built during a hackathon on top of TDC https://youtu.be/18pdSrL21Bo . Also, you can find some projects on my github." }
      ],
      img: "img/news/llmgrowth.png"
    },
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
                    <p className="fn__cat">{d.date}</p>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={d.img}
                      />
                    </div>
                    {d.desc.map((des) => (
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

export default NewsModalbox;
