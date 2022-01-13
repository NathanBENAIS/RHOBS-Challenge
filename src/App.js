import React from "react";
import GlobalSlyle from './globalStyles';
import Footer from "./components/Footer/Footer";
import Curseur from './components/Curseur';
import SelectVotreAPI from './components/SelectVotreAPI';
import SelectMONAPI from './components/SelectMONAPI';
import './App.css';

function App() {
 
 
 
 return (
<>

    <div className="header">
  
      <h1>RHOBS Challenge
        <a className="header2" rel="noopener noreferrer" href="https://nathanbenais-portfolio.netlify.app/" target="_blank">My Portfolio</a></h1>

      </div>
      <div className="App" >
    <div className="Curseur">
        <Curseur  color="#0074D9"/>
        </div>
        <div>
        
        <SelectVotreAPI />
       
       
        <SelectMONAPI />
        </div>
      <GlobalSlyle />
      <Footer />
      </div>
    
    
    </>
  );
}

export default App;
