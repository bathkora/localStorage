import logo from "./logo.svg";
import "./App.css";
import Thumb from "./components/Thumb";

function App() {
  return (
    <>
      <div className="App">
        <h1>Thumbnail Page</h1>
        <div className="doi">
          <Thumb title="Lots of Fun" views="10M" channel="CodeWithMe"></Thumb>
          <Thumb title="New to React" views="13M" channel="CodeWithMe"></Thumb>
          <Thumb title="Explore with React" views="22M" channel="CodeWithMe"></Thumb>
          <Thumb title="Explore with React" views="22M" channel="CodeWithMe"></Thumb>
          <Thumb title="Explore with React" views="22M" channel="CodeWithMe"></Thumb>
          
        </div>
      </div>
    </>
  );
}

export default App;
