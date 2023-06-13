import logo from "./logo.svg";
import "./App.css";
import Thumb from "./components/Thumb";
import videos from "./data/data.js";

function App() {
  return (
    <>
      <div className="App">
        <h1>Thumbnail Page</h1>
        <div className="doi">
          {videos.map((video) => (
            <Thumb
            key={video.id}
              id={video.id}
              title={video.title}
              views={video.views}
              channel={video.channel}
              verified={video.verified}
              time={video.time}
            ></Thumb>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
