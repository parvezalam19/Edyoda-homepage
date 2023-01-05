
import React  , {Component}from "react";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

class App extends Component {
  render(){
    return (
<>
<Navbar/>
<MainSection/>
<Footer/>
</>

    )
  }
}
export default App;
