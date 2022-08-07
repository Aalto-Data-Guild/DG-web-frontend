import "../App.css";
import Header from "./Header";
import Newsbar from "./Newsbar";
import DGLogo from "./DGLogo";
import WelcomeText from "./WelcomeText";
import Sidetext from "./Sidetext";
import Sidecolumn from "./Sidecolumn";

const About = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const contents = [
    {
      header: "About",
      text: lorem,
      id: 1,
    },
    { header: "News", text: <Newsbar />, id: 2 },
  ];

  return (
    <div>
      <Header />
      <div className="cont">
        <div className="welcome">
          <div className="welcomepart">
            <WelcomeText />
            <DGLogo />
          </div>
          <div id="button">
            <div id="moreinfo">
              <a href="#sidecol" class="active">
                More info
              </a>
            </div>
          </div>
        </div>
        <Sidecolumn contents={contents} />

        <div id="feedcalendar">
          <div id="instafeed"></div>
          <div id="calendar"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
