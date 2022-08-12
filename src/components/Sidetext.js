import "../App.css";

const Sidetext = ({ header, text, className }) => {
  return (
    <div className={className ? className : "sidetext"}>
      <div className="subheader">{header}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Sidetext;
