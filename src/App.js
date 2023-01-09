import "./styles.css";
import Comp1 from "./Comp1";

function App() {
  return (
    <div className="App">
      <h1>HOC Design Pattern</h1>
      <Comp1 />
    </div>
  );
}

export default App;

// use when we want to apply same logic to multiple components
// receives a component, applies certain logic and then returns that component with those additional logics
