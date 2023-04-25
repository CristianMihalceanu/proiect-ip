import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./images/logo.PNG";
import person1 from "./images/download.jpg";
import CollapsibleExample from "./components/CollapsibleExample";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import Story from "./components/Story";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import generic from "./images/chinese.jpg";
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
);

function App() {
  return (
    <>
      <div className="main-page">
        <CollapsibleExample />
        <div className="intro">
          <p className="hello">
            Hello Andrei! <span>🥰</span>
          </p>
          <p className="whatcha">Whatcha got for us?</p>
        </div>
      </div>
      <div className="stories">
        <Story />
        <Story />
        <Story />
        <Story />
        <p className="story-title">Story Title</p>
      </div>
      <SlInput placeholder="Type something..." filled className="itext" />
      <div className="mywrapper">
        <img
          style={{ position: "absolute", top: "2%" }}
          src={generic}
          alt="logo"
          class="story"
        />
        <div className="mygradient">
          <p className="hello plus"> My message here</p>
          <div className="likes">
            <p className="like" style={{ color: "white" }}>
              🤍105
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
