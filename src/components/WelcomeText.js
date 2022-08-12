import "../App.css";

import Sidetext from "./Sidetext";

const WelcomeText = () => {
  const text =
    " Data Guild is an association of the Data Science students of the Aalto Bachelor Programme of Science and Technology. We organize events for our members and represent the students in school matters. Data Guild ry is a member association of Aalto University Student Union.";

  // Formatting in the welcome part is different from the rest of the page but is still rendered using Sidetext by passing another className to the component. If className is not used, it is defaulted to "sidetext" class
  return (
    <Sidetext
      header={"Welcome to the Data Guild!"}
      text={text}
      className={"welcomepar"}
    />
  );
};

export default WelcomeText;
