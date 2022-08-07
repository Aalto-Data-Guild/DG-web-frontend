import "../App.css";

import Sidetext from "./Sidetext";

const WelcomeText = () => {
  const text =
    " Data Guild is an association of the Data Science students of the Aalto Bachelor Programme of Science and Technology. We organize events for our members and represent the students in school matters. Data Guild ry is a member association of Aalto University Student Union.";

  return (
    <Sidetext
      header={"Welcome to the Data Guild!"}
      text={text}
      className={"welcomepar"}
    />
  );
};

export default WelcomeText;
