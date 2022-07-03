import { useState } from "react";
// import NewsModalbox from "./NewsModalbox";

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
      {/* {modal && <NewsModalbox close={setModal} value={modalValue} />} */}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">You define your own life. Don’t let other people write your script.</h3>
            <h3 className="title">As talked about in</h3>
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
                    <img src="img/news/nxtattempt.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/nxtattempt.png" />
                  </div>
                  <div className="title_holder">
                    <p>May 22, 2022</p>
                    <h3>
                      <a href="https://nftcalendar.io/news/apliko-emblem-interview/">
                        We're Building the Soon-to-Be Greatest Decentralized Talent Platform — Creator's Interview 
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">May 22, 2022</p>
                    <h3 className="fn__title">
                      NFT Calendar 
                    </h3>
                    <div className="img_holder">
                      <img src="img/news/nxtattempt.png" alt="image" />
                      <div className="abs_img" data-bg-img="img/news/nxtattempt.png" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(2)}
                  data-index={2}
                >
                  <div className="img_holder">
                    <img src="img/news/cb.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/cb.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>April 26, 2022</p>
                    <h3>
                      <a href="https://www.crunchbase.com/person/alejandro-velez-891c">
                        Founder's Profile, Community-generated, Crunchbase 
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">April 26, 2022</p>
                    <h3 className="fn__title">
                      Founder's Profile, Community-generated, Crunchbase 
                    </h3>
                    <div className="img_holder">
                      <img src="img/news/cb.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/news/cb.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(3)}
                  data-index={3}
                >
                  <div className="img_holder">
                    <a href="https://www.f6s.com/alejandro-velez"><img src="img/news/f6s.png" alt="image" /></a>
                    <div className="abs_img" data-bg-img="img/news/f6s.png" />
                  </div>
                  <div className="title_holder">
                    <p>April 26, 2022</p>
                    <h3>
                      <a href="https://www.f6s.com/alejandro-velez">
                        Founder's profile, F6S
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">April 26, 2022</p>
                    <h3 className="fn__title">
                      Founder's profile, F6S
                    </h3>
                    <div className="img_holder">
                      <a href="https://www.f6s.com/alejandro-velez"><img src="img/news/f6s.png" alt="image" /></a>
                      <div className="abs_img" data-bg-img="img/news/f6s.png" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(4)}
                  data-index={4}
                >
                  <div className="img_holder">
                    <img src="img/news/csail.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/csail.png" />
                  </div>
                  <div className="title_holder">
                    <p>May, 2018</p>
                    <h3>
                      <a href="https://courses.csail.mit.edu/6.857/2018/project/Velez-Villanueva-Manna-CATSOOP.pdf">
                        {`Featured Computer Security Project for department course websites.`}
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">May, 2018</p>
                    <h3 className="fn__title">
                      {`Featured Computer Security Project for department course websites.`}
                    </h3>
                    <div className="img_holder">
                      <img src="img/news/csail.png" alt="image" />
                      <div className="abs_img" data-bg-img="img/news/csail.png" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(5)}
                  data-index={5}
                >
                  <div className="img_holder">
                    <img src="img/news/mitdc.png" alt="image" />
                    <div className="abs_img" data-bg-img="img/news/mitdc.png" />
                  </div>
                  <div className="title_holder">
                    <p>July, 2017</p>
                    <h3>
                      <a href="http://summerwash.mit.edu/interns/2017/alejandro-velez-arce">
                        Selected by the MIT Economics Department for Washington DC program with the World Bank.
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">July, 2017</p>
                    <h3 className="fn__title">
                    Selected by the MIT Economics Department for Washington DC program with the World Bank.
                    </h3>
                    <div className="img_holder">
                      <img src="img/news/mitdc.png" alt="image" />
                      <div className="abs_img" data-bg-img="img/news/mitdc.png" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
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
                    <div className="abs_img" data-bg-img="img/news/acadium.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>June, 2022</p>
                    <h3>
                      <a href="https://acadium.com/p/20834p8b5">
                        Acadium Marketing Mentor
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">June, 2022</p>
                    <h3 className="fn__title">
                      Acadium Marketing Mentor
                    </h3>
                    <div className="img_holder">
                      <img src="img/news/acadium.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/news/acadium.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
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
