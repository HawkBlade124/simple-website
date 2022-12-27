
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navigation from "./pages/Navigation";
import Contact from "./pages/Contact";
import BuyRite from "./pages/BuyRite";
import NoPage from "./pages/NoPage";

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
<div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />              
              <Route exact path="/projects" component={<Projects />} />
              <Route exact path="/buyrite" component={<BuyRite />} />
            </Route>
          </Routes>
        </BrowserRouter>   
        <footer className='copyright d-flex flex-row justify-content-between align-items-center'>

          <copyright>Copyright &copy; 2022 Fullerview.net</copyright>
          <div id="socialIcons">
                    <FontAwesomeIcon icon={faGithub} className="fontIcon"/>
                    <FontAwesomeIcon icon={faLinkedin} className="fontIcon"/>
                </div>
        </footer>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
