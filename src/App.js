import "./App.css";
import MainPage from "./components/pages/mainPage/MainPage";
import { Route, BrowserRouter } from "react-router-dom";
import SecondQuestion from "./components/pages/secondQuestion/SecondQuestion";
import FirstQuestion from "./components/pages/firstQuestion/FirstQuestion";
import ThirdQuestion from "./components/pages/thirdQuestion/ThirdQuestion";
import VideoQuestion from "./components/pages/videoQuestion/VideoQuestion";
import FifthQuestion from "./components/pages/fifthQuestion/FifthQuestion";
import SixthQuestion from "./components/pages/sixthQuestion/SixthQuestion";
import SeventhQuestion from "./components/pages/seventhQuestion/SeventhQuestion";
import EighthQuestion from "./components/pages/eighthQuestion/EighthQuestion";
import NinthQuestion from "./components/pages/ninthQuestion/NInthQuestion";
import EndPage from "./components/pages/endPage/EndPage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route path="/first_question" component={FirstQuestion} />
      <Route path="/second_question" component={SecondQuestion} />
      <Route path="/third_question" component={ThirdQuestion} />
      <Route path="/4_question" component={VideoQuestion} />
      <Route path="/5_question" component={FifthQuestion} />
      <Route path="/6_question" component={SixthQuestion} />
      <Route path="/7_question" component={SeventhQuestion} />
      <Route path="/8_question" component={EighthQuestion} />
      <Route path="/9_question" component={NinthQuestion} />
      <Route path="/10_question" component={EndPage} />
    </BrowserRouter>
  );
}

export default App;
