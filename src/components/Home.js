const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Challenge Orthodoxy</h3>
            <h3 className="title">Innovator, Builder</h3>
            <p className="desc">
             Welcome to my website. A statically-generated decentralized react application hosted on IPFS, deployed through Fleek, and registered on the <a href="https://alejandrovelez.eth.link/">Ethereum Name Service</a>. 
            </p>
            <img src="img/signature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
