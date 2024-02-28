const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Challenge Orthodoxy</h3>
            <h3 className="title">Innovator, Builder</h3>
            {/* <p className="desc">
             Welcome to my website. A statically-generated decentralized react application hosted on IPFS, deployed through Fleek, and registered on the <a href="https://alejandrovelez.eth.link/">Ethereum Name Service</a>. 
            </p> */}
            <p className="desc">
              Welcome to my website. It is a decentralized static React application deployed on the InterPlanetary File System (IPFS). It is also available in the Ethereum Name Service (down for maintenance). You can learn more about me in the sections below (and can navigate using the side panel). Enjoy the rest of the site!            </p>
            <img src="img/signature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
