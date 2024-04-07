import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
      <Container customClass="body">
        <Navbar/>
        <Container customClass="main">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Container>
    </Router>
  )
}

export default App;
