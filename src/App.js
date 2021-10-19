import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    
      <Router>
        <Header  />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/home" component={HomeScreen} />
        <Route path="/blog" component={BlogScreen} exact />
        <Route path="/blog/:pageNumber" component={BlogScreen} exact /> 
         <Footer />
        
      </Router>
   
  );
}

export default App;
