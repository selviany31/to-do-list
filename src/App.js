import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import './Styles/style.css'
import FeatureRoute from "./Features";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <FeatureRoute />
    </div>
    </Router>
  );
}

export default App;
