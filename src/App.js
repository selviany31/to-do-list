import Card from "./Components/Card";
import Header from "./Components/Header";
import './Styles/style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex"}}>
      <Card styleName="card-border card-bg-orange"/>
      <Card styleName="card-border card-bg-blue"/>
      <Card styleName="card-border"/>
      <Card styleName="card-border"/>

      </div>
    </div>
  );
}

export default App;
