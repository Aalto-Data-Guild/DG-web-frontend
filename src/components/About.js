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

  // The left column of text and elements like newsbar is rendered by Sidecolumn component which takes an array of paragraph objects describing the header and contents of paragraphs
  // Thus, the about page will render the about paragraph with lorem text and a News paragraph with newsbar as its contents:
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
      {/* Div will everything except the header*/}
      <div className="cont">
        {/* Since columns in the welcome part have different widths from the rest of the website, the welcome part has separate divs and components */}
        <div className="welcome">
          <div className="welcomepart">
            <WelcomeText />
            <DGLogo />
          </div>
          <div id="button">
            <div id="moreinfo">
              <a href="#sidecol" className="active">
                More info
              </a>
            </div>
          </div>
        </div>
        {/* The component which renders the left column of the page */}
        <Sidecolumn contents={contents} />
        {/* Placeholder divs for the right column */}
        <div id="feedcalendar">
          <div id="instafeed"></div>
          <div id="calendar"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
