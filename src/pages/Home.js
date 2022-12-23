import jquery from 'jquery';
import {Link} from 'react-router-dom';

const Home = () => {
  function testClick(){
    console.log("testing click");
    jquery(".primary-button").click(function(){
      
    })
  }
  return (
    <div id="homeSection">
      <section className='homeHeader'>        
        <h2>Hi there</h2>
        <div className="borderLine"></div>
        <div className='row d-flex justify-content-center'>
          <h1>I am Ben Fuller</h1>
        </div>
      </section>
      <h2>I am</h2>
      <div className="borderLine"></div>
      <div className="container">
        <div className="homeAbout row">
        <div className="columnText col-sm">
            A Developer
          </div>
          <div className="columnText col-sm">
            A Graphic Designer
          </div>
          <div className="columnText col-sm">
            A Team Player
          </div>
        </div>

      </div>
      <h2>What I do</h2>
      <div className="borderLine"></div>
      <section className='container'>
          <div className='rowText row'>
              I build web pages and themes for clients and end-users for whatever they like. Whether it be a lighting studio, plumbing store, and more! I like to teach myself new web technologies and love being a husband to my dear wife.
          </div>
      </section>
      <h2 className='d-flex justify-content-start'><Link to="/projects">My Projects</Link></h2>
      <section className='container'>

      <div className='row'>
          My 
      </div>
      </section>
    </div>
  )
};

export default Home;
