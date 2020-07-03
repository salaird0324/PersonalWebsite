import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';




import Header from "./components/headerComponent/header";
import Footer from "./components/FooterComponent/footer";
import HomePage from "./components/Pages/homePage";
import Products from "./components/Pages/products";
import AboutMe from "./components/Pages/aboutMe";

import './Assets/CSS/default.min.css';
import './Assets/CSS/bootstrap.min.css';
import './Assets/CSS/paper-kit.css';
import './Assets/CSS/demo/demo.css';

function App() {
  return (
      <Router>
    <div className="App">
        <Header/>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/Products" component={Products}/>
    </div>
      </Router>
  );
}

export default App;
