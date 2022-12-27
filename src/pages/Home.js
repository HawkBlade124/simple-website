
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div id="homeSection">
      <section className='homeHeader'>        
        <div className='row'>
          <div className="d-flex flex-column justify-content-start align-items-start">
            <div id="introHead">
              Hi there, I am
            </div>
            <h1>Ben Fuller</h1>
          </div>
        </div>
      </section> 
      <section className='homeParagraph'>      
          I am a Utah Based developer and I love to create things for the web. I am always on the move with learning new skills and implimenting them as well. Currently, I am a developer for <span className="company">XOLOGIC</span>. I create websites for their clients and maintain them with basic HTML, CSS and Javascript.          
      </section>
      <Link id="linkButton" to="/contact">Contact Me</Link>
    </div>
    
  )
};

export default Home;
