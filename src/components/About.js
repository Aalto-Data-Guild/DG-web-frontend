import "../App.css";
import Header from "./Header";
import Newsbar from "./Newsbar";

const About = () => {
  return (
    <div>
      <Header />
      <div id="cont">
        <div id="sidetext">
          <div id="welcome">Welcome to Data Guild!</div>
          <div id="description">
            Data Guild is an association of the Data Science students of the
            Aalto Bachelor Programme of Science and Technology. We organize
            events for our members and represent the students in school matters.
            Data Guild ry is a member association of Aalto University Student
            Union.
          </div>
        </div>
        <div id="logo">
          <img alt="logo matrix" src="./DG_logo_matrix.png" id="matrix" />
          <img alt="logo cog" src="./DG_logo_cog.png" id="cog" />
        </div>
      </div>
      <div id="btncont">
        <div id="moreinfo">
          <a href="#lorem" class="active">
            More info
          </a>
        </div>
      </div>
      <div id="cont">
        <div id="about">
          <div id="textnews">
            <div id="sidetext">
              <div id="welcome">About</div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div id="news">
              <div id="welcome">News</div>
              <div id="newsbar">
                <Newsbar />
              </div>
            </div>
          </div>
          <div id="feedcalendar">
            <div id="instafeed"></div>
            <div id="calendar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
